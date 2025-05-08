[
  {
    _id: ObjectId("661a1d55f1a2b3c4d5e6f721"),
    user_id: ObjectId("661a1d55f1a2b3c4d5e6f701"), // Alice
    orderItems: [
      {
        product: ObjectId("661a1d55f1a2b3c4d5e6f711"), // Wireless Earbuds
        price: 79.99,
        quantity: 1,
      },
      {
        product: ObjectId("661a1d55f1a2b3c4d5e6f713"), // Running Shoes
        price: 59.99,
        quantity: 1,
      },
    ],
    totalAmount: 139.98,
    orderStatus: "Delivered",
    payment_id: "pay_661a1d55f1a2b3c4d5e6f731",
    createdAt: "2024-04-15T11:30:00Z",
    updatedAt: "2024-04-15T11:30:00Z",
  },
  {
    _id: ObjectId("661a1d55f1a2b3c4d5e6f722"),
    user_id: ObjectId("661a1d55f1a2b3c4d5e6f702"), // Bob
    orderItems: [
      {
        product: ObjectId("661a1d55f1a2b3c4d5e6f712"), // Smart Watch
        price: 129.99,
        quantity: 1,
      },
    ],
    totalAmount: 129.99,
    orderStatus: "Shipped",
    payment_id: "pay_661a1d55f1a2b3c4d5e6f732",
    createdAt: "2024-04-16T09:15:00Z",
    updatedAt: "2024-04-16T09:15:00Z",
  },
];
