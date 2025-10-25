/*

*/

// dependencies 
import http from 'http';

//app object -- module scaffolding
const app = {};

//config
app.config = {
    port : 3000
}

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to Port ${app.config.port}`)
    });
}

// Handle Request Response
app.handleReqRes = (req, res) => {
    //response handle
    res.end('Hello programmers!');
}
// start the server
app.createServer();