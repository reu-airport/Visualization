import "phaser";

export class RunwayStrip {
    private static asset_path: string = 'src/assets/runway_strip.png';
    private static runawayStripObject: Phaser.GameObjects.Image;

    public static preload(context: Phaser.Scene, key: string) {
        context.load.image(key, this.asset_path);
    }

    public static setPosition(context: Phaser.Scene, key: string) {
        this.runawayStripObject = context.add.image(0, 0, key);
        this.runawayStripObject.setScale(0.66, 0.64);
        this.runawayStripObject.setY(108.5);
        this.runawayStripObject.setX(414);

    }
}
