// Path Module

console.log(path.basename('file1.txt'));
console.log(path.dirname('file1.txt'));
console.log(path.extname('file1.txt'));
console.log(path.isAbsolute('file1.txt'));
console.log(path.format({ dir: 'D:\\Home', base:'file1.txt'}));
console.log(path.join('/','file1.txt'));
console.log(path.normalize('file1.txt'));
console.log(path.parse('file1.txt'));
console.log(path.relative('D:Home\\user','file1.txt')); 
console.log(path.resolve('file1.txt'));
console.log(path.toNamespacedPath('file1.txt'));
console.log(__dirname);  // current directory
console.log(__filename); // filename with full path