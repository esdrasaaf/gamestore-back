import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import usersRouters from './routes/users.routes.js'   // PAU TA DANDO NESSA LINHA AKI

const app = express()

//Configs
app.use(cors())
app.use(express.json())
app.use(usersRouters)


const port = process.env.PORT || 5000

app.listen(port, console.log(`Running on port ${port}`))