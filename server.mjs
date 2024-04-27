import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import bodyParser from 'body-parser';
import { connectDB, User, Song } from './db.mjs';
import generatePassword from 'generate-password';

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


app.post('/generatePassword', (req, res) => {
  try {
    let password = generatePassword.generate({
      length: 12,
      numbers: true,
      symbols: false,
      uppercase: true,
      lowercase: true,
      strict: true
    });

    //use map to shuffle the characters in password
    password = password.split('').map((_, i, arr) => arr[Math.floor(Math.random() * arr.length)]).join('');

    // Filter remove all vowels
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    password = password.split('').filter(char => !vowels.includes(char)).join('');

    res.status(200).json({ password });
  } catch (error) {
    res.status(500).json({ error: 'Error generating password' });
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
