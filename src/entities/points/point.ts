import {Location} from "../locations/location";
import Graphics = Phaser.GameObjects.Graphics;
export class Point {

    protected X: number;
    protected Y: number;
    protected numberPoint: number;
    protected location: Location;
    protected gameObjectPoint: Phaser.GameObjects.GameObject;

    public get getX(): number { return this.X; }
    public get getY(): number { return this.Y; }
    public get getNumberPoint(): number { return this.numberPoint }
    public get getGameObjectPoint(): Phaser.GameObjects.GameObject { return this.gameObjectPoint }


    constructor(X: number, Y: number, numberPoint: number, location: Location) {
        this.X = X;
        this.Y = Y;
        this.numberPoint = numberPoint;
        this.location = location;
    }

    public drawPoint(context: Phaser.Scene) {
        this.gameObjectPoint = context.add.circle(this.getX, this.getY, 10, 0xff0000);
    }
}
