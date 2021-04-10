import "phaser";
import {Location} from "../location";
import {Point} from "../../points/point";
import {ListPoints} from "../../points/listPoints";

export class RunwayStrip extends Location {

    private static runwayStrip: RunwayStrip;

    private constructor() { super() }

    public static getInstance(): Location {
        if (!RunwayStrip.runwayStrip) {
            RunwayStrip.runwayStrip = new RunwayStrip();

            RunwayStrip.runwayStrip.initialize({
                asset_path: 'src/assets/runway_strip.png',
                key: 'runway_strip',
                locationX0: 414,
                locationY0: 108.5,
                scaleX: 0.66,
                scaleY: 0.64
                });
            RunwayStrip.runwayStrip.initializePoints([
                new Point(RunwayStrip.runwayStrip.setPointX(-365), RunwayStrip.runwayStrip.setPointY(60), 1, RunwayStrip.runwayStrip),
                new Point(RunwayStrip.runwayStrip.setPointX(-195), RunwayStrip.runwayStrip.setPointY(-60), 25, RunwayStrip.runwayStrip),
                new Point(RunwayStrip.runwayStrip.setPointX(500), RunwayStrip.runwayStrip.setPointY(60), -1, RunwayStrip.runwayStrip),
                new Point(RunwayStrip.runwayStrip.setPointX(500), RunwayStrip.runwayStrip.setPointY(-60), -2, RunwayStrip.runwayStrip),


            ]);
            }
            //set point for goaway airplane
            //ListPoints.setPoint = new Point(-50, 50, -1, null);
            //set point for arrives airplane
            //ListPoints.setPoint = new Point(-50, 180, -2, null);
            return RunwayStrip.runwayStrip;
    }

}
