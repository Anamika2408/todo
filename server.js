const express= require('express')
const cors=require('cors')

const app=express();
const port=3001;
app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use(cors());
app.use(express.json());
app.use('/task',require("./routes/task-router.js"));

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})