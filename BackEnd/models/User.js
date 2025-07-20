import mongoose from "mongoose";
import Favorite from "./favorites.js";

const UserSchema = mongoose.Schema({
    username: {
       type: String,
       require: true,
       unique: true
    }, 
    favorites:[mongoose.Schema.Types.ObjectId]// tell what type of data to expect of the property data.

//    Password:{
//         type: String,
//         require: true
//     },

});

//const Vegetable = mongoose.model('Veggie', VeggieSchema)
export default mongoose.model('User', UserSchema);


// export default mongoose.model('Subject3');/ old code from Jade