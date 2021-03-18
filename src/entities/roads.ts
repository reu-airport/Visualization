import "phaser";

export class Roads {
    private static asset_path: string = 'src/assets/roads.png';
    private static roadsObject: Phaser.GameObjects.Image;

    public static preload(context: Phaser.Scene, key: string) {
        context.load.image(key, this.asset_path);
    }

    public static setPosition(context: Phaser.Scene, key: string) {
        this.roadsObject = context.add.image(0, 0, key);
        this.roadsObject.setScale(0.7, 0.7);
        this.roadsObject.setY(440);
        this.roadsObject.setX(461);

    }
}
