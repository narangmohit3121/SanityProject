const StreamZip = require('node-stream-zip');
import { join } from 'path';
import fs from 'fs';

export class FileManager {

    async readDocFile(filePath: string): Promise<string> {

        return new Promise(
            function (resolve, reject) {
                const zip = new StreamZip({
                    file: filePath,
                    storeEntries: true
                })

                zip.on('ready', () => {
                    var chunks: any[] = []
                    var content: any = ''
                    zip.stream('word/document.xml', (err: any, stream: any) => {
                        if (err) {
                            reject(err)
                        }
                        stream.on('data', function (chunk: any) {
                            chunks.push(chunk)
                        })
                        stream.on('end', function () {
                            content = Buffer.concat(chunks)
                            zip.close()
                            resolve(content.toString())
                        })
                    })
                })
            }
        )
    }
    extractDataFromDocFile(input:string):string{
        let body:string = '';
        let sentences:string[] = input.split('<w:t');
        sentences.forEach(function(sentence){
            let tags:string[] = sentence.split('>');
            let content:string = tags[1].replace(/<.*$/,"");
            body += content + ' ';
        })
        return body;
    }

    removeAllFiles(directoryName: string): void {
        console.log("removing all files from Download Folder");
        fs.readdir(directoryName, function (err, files) {
            if (err) throw err;
            for (let file of files) {
                fs.unlink(join(directoryName, file), function (err) {
                    if (err) throw err;
                })
            }
        })
    }

}


