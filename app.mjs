import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
import mongoose from 'mongoose'
//mongoose.connect(process.env.DSN ?? 'mongodb://localhost/class13')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // don't store password in plain text
  posts: [{type: mongoose.Types.ObjectId, ref: 'Post'}]
})
*/


app.listen(process.env.PORT || 3000);
