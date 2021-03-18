import "phaser";

export class BusStation {
    private static asset_path: string = 'src/assets/bus_station.png';
    private static busStationObject: Phaser.GameObjects.Image;

    public static preload(context: Phaser.Scene, key: string) {
        context.load.image(key, this.asset_path);
    }

    public static setPosition(context: Phaser.Scene, key: string) {
        this.busStationObject = context.add.image(0, 0, key);
        this.busStationObject.setScale(0.6, 0.6);
        this.busStationObject.setY(context.cameras.main.height - this.busStationObject.height * 0.6 / 2 - 20);
        this.busStationObject.setX(context.cameras.main.width - 284);

    }
}
