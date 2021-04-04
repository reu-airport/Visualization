import {Point} from "./point";

export class ListPoints {
    private static points: Point[] = [];

    public static get getPoints(): Point[] { return ListPoints.points; }

    public static set setPoints(points: Point[]) {
         points.forEach((point) => {
              ListPoints.points.push(point);
         });
    }
    public static set setPoint(point: Point) {
         ListPoints.points.push(point);
    }

     public static getPointByNumber(number: number): Point {
         for (let i = 0; i < this.points.length; i++) {
             if (this.points[i].getNumberPoint == number) {
                 return this.points[i];
             }
         }
          return null;
     }


}
