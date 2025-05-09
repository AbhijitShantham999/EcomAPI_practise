import jwt from "jsonwebtoken";

import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, username, password, role } = req.body;

    // Check if User Exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      //User already exists
      return res
        .status(500)
        .json({ message: "User Already Registered, Please Login" });
    }
    // If user doesn't exist, create a new one
    const user = await User.create({ name, username, email, password, role });
    // create a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY
    );
    // Set the token in a cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevents client-side JS access
      secure: true, // Only sent over HTTPS
    });
    return res
      .status(201)
      .json({ message: "User Registered Successfully" }, user);
  } catch (error) {
    console.log("Error while Registering User", error);
    return res.status(500).json({ error: "Registration failed" });
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate Existing User
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      console.log("Something Went Wrong");
      return res.status(404).json({ message: "something went wrong" });
    }

    // Validate Password
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      console.log("Invalid Email or Password");
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    //login success
    else {
      // create a JWT token
      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        process.env.JWT_SECRET_KEY
      );
      // Set the token in a cookie
      res.cookie("token", token, {
        httpOnly: true, // Prevents client-side JS access
        secure: true, // Only sent over HTTPS
      });
      console.log("Logged in successfully");
      return res.status(200).json({ message: "Logged in Successfully" });
    }
  } catch (error) {
    console.log("Error while LOGIN", error);
    res.status(500).json({ error: "Something Went wrong while Login" });
  }
};

export const logout = async (req, res) => {
  try {
    // res.cookie("token", "");
    res.clearCookie("token", {
      httpOnly: true, // Prevents client-side JS access
      secure: true, // Only sent over HTTPS
    });
    return res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log("Error while LOGOUT", error);
    return res.status(500).json({ error: "Something Went wrong while Logout" });
  }
};
