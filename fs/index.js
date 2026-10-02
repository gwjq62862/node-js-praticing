import path from 'path'
import fs from 'fs'
import fspromise from "node:fs/promises"
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
const FilePath = path.join(FOLDERPath, 'sync.txt')
const CALLBACKPath = path.join(FOLDERPath, 'callback.txt')
const PROMISEPath = path.join(FOLDERPath, 'promise.txt')
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


function callbackFileApi() {
    return new Promise((resolve, reject) => {

        fs.writeFile(CALLBACKPath, 'hello callback buddy', 'utf8', (writeErr) => {
            if (writeErr) {
                return reject(writeErr);
            }


            fs.appendFile(CALLBACKPath, '\nhey this is new one buddy for callback', 'utf8', (appendErr) => {
                if (appendErr) {
                    return reject(appendErr);
                }


                fs.readFile(CALLBACKPath, 'utf8', (readErr, content) => {
                    if (readErr) {
                        return reject(readErr);
                    }


                    fs.stat(CALLBACKPath, (statErr, stats) => {
                        if (statErr) {
                            return reject(statErr);
                        }


                        resolve({
                            style: 'callback-chained',
                            fileName: path.basename(CALLBACKPath),
                            size: stats.size,
                            content: content
                        });
                    });
                });
            });
        });
    });
}

async function PromiseFileApi() {
    await fspromise.writeFile(PROMISEPath, 'hello callback buddy', 'utf8')
    await fspromise.appendFile(PROMISEPath, 'this is new line', 'utf-8')
    const content = await fspromise.readFile(PROMISEPath, 'utf-8')
    const stats = await fspromise.stat(PROMISEPath)
    return {
        style: 'promise-api',
        fileName: path.basename(PROMISEPath),
        size: stats.size,
        content: content
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
       PromiseFileApi()


    } catch (error) {
        console.log(error)
    }
}
main()