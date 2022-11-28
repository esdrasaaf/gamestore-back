import joi from 'joi';

const userSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().required().min(3),
    password:joi.string().required().min(3),
    passwordConfirmation:joi.string().required().min(3),
   type:joi.string().required().valid("admin","user"),
});

export default userSchema