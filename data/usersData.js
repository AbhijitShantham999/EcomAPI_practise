[
  {
    _id: ObjectId("661a1d55f1a2b3c4d5e6f701"),
    name: "Alice Johnson",
    email: "alice@example.com",
    username: "alice123",
    password: "$2a$10$hashedPassword123", // (Use bcrypt in production)
    cartItems: [
      {
        product: ObjectId("661a1d55f1a2b3c4d5e6f711"),
        quantity: 1,
      },
    ],
    role: "customer",
    createdAt: "2024-04-12T10:00:00Z",
    updatedAt: "2024-04-12T10:00:00Z",
  },
  {
    _id: ObjectId("661a1d55f1a2b3c4d5e6f702"),
    name: "Bob Smith",
    email: "bob@example.com",
    username: "bobadmin",
    password: "$2a$10$hashedAdminPassword456",
    cartItems: [],
    role: "admin",
    createdAt: "2024-04-12T10:00:00Z",
    updatedAt: "2024-04-12T10:00:00Z",
  },
];
