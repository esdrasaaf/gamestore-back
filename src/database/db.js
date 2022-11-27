import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

// Connecting to MongoDB
const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()
    console.log("MongoDB is connected")
} catch (error) {
    console.log(error)
}

const db = mongoClient.db("gameStore")

// Export Collections
export const usersCollection = db.collection("users")
export const sessionsCollection = db.collection("sessions")
export const gamesCollection = db.collection("games")
export const cartsCollection = db.collection("carts")
export const historicsCollection = db.collection("historics")
export const favoritesCollection = db.collection("favorites")