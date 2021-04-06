import {Transport} from "../transport";
import {TypesVehicle} from "../typesVehicle";
import {ListPoints} from "../../points/listPoints";

export class Vehicle extends Transport {
    private typeBus: TypesVehicle;

    constructor(typesBus: TypesVehicle, numberPoint: number) {
        let point = ListPoints.getPointByNumber(numberPoint);
        let getAssetPath = Vehicle.getAssetPathByTypeBus(typesBus);
        let X = point.getX;
        let Y = point.getY;

        super({
            asset_path: getAssetPath,
            key: typesBus,
            X: X,
            Y: Y,
            scaleX: 0.15,
            scaleY: 0.15
        });
    }


    private setOpacity() { }

    private static getAssetPathByTypeBus(typesBus: TypesVehicle): string {
        switch (typesBus) {
            case TypesVehicle.FOLLOW_ME:
                return 'src/assets/follow_me.png';
            case TypesVehicle.BAGGAGE_BUS:
                return 'src/assets/baggage.png';
            case TypesVehicle.BAGGAGE_LOADER:
                return 'src/assets/baggage_loader.png';
            case TypesVehicle.BUS:
                return 'src/assets/bus1.png';
            case TypesVehicle.FOOD_BUS:
                return 'src/assets/food_bus.png';
            case TypesVehicle.REFUELER:
                return 'src/assets/fuel_bus.png';
            case TypesVehicle.STAIRS:
                return 'src/assets/trap.png';
            case TypesVehicle.VIP_BUS:
                return 'src/assets/vip.png';
        }
    }

}
