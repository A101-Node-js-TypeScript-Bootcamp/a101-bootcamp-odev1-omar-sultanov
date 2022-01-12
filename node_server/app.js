const http=require("http");
const port=3000;
http.createServer((request, response)=>{
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url==="/" || request.url==="/home"){
        response.write("<h2>Home</h2>")
    }else if(request.url==="/about"){
        response.write("<h2>About</h2>")
    }else if(request.url==="/conatct"){
        response.write("<h2>Contact</h2>")
    }else{
        response.write("<h2>Not Found</h2>")
    }
    response.end() 
}).listen(port,()=>{
    console.log(`Server working with localhost:${port} port`);
})