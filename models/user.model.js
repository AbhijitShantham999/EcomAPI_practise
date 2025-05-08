import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const cartItemSchema = mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    cartItems: [cartItemSchema],
    role: { type: String, enum: ["customer", "admin"] },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    console.log("Password encryption Error");
  }
});

export const User = mongoose.model("User", userSchema);
