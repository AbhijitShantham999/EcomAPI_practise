import { User } from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, username, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const user = await User.create({ name, username, email, password, role });
      console.log("User created:", user);
      res.status(201).json(user); // Send created user back
    } else {
      console.log("User Registered, Please Login");
      res.status(500).json({ message: "User Registered, Please Login" });
    }
  } catch (error) {
    console.log(`Error while register: ${error}`);
    res.status(500).json({ error: "Registration failed" });
  }
};

export const allusers = async (req, res) => {
  try {
    const all_users = await User.find();
    console.log("All users retrieved");
    res.status(200).json(all_users); // Send users back
  } catch (error) {
    console.log("Cannot Retrieve Users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
