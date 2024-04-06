import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { createToken } from "../utils/createToken.js";

export const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new Error("please fill all the fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) res.status(400).send("User already exists");

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const updateUser = new User({ username, email, password: hashedPassword });

  //craete new user
  try {
    await updateUser.save();
    createToken(res, updateUser._id);

    res.status(201).json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const updateUser = await User.findOne({ email });
  if (updateUser) {
    const isPasswordValid = await bcrypt.compare(password, updateUser.password);

    if (isPasswordValid) {
      createToken(res, updateUser._id);

      res.status(201).json({
        _id: updateUser._id,
        username: updateUser.username,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
      });
    } else {
      res.status(401).json({
        message: "Invalid Password",
      });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
});

export const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    req.status(404);
    throw new Error("User not Found.");
  }
});

export const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }
    const updateUser = await user.save();
    res.status(201).json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    req.status(404);
    throw new Error("User not found.");
  }
});
