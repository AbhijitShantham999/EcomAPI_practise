// import mongoose from "mongoose";
// import { User } from "../models/user.model.js";
// import { Product } from "../models/product.model.js";
// import { Order } from "../models/order.model.js";
// import { Payment } from "../models/payment.model.js";

// import "./db.config.js"; // Your existing MongoDB connection file

// // Sample Data (same as provided earlier)
// const users = [
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f701"),
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     username: "alice123",
//     password: "$2a$10$hashedPassword123", // Use bcrypt in production
//     cartItems: [
//       {
//         product: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f711"),
//         quantity: 1,
//       },
//     ],
//     role: "customer",
//   },
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f702"),
//     name: "Bob Smith",
//     email: "bob@example.com",
//     username: "bobadmin",
//     password: "$2a$10$hashedAdminPassword456",
//     cartItems: [],
//     role: "admin",
//   },
// ];

// const products = [
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f711"),
//     name: "Wireless Earbuds",
//     description: "Bluetooth 5.0 with noise cancellation",
//     price: 79.99,
//     category: "Electronics",
//     image: "https://example.com/earbuds.jpg",
//   },
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f712"),
//     name: "Smart Watch",
//     description: "Fitness tracker with heart rate monitor",
//     price: 129.99,
//     category: "Electronics",
//     image: "https://example.com/smartwatch.jpg",
//   },
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f713"),
//     name: "Running Shoes",
//     description: "Lightweight and breathable",
//     price: 59.99,
//     category: "Sports",
//     image: "https://example.com/shoes.jpg",
//   },
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f714"),
//     name: "Backpack",
//     description: "Water-resistant with laptop compartment",
//     price: 39.99,
//     category: "Fashion",
//     image: "https://example.com/backpack.jpg",
//   },
// ];

// const orders = [
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f721"),
//     user_id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f701"), // Alice
//     orderItems: [
//       {
//         product: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f711"), // Earbuds
//         price: 79.99,
//         quantity: 1,
//       },
//       {
//         product: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f713"), // Shoes
//         price: 59.99,
//         quantity: 1,
//       },
//     ],
//     totalAmount: 139.98,
//     orderStatus: "Delivered",
//     payment_id: "pay_661a1d55f1a2b3c4d5e6f731",
//   },
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f722"),
//     user_id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f702"), // Bob
//     orderItems: [
//       {
//         product: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f712"), // Smart Watch
//         price: 129.99,
//         quantity: 1,
//       },
//     ],
//     totalAmount: 129.99,
//     orderStatus: "Shipped",
//     payment_id: "pay_661a1d55f1a2b3c4d5e6f732",
//   },
// ];

// const payments = [
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f731"),
//     user_id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f701"), // Alice
//     totalAmount: 139.98,
//     paymentStatus: "Successful",
//     paymentMode: "Credit",
//   },
//   {
//     _id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f732"),
//     user_id: new mongoose.Types.ObjectId("661a1d55f1a2b3c4d5e6f702"), // Bob
//     totalAmount: 129.99,
//     paymentStatus: "Pending",
//     paymentMode: "UPI",
//   },
// ];

// // Insert Data
// const insertData = async () => {
//   try {
//     // Insert new data
//     await User.insertMany(users);
//     await Product.insertMany(products);
//     await Order.insertMany(orders);
//     await Payment.insertMany(payments);

//     console.log("✅ Data inserted successfully!");
//   } catch (err) {
//     console.error("❌ Error inserting data:", err);
//   } finally {
//     mongoose.disconnect();
//   }
// };

// insertData();
