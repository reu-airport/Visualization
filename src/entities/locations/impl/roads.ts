import "phaser";
import {Location} from "../location";
import {Point} from "../../points/point";

export class Roads extends Location {

    private static roads: Roads;

    private constructor() { super() }

    public static getInstance(): Location {
        if (!Roads.roads) {
            Roads.roads = new Roads();

            Roads.roads.initialize({
                asset_path: 'src/assets/roads.png',
                key: 'roads',
                locationX0: 461.5,
                locationY0: 308.5,
                scaleX: 0.65,
                scaleY: 0.65
                });
                Roads.roads.initializePoints([
                    new Point(Roads.roads.setPointX(200), Roads.roads.setPointY(-100), 19, Roads.roads),
                    new Point(Roads.roads.setPointX(200), Roads.roads.setPointY(-50), 20, Roads.roads),
                    new Point(Roads.roads.setPointX(200), Roads.roads.setPointY(40), 21, Roads.roads),
                    new Point(Roads.roads.setPointX(-200), Roads.roads.setPointY(-100), 22, Roads.roads),
                    new Point(Roads.roads.setPointX(-200), Roads.roads.setPointY(-50), 23, Roads.roads),
                    new Point(Roads.roads.setPointX(-200), Roads.roads.setPointY(40), 24, Roads.roads)
                ]);
            }
            return Roads.roads;
    }
}
