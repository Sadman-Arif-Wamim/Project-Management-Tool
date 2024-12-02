import { Request, Response } from 'express';
import Users from '../models/userModel'; 


export const getUser= async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId } = req.params; 
    const user = await Users.findOne({ userId: userId });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    return res.status(200).json({ user });

  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
};


export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId } = req.params; 
    const updateData = req.body; 

    const user = await Users.findOneAndUpdate(
        { userId: userId },  
        { $set: updateData },  
        { new: true }         
      );

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    return res.status(200).json({ msg: 'User updated successfully'});

  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
};


export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId } = req.params;
    const user = await Users.findOneAndDelete({ userId: userId });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    return res.status(200).json({ msg: 'User deleted successfully' });

  } catch (error) {
    return res.status(500).json({ msg: 'Server error' });
  }
};
