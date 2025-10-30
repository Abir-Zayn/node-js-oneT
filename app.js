import express from 'express';
const app = express();

import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import './config/mongoose-connection.js';
import usersRouter from './routes/usersRouters.js';
import ownersRouter from './routes/ownersRouter.js';
import productsRouter from './routes/productsRouter.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/users', usersRouter);
app.use('/owners', ownersRouter);
app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.send('index', { title: 'Home' });
});

app.listen(3000);