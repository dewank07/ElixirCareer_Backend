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

export default router;
