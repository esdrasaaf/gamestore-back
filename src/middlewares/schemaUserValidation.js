import userSchema from "../models/userSchema.model.js";

export function schemaUserValidation(req,res,next){
    const {name, email, password,passwordConfirmation,type} = req.body;

    const user ={
        name,
        email,
        password,
        passwordConfirmation,
        type:!type?"user":type,
    }

    const { error } = userSchema.validate(user,{abortEarly:false});

    if (error){
        const errors = error.details.map((detail)=> detail.message);
        return res.status(422).send(errors);
    }
        
    next();
}