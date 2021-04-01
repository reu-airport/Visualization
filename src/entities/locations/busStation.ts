import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class BusStation extends Location {
    public static getInstance() {
       this.initialize({
             asset_path: 'src/assets/bus_station.png',
             key: 'bus_station',
             locationX0: 1020,
             locationY0: 440,
             scaleX: 0.6,
             scaleY: 0.6,
             points: [
                new Point(this.setPointX(10), this.setPointX(20), 1)
             ]
           }
       )
    }
}
