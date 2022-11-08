const mongoose = require("mongoose")

const jobSchema= new mongoose.Schema({
    company: {type:String, require: true},
    postedAt: { type: String, require: true},
    city: {type: String,require: true},
    location: {type: String,require: true},
    role: {type: String,require: true},
    level: {type: String,require: true},
    contract: {type: String,require: true},
    position: {type: String,require: true},
    language: {type: String,require: true},
},
{
    versionKey:false,
    timestamps:true
}
)

const JobModel= mongoose.model("jobData",jobSchema)
module.exports={
    JobModel
}