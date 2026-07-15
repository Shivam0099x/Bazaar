import express from "express";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Db connected Successfullyy ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting to db ${error}`)
    process.exit(1)
  }
};
