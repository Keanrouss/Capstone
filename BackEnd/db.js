import mongoose from "mongoose";

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected");
  } catch (error) {
    console.error("Connection Failed:", error);
  }
}

export default connection;
