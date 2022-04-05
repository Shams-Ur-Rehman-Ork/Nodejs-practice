var file_stream = require('fs') // making a filestream variable

var data = file_stream.readFileSync("hello.txt"); // reading a file asynchronously

console.log(data.toString()); // converting data to string.
console.log("Program ended.") // ending program.
