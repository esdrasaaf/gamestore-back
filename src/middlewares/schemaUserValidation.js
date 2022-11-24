import joi from 'joi';

export const userSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().required().min(3),
    password:joi.string().required().min(3),
    passwordConfirmation:joi.string().required().min(3),
   type:joi.string().required().valid("admin","user"),
});

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