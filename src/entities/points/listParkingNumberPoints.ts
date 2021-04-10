
export class ListParkingNumberPoints {
    private static numberPoints: number[] = [3,4,5,6,7,8,9,10];

    public static get getNumberPoints(): number[] { return this.numberPoints; }

    public static set setPoints(numberPoints: number[]) {
        this.numberPoints.forEach((numberPoint) => {
            numberPoints.push(numberPoint);
        });
    }
    public static set setNumberPoint(numberPoint: number) {
        this.numberPoints.push(numberPoint);
    }

    public static getNumberPoint(): number {
        return this.numberPoints.pop();
    }
}
