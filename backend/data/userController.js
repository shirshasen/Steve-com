import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const signupUser = async ({
  firstName,
  lastName,
  email,
  mobile,
  password,
}) => {
  const existingUser = await User.findOne({
    email: email.toLowerCase().trim(),
  });
  if (existingUser) {
    throw new Error("Email is already registered. Please login instead.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.toLowerCase().trim(),
    mobile: mobile,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();
  if (!savedUser) {
    throw new Error("Signup failed. Please try again.");
  }

  const { password: _, ...userData } = savedUser.toObject();
  return userData;
};

export const loginUser = async ({ userName, password }) => {
  const user = await User.findOne({
    $or: [
      { email: userName.toLowerCase().trim() },
      { mobile: userName.trim() },
    ],
  });

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  const { password: _, ...userData } = user.toObject();
  return userData;
};
