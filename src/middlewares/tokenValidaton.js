import { sessionsCollection } from "../database/db.js"

export default async function tokenValidationMD (req, res, next) {
    const { authorization } = req.headers
    const token = authorization.replace("Bearer ", "")

    try {
        const userExist = await sessionsCollection.findOne({token})
        if (!userExist) { return res.status(401).send("Sua sessão expirou!") }
    } catch (error) {
         console.log(error)
         res.sendStatus(500)
    }

    next ()
}