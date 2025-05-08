import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 1 },
});

const orderSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    orderStatus: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
    },
    payment_id: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"] },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
