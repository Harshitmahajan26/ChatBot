import express from "express"
import dotenv from "dotenv"
import connectDb from "./database/db.js"  // we have to apply .js because we are using type module in package.json file

dotenv.config()

const app = express()

//using middleware
app.use(express.json())

//importing routes
import userRoutes from "./routes/userRoutes.js"

// using routes
app.use("/api/user", userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
    connectDb()
})