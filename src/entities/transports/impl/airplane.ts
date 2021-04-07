import {Transport} from "../transport";
import {TypesVehicle} from "../typesVehicle";
import {ListPoints} from "../../points/listPoints";

export class Airplane extends Transport {

    constructor(numberPoint: number) {
        let point = ListPoints.getPointByNumber(numberPoint);
        let getAssetPath = Airplane.getAssetPathByTypeBus();
        let X = point.getX;
        let Y = point.getY;

        super({
            asset_path: getAssetPath,
            key: 'airplane',
            X: X,
            Y: Y,
            scaleX: 0.27,
            scaleY: 0.27
        });
    }


    private setOpacity() { }

    private static getAssetPathByTypeBus(): string {
        if (Math.round(Math.random()) === 0)
            return 'src/assets/airplane1.png';
        else return 'src/assets/airplane2.png';
    }

}
