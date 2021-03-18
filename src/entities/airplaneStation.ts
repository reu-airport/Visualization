import "phaser";

export class AirplaneStation {
    private static asset_path: string = 'src/assets/airplane_station.png';
    private static airplaneStationObject: Phaser.GameObjects.Image;

    public static preload(context: Phaser.Scene, key: string) {
        context.load.image(key, this.asset_path);
    }

    public static setPosition(context: Phaser.Scene, key: string) {
        this.airplaneStationObject = context.add.image(0, 0, key);
        this.airplaneStationObject.setScale(0.7, 0.7);
        this.airplaneStationObject.setY(187);
        this.airplaneStationObject.setX(context.cameras.main.width - 265);
    }
}
