// import {Request,Response} from "express"
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../middlewares/asyncHandler.js";
import { AuthenticatedRequest } from "../middlewares/isAuth.js";

export const loginUser = asyncHandler(async (req, res) => {
  // data is comming from frontend
  const { email, name, picture } = req.body;
  console.log(email, name, picture);
  //finding the user is exist or not
  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({
      name,
      email,
      image: picture,
    });
  }
  // the user will logind in 15 days after it will toke is expire

  /* counter a problem in jwt error which is playload first shoude be object some thins need to study*/
  // Generate token (for both new & existing user)
  // think like jwt token similer to uuid but not exactly same work
  const token = jwt.sign(
    {
      // id: user._id,
      // email: user.email,
      // Need the uderstant this it' not bug but need to understant 
      user
    },
    process.env.JWT_SEC as string,
    {
      expiresIn: "15d",
    },
  );
  res.status(200).json({
    message: "Logged Success",
    token,
    user,
  });
});


// Choose the Roles----------------------------------------
const allowedRole = ["customer", "rider", "seller"] as const;
type Role = (typeof allowedRole)[number];

export const addUserRole = asyncHandler(
  async (req: AuthenticatedRequest, res) => {
    if (!req.user?._id) {
      return res.status(401).json({
        messgae: "Unauthorized",
      });
    }

    const { role } = req.body as { role: Role };
    if (!allowedRole.includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { role },
      { new: true },
    );
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const token = jwt.sign(
      {
       user
      },
      process.env.JWT_SEC as string,
      {
        expiresIn: "15d",
      },
    );

    res.json({user,token})
  },
);


// time stamp 1:32 mins