import bcrypt from 'bcrypt';
import User from '../../Models/user.js';

export const signup = async (req, res) => {
  const { name,username, email, password,role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name,username, email, password: hashedPassword, role });
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
