import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class AirplaneStation extends Location {
    public static getInstance() {
       this.initialize({
             asset_path: 'src/assets/airplane_station.png',
             key: 'airplane_station',
             locationX0: 1024,
             locationY0: 137,
             scaleX: 0.8,
             scaleY: 0.6
           }
       );
    }

    public static getInstancePoints() {
        this.initializePoints([
           new Point(this.setPointX(170), this.setPointY(-20), 2, this),
           new Point(this.setPointX(100), this.setPointY(80), 3, this),
           new Point(this.setPointX(20), this.setPointY(80), 4, this),
           new Point(this.setPointX(100), this.setPointY(20), 5, this),
           new Point(this.setPointX(20), this.setPointY(20), 6, this),
           new Point(this.setPointX(-170), this.setPointY(-80), 10, this),
           new Point(this.setPointX(-170), this.setPointY(-20), 8, this),
           new Point(this.setPointX(-90), this.setPointY(-20), 7, this),
           new Point(this.setPointX(-90), this.setPointY(-80), 9, this)

        ]);
    }
}

// export class AirplaneStation {
//     private static asset_path: string = 'src/assets/airplane_station.png';
//     private static airplaneStationObject: Phaser.GameObjects.Image;

//     public static preload(context: Phaser.Scene, key: string) {
//         context.load.image(key, this.asset_path);
//     }

//     public static setPosition(context: Phaser.Scene, key: string) {
//         this.airplaneStationObject = context.add.image(0, 0, key);
//         this.airplaneStationObject.setScale(0.8, 0.6);
//         this.airplaneStationObject.setY(137);
//         this.airplaneStationObject.setX(context.cameras.main.width - 276);
//     }
// }
