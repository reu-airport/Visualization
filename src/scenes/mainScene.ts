import "phaser";
import Game = Phaser.Game;
import {Terminal} from "../entities/textures/terminal";
import {BusStation} from "../entities/textures/busStation";
import {AirplaneStation} from "../entities/textures/airplaneStation";
import {RunwayStrip} from "../entities/textures/runwayStrip";
import {Roads} from "../entities/textures/roads";

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
        Terminal.preload(this, 'terminal');
        BusStation.preload(this, 'bus_station');
        Roads.preload(this, 'roads');

    }

    create(): void {
        RunwayStrip.setPosition(this, 'runaway_strip');
        AirplaneStation.setPosition(this, 'airplane_station');
        BusStation.setPosition(this, 'bus_station');
        Terminal.setPosition(this, 'terminal');
        Roads.setPosition(this, 'roads');
    }

     changePositionRect(x: number, y: number) {
        this.rect.setX(x);
        this.rect.setY(y);
    }

    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}

