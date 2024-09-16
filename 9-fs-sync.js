// const fs = require('fs');
// fs.readFileSync();

const {readFileSync, writeFileSync} = require('fs'); //alternative 
console.log('Start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//file name, value {if there is no file, node will create one}
//the flag helps append the same result to the text file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

console.log('Done with the task')
console.log('Starting the next one')