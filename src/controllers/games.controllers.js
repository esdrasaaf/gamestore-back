import { ObjectId } from "mongodb";
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

export async function getSelectedGame (req, res) {
    const { gameId } = req.params

    try {
        const game = await gamesCollection.findOne({_id: ObjectId(gameId)})
        res.send(game).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}