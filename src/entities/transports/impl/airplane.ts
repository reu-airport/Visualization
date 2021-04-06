import {Transport} from "../transport";
import {TypesVehicle} from "../typesVehicle";
import {ListPoints} from "../../points/listPoints";

export class Airplane extends Transport {

    constructor(typesAirplane: TypesVehicle, numberPoint: number) {
        let point = ListPoints.getPointByNumber(numberPoint);
        let getAssetPath = Airplane.getAssetPathByTypeBus(typesAirplane);
        let X = point.getX;
        let Y = point.getY;

        super({
            asset_path: getAssetPath,
            key: typesAirplane,
            X: X,
            Y: Y,
            scaleX: 0.27,
            scaleY: 0.27
        });
    }


    private setOpacity() { }

    private static getAssetPathByTypeBus(typesAirplane: TypesVehicle): string {
        switch (typesAirplane) {
            case TypesVehicle.AIRPLANE:
                let rand = Math.random();
                if (rand > 0.6) return 'src/assets/airplane1.png';
                else return 'src/assets/airplane2.png'
        }
    }

}
