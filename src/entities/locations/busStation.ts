import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class BusStation extends Location {

    private static busStation: BusStation;

    private constructor() { super() }

    public static getInstance(): Location {
        if (!BusStation.busStation) {
            BusStation.busStation = new BusStation();

            BusStation.busStation.initialize({
                asset_path: 'src/assets/bus_station.png',
                key: 'bus_station',
                locationX0: 1020,
                locationY0: 440,
                scaleX: 0.6,
                scaleY: 0.6
                });
            BusStation.busStation.initializePoints([
                    new Point(BusStation.busStation.setPointX(0), BusStation.busStation.setPointY(0), 1, BusStation.busStation)
                ]);
            }
            return BusStation.busStation;
    }

}
