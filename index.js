const {connection} = require("./config/db")

const express= require("express")
const { jobRouter } = require("./routes/job.route")
var cors = require('cors')
const PORT= process.env.PORT || 8080
const app= express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Welcom to home page")
})

app.use("/job",jobRouter)

app.listen(PORT,async()=>{
    try{
       await connection
       console.log("connnected")
    }
    catch(err){
        console.log(err)
    }
})