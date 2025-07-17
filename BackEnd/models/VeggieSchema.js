import mongoose from "mongoose";

const VeggieSchema = mongoose.Schema({
   
    common_name: {
       type: String,
       require: true
    }, 
    description:{
        type: String,
        require: true
    },
    sunlight:{
        type: String,
        require: true
    },
    watering:{
        type: String,
        days: 2
    },
    image_url: {
        type: String,
    }

});

//const Vegetable = mongoose.model('Veggie', VeggieSchema)
module.exports= mongoose.model('veggie', VeggieSchema);
