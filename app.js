//console.log(__dirname);
// console.log(__filename);
// console.log(require);

// setTimeout(() => {
//     console.log("Hello world!");
// }, 1000);

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);





