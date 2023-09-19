import express from "express";
import cors from "cors";

const appExpress = express();
appExpress.use(cors())

appExpress.get("/user", (req,res)=>{
    res.send({message:"holiiiiiiiiii"})
})

appExpress.listen(5099, () => console.log(`http://127.0.19.94:5099`))