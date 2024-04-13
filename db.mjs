import mongoose from 'mongoose';

mongoose.connect(process.env.DSN);

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
  }); 
  
  
  const User = mongoose.model('User', userSchema);


  const connectDB = async () => {
    await mongoose.connect(process.env.DSN);
  };
  
  export { connectDB, User };