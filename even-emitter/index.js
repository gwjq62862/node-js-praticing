import EventEmitter from 'node:events'
//user welcome email
//write a log
//notify other device 


//we use event emitter on the something it' s kinda signal when something happen do something that's all about




const event = new EventEmitter()


event.on('user-register',(user)=>{
console.log(user)
})

function userRegister() {
    const user = [
        {
            userName: "khali",
            email: "khali@gmail.com",
            role: 'user'
        }
    ]

    event.emit('user-register',user)
}



userRegister() 


event.once('welcome',()=>{
    console.log('server started welcome buddy ');
    
})


event.emit('welcome')