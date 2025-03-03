// (function (exports, require, module, __filename, __dirname) {
//   Your module code here
// });
// console.log('exports :', exports);
// console.log('require :', require);
// console.log('module :', module);
// console.log('__filename :', __filename);
// console.log('__dirname :', __dirname);

// Information about current process.
// console.log('process :', process);

const path = require('path');


const joinPath = path.join('/user', 'documents', 'node', 'projects');
const resolvePath = path.resolve(joinPath, 'user', 'documents', 'node', 'projects');
const normalizePath = path.normalize('/user/.git/../node/project');
const relativePath = path.relative('/home/user/docs', '/home/user/images/photo.jpg');
const parsePath = path.parse(joinPath);
const absolutePath = path.isAbsolute('/home/user/docs');
const formatPath = path.format({
    dir: '/home/user/docs',
    base: 'file.txt'
})

console.log('Directory name:', path.dirname(__filename));
console.log('File name:', path.basename(__filename));
console.log('File extension: ', path.extname(__filename));
console.log('Relative: ', relativePath);
console.log('Join path: ', joinPath);
console.log('Resolve path: ', resolvePath);
console.log('Process: ', process.cwd());
console.log('Normalize path: ', normalizePath);
console.log('Parse path: ', parsePath);
console.log('Format path:', formatPath);
console.log('Absolute path:', absolutePath);