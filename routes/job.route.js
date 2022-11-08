const {JobModel}= require("../models/job.model")
const {Router}= require("express")
const jobRouter= Router()

jobRouter.get("/",async(req,res)=>{

    if(!req.query){
        // console.log("amit")
        let allData= await JobModel.find()
        // let x= allData.splice(0,2)
        // console.log(x)
        res.status(200).status(200).send(allData)
    }else{
        let {role,sort}= req.query
        
        if(role&&sort){

            let allData= await JobModel.find({role}).sort({postedAt: sort=="desc" ? -1 : 1})
            res.status(200).send(allData)
        }else if(role){
            let allData= await JobModel.find({role})
            res.status(200).send(allData)
        }else{
            let allData= await JobModel.find({}).sort({postedAt: sort=="desc" ? -1 : 1})
            res.status(200).send(allData)
        }
    }
   
})

jobRouter.post("/add",async(req,res)=>{
    // let {}= req.body
    let newJob= JobModel(req.body)
    await newJob.save()
    res.send(newJob)
})


module.exports={
    jobRouter
}