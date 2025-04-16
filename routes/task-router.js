const router= require('express').Router()
const client=require("../config/db.js")

router.get('/',async (req,res)=>{
    const query="SELECT * FROM tasks";
    const data = await client.query(query);
    return res.status(200).json({result: data.rows});
})

router.post('/create',async (req,res)=>{
    const {task}=req.body;
    const query= "INSERT INTO tasks (task) VALUES ($1) RETURNING *";
    const data=await client.query(query,[task]);
    return res.status(201).json( {message:"Task Created", result: data.rows[0]} );
})

module.exports = router;
