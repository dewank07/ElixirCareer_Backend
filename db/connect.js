import moongoose from "mongoose";
const connectDB = (url) => {
  return moongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
