import "phaser";

export class RunwayStrip {
    private static asset_path: string = 'src/assets/runway_strip.png';
    private static runawayStripObject: Phaser.GameObjects.Image;

    public static preload(context: Phaser.Scene, key: string) {
        context.load.image(key, this.asset_path);
    }

    public static setPosition(context: Phaser.Scene, key: string) {
        this.runawayStripObject = context.add.image(0, 0, key);
        this.runawayStripObject.setScale(0.7, 0.7);
        this.runawayStripObject.setY(210.5);
        this.runawayStripObject.setX(this.runawayStripObject.width / 3);

    }
}
