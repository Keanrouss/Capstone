import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
   
    Username: {
       type: String,
       require: true
    }, 
   Password:{
        type: String,
        require: true
    },

});

//const Vegetable = mongoose.model('Veggie', VeggieSchema)
module.exports= mongoose.model('User', UserSchema);


export default mongoose.model('Subject3');