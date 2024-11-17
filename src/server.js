import express from 'express';
import nameRoute from './routes/nameRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/v1', nameRoute);

const PORT =5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
