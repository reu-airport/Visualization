import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class Roads extends Location {
    public static getInstance() {
       this.initialize({
             asset_path: 'src/assets/roads.png',
             key: 'roads',
             locationX0: 461.5,
             locationY0: 308.5,
             scaleX: 0.65,
             scaleY: 0.65
           }
       );
    }

    public static getInstancePoints() {
        this.initializePoints([
           new Point(this.setPointX(200), this.setPointY(-100), 19, this),
           new Point(this.setPointX(200), this.setPointY(-50), 20, this),
           new Point(this.setPointX(200), this.setPointY(40), 21, this),
           new Point(this.setPointX(-200), this.setPointY(-100), 22, this),
           new Point(this.setPointX(-200), this.setPointY(-50), 23, this),
           new Point(this.setPointX(-200), this.setPointY(40), 24, this)
        ]);
    }
}


// export class Roads {
//     private static asset_path: string = 'src/assets/roads.png';
//     private static roadsObject: Phaser.GameObjects.Image;

//     public static preload(context: Phaser.Scene, key: string) {
//         context.load.image(key, this.asset_path);
//     }

//     public static setPosition(context: Phaser.Scene, key: string) {
//         this.roadsObject = context.add.image(0, 0, key);
//         this.roadsObject.setScale(0.65, 0.65);
//         this.roadsObject.setY(308.5);
//         this.roadsObject.setX(461.5);

//     }
// }
