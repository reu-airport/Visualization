import "phaser";
import {ListPoints} from "../points/listPoints";
import {TypesVehicle} from "./typesVehicle";

export abstract class Transport {
    private velocity: number;
    private X: number;
    private Y: number;
    private readonly keyObject: string;
    private readonly asset_path: string;
    private transportObject: Phaser.GameObjects.Image;
    private scaleObjectX: number;
    private scaleObjectY: number;


    public get getVelocity(): number { return this.velocity; }
    public get getX(): number { return this.X; }
    public get getY(): number { return this.Y; }
    public get getTransportObject(): Phaser.GameObjects.GameObject { return this.transportObject }

    public set setVelocity(velocity: number) { this.velocity = velocity; }
    public setX(X: number) { this.X = X; }
    public setY(Y: number) { this.Y = Y; }

   protected constructor({asset_path, key, X, Y, scaleX, scaleY}) {
        this.asset_path = asset_path;
        this.keyObject = key;
        this.scaleObjectX = scaleX;
        this.scaleObjectY = scaleY;
        this.X = X;
        this.Y = Y;
    }

    public preload(context: Phaser.Scene) {
        context.load.image(this.keyObject, this.asset_path);
    }

    public setPosition(context: Phaser.Scene) {
        this.transportObject = context.add.image(0, 0, this.keyObject);
        this.transportObject.setScale(this.scaleObjectX, this.scaleObjectY);
        this.transportObject.setX(this.X);
        this.transportObject.setY(this.Y);

    }
}
