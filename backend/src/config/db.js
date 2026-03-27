import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connected as ", conn.connection.host);
    console.log("MongoDB connected ", conn.connection.name);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectdb;
