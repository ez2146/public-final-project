import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { engine } from 'express-handlebars';

import bodyParser from 'body-parser'; 
import { connectDB, User } from './db.mjs'; 

const app = express();



connectDB();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs', engine({
  extname: '.hbs', 
  defaultLayout: false
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); 




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
    res.status(500).send('ERROR');
  }
});


app.listen(process.env.PORT ?? 3000);
