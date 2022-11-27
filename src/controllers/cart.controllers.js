import { cartsCollection, sessionsCollection } from "../database/db.js"
import { ObjectId } from "mongodb"

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

export async function deleteCart (req, res) {
    const { id, token } = req.headers
    const tokenReplaced = token.replace("Bearer ", "")

    try {
        const userExist = await sessionsCollection.findOne({token: tokenReplaced})
        if (!userExist) { return res.status(401).send("Sua sessão expirou!") }

        await cartsCollection.deleteOne({_id: ObjectId(id)})
        res.status(200).send("Produto retirado com sucesso!")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    console.log(id, token)
}