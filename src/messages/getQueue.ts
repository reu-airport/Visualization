import "phaser";

export class GetQueue {
    public static getQueue(context: Phaser.Scene): any {
        return context.cache.json.get('message');
    }
    public static preload(context: Phaser.Scene) {
        context.load.json('message', 'src/rabbitmq/messages.json');
    }
}
