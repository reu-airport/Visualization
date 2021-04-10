import {Transport} from "../transport";
import {TypesVehicle} from "../typesVehicle";
import {ListPoints} from "../../points/listPoints";
import {Point} from "../../points/point";
import {ListParkingNumberPoints} from "../../points/listParkingNumberPoints"
export class Airplane extends Transport {

    public planeId: string;
    public point1: Point;
    public point2: Point;
    public numberPointAirplane1: number;
    public numberPointAirplane2: number;
    public startPoint: Point;
    public typeAirplane: string;
    public parkingPoint: string;

    constructor(numberPoint: number, planeId: string) {
        let point = ListPoints.getPointByNumber(numberPoint);
        let getAssetPath = Airplane.getAssetPathByTypeBus();
        let X = point.getX;
        let Y = point.getY;

        super({
            asset_path: getAssetPath,
            key: `airplane${Math.round(0.5 + Math.random() * 2)}`,
            X: X,
            Y: Y,
            scaleX: 0.27,
            scaleY: 0.27
        });
        this.planeId = planeId;
    }

    public moveBy2PointAirplane(typeAirplane: string, context: Phaser.Scene) {
        if (typeAirplane === "LANDING") {
            this.typeAirplane = "LANDING";
            //this.numberPointAirplane2 = ListParkingNumberPoints.getNumberPoint();
            this.numberPointAirplane2 = Math.floor(Math.random() * (10 - 3 + 1) + 3);
            if (this.numberPointAirplane2 === undefined) this.numberPointAirplane2 = 4;
            let point2 = ListPoints.getPointByNumber(this.numberPointAirplane2);
            this.point2 = point2;
            this.moveObjectByPoints([25, 2, this.numberPointAirplane2], context);
        } else if (typeAirplane === "TAKEOFF") {
            this.typeAirplane = "TAKEOFF";
            ListParkingNumberPoints.setNumberPoint = this.numberPointAirplane2;
            this.numberPointAirplane2 = -1;
            let point2 = ListPoints.getPointByNumber(this.numberPointAirplane2);
            this.moveObjectByPoints([2, 1, this.numberPointAirplane2], context);
        }
    }

    private static getAssetPathByTypeBus(): string {
        if (Math.round(Math.random()) === 0)
            return 'src/assets/airplane1.png';
        else return 'src/assets/airplane2.png';
    }

}
