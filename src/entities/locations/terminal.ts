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
                locationX0: 500,
                locationY0: 516,
                scaleX: 0.62,
                scaleY: 0.62
            });
            Terminal.terminal.initializePoints([
                new Point(Terminal.terminal.setPointX(-250), Terminal.terminal.setPointY(-45), 14, Terminal.terminal),
                new Point(Terminal.terminal.setPointX(-330), Terminal.terminal.setPointY(10), 13, Terminal.terminal),
                new Point(Terminal.terminal.setPointX(-110), Terminal.terminal.setPointY(50), 15, Terminal.terminal),
                new Point(Terminal.terminal.setPointX(-10), Terminal.terminal.setPointY(50), 16, Terminal.terminal),
                new Point(Terminal.terminal.setPointX(70), Terminal.terminal.setPointY(50), 17, Terminal.terminal),
                new Point(Terminal.terminal.setPointX(160), Terminal.terminal.setPointY(50), 18, Terminal.terminal)
            ]);
        }
        return Terminal.terminal;
    }
}
