import "phaser";
import {Location} from "../location";
import {Point} from "../../points/point";

export class BusStation extends Location {

    private static busStation: BusStation;

    private constructor() { super() }

    public static getInstance(): Location {
        if (!BusStation.busStation) {
            BusStation.busStation = new BusStation();

            BusStation.busStation.initialize({
                asset_path: 'src/assets/bus_station.png',
                key: 'bus_station',
                locationX0: 1001,
                locationY0: 430,
                scaleX: 0.61,
                scaleY: 0.61
                });
            BusStation.busStation.initializePoints([
                    new Point(BusStation.busStation.setPointX(10), BusStation.busStation.setPointY(30), 12, BusStation.busStation),
                    new Point(BusStation.busStation.setPointX(3), BusStation.busStation.setPointY(150), 11, BusStation.busStation)
                ]);
            }
            return BusStation.busStation;
    }

}
