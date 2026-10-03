import {Buffer}from'node:buffer'

const fixedBuffer=Buffer.alloc(16)

const fixedBufferResult=fixedBuffer.write('Node.js Buffers')

console.log(fixedBufferResult)


const stringBuffer=Buffer.from('Backend Developer 2026')
console.log(stringBuffer.toString('hex'))
console.log(stringBuffer.toString('base64'))


const chunk=[
    Buffer.from('Hello '),
    Buffer.from('Buffers '),
    Buffer.from('World!')
]

const combineBuffer=Buffer.concat(chunk)
console.log(combineBuffer.toString('utf-8'))


const rawBuffer=Buffer.from('ABC')


console.log('A',rawBuffer[0])
console.log('B',rawBuffer[1])
console.log('C',rawBuffer[2])


