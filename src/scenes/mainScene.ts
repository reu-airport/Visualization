import "phaser";
import {Terminal} from "../entities/locations/impl/terminal";
import {BusStation} from "../entities/locations/impl/busStation";
import {AirplaneStation} from "../entities/locations/impl/airplaneStation";
import {RunwayStrip} from "../entities/locations/impl/runwayStrip";
import {Roads} from "../entities/locations/impl/roads";
import {Vehicle} from "../entities/transports/impl/vehicle";
import {TypesVehicle} from "../entities/transports/typesVehicle";
import {Airplane} from "../entities/transports/impl/airplane";
import {Point} from "../entities/points/point";
import {ListPoints} from "../entities/points/listPoints";


export class MainScene extends Phaser.Scene {

    private busStation: BusStation;
    private terminal: Terminal;
    private airplaneStation: AirplaneStation;
    private runwayStrip: RunwayStrip;
    private roads: Roads;
    private vehicles: Vehicle[];
    private airplanes: Airplane[];

    constructor() {
        super({
            key: 'mainScene'
        });
      this.vehicles = [];
      this.airplanes = [];

    }

    init(): void {
        this.busStation = BusStation.getInstance();
        this.terminal = Terminal.getInstance();
        this.airplaneStation = AirplaneStation.getInstance();
        this.runwayStrip = RunwayStrip.getInstance();
        this.roads = Roads.getInstance();
    }

    preload(): void {
        this.terminal.preload(this);
        this.busStation.preload(this);
        this.airplaneStation.preload(this);
        this.runwayStrip.preload(this);
        this.roads.preload(this);
        this.load.image(TypesVehicle.bus, 'src/assets/bus1.png');
        this.load.image(TypesVehicle.vipShuttle, 'src/assets/vip.png');
        this.load.image(TypesVehicle.followMeVan, 'src/assets/folow_me.png');
        this.load.image(TypesVehicle.baggageVan, 'src/assets/baggage.png');
        this.load.image(TypesVehicle.baggageLoader, 'src/assets/baggage_loader.png');
        this.load.image(TypesVehicle.cateringTruck, 'src/assets/food_bus.png');
        this.load.image(TypesVehicle.refueler, 'src/assets/fuel_bus.png');
        this.load.image(TypesVehicle.stairs, 'src/assets/trap.png');
        this.load.image('airplane1', 'src/assets/airplane1.png');
        this.load.image('airplane2', 'src/assets/airplane2.png');



        this.load.image('terminal_building', 'src/assets/terminal_building.png');
        this.load.image('garage_building', 'src/assets/garage_building.png');

    }

    create(): void {
        this.runwayStrip.setPosition(this);
        this.runwayStrip.drawPoints(this);

        this.airplaneStation.setPosition(this);
        this.airplaneStation.drawPoints(this);

        this.busStation.setPosition(this);
        this.busStation.drawPoints(this);

        this.terminal.setPosition(this);
        this.terminal.drawPoints(this);

        this.roads.setPosition(this);
        this.roads.drawPoints(this);
    }

    update(time: number, delta: number): void {

        let vehicleIsAlreadyExist = false;
        let findedIndexVehicle = 0;
        let vehicleRequest = new XMLHttpRequest();
        vehicleRequest.open( "GET", "http://localhost:3000/vehicle", false );
        vehicleRequest.send( null );
        let vehicleJson = JSON.parse(vehicleRequest.responseText);

        let airplaneIsAlreadyExist = false;
        let findedIndexAirplane = 0;
        let airplaneRequest = new XMLHttpRequest();
        airplaneRequest.open( "GET", "http://localhost:3000/airplane", false );
        airplaneRequest.send( null );
        let airplaneJson = JSON.parse(airplaneRequest.responseText);

        if (!this.isEmpty(vehicleJson)) {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].idVenicle === vehicleJson.vehicleId) {
                    vehicleIsAlreadyExist = true;
                    findedIndexVehicle = i;
                }
            }
            if (vehicleIsAlreadyExist) {
                if (!this.vehicles[findedIndexVehicle].getIsMove) {
                    this.vehicles[findedIndexVehicle].setIsMove(true);
                    this.vehicles[findedIndexVehicle].moveBy2Point(vehicleJson.vertexFrom, vehicleJson.vertexTo, this);
                }
            } else {
                let vehicle = new Vehicle(vehicleJson.vehicleType, vehicleJson.vertexFrom, vehicleJson.vehicleId);
                vehicle.setObject(this);
                vehicle.preload(this);
                vehicle.moveBy2Point(vehicleJson.vertexFrom, vehicleJson.vertexTo, this);
                this.vehicles.push(vehicle);
            }
        } else if (!this.isEmpty(airplaneJson)) {
            for (let i = 0; i < this.airplanes.length; i++) {
                if (this.airplanes[i].planeId == vehicleJson.planeId) {
                    airplaneIsAlreadyExist = true;
                    findedIndexAirplane = i;
                    console.log("FOUNDED");
                }
            }
            if (airplaneJson.type === "TAKEOFF") {
                if (airplaneIsAlreadyExist) {
                    this.airplanes[findedIndexAirplane].setIsMove(true);
                    this.airplanes[findedIndexAirplane]
                        .moveBy2PointAirplane("TAKEOFF", this);
                } else {
                    let airplane = new Airplane(4, airplaneJson.planeId);
                    airplane.setIsMove(true);
                    airplane.setObject(this);
                    airplane.preload(this);
                    airplane.moveBy2PointAirplane("TAKEOFF", this);
                    this.airplanes.push(airplane);
                }
            } else {
                if (airplaneIsAlreadyExist) {

                } else {

                }
                let airplane = new Airplane(-2, airplaneJson.planeId);
                airplane.setObject(this);
                airplane.preload(this);
                airplane.moveBy2PointAirplane( "LANDING", this);
                this.airplanes.push(airplane);
            }
        }

        this.vehicles.forEach((vehicle) => {
           if (vehicle.getIsMove) vehicle.moveBy2Point(vehicle.numberPoint1, vehicle.numberPoint2, this);
        });

        this.airplanes.forEach((airplane) => {
            if (airplane.getIsMove) airplane.moveBy2PointAirplane(airplane.typeAirplane, this);
        });
    }

    public isEmpty(obj) {
        for (let key in obj) return false;

        return true;
    }

}
