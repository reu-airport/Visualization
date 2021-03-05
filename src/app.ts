import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;
import { config } from "./airportProjectConfig";

export class Airport extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
    new Airport(config);
};