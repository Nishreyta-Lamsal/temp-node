const os = require('os');

//info about current user
console.log(os.userInfo())

//the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()}`)

//info about current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS); 