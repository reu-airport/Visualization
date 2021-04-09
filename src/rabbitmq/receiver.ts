const jackrabbit = require("jackrabbit");
import {SetQueue} from "../messages/setQueue"
let url = "amqps://avfepwdu:SS4fTAg36RK1hPQAUnyC6TH-4Mf3uyJo@fox.rmq.cloudamqp.com/avfepwdu";
let message;
let rabbit = jackrabbit(url);
let exchange = rabbit.default();

let hello = exchange.queue({ name: 'example_queue', durable: true });
hello.consume(onMessage);

function onMessage(data,ack) {
    console.log('received:', data);
    message = data;
    console.log(message);
    console.log(typeof(message));
    ack("");
    SetQueue.setQueue(message);
}

