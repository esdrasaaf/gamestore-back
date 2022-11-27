import { cartsCollection } from "../database/db.js"

export async function postCart(req, res) {
    const game = req.body
    const userId = req.user.userID
    
    const mountedObj = {
        game,
        userId
    }

    try {
        await cartsCollection.insertOne(mountedObj)
        res.status(201).send("Jogo adicionado com sucesso!")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getCart (req, res) {
    const userId = req.user.userID

    try {
        const purchases = await cartsCollection.find({userId}).toArray()
        res.status(200).send(purchases)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}