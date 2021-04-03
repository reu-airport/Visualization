import "phaser";
import Game = Phaser.Game;
import {Terminal} from "../entities/locations/terminal";
import {BusStation} from "../entities/locations/busStation";
import {AirplaneStation} from "../entities/locations/airplaneStation";
import {RunwayStrip} from "../entities/locations/runwayStrip";
import {Roads} from "../entities/locations/roads";

export class MainScene extends Phaser.Scene {

    private busStation: BusStation;
    private terminal: Terminal;

    constructor() {
        super({
            key: 'mainScene'
        });
    }

    init(): void {
        this.busStation = BusStation.getInstance();
        this.terminal = Terminal.getInstance();
    }

    preload(): void {
        this.busStation.preload(this);
        this.terminal.preload(this);
    }

    create(): void {
        this.busStation.setPosition(this);
        this.busStation.drawPoints(this);

        this.terminal.setPosition(this);
        this.terminal.drawPoints(this);

    }


    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}

