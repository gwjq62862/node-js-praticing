import crypto from 'crypto'


//hashing token
//encrypting/decrypting
//hashing data
//creating uuid, securing token
//verifying data was not changed

// const requestId=crypto.randomUUID()
// console.log(requestId)

//crypto.randomByte()

//passowrd resert token
//email verification token
//session secrect, api keys

// const randombyte=crypto.randomBytes(16).toString('hex')
// console.log(randombyte)


//hashing is one way which mean you can't reverse it but you can compare 
// const text="hello world"
// const hash=crypto.createHash('sha256').update(text).digest('hex')
// console.log(text)
// console.log(hash)


//hasing wiht hmac
const mysecret='my-super-secrect'
const message='how are you'

const signature=crypto.createHmac('sha256',mysecret).update(message).digest('hex')

//then you can verify signature using your secrect

const verifysignature=crypto.createHmac('sha256',mysecret).update(message).digest('hex')

console.log('signature is verificaiton is ',signature === verifysignature)
