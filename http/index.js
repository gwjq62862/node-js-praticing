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


})

server.listen(PORT, () => {
    console.log('Server is running on port 3000')
})