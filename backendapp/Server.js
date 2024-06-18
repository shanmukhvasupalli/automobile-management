const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = process.env.DB_URL

mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express()
app.use(cors())
const {router} = require("./routes")
app.use(express.json())  
app.use("",router) 





const port ="2024"
app.listen(port,()=> {
    console.log(`Server is running at port ${port}`)
})

// cross origin resource sharing
