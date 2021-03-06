import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;
import { MainScene } from "./scenes/mainScene"
export const config: GameConfig = {
    title: "Airport",
    width: "100%",
    height: "100px",
    parent: "airport",
    dom: {
        createContainer: true
    },
    scene: [
        MainScene
    ],
    backgroundColor: '#108e51',
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
};
