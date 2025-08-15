const { body, validationResult } = require("express-validator")

const validate = [
    body('title').notEmpty().withMessage("Title is Empty"),
    body('description').notEmpty().withMessage("Description is Empty"),
    body('completed').optional().isBoolean().withMessage("Completed must be a boolean"),


    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty){
            return res.status(200).json({errors:errors.array()});
        }
        next();
    },
]

module.exports = validate;