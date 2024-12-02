import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  googleId?: string;
  date: Date;
  role: string,
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
    googleId: { type: String },
    role: { type: String },
    date: { type: Date, default: Date.now }
  }
);

UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next(); 

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const Users: Model<IUser> = mongoose.model<IUser>('Users', UserSchema);

export default Users;
