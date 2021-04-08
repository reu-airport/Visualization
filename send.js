var jackrabbit = require('jackrabbit');

// Get the URL from ENV or default to localhost
var url = process.env.CLOUDAMQP_URL || "amqps://avfepwdu:SS4fTAg36RK1hPQAUnyC6TH-4Mf3uyJo@fox.rmq.cloudamqp.com/avfepwdu";

// Connect to CloudAMQP
var rabbit = jackrabbit(url);
var exchange = rabbit.default();

var hello = exchange.queue({ name: 'example_queue', durable: true });

//publish message
exchange.publish({ msg: 'mememe' }, { key: 'example_queue' });

