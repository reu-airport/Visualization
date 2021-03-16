import "phaser";
import Game = Phaser.Game;

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

    }

    create(): void {
        this.rect =  this.add.rectangle(200, 200, 148, 148, 0x000000);
    }

     changePositionRect(x: number, y: number) {
        this.rect.setX(x);
        this.rect.setY(y);
    }

    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}

