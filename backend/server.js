import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import memberRoutes from "./routes/members.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(
  "mongodb+srv://divyanshugupta585:52ufPViGbewidqeQ@cluster0.xk4sk.mongodb.net/student-details"
);

app.use("/api/members", memberRoutes);

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
