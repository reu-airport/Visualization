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
          this.points.forEach((point, index) => {
               if (point.getNumberPoint == number) return this.points[index];
          });
          return null;
     }


}
