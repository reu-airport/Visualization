import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class AirplaneStation extends Location {

    private static airplaneStation: AirplaneStation;

    private constructor() { super() }

    public static getInstance(): Location {
        if (!AirplaneStation.airplaneStation) {
            AirplaneStation.airplaneStation = new AirplaneStation();

            AirplaneStation.airplaneStation.initialize({
                asset_path: 'src/assets/airplane_station.png',
                key: 'airplane_station',
                locationX0: 1024,
                locationY0: 137,
                scaleX: 0.8,
                scaleY: 0.6
                });
                AirplaneStation.airplaneStation.initializePoints([
                    new Point(AirplaneStation.airplaneStation.setPointX(170), AirplaneStation.airplaneStation.setPointY(-20), 2, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(100), AirplaneStation.airplaneStation.setPointY(80), 3, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(20), AirplaneStation.airplaneStation.setPointY(80), 4, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(100), AirplaneStation.airplaneStation.setPointY(20), 5, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(20), AirplaneStation.airplaneStation.setPointY(20), 6, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(-170), AirplaneStation.airplaneStation.setPointY(-80), 10, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(-170), AirplaneStation.airplaneStation.setPointY(-20), 8, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(-90), AirplaneStation.airplaneStation.setPointY(-20), 7, AirplaneStation.airplaneStation),
                    new Point(AirplaneStation.airplaneStation.setPointX(-90), AirplaneStation.airplaneStation.setPointY(-80), 9, AirplaneStation.airplaneStation)
                ]);
            }
            return AirplaneStation.airplaneStation;
    }

}

