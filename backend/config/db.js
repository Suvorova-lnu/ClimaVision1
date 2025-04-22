const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Підключено до MongoDB");
  } catch (err) {
    console.error("Помилка підключення:", err);
    process.exit(1);
  }
};
module.exports = connectDB;