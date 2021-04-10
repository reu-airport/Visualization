import "phaser";
import {Terminal} from "../entities/locations/impl/terminal";
import {BusStation} from "../entities/locations/impl/busStation";
import {AirplaneStation} from "../entities/locations/impl/airplaneStation";
import {RunwayStrip} from "../entities/locations/impl/runwayStrip";
import {Roads} from "../entities/locations/impl/roads";
import {Vehicle} from "../entities/transports/impl/vehicle";
import {TypesVehicle} from "../entities/transports/typesVehicle";


export class MainScene extends Phaser.Scene {

    private busStation: BusStation;
    private terminal: Terminal;
    private airplaneStation: AirplaneStation;
    private runwayStrip: RunwayStrip;
    private roads: Roads;
    private busPassage: Vehicle;
    private followMe: Vehicle;
    private vehicles: Vehicle[];
    private vehicleTest: Vehicle;


    constructor() {
        super({
            key: 'mainScene'
        });
      this.vehicles = [];

    }

    init(): void {
        this.busStation = BusStation.getInstance();
        this.terminal = Terminal.getInstance();
        this.airplaneStation = AirplaneStation.getInstance();
        this.runwayStrip = RunwayStrip.getInstance();
        this.roads = Roads.getInstance();
     //   this.busPassage = new Vehicle(TypesVehicle.BUS, 12);
    //    this.followMe = new Vehicle(TypesVehicle.FOLLOW_ME, 12);
     // this.vehicleTest = new Vehicle(TypesVehicle.BUS, 15, "fads");
        
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



        //  this.vehicleTest.preload(this);
        //this.followMe.preload(this);


        this.load.image('terminal_building', 'src/assets/terminal_building.png');
        this.load.image('garage_building', 'src/assets/garage_building.png');
      //  this.load.json('message', 'src/rabbitmq/messages.json');
      //  this.load.json('message', 'http://api.geonames.org/citiesJSON');


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
        //this.busPassage.setObject(this);
       // this.followMe.setObject(this);
       // this.load.start();
      //  this.vehicleTest.setObject(this);
    }

    update(time: number, delta: number): void {
        //this.vehicleTest.moveBy2Point(15, 17, this);

        let vehicleIsAlreadyExist = false;
        let findedIndexVehicle = 0;
        let vehicleRequest = new XMLHttpRequest();
        vehicleRequest.open( "GET", "http://localhost:3000/vehicle", false );
        vehicleRequest.send( null );
        let vehicleJson = JSON.parse(vehicleRequest.responseText);

        if (!this.isEmpty(vehicleJson)) {
            for (let i = 0; i < this.vehicles.length; i++) {
                if (this.vehicles[i].idVenicle === vehicleJson.vehicleId) {
                    vehicleIsAlreadyExist = true;
                    findedIndexVehicle = i;
                }
            }
            if (vehicleIsAlreadyExist) {
                this.vehicles[findedIndexVehicle].setIsMove(true);
                this.vehicles[findedIndexVehicle].moveBy2Point(vehicleJson.vertexFrom, vehicleJson.vertexTo, this);
            } else {
                let vehicle = new Vehicle(vehicleJson.vehicleType, vehicleJson.vertexFrom, vehicleJson.vehicleId);
                vehicle.setObject(this);
                vehicle.preload(this);
                vehicle.moveBy2Point(vehicleJson.vertexFrom, vehicleJson.vertexTo, this);
                this.vehicles.push(vehicle);
            }
        }
        this.vehicles.forEach((vehicle) => {
           if (vehicle.getIsMove) vehicle.moveBy2Point(vehicle.numberPoint1, vehicle.numberPoint2, this);
        });
    }

    public isEmpty(obj) {
        for (let key in obj) return false;

        return true;
    }

}
