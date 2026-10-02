const users = [
    { id: 1, name: 'Hein Way Phyo', role: 'Developer' },
    { id: 2, name: 'Aung Aung', role: 'Designer' },
    { id: 3, name: 'Su Su', role: 'Manager' }
];

function callbackUserFind(userId, callback) {
    setTimeout(() => {
        const user = users.find((c) => c.id === userId)
        if (!user) {
            callback(new Error(`user was not found with this ${userId}`))
            return
        }
        callback(null, user)
    }, 500)

}

callbackUserFind(2, (res) => {
    console.log(res)
})

function userPromiseFind(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((c) => c.id === userId)
            if (!user) {
                reject(new Error(`user was not found with this ${userId}`))
                return
            }
            resolve(user)
        }, 500)
    })
}

userPromiseFind(2).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})



async function asyncFinder(userId) {
    try {
        await userPromiseFind(userId)
    } catch (error) {
        console.error(error)
    }
}
asyncFinder(2)