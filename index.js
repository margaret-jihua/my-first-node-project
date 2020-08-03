const myModule = require('./myModule.js')
const fs = require('fs')


// fs.readFile('story.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log('somthing wrong...');
//     }
//     else {
//         console.log(data);
//     }
// })

// console.log(myModule.beBasic());
// myModule.count();
// console.log('hello');

// let i = 0 

// const count = () => {
//     console.log(i);
//     i++
// }

// const myTimer = setInterval(count,10000)

// const today = new Date()
// console.log(today);

const moment = require("moment")
console.log(moment().format('dddd [the] Do [of] MMMM [in the year] YYYY'));
