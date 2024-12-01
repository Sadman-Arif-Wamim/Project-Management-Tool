import { Request, Response } from 'express'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../models/userModel';

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  
  try {
    const user = await Users.findOne({ username }).select('+password');
    
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { id: user.id, username: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
};

export const register = async (req: Request, res: Response): Promise<Response> => {
  const { username, email, password } = req.body;

  try {
    let user = await Users.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new Users({ username, email, password });

    await user.save();

    return res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error);
    return res.status(500).send('Server Error');
  }
};
