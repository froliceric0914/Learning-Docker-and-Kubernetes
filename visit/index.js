//define the library
const express = require('express');
const redis = require('redis');

//create client
const app = express();
const client = redis.createClient({
    host: "redis-server", //the host defined in the docker-compose.yml
    port: 6379 //default port of redis
});
client.set('visit', 0);

//app.get
app.get('/', (req, res)=>{
    client.get('visit', (err, visit)=>{
        res.send("the current visits are: " + visit);
        client.set('visit', parseInt(visit) + 1);
    })
});

//app.listen
app.listen(8081, ()=>{
    console.log("app is listening to port 8081")
});