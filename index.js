import express from "express";
import bodyParser from "body-parser";
import careerRouter from "./routes/careers.js";
import env from "dotenv";
import connectDB from "./db/connect.js";
import cors from "cors";
env.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", careerRouter);

app.get("/", (req, res) => {
  res.send("This is Main route kindly go to /api/v1");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
