import "phaser";

export class Terminal {
    private static asset_path: string = 'src/assets/terminal.png';
    private static terminalObject: Phaser.GameObjects.Image;

    public static preload(context: Phaser.Scene, key: string) {
       context.load.image(key, this.asset_path);
    }

    public static setPosition(context: Phaser.Scene, key: string) {
       this.terminalObject = context.add.image(0, 0, key);
       this.terminalObject.setScale(0.7, 0.7);
       this.terminalObject.setY(context.cameras.main.height - this.terminalObject.height * 0.6 / 2);
       this.terminalObject.setX(500);

    }
}
