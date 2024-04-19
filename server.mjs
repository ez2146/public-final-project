import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { connectDB, User, Song } from './db.mjs';

const app = express();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 


app.use(express.static(path.join(__dirname, 'client/build')));


app.post('/sendemail', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const user = new User({ name, email, message });
    await user.save();
    res.status(200).send('Thank you for your message!');
  } catch (error) {
    res.status(500).send('ERROR');
  }
});


app.post('/sendSong', async (req, res) => {
  try {
    const { title, artist } = req.body;
    const favSong = new Song({ title, artist });
    await favSong.save();
    res.status(200).send('Song data received!');
  } catch (error) {
    res.status(500).send('Error submitting song data');
  }
});


app.get('/emails', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
