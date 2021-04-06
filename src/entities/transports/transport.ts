import "phaser";
import {ListPoints} from "../points/listPoints";
import {TypesVehicle} from "./typesVehicle";
import Sprite = Phaser.GameObjects.Sprite;
import {Point} from "../points/point";

export abstract class Transport {
    private velocity: number;
    private X: number;
    private Y: number;
    private readonly keyObject: string;
    private readonly asset_path: string;
    private readonly scaleObjectX: number;
    private readonly scaleObjectY: number;
    private transportObject: any;
    private isMove: boolean;
    private points: Point[];
    private isReady: boolean;


    public get getVelocity(): number { return this.velocity; }
    public get getX(): number { return this.X; }
    public get getY(): number { return this.Y; }
    public get getTransportObject(): any { return this.transportObject; }
    public get getIsMove(): boolean { return this.isMove; }
    public get getPoints(): Point[] { return this.points }

    public set setVelocity(velocity: number) { this.velocity = velocity; }
    public setX(X: number) { this.X = X; }
    public setY(Y: number) { this.Y = Y; }
    public setPoints(points: Point[]) { this.points = points}

    public velocityX(X: number) { this.X += X; }
    public velocityY(Y: number) { this.Y += Y; }

    public setIsMove(isMove: boolean) { this.isMove = isMove; }

    protected constructor({asset_path, key, X, Y, scaleX, scaleY}) {
        this.asset_path = asset_path;
        this.keyObject = key;
        this.scaleObjectX = scaleX;
        this.scaleObjectY = scaleY;
        this.X = X;
        this.Y = Y;
        this.isMove = false;
        this.isReady = true;
        this.points = [];
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

    public moveObjectByPoints(numberPoints: number[], context: Phaser.Scene) {
        if (this.isReady) {
            this.getPointsByNumberPoint(numberPoints);
            this.isReady = false;
        } if (this.points.length != 0) {
            this.setIsMove(true);
            let targetPoint: Point = this.points[0];
            context.physics.moveToObject(this.getTransportObject, targetPoint.getGameObjectPoint, 100);
            let distance = Phaser.Math.Distance.Between(this.getTransportObject.x, this.getTransportObject.y, targetPoint.getGameObjectPoint.x, targetPoint.getGameObjectPoint.y);
            let rotation_angle = Phaser.Math.Angle.Between(this.getTransportObject.x, this.getTransportObject.y, targetPoint.getGameObjectPoint.x, targetPoint.getGameObjectPoint.y);

            if (this.getTransportObject.body.speed > 0) {
                this.getTransportObject.rotation = rotation_angle + 3.13;
                this.overlap(distance, targetPoint.getGameObjectPoint);
            }
        }
    }

    protected overlap(distance: number, pointObject: any): Point {
        let shifted: Point;
        if (distance < 4)  {
            this.getTransportObject.body.reset(pointObject.x, pointObject.y);
            shifted =  this.points.shift();
            console.log(shifted);
            if (this.points[0] === undefined) {
                this.points = [];
                this.setIsMove(false);
                return null;
            }
        }
        return this.points[0];
    }

    private getPointsByNumberPoint(numberPoints: number[]): Point[] {
        numberPoints.forEach( (numberPoint) => {
            this.points.push(ListPoints.getPointByNumber(numberPoint))
        });
        return this.points;
    }

}
