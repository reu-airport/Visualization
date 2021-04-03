import "phaser";
import {Location} from "../location";
import {Point} from "../../points/point";

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
                new Point(RunwayStrip.runwayStrip.setPointX(-195), RunwayStrip.runwayStrip.setPointY(-60), 25, RunwayStrip.runwayStrip)
                ]);
            }
            return RunwayStrip.runwayStrip;
    }

}
