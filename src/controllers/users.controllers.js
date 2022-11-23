import { usersCollection } from "../database/db";
import bcrypt from 'bcrypt';
import { func } from "joi";


export async function postSignUp(req, res) {

    const { name, email, password, passwordConfirmation } = req.body;

    if (password !== passwordConfirmation) {
        return res.status(409).send("As senhas não são iguais!!!");
    }

    const passwordHash = bcrypt.hashSync(password, 10);


    try {
        const userExist = await usersCollection.findOne({ email });
        if (userExist) {
            return res.status(409).send("Email já cadastrado!!!");
        }


        await usersCollection.insertOne({
            name,
            email,
            password: passwordHash,
        });
        res.status(201).send("Cadastro feito com sucesso!!!")

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

