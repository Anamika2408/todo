const {Client}=require("pg");
const client = new Client({
    user:"postgres",
    host:"localhost",
    database:"task-tracker",
    password:"anamika",
    port:5432
});

client.connect()
.then(()=> console.log("Successfully Connected!"))
.catch(err=> console.err("Connection error: ",err.stack));

module.exports = client;
