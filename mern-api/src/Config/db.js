const mongoose  = require("mongoose")


const mongoDbUrl="mongodb+srv://bishwanath3714312:LEBvoSWS5AY2kHBt@cluster0.gx478.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}