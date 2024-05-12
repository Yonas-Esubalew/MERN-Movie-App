import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://yonasbe999:mKlJA69xeDETOfC9@cluster0.r24523p.mongodb.net/moviesApp?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Successfully connected to MongoDB 👍");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
