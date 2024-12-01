import mongoose from 'mongoose';

interface ErrorWithMessage extends Error {
  message: string;
}

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {}); 
        console.log('MongoDB Connected!');
    } catch (error) {
        const err = error as ErrorWithMessage; 
        console.error(`Error: ${err.message}`);
        process.exit(1); 
    }
};

export default connectDB;
