import Users from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!user || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are Required to Register User",
      });
    }

    const existingEmail = await Users.findOne({ email });

    if (existingEmail) {
      return res.json({
        success: false,
        message: "Email already Existtt",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      const message = `
         Welcome to Bazaar ${name}!💖 Thank You for registering with us. We are excited to have you a part of our community.
         To complete your registration please Enter Your OTP.
         Your OTP for BAZAAR id ${otp} `;

      await sendEmail(
        email,
        "Welcome To Bazaar - Your OTP for Registraion",
        message,
      );

      res.status(201).json({
        success: true,
        message: "User Registerd Successfully",
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id),
        },
      });
    }else{
      res.status(500).json({
      success: false,
      message: "Error While creating user",
    });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in Register controller",
    });
  }
};




export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
       return res.status(401).json({ message: 'Both email and password are required' });
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




export const logout = async (req, res) => {
  res.json({
    status: true,
    message: "Logout Controller",
  });
};




const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};