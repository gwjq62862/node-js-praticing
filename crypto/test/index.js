
import crytpo, { hash } from 'crypto'

function hasher(data) {
  return   crytpo.createHash("sha256").update(data).digest('hex')
}



function mutipleHasher() {
    const hasher=crytpo.createHash('sha256')

    hasher.update('part-one')
    hasher.update('part-two')
    hasher.update('part-three')

    hash.digest('hex')
}



function passwordHahser(password) {
   const sault=  crytpo.randomBytes(16)

   const hash=crytpo.createHash('sha256').update(password +sault).digest('hex')

   const hashedPassowrd=sault + hash

   return {
    sault,
    hash,
    hashedPassowrd
   }

}


function HandshakeHash() {
    const message='hello world'
    const secrect='secrectblahblah'
    const hashed=crytpo.createHmac('sha256',secrect).update(message).digest('hex')

    const isMatchedSignature=crytpo.createHmac('sha256',secrect).update(message).digest('hex')

    console.log(`they might be match ${isMatchedSignature ===hashed}`)
}
HandshakeHash()
