import http from 'node:http'



const PORT = 3000

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method


    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            statusCode: 200,
            message: "hello world buddy "
        }))
        return
    }

    if (url === '/api/data' && method === 'GET') {
        res.statusCode = 200
        res.end(JSON.stringify({
            "message": "Success",
            "data": ["Node.js", "Streams", "HTTP Module"]

        }))
        return
    }

    if (url === '/api/caculate' && method === 'POST') {
        let body = []

        req.on('data', (chunk) => {
            body.push(chunk)

        })
        req.on('end', () => {
            const buffer = Buffer.concat(body).toString('utf-8')
            try {
                const ObjectData = JSON.parse(buffer)

                const sum = ObjectData.a + ObjectData.b

                res.end(JSON.stringify({
                    sum: sum,
                    message: 'caculated successfully'
                }))

            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON format' }))

            }

        })
    }


})

server.listen(PORT, () => {
    console.log('Server is running on port 3000')
})