import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class Terminal extends Location {

    private static terminal: Terminal;

    private constructor() { super() }

    public static getInstance(): Location {
        if (!Terminal.terminal) {
            Terminal.terminal = new Terminal();

            Terminal.terminal.initialize({
                asset_path: 'src/assets/terminal.png',
                key: 'terminal',
                locationX0: 528,
                locationY0: 512,
                scaleX: 0.6,
                scaleY: 0.6
            });
            Terminal.terminal.initializePoints([
                new Point(Terminal.terminal.setPointX(-250), Terminal.terminal.setPointY(-45), 14, Terminal.terminal),
                new Point(Terminal.terminal.setPointX(-330), Terminal.terminal.setPointY(10), 13, Terminal.terminal)
            ]);
        }
        return Terminal.terminal;
    }
}
