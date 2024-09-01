import mongoose from "mongoose";

const userStakeSchema = new mongoose.Schema({
  amount: Number,
  rate: Number,
  duration: Number,
  direction: {
    type: String,
    enum: ["out", "in"],
  },

  confirmed: {
    type: String,
    enum: ["pending", "cancled", "confirmed"],
    default: "pending",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.UserStake ||
  mongoose.model("UserStake", userStakeSchema);
