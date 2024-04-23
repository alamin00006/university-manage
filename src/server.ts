import app from "./app";

import mongoose from "mongoose";
const port: Number = 5000;

// Database Connection

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practicse-mongoose");
    console.log("Database Connection Succefull");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

dbConnect();
