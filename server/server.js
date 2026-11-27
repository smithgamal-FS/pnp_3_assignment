// ----------------- SERVER MAIN ----------------->
// establish the server app here

require("dotenv").config();
const express =require("express")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.listen(3001, ()=> {
    console.log("Server is up")
})