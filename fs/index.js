import path from 'path'
import fs from 'fs'
//fs module
//crud for folders and files


//sync api
//callback api
//async api




//small startup
//local demo
//build scripts

//worst
//hightraffic apis
//http req handlers
//bg jobs

const FOLDERPath = path.join(process.cwd(), 'file-system', 'upload')
const FilePath = path.join(FOLDERPath , 'sync.txt')
function syncApi() {

    fs.writeFileSync(FilePath, "hello world buddy", 'utf-8')
    fs.appendFileSync(FilePath, "/n hello world also", 'utf-8')
    const content = fs.readFileSync(FilePath).toString('utf-8')


    const stats = fs.statSync(FilePath)
    return {
        style: 'sync',
        fileName: path.basename(FilePath),
        size: stats.size,
        content

    }

}

function fileChecker() {
    if (!fs.existsSync(FOLDERPath)) {
        fs.mkdirSync(FOLDERPath, { recursive: true })
    }
}


function main() {
    try {
        fileChecker()
        const syncResult = syncApi()
        console.log(syncResult);

    } catch (error) {
        console.log(error)
    }
}
main()