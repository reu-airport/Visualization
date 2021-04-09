import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
export class SetQueue {

    private static generatedNameFile: string;

    public static setQueue(message: object): string {
        console.log(uuidv4());
        //this.generatedNameFile = `messages${uuidv4()}.json`;
        this.generatedNameFile = `messages.json`;
        fs.writeFile(this.generatedNameFile, JSON.stringify(message, null, 2), function (err) {
            if (err) return console.log(err);
        });
        return this.generatedNameFile;
    }
}
