


//piece by peice
//video/photo processing
//uplaoding
//reading large file
//dowloading file

//streams
//readable streams
//writable streams
//transform streams


import { Transform, Writable, Readable, pipeline } from 'node:stream';
import fs, { read } from 'node:fs';

const readableStream = new Readable.from([
    'hello-nodejs',
    'hello world node js'
])

const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const text = chunk.toString();

        callback(null, text.toUpperCase());
    }
});


const customWritable = new Writable({
    write(chunk, encoding, callback) {
        console.log('Received processed chunk:', chunk.toString());

        callback();
    }
});


async function main() {
    try {
        await pipeline(readableStream, uppercaseTransform, customWritable)
        console.log('stream completed');

    } catch (error) {
        console.error(error);

    }
}

