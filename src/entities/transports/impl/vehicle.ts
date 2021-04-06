import {Transport} from "../transport";
import {TypesVehicle} from "../typesVehicle";
import {ListPoints} from "../../points/listPoints";
import {Point} from "../../points/point";

export class Vehicle extends Transport {
    private typeBus: TypesVehicle;
    private isMove: boolean;
    private points: Point[];

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
            scaleX: 0.18,
            scaleY: 0.18
        });
        this.isMove = false;
        this.points = [];
    }


   public setIsMove(isMove: boolean) {
        this.isMove = isMove;
   }
   public get getIsMove(): boolean {
        return this.isMove;
   }

   public moveObjectByPoints(numberPoints: number[], context: Phaser.Scene) {

           if (!this.getIsMove) this.getPointsByNumberPoint(numberPoints);
           let targetPoint: Point = this.points[0];
           this.setIsMove(true);
           context.physics.moveToObject(this.getTransportObject, targetPoint.getGameObjectPoint, 100);
           let distance = Phaser.Math.Distance.Between(this.getTransportObject.x, this.getTransportObject.y, targetPoint.getGameObjectPoint.x, targetPoint.getGameObjectPoint.y);
           let rotation_angle = Phaser.Math.Angle.Between(this.getTransportObject.x, this.getTransportObject.y, targetPoint.getGameObjectPoint.x, targetPoint.getGameObjectPoint.y);

           if (this.getTransportObject.body.speed > 0) {
               this.getTransportObject.rotation = rotation_angle + 3.13;
               this.overlap(distance, targetPoint.getGameObjectPoint);
           }

   }

   private overlap(distance: number, pointObject: any): Point {
       let shifted: Point;
       if (distance < 4)  {
           this.getTransportObject.body.reset(pointObject.x, pointObject.y);
           shifted =  this.points.shift();
           if (shifted === undefined) {
               this.points = [];
               this.setIsMove(false);
               return null;
           }
       }
       return this.points[0];
    }

    private getPointsByNumberPoint(numberPoints: number[]): Point[] {
        numberPoints.forEach( (numberPoint) => {
            this.points.push(ListPoints.getPointByNumber(numberPoint))
        });
        return this.points;
    }

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
