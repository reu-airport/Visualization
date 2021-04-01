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
    }

    preload(): void {
        RunwayStrip.preload(this, 'runaway_strip');
        AirplaneStation.preload(this, 'airplane_station');
        Terminal.preload(this, 'terminal');
        BusStation.preload(this);
        Roads.preload(this, 'roads');

    }

    create(): void {
        RunwayStrip.setPosition(this, 'runaway_strip');
        AirplaneStation.setPosition(this, 'airplane_station');
        BusStation.setPosition(this);
        Terminal.setPosition(this, 'terminal');
        Roads.setPosition(this, 'roads');
        BusStation.getInstancePoints();
        BusStation.drawPoints(this);
    }

     changePositionRect(x: number, y: number) {
        this.rect.setX(x);
        this.rect.setY(y);
    }

    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}

