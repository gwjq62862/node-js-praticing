
//callback is a func that you're passing to diff funcc
//callback (error,result) => most imp concept if erorr you reject if result you do certian things
const users = [
    {
        id: 1,
        name: 'Hein Way Phyo',
        email: 'hein@example.com',
        role: 'Full-Stack Developer',
        isActive: true
    },
    {
        id: 2,
        name: 'Aung Aung',
        email: 'aung@example.com',
        role: 'UI/UX Designer',
        isActive: false
    },
    {
        id: 3,
        name: 'Su Su',
        email: 'susu@example.com',
        role: 'Project Manager',
        isActive: true
    },
    {
        id: 4,
        name: 'Kyaw Kyaw',
        email: 'kyaw@example.com',
        role: 'Backend Engineer',
        isActive: true
    }
];


function userWithCallback(userId, callback) {

    setTimeout(() => {
        const user = users.find((currentUser) => currentUser.id === userId)
        if (!user) {
            callback(new Error(`user with this ${userId} is not found`))
            return
        }
        callback(null, user)
    }, 500)
}

// userWithCallback(3, (error, result) => {
//     if (error) {
//         console.error(error);
//         return
//     }
//     console.log(`user result was found`, result);

// })

function FindUserwithPromise(userId) {
    return new Promise((reject,resolve)=> {
        setTimeout(()=> {
          const user=users.find((currentUser)=> currentUser.id===userId)
          if(!user) {
            reject(new Error(`user with this ${userId} is not found`))

             return 
          }
          resolve(user)
        },500)
    })
}

// FindUserwithPromise(2).then((result)=> {
//  console.log('your result is present',result)
// }).catch((err)=>{
//     console.error(err)
// })



function FinduserwithAsync(userId) {
try {
    const user=users.find((currentUser)=> currentUser.id ===userId)
    if(!user) throw new Error('user was not found')
    console.log(user)
} catch (error) {
    const message=error instanceof Error ? error.message : 'unknown error'
    console.error(message)
}
}

FinduserwithAsync(9)