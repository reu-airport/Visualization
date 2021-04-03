import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class Terminal extends Location {
    public static getInstance() {
       this.initialize({
             asset_path: 'src/assets/terminal.png',
             key: 'terminal',
             locationX0: 500,
             locationY0: 512,
             scaleX: 0.6,
             scaleY: 0.6
           }
       );
    }

    public static getInstancePoints() {
        this.initializePoints([
           new Point(this.setPointX(-250), this.setPointY(-45), 14, this),
           new Point(this.setPointX(-330), this.setPointY(10), 13, this),
           new Point(this.setPointX(-110), this.setPointY(50), 15, this),
           new Point(this.setPointX(-10), this.setPointY(50), 16, this),
           new Point(this.setPointX(70), this.setPointY(50), 17, this),
           new Point(this.setPointX(160), this.setPointY(50), 18, this)
        ]);
    }
}


// export class Terminal {
//     private static asset_path: string = 'src/assets/terminal.png';
//     private static terminalObject: Phaser.GameObjects.Image;

//     public static preload(context: Phaser.Scene, key: string) {
//        context.load.image(key, this.asset_path);
//     }

//     public static setPosition(context: Phaser.Scene, key: string) {
//        this.terminalObject = context.add.image(0, 0, key);
//        this.terminalObject.setScale(0.65, 0.65);
//        this.terminalObject.setY(context.cameras.main.height - this.terminalObject.height * 0.6 / 2);
//        this.terminalObject.setX(500);

//     }
// }
