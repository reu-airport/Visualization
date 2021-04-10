import {Transport} from "../transport";
import {TypesVehicle} from "../typesVehicle";
import {ListPoints} from "../../points/listPoints";
import {Point} from "../../points/point";

export class Vehicle extends Transport {
    private typeBus: TypesVehicle;
    public idVenicle: string;

    constructor(typesBus: TypesVehicle, numberPoint: number, idVenicle: string) {
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
        this.idVenicle = idVenicle;
    }

    private static getAssetPathByTypeBus(typesBus: TypesVehicle): string {
        switch (typesBus) {
            case TypesVehicle.followMeVan:
                return 'src/assets/folow_me.png';
            case TypesVehicle.baggageVan:
                return 'src/assets/baggage.png';
            case TypesVehicle.baggageLoader:
                return 'src/assets/baggage_loader.png';
            case TypesVehicle.bus:
                return 'src/assets/bus1.png';
            case TypesVehicle.cateringTruck:
                return 'src/assets/food_bus.png';
            case TypesVehicle.refueler:
                return 'src/assets/fuel_bus.png';
            case TypesVehicle.stairs:
                return 'src/assets/trap.png';
            case TypesVehicle.vipShuttle:
                return 'src/assets/vip.png';
        }
    }

}
