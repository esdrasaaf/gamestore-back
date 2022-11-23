import joi from 'joi';

export const userSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().required().min(3),
    password:joi.number().required().min(3),
    passwordConfirmation:joi.number().required().min(3),
});

export function schemaUserValidation(req,res,next){
    const {name, email, password,passwordConfirmation} = req.body;

    const { error } = userSchema.validate({name, email, password,passwordConfirmation},{abortEarly:false});

    if (error){
        const errors = error.details.map((detail)=> detail.message);
        return res.status(422).send(errors);
    }
        
    next();
}