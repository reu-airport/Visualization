
export class Point {

    protected X: number;
    protected Y: number;
    protected numberPoint: number;

    public get getX(): number { return this.X; }
    public get getY(): number { return this.Y; }
    public get getNumberPoint(): number { return this.numberPoint }

    constructor(X: number, Y: number, numberPoint: number) {
        this.X = X;
        this.Y = Y;
        this.numberPoint = numberPoint;
    }



}
