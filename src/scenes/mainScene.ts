import "phaser";
import {Terminal} from "../entities/locations/impl/terminal";
import {BusStation} from "../entities/locations/impl/busStation";
import {AirplaneStation} from "../entities/locations/impl/airplaneStation";
import {RunwayStrip} from "../entities/locations/impl/runwayStrip";
import {Roads} from "../entities/locations/impl/roads";
import {Vehicle} from "../entities/transports/impl/vehicle";
import {TypesVehicle} from "../entities/transports/typesVehicle";
import {ListPoints} from "../entities/points/listPoints";

export class MainScene extends Phaser.Scene {

    private busStation: BusStation;
    private terminal: Terminal;
    private airplaneStation: AirplaneStation;
    private runwayStrip: RunwayStrip;
    private roads: Roads;
    private busPassage: Vehicle;

    constructor() {
        super({
            key: 'mainScene'
        });
    }

    init(): void {
        this.busStation = BusStation.getInstance();
        this.terminal = Terminal.getInstance();
        this.airplaneStation = AirplaneStation.getInstance();
        this.runwayStrip = RunwayStrip.getInstance();
        this.roads = Roads.getInstance();
        this.busPassage = new Vehicle(TypesVehicle.BUS, 12);
    }

    preload(): void {
        this.terminal.preload(this);
        this.busStation.preload(this);
        this.airplaneStation.preload(this);
        this.runwayStrip.preload(this);
        this.roads.preload(this);

        this.busPassage.preload(this);

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
        this.busPassage.setObject(this);

        this.physics.moveToObject(this.busPassage.getTransportObject, ListPoints.getPointByNumber(11).getGameObjectPoint, 50);

    }


    update(time: number, delta: number): void {
       // let deltaX =  this.busPassage.velocityX(-1);
      //  let deltaY = this.busPassage.velocityY(-1);
      //  this.busPassage.setPositions(this.busPassage.getX, this.busPassage.getY);
    }
}

