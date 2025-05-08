import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Successfull", "Cancelled"],
    },
    paymentMode: {
      type: String,
      enum: ["UPI", "Credit", "Debit", "COD"],
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
