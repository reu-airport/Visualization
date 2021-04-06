import "phaser";
import {ListPoints} from "../points/listPoints";
import {TypesVehicle} from "./typesVehicle";
import Sprite = Phaser.GameObjects.Sprite;

export abstract class Transport {
    private velocity: number;
    private X: number;
    private Y: number;
    private readonly keyObject: string;
    private readonly asset_path: string;
    private readonly scaleObjectX: number;
    private readonly scaleObjectY: number;
    private transportObject: any;


    public get getVelocity(): number { return this.velocity; }
    public get getX(): number { return this.X; }
    public get getY(): number { return this.Y; }
    public get getTransportObject(): any { return this.transportObject }

    public set setVelocity(velocity: number) { this.velocity = velocity; }
    public setX(X: number) { this.X = X; }
    public setY(Y: number) { this.Y = Y; }

    public velocityX(X: number) { this.X += X; }
    public velocityY(Y: number) { this.Y += Y; }

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

    public setObject(context: Phaser.Scene) {
        this.transportObject = context.physics.add.image(0, 0, this.keyObject);
        this.transportObject.setScale(this.scaleObjectX, this.scaleObjectY);
        this.setPositions(this.X, this.Y);
    }

    public setPositions(X: number, Y: number) {
        this.transportObject.setX(this.X);
        this.transportObject.setY(this.Y);
    }
}
