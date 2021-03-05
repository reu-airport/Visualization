import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;

export const config: GameConfig = {
    title: "Airport",
    width: "100%",
    height: "100px",
    parent: "airport",
    dom: {
        createContainer: true
    },
    scene: [ ],
    backgroundColor: "#18216D",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
};