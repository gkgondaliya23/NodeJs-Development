// File System
const http  = require('http');
const fs  = require('fs');

// Create file and write data
fs.appendFile('file-1.txt', ' Hello world Hoe r u?????', function(err){
    if(err) throw err;
    console.log('Saved....');
});


// Create / Update file and write / replace data
fs.writeFile('file-1.txt', ' Develop your Skill and Secure your JOB......', function(err){
    if(err) throw err;
    console.log('Updated....');
});



// Read file 

const server = http.createServer((req, res)=>{
    fs.readFile('file-1.txt', function(err, data){
        res.writeHead(200, {'content-type':'text/HTML'});
        res.write(data);
        res.end();
        
    });
});

// Delete file
fs.unlink('file-2.txt', function(err){
    if(err) throw err;
    console.log("File deleted.....");
});


// Rename file
fs.rename('file-1.txt','file1.txt', function(err){
    if(err) throw err;
    console.log("Renamed file....");
});


server.listen(8000, ()=>{
    console.log('Server is running.....');
});

