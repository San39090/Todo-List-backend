function error(err,req,res,next){
    console.log(err.stack);
    
    if(req.headerSent){
        return next(err);
    }

    if(err.name === 'ValidationError'){
        return res.status(400).json({message:err.message});
    }
    if(err.name==='CastError'){
        return res.status(400).json({message:"Invalid ID format"});
    }

    res.status(500).json({message:"Internal Server Error"});
}

module.exports = error;