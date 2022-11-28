import { cartsCollection, historicsCollection } from "../database/db.js";


export async function postHistoric (req,res){
    const gameArray = req.body
    const userId = req.user.userID
        const historicObj = {
            gameArray,
            userId
        };

        try {
            await historicsCollection.insertOne(historicObj)
            await cartsCollection.deleteMany({userId})
            res.status(201).send("Compra realizada com sucesso!!!")
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
}

export async function getHistoric (req,res){
    const userId = req.user.userID
  
    try {
        const historic = await historicsCollection.find({userId}).toArray()
        res.status(200).send(historic)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}