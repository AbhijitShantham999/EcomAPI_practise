import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protectedRoute = function (req, res, next) {
  //Check if Token Exists
  if (req.cookies.token === "") {
    return res
      .status(401)
      .json({ message: "Please Login, It is a Protected Route" });
  }
  // Token Exists and Verify Token
  try {
    const cookieData = jwt.verify(
      req.cookies.token,
      process.env.JWT_SECRET_KEY
    );
    req.user = cookieData;
    next();
  } catch (error) {
    console.log("Token Invalid  or Expired");
    return res.status(401).json({ message: "Token Invalid  or Expired" });
  }
};

export const adminProtectedRoute = async function (req, res, next) {
  try {
    const cookieData = jwt.verify(
      req.cookies.token,
      process.env.JWT_SECRET_KEY
    );
    console.log(cookieData);
    res.user = cookieData;
    if (cookieData.isAdmin === "admin") {
      console.log("Admin Accessed");
      next();
    } else {
      return res.status(401).json({ message: "Not Authorised" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error while admin protected route middleware" });
  }
};
