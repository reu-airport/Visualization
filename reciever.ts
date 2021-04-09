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
// import * as Amqp from "amqp-ts";
// var url = process.env.CLOUDAMQP_URL || "amqps://avfepwdu:SS4fTAg36RK1hPQAUnyC6TH-4Mf3uyJo@fox.rmq.cloudamqp.com/avfepwdu";
// var connection = new Amqp.Connection(url);
// var exchange = connection.declareExchange("");
// //var exchange = rabbit.default();
// var queue = connection.declareQueue("example_queue");
// queue.bind(exchange);
// queue.activateConsumer((message) => {
//     console.log("Message received: " + message.getContent());
// });

// // it is possible that the following message is not received because
// // it can be sent before the queue, binding or consumer exist
// connection.completeConfiguration()
// var msg = new Amqp.Message("Test");
// exchange.send(msg);

// connection.completeConfiguration().then(() => {
//     // the following message will be received because
//     // everything you defined earlier for this connection now exists
//     var msg2 = new Amqp.Message("Test2");
//     exchange.send(msg2);
// });
