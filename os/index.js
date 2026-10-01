
import os from 'os'

//cpu
//home/tmp
//performance

function runDemo() {
    console.log(os.platform())
    console.log(os.arch())
    console.log(os.release())
    console.log(os.type())
    console.log(os.tmpdir())
    console.log(os.homedir())

    const cpu=os.cpus()
    console.log(cpu.length)

    if(cpu.length > 0) {
        console.log('first cput',cpu[0].model,cpu[0].times,cpu[0].speed)
    }
    console.log(os.totalmem())
    console.log(os.freemem())
    
}
runDemo() 
