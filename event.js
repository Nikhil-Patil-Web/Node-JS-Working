const eventEmmitter = require("events");
const http = require("http");

class Sales extends eventEmmitter{
    constructor(){
        super();
    }
}

const myEmmitter= new Sales();

myEmmitter.on("newSale", ()=>{
    console.log("There was a new sale!");
});

myEmmitter.on("newSale",()=>{
    console.log("Customer Name: Nikhil");
});

myEmmitter.on("newSale", stock =>{
    console.log(`There are now ${stock} items left in stock`);
});

myEmmitter.emit("newSale",9);



///////////////////////////////////////////////////////////////////////

const server= http.createServer();

server.on("request", (req,res)=>{
    console.log("Request Recieved!");
    res.end("Request Recieved!");
});

server.on("request",(req,res) =>{
    console.log("Another Request!");
});

server.on("close", () =>{
    console.log("server closed");
});


server.listen(8700,"127.0.0.1", () =>{
    console.log("Waiting for responses....");
})