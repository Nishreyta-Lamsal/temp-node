
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
       res.end('Welcome to our home page');
    }else if(req.url === '/about'){
        res.end('Here is our story');
    }else{
        res.end(`
        <h1> Oops! </h1>
        <p> We can't seem to find the page you are looking for!<p>
        <a href="/" Back Home</a>`);
    }

    // res.write('Welcome to our home page')
    // //end the request indicating that no more data will be sent
    // res.end()
       
})

server.listen(5000, ()=>{
    console.log('Server is lidtening on port 3000...')
});
