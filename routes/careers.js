import express from "express";
import careers from "../models/SingleCareer.js";
const router = express.Router();
import env from "dotenv";
env.config();

router.get("/henlo", async (req, res) => {
  try {
    const careerData = await careers.find({});
    res.status(200).json({ careerData });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
router.post("/henlo", async (req, res) => {
  try {
    if (process.env.PASSCODE_AUTH === req.body.passcode) {
      const careerData = await careers.create(req.body);
      res.status(201).json({ careerData });
    } else {
      console.log("invalid access code");
      res.status(500).json({ msg: "Invalid Access code" });
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});
router.delete("/henlo/deleteAll", async (req, res) => {
  try {
    const deletedTodo = await careers.deleteMany({});
    res.json({ message: "Todo deleted successfully", deletedTodo });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
