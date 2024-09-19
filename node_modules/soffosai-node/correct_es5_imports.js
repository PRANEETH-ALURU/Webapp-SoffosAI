const fs = require('fs');
const path = require('path');

function replaceInFile(fileName) {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const result = fileContent.replace(/\.mjs/g, '.js');
    fs.writeFileSync(fileName, result, 'utf8');
}

function walkSync(dir) {
    fs.readdirSync(dir).forEach(file => {
        let filePath = path.join(dir, file);
        let stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkSync(filePath);
        } else if (stat.isFile()) {
            replaceInFile(filePath);
        }
    });
}

// Run the replace function on the dist directory
walkSync('./dist');