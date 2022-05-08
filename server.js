import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bootcamps from './routes/bootcamps.js';

dotenv.config({ path: '.env' });

const PORT = process.env.PORT || 5000;
const app = express();

if(process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, console.log(`Server is running on port ${ PORT }...`));