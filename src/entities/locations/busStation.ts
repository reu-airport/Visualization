import "phaser";
import {Locaton} from "./locaton";

export class BusStation extends Locaton {
    public static getInstance() {
       this.initialize({
             asset_path: 'src/assets/bus_station.png',
             key: 'bus_station',
             locationX0: 1020,
             locationY0: 440,
             scaleX: 0.6,
             scaleY: 0.6
           }
       )
    }
}
