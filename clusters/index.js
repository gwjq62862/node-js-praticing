import cluster from 'node:cluster';
import os from 'node:os';
import http from 'node:http';

const cpuLength = os.cpus().length;

if (cluster.isPrimary) {
    let totalReq = 0;
    console.log(`Primary Process (PID: ${process.pid}) is running...`);

    for (let i = 0; i < cpuLength; i++) {
        const worker = cluster.fork();
        worker.send({ greeting: `Hello from Primary to Worker ID ${worker.id}` });
    }

    cluster.on('fork', (worker) => {
        console.log(`[Event] Worker was created ${worker.id}`);
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`[Event] Worker ${worker.process.pid} died. Starting a replacement worker...`);
        cluster.fork();
    });


    cluster.on('message', (worker, message) => {
        if (message && message.count) {
            totalReq += message.count;
        }
        console.log(`Total ${totalReq} req handled (Worker PID: ${worker.process.pid})`);
    });

} else {
    let reqCount = 0;

    process.on('message', (msg) => {
        console.log(`I got the message from the master shifu ${msg.greeting} btw my name is ${process.pid}`);
    });

    http.createServer((req, res) => {
        if (req.url === '/' && req.method === 'GET') {
            reqCount++;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Request served by Worker Process ID: ${process.pid} (Worker Total: ${reqCount})\n`);


            process.send({ count: 1 });
        }
        else if (req.url === '/crash' && req.method === 'GET') {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Worker ${process.pid} is crashing...\n`);
            console.log(`Worker ${process.pid} is shutting down...`);

            process.send({ count: 1 });
            process.exit(1);
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found\n');
        }

    }).listen(8000);

    console.log(`-> Worker process started with PID: ${process.pid}`);
}