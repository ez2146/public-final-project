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


app.get('/', async (req, res) => {
  //const users = await User.find(); 
  res.render('form');
});




app.post('/sendemail', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const user = new User({ name, email, message });
    await user.save(); // Save the user to the database
    res.send('Thank you for your message!'); // Send a thank you response

  } catch (error) {
    res.status(500).send('ERROR');
  }
});

app.get('/emails', async (req, res) => {
  const users = await User.find(); 
  res.send(JSON.stringify(users));
});




app.listen(process.env.PORT ?? 3000);

/*
RESEARCH PROGRESS:

Topics - React and Material UI 

What I've learned about React & Material UI:
React revolves around using "components" which can be easily manipulated and stacked,
Instead of rendering .hbs files, I wil be rendering React comoponents.  
React components resemble functions.
Material UI can only be used in React 

Next Steps:
Refactor my directory:
1) Change app.mjs to server.js 
2) Change my views folder to a component folder
3) Create a "contactForm.js"
4)Learn more about JSX & Material UI
*/

