const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');
const allPermissions = fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK | fs.constants.X_OK;

console.log('allPermissions', allPermissions)
// Sync

// if(!fs.existsSync(dataFolder)){
//     fs.mkdirSync(dataFolder);
//     console.log('Data folder exists');
// }

try {
    fs.accessSync(dataFolder, fs.constants.F_OK);
} catch (err) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder created');
}

const filePath = path.join(dataFolder, 'data.json');
fs.writeFileSync(filePath, '{ "message": "Test message" }');

// console.log('File created successfully.');

const readContentFromFile = fs.readFileSync(filePath, 'utf8');
const parsedData = JSON.parse(readContentFromFile);
// console.log('File content:', parsedData.message );


// fs.appendFileSync(filePath, 'This is new row');

// Async
const asyncFilePath = path.join(dataFolder, 'async-data.json');

fs.writeFile(asyncFilePath, '{ "message": "Test message" }', (err) => {
    if(err) throw err;
    console.log('Async file is created successfully.');
    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
        if(err) throw err;
        console.log('Async file content', data)
        // fs.appendFile(filePath, 'This is new row');
    })
});