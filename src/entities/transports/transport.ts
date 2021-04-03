import "phaser";

export abstract class Transport {
    private velocity: number;
    private X: number;
    private Y: number;
    private keyObject: string;
    private asset_path: string;
    private locationObject: Phaser.GameObjects.Image;
    private scaleObjectX: number;
    private scaleObjectY: number;


    public get getVelocity(): number { return this.velocity; }
    public get getX(): number { return this.X; }
    public get getY(): number { return this.Y; }

    public set setVelocity(velocity: number) { this.velocity = velocity; }
    public setX(X: number) { this.X = X; }
    public setY(Y: number) { this.Y = Y; }


    public preload(context: Phaser.Scene) {
        context.load.image(this.keyObject, this.asset_path);
    }

    public setPosition(context: Phaser.Scene) {
        this.locationObject = context.add.image(0, 0, this.keyObject);
        this.locationObject.setScale(this.scaleObjectX, this.scaleObjectY);
        this.locationObject.setY(this.Y);
        this.locationObject.setX(this.X);
    }

}
