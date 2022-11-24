import { gamesCollection } from "../database/db.js";

export async function getGames (req, res) {
    try {
        const gameList = await gamesCollection.find().toArray()
        res.send(gameList)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}