import mongoose from "mongoose";

//what is needed as in layout for user to save their favorites
const favoriteSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  plantId: Number,
  common_name: String,
  image_url: String
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
export default Favorite;


