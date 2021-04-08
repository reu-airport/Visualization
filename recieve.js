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



// var amqp = require('amqplib/callback_api');

// amqp.connect('amqps://avfepwdu:SS4fTAg36RK1hPQAUnyC6TH-4Mf3uyJo@fox.rmq.cloudamqp.com/avfepwdu', function(error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function(error1, channel) {
//         if (error1) {
//             throw error1;
//         }

//         var queue = '5';

//         channel.assertQueue(queue, {
//             durable: false
//         });

//         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

//         channel.consume(queue, function(msg) {
//             console.log(" [x] Received %s", msg.content.toString());
//         }, {
//             noAck: true
//         });
//     });
// });