import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("database connected.");
  } catch (error) {
    console.log("connect failed database");
  }
};

export default connect;
