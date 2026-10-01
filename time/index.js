
import { setTimeout as sleep } from 'node:timers/promises'
function runTimeoutExample() {
    console.log('1. this one gonna come up at first time');

    setTimeout(() => {
        console.log('2. this one gonn run when timeout');

    }, 2000)

    console.log('3. this one gonna run thrid time');


}

function clearTimeOutExample() {
    const timerId = setTimeout(() => {
        console.log('this one wont run ');

    }, 2000)
    clearTimeout(timerId)
}
//setInterval is going to run again and again

function IntervalExample() {
    let count = 0
    const interval = setInterval(() => {
        count++;
        console.log('5.setInterval example is running');

        if (count === 4) {
            clearInterval(interval)
        }
    }, 2000)

}


async function PromiseBasedTimer() {
    console.log('9. waiting for promise based timer ');
    await sleep(1500)
    console.log('10. promise based timer finishes after 1.5 seconds');
}

PromiseBasedTimer().catch((error)=> {
    console.error('we got error in promisebased timer',error);
    
})




function setImmediateExample() {
    console.log('6. before setImmediate');

    setImmediate(() => {
        console.log('7. this runs in the check phase via setImmediate');
    });

    console.log('8. after setImmediate');
}


 setImmediateExample();