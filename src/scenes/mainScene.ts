import "phaser";
import {Terminal} from "../entities/locations/impl/terminal";
import {BusStation} from "../entities/locations/impl/busStation";
import {AirplaneStation} from "../entities/locations/impl/airplaneStation";
import {RunwayStrip} from "../entities/locations/impl/runwayStrip";
import {Roads} from "../entities/locations/impl/roads";
import {Vehicle} from "../entities/transports/impl/vehicle";
import {TypesVehicle} from "../entities/transports/typesVehicle";
import {GetQueue} from "../messages/getQueue";


export class MainScene extends Phaser.Scene {

    private busStation: BusStation;
    private terminal: Terminal;
    private airplaneStation: AirplaneStation;
    private runwayStrip: RunwayStrip;
    private roads: Roads;
    private busPassage: Vehicle;
    private followMe: Vehicle;

    

    constructor() {
        super({
            key: 'mainScene'
        });
      //  run().catch(err => console.error(err));
      //console.log(localStorage.getItem('savefrom-helper-extension'));

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


        this.load.image('terminal_building', 'src/assets/terminal_building.png');
        this.load.image('garage_building', 'src/assets/garage_building.png');
      //  this.load.json('message', 'src/rabbitmq/messages.json');
      //  this.load.json('message', 'http://api.geonames.org/citiesJSON');


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
        this.load.start();
    }

    update(time: number, delta: number): void {
        this.busPassage.moveObjectByPoints([13,15,16,17,18,19,20,21], this);
        this.followMe.moveObjectByPoints([13,24,23], this);
        //console.log(GetQueue.getQueue(this));
        //console.log(this.cache.json.get('message'));
        /*
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "http://localhost:3000/test", false );
        xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        xmlHttp.send( null );
        console.log(xmlHttp.responseText);
         */

        var j = new XMLHttpRequest();
        j.open( "GET", "http://api.plos.org/search?q=title:DNA");
        j.send(null);
        console.log(j.responseText);

    }

   public readMessage (key, type, texture) {
       this.load.json('message', 'src/rabbitmq/messages.json');
   }
}
