
function commandLineRunner() {
    const data = process.argv.slice(2)
    const command = `Minglabar ${data[0]}`
    console.log(command)
}


function PortChecker() {
    const PORT = process.env.PORT
    if (!PORT) console.log('there are no port buddy')

    if (PORT) console.log(`server is runnning in the ${PORT}`)
}

process.on('exit', (code) => {
    console.log(`Process is about to exit ${code}`)
})




function Command() {
    const args = process.argv.slice(2)
    if (args.length ===0) {
        console.error(" hey there are no file paht you have provided")
        process.exit(1)
    }

    console.log('sucess')



}


function filePahtLogger() {
    const filepath=process.cwd()
    console.log(filepath)
}

function memoryChecker() {
    const memory=process.memoryUsage()
    const mb=memory.rss /(1024 * 1024)

}