// Making a file stream object
var file_stream = require('fs')

file_stream.readFile("hello.txt", function(err, data) { // reading file
    if (err) {
        console.log("Error occured: ", err); // logging error on console
    } else {
        console.log(data.toString()); // displaying data in string form in console
    }
});

console.log("Program ended.") // logging message on console.
