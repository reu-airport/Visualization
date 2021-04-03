import "phaser";
import {Point} from "../points/point";
import {ListPoints} from "../points/listPoints";

export abstract class Location {

    protected  asset_path: string;
    protected  locationObject: Phaser.GameObjects.Image;
    protected  scaleObjectX: number;
    protected  scaleObjectY: number;
    protected  locationX0: number;
    protected  locationY0: number;

    public keyObject;
    public points: Point[];
    public get getLocationX0(): number { return this.locationX0 }
    public get getLocationY0(): number { return this.locationY0 }


    protected initialize({asset_path, key, locationX0, locationY0, scaleX, scaleY}) {
        this.asset_path = asset_path;
        this.keyObject = key;
        this.scaleObjectX = scaleX;
        this.scaleObjectY = scaleY;
        this.locationX0 = locationX0;
        this.locationY0 = locationY0;
    }

    protected initializePoints(points: Point[]) {
        this.points = points;
        ListPoints.setPoints = points;
    }

    public preload(context: Phaser.Scene) {
        context.load.image(this.keyObject, this.asset_path);
    }

   public setPosition(context: Phaser.Scene) {
        this.locationObject = context.add.image(0, 0, this.keyObject);
        this.locationObject.setScale(this.scaleObjectX, this.scaleObjectY);
        this.locationObject.setY(this.locationY0);
        this.locationObject.setX(this.locationX0);
    }

    public static getInstance(): Location { return null };

    public drawPoints(context: Phaser.Scene) {
        this.points.forEach( (point) => {
            point.drawPoint(context);
        })
    }

    protected setPointX(xPoint: number): number {
        return this.getLocationX0 - xPoint;
    }

    protected setPointY(yPoint: number): number {
        return this.getLocationY0 - yPoint;
    }

}



