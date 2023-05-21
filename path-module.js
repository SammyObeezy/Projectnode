// const { log } = require("console");
// const os = require("os");

// // info about current user
// const user = os.userInfo();

// //method returns the system uptime in seconds.

// console.log(`The System Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

const { log } = require("console");
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
