import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../Models/user.js';

export const login = async (req, res) => {
  const { email,username, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(400).json({ message: "Email doesn't match" });

      const alrexistingUser = await User.findOne({ username });
    if (!alrexistingUser) return res.status(400).json({ message: "Username doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
