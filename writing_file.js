var file_stream = require("fs")

file_stream.writeFile("hello.txt", "Write this data on top of present data.", function (err) {
    if (err) {
        console.log("Error while writitng File.", err);  
    } else {
        console.log("Data written.");
    }
});

console.log("Program ended.")
