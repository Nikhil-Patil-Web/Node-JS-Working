const fs = require('fs');
const server = require ('http').createServer();
//////
server.on("request", (req, res) =>{

    //// SOLUTION 1
   // fs.readFile("test-file.txt", (err, data)=>{
   ///     if(err){
      //      console.log(err);
    //    }
     //   else{
      //      res.end(data);
      //  }
    //});///

    ///// SOLUTION 2

    const readable= fs.createReadStream("test-file.txt");
    readable.on('data', chunk =>{
        res.write(chunk);
    })

    readable.on('end', ()=>{
        res.end();
    })

});

server.listen(8800,'127.0.0.1', () =>{
    console.log("Listening............");
})