

import { createWriteStream } from 'node:fs'
import { Readable, Writable, Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const readable = Readable.from(
    ['info: server starting', 'error: connection failed', 'info: user logged in']
)

const fileWritable = createWriteStream('output.txt');
const writable = new Writable({
    write(chunk, encoding, callback) {
     
         fileWritable.write(chunk.toString())
         console.log(chunk.toString())
        callback()
    }
})

const transform = new Transform({
    transform(chunk, encoding, callback) {
      let stringChunk = chunk.toString()
        if (stringChunk.includes('error')) {
            stringChunk = `[ALERT] ERROR DETECTED: <${stringChunk}>`
            console.log(stringChunk)
        }
        console.log(stringChunk)
        callback(null,stringChunk)
    }
})

async function main()  {
    try {
        await pipeline(readable,transform,writable)
        console.log('chunk process finished')
    } catch (error) {
        console.error(error);
        
    }
}