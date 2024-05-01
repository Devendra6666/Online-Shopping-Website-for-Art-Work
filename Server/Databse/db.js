const mongoose = require("mongoose")
const url = "mongodb://0.0.0.0:27017/Quiz";

mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}) 
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err)
})