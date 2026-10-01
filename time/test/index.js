import { setTimeout as sleep } from 'node:timers/promises'



async function runDemo() {
    await sleep(1000)
    console.log('sleep function finsihed sleep ');

    setImmediate(() => {
        console.log('running in check phase');

    })

    const timer = setTimeout(() => {
        console.log('timeout');

    }, 2000)
    clearTimeout(timer)

    let count = 0
    const intervalId = setInterval(() => {
        count++

        console.log('setInterval is running');
        if (count === 3) {
            clearInterval(intervalId)
        }

    },1000)

}