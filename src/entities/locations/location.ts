import "phaser";
import {Point} from "../graph/point";

export abstract class Location {

    protected static asset_path: string;
    protected static locationObject: Phaser.GameObjects.Image;
    protected static scaleObjectX: number;
    protected static scaleObjectY: number;
    protected static locationX0: number;
    protected static locationY0: number;

    public static keyObject;
    public static points: Point[];
    public static get getLocationX0(): number { return Location.locationX0 }
    public static get getLocationY0(): number { return Location.locationY0 }


    protected static initialize({asset_path, key, locationX0, locationY0, scaleX, scaleY}) {
        Location.asset_path = asset_path;
        Location.keyObject = key;
        Location.scaleObjectX = scaleX;
        Location.scaleObjectY = scaleY;
        Location.locationX0 = locationX0;
        Location.locationY0 = locationY0;
    }

    protected static initializePoints(points: Point[]) {
        Location.points = points;
    }

    public static preload(context: Phaser.Scene) {
        context.load.image(Location.keyObject, Location.asset_path);
    }

   public static setPosition(context: Phaser.Scene) {
        Location.locationObject = context.add.image(0, 0, Location.keyObject);
        this.locationObject.setScale(Location.scaleObjectX, Location.scaleObjectY);
        Location.locationObject.setY(Location.locationY0);
        Location.locationObject.setX(Location.locationX0);
    }

    public static getInstance() { }

    public static drawPoints(context: Phaser.Scene) {
        this.points.forEach( (point) => {
            point.drawPoint(context);
        })
    }

    protected  static setPointX(xPoint: number): number {
        return Location.getLocationX0 - xPoint;
    }

    protected static setPointY(yPoint: number): number {
        return Location.getLocationY0 - yPoint;
    }

}



