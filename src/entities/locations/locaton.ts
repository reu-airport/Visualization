import "phaser";

export abstract class Locaton {

    protected static asset_path: string;
    protected static locationObject: Phaser.GameObjects.Image;
    protected static scaleObjectX;
    protected static scaleObjectY;
    protected static locationX0;
    protected static locationY0;

    public static keyObject;
    public static get getLocationX0(): number { return Locaton.locationX0 }
    public static get getLocationY0(): number { return Locaton.locationY0 }


    protected static initialize({asset_path, key, locationX0, locationY0, scaleX, scaleY}) {
        Locaton.asset_path = asset_path;
        Locaton.keyObject = key;
        Locaton.scaleObjectX = scaleX;
        Locaton.scaleObjectY = scaleY;
        Locaton.locationX0 = locationX0;
        Locaton.locationY0 = locationY0;
    }

    public static preload(context: Phaser.Scene) {
        context.load.image(Locaton.keyObject, Locaton.asset_path);
    }

   public static setPosition(context: Phaser.Scene) {
        Locaton.locationObject = context.add.image(0, 0, Locaton.keyObject);
        this.locationObject.setScale(Locaton.scaleObjectX, Locaton.scaleObjectY);
        Locaton.locationObject.setY(Locaton.locationY0);
        Locaton.locationObject.setX(Locaton.locationX0);
    }

    public static getInstance() { }
}



