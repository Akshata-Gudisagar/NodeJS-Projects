const fs = require('fs');

const filepath = "./files/images";

//read file content.
fs.open(filepath, "r", (err, fd) => {       //openAsync
    if (err)
        console.log("code:" + err.code + "message:" + err.message);
    else {
        console.log("File Opened Successfully");
        fs.readFile(filePath, (err, content) => {   //readFileSync
            console.log(content.toString());

        })
        fs.close(fd, (err) => {
            console.log("File Closed");

        })

    }
});


//Reading  Directory Content

constdirPath = "../nodejs";
fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.log("Error:" + err.code + "" + err.message);
    }
    else {
        files.forEach(file => {
            console.log(file);

        })
    }
});


