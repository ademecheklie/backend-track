import express from 'express';
import nameRoute from './routes/nameRoute.js';
import dreamRoute from './routes/dreamRoute.js';
import hobbyRoute from './routes/hobbyRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {    
    res.status(200).send('use /name to get name, /dream to get dream and /hobby to get hobby');
    });

app.use('/', nameRoute);
app.use('/', dreamRoute);
app.use('/', hobbyRoute);



const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
