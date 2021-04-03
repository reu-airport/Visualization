import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class BusStation extends Location {
    public static getInstance() {
       this.initialize({
             asset_path: 'src/assets/bus_station.png',
             key: 'bus_station',
             locationX0: 1016,
             locationY0: 430,
             scaleX: 0.6,
             scaleY: 0.6
           }
       );
    }

    public static getInstancePoints() {
        this.initializePoints([
            new Point(this.setPointX(10), this.setPointY(30), 12, this),
            new Point(this.setPointX(3), this.setPointY(150), 11, this)
        ]);
    }
}
