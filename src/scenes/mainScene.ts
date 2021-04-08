import "phaser";
import {Terminal} from "../entities/locations/impl/terminal";
import {BusStation} from "../entities/locations/impl/busStation";
import {AirplaneStation} from "../entities/locations/impl/airplaneStation";
import {RunwayStrip} from "../entities/locations/impl/runwayStrip";
import {Roads} from "../entities/locations/impl/roads";
import {Vehicle} from "../entities/transports/impl/vehicle";
import {Airplane} from "../entities/transports/impl/airplane";
import {TypesVehicle} from "../entities/transports/typesVehicle";
var jackrabbit = require('jackrabbit');
var url = process.env.CLOUDAMQP_URL || "amqps://avfepwdu:SS4fTAg36RK1hPQAUnyC6TH-4Mf3uyJo@fox.rmq.cloudamqp.com/avfepwdu";
var message;
var rabbit = jackrabbit(url);
var exchange = rabbit.default();

var hello = exchange.queue({ name: 'example_queue', durable: true });
hello.consume(onMessage);

function onMessage(data,ack) {
  console.log('received:', data);
  message = data;
  console.log(message);
  console.log(typeof(message));
  ack("");
}

export class MainScene extends Phaser.Scene {

    private busStation: BusStation;
    private terminal: Terminal;
    private airplaneStation: AirplaneStation;
    private runwayStrip: RunwayStrip;
    private roads: Roads;
    private busPassage: Vehicle;
    private busObject: any;
    private airplane: Airplane;
    private airplaneObject: any;
    private pointObject: any;
    private pointObject2: any;
    private followMe: Vehicle;

    

    constructor() {
        super({
            key: 'mainScene'
        });
    }

    init(): void {
        this.busStation = BusStation.getInstance();
        this.terminal = Terminal.getInstance();
        this.airplaneStation = AirplaneStation.getInstance();
        this.runwayStrip = RunwayStrip.getInstance();
        this.roads = Roads.getInstance();
        this.busPassage = new Vehicle(TypesVehicle.BUS, 12);
        this.followMe = new Vehicle(TypesVehicle.FOLLOW_ME, 12);
        
    }

    preload(): void {
        this.terminal.preload(this);
        this.busStation.preload(this);
        this.airplaneStation.preload(this);
        this.runwayStrip.preload(this);
        this.roads.preload(this);

        this.busPassage.preload(this);
        this.followMe.preload(this);
       // this.airplane.preload(this);


        this.load.image('terminal_building', 'src/assets/terminal_building.png');
        this.load.image('garage_building', 'src/assets/garage_building.png');
    }

    create(): void {
        this.runwayStrip.setPosition(this);
        this.runwayStrip.drawPoints(this);

        this.airplaneStation.setPosition(this);
        this.airplaneStation.drawPoints(this);

        this.busStation.setPosition(this);
        this.busStation.drawPoints(this);

        this.terminal.setPosition(this);
        this.terminal.drawPoints(this);

        this.roads.setPosition(this);
        this.roads.drawPoints(this);
        this.busPassage.setObject(this);
        this.followMe.setObject(this);
    }

    update(time: number, delta: number): void {
        this.busPassage.moveObjectByPoints([13,15,16,17,18,19,20,21], this);
        this.followMe.moveObjectByPoints([13,24,23], this);

  /*
        this.airplane.setObject(this);

        this.busObject = this.busPassage.getTransportObject;
        this.pointObject = ListPoints.getPointByNumber(13).getGameObjectPoint;
        this.physics.moveToObject(this.busObject, this.pointObject, 100);

        this.airplaneObject = this.airplane.getTransportObject;
        this.pointObject2 = ListPoints.getPointByNumber(1).getGameObjectPoint;
        this.physics.moveToObject(this.airplaneObject, this.pointObject2, 100);

        this.add.image(500, 516, 'terminal_building').setScale(0.62, 0.62);
        this.add.image(1001, 430, 'garage_building').setScale(0.63, 0.63);
    }  
    //тест для машинок
        var distance = Phaser.Math.Distance.Between(this.busObject.x, this.busObject.y, this.pointObject.x, this.pointObject.y);
        var rotation_angle = Phaser.Math.Angle.Between(this.busObject.x, this.busObject.y, this.pointObject.x, this.pointObject.y);
        
        if (this.busObject.body.speed > 0)
        {
            this.busObject.rotation = rotation_angle + 3.13;

            if (distance < 4)
            {
                this.busObject.body.reset(this.pointObject.x, this.pointObject.y);
            }
        }

        //тест для самолетов
        var distance2 = Phaser.Math.Distance.Between(this.airplaneObject.x, this.airplaneObject.y, this.pointObject2.x, this.pointObject2.y);
        var rotation_angle2 = Phaser.Math.Angle.Between(this.airplaneObject.x, this.airplaneObject.y, this.pointObject2.x, this.pointObject2.y);
        
        if (this.airplaneObject.body.speed > 0)
        {
            this.airplaneObject.rotation = rotation_angle2 + 1.6;

            if (distance2 < 4)
            {
                this.airplaneObject.body.reset(this.pointObject2.x, this.pointObject2.y);
            }
         }
*/ 
  
    }
}
