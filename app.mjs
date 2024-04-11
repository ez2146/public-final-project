import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

import bodyParser from 'body-parser'; 
import { User } from './db.mjs'; 

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.DSN);

app.get('/', (req, res) => {
  res.render('form'); // Render the form.ejs file
});

app.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const user = new User({ name, email, message });
    await user.save(); // Save the user to the database
    res.send('Thank you for your message!'); // Send a thank you response
  } catch (error) {
    res.status(500).send('Error saving message');
  }
});


app.listen(process.env.PORT || 3000);
