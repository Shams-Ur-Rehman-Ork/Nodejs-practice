var file_stream = require("fs")  // File stream object

// Writing to file through file stream object.
file_stream.writeFile("hello.txt", "Write this data on top of present data.", function (err) {
    if (err) {
        console.log("Error while writitng File.", err); // Error  
    } else {
        console.log("Data written."); // Displaying message on console.
    }
});

console.log("Program ended.") // End of program
