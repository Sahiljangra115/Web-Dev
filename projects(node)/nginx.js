const http = require('http');
const fs = require('fs');
const path = require('path');


const port = 3000
const server = http.createServer((request , response) => {  
    const filePath = path.join(__dirname, request.url === "/" ? "index.html" : request.url)

    const extName = String(path.extname(filePath)).toLowerCase();=
});
  
//-->  usually "?" is used in place of True in condition check and ":" is used in place of false


server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});