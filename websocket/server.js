
const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {

  let i = 0;

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    console.log(i++);
    ws.send('Maravilha');
  });

  ws.send('something');
});