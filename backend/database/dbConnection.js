import mongoose, { mongo } from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_BLOGGING_APP",
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(`Some Error while connecting to database: ${err}`);
    });
};
