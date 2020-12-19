import express, {Application, Request, Response, NextFunction} from 'express';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';

const app:Application = express();

app.set('x-powered-by', false);

app.use(express.json());

////////////////////////////////////
/// Static files & Logs
if(process.env.MODE == 'PRO') {
    app.use(express.static(path.join(__dirname, 'public')))

    const accessLogStream = fs.createWriteStream(
      path.join(__dirname, 'accessLog'),
      { flags: 'a' }
    );
    app.use(morgan('combined', { stream: accessLogStream }))
}
else if(process.env.MODE == 'DEV') {
    app.use(express.static(path.join(__dirname, '..', 'public')))
    app.use(morgan('dev'));
}

////////////////////////////////////
/// Routes
app.use((req:Request, res:Response, next: NextFunction) => {
    res.status(404).send('<h1>Oops!! Resource not found</h1>')
})

app.use((error:Error, req:Request, res:Response, next: NextFunction) => {
    res.status(500).send('<h1>Server Error: We working on it</h1>')
})

export default app;