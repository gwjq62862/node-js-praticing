
import path from 'path'
function absolutePath(filepath){
const file = path.resolve(filepath)
console.log(file)
}

function PathJoiner(){
    const filePath=path.join('public', 'assets', 'images', 'logo.png')
    console.log('filepaht is this ',filePath)


    console.log(path.dirname(filePath))
    console.log(path.basename(filePath))
    console.log(path.extname(filePath))
}

PathJoiner()