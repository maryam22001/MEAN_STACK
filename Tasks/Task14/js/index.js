const fs = require("fs");
const path = require("path");

const folderPath = __dirname;


fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    files.forEach((file) => {
        const ext = path.extname(file).slice(1); // get extension without "."

     
        const extFolder = path.join(folderPath, ext);
       fs.mkdirSync(extFolder);
       

        const oldPath = path.join(folderPath, file);
        const newPath = path.join(extFolder, file);

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.log(`Error moving ${file}:`, err);
            } else {
                console.log(`Moved ${file} → ${ext}/`);
            }
        });
    });
});