import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://archanme1:archanme1@cluster0.gc1zwgs.mongodb.net/lambton?retryWrites=true&w=majority"
    );
    console.log("database connected");
  } catch (error) {
    console.log("connect failed database");
  }
};

export default connect;
