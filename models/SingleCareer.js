import mongoose from "mongoose";

const SCareerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  CareerLink: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SingleCareer", SCareerSchema);
