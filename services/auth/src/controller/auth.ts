// import {Request,Response} from "express"
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../middlewares/asyncHandler.js";

export const loginUser = asyncHandler(async (req, res) => {
  // data is comming from frontend
  const { email, name, picture } = req.body;
  console.log(email,name,picture)
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
        id: user._id,
        email: user.email,
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
