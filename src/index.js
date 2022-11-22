import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()

//Configs
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.listen(port, console.log(`Running on port ${port}`))