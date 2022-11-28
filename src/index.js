import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import usersRouters from './routes/users.routes.js'
import gamesRouters from './routes/games.routes.js'
import cartsRouters from './routes/cart.routes.js'
import historicRouters from './routes/historic.routes.js'

const app = express()

//Configs
app.use(cors())
app.use(express.json())
app.use(usersRouters)
app.use(cartsRouters)
app.use(gamesRouters)
app.use(historicRouters)

const port = process.env.PORT || 5000

app.listen(port, console.log(`Running on port ${port}`))