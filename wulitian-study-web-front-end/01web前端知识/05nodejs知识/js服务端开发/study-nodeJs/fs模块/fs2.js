// Import the filesystem module
const fs = require('wulitian-study-web-front-end/webǰ��֪ʶ/js֪ʶ/js����˿���/study-nodeJs/fsģ��/fs');

// Open the directory
console.log("Opening the directory");
fs.opendir(

    // Path of the directory
    "test",

    // Options for modifying the operation
    { encoding:"utf8", bufferSize:64 },

    // Callback with the error and returned
    // directory
    (err, dir) => {
        if (err) console.log("Error:", err);
        else {
            // Print the pathname of the directory
            console.log("Path of the directory:", dir.path);

            // Close the directory
            console.log("Closing the directory");
            dir.closeSync();
        }
    }
);
