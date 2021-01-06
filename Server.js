
let express = require('express');
let socket = require('socket.io');
const app = express();

let port = process.env.PORT;
let server = app.listen(3000);
let a = socket(server);
app.use(express.static('Public'));

a.sockets.on("connection", newConnection);


function newConnection(other){
    console.log("New User Coming In" + other.id);

    other.on("DataClient", CheckData);

    function CheckData(masukan){
        console.log(masukan);
        other.broadcast.emit("DataServer", masukan);
    }

;}
