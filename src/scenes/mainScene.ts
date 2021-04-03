import "phaser";
import Game = Phaser.Game;
import {Terminal} from "../entities/locations/terminal";
import {BusStation} from "../entities/locations/busStation";
import {AirplaneStation} from "../entities/locations/airplaneStation";
import {RunwayStrip} from "../entities/locations/runwayStrip";
import {Roads} from "../entities/locations/roads";

export class MainScene extends Phaser.Scene {

    private rect: Phaser.GameObjects.Rectangle;

    constructor() {
        super({
            key: 'mainScene'
        })
    }

    init(): void {
        BusStation.getInstance();
        Terminal.getInstance();
        Roads.getInstance();
        AirplaneStation.getInstance();
        RunwayStrip.getInstance();
    }

    preload(): void {
        RunwayStrip.preload(this);
        AirplaneStation.preload(this);
        Terminal.preload(this);
        BusStation.preload(this);
        Roads.preload(this);

    }

    create(): void {
        RunwayStrip.setPosition(this);
        AirplaneStation.setPosition(this);
        BusStation.setPosition(this);
        Terminal.setPosition(this);
        Roads.setPosition(this);
        
        BusStation.getInstancePoints();
        //BusStation.drawPoints(this);

        Terminal.getInstancePoints();
        //Terminal.drawPoints(this);

        Roads.getInstancePoints();
        //Roads.drawPoints(this);

        AirplaneStation.getInstancePoints();
        //AirplaneStation.drawPoints(this);

        RunwayStrip.getInstancePoints();
        RunwayStrip.drawPoints(this);
    }

     changePositionRect(x: number, y: number) {
        this.rect.setX(x);
        this.rect.setY(y);
    }

    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}

