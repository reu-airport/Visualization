import "phaser";
import Game = Phaser.Game;
import {Terminal} from "../entities/terminal";
import {BusStation} from "../entities/busStation";
import {AirplaneStation} from "../entities/airplaneStation";
import {RunwayStrip} from "../entities/runwayStrip";
import {Roads} from "../entities/roads";

export class MainScene extends Phaser.Scene {

    private rect: Phaser.GameObjects.Rectangle;

    constructor() {
        super({
            key: 'mainScene'
        })
    }

    init(): void {

    }

    preload(): void {
        RunwayStrip.preload(this, 'runaway_strip');
        AirplaneStation.preload(this, 'airplane_station');
        Roads.preload(this, 'roads');
        Terminal.preload(this, 'terminal');
        BusStation.preload(this, 'bus_station');

    }

    create(): void {
        RunwayStrip.setPosition(this, 'runaway_strip');
        AirplaneStation.setPosition(this, 'airplane_station');
        Roads.setPosition(this, 'roads');
        BusStation.setPosition(this, 'bus_station');
        Terminal.setPosition(this, 'terminal');
    }

     changePositionRect(x: number, y: number) {
        this.rect.setX(x);
        this.rect.setY(y);
    }

    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}

