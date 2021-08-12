import express, {Application, Request, Response, NextFunction} from 'express';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';
//import handlebars from 'express-handlebars';
import { env } from 'process';
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';

const app:Application = express();

app.set('x-powered-by', false);

//app.engine('hbs', handlebars({
    //layoutsDir: 'views/templates/', 
    // defaultLayout: 'main', 
    //extname: 'hbs'
//}))
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

////////////////////////////////////
/// Static files & Logs
let HTMLPath = '';
if(process.env.MODE == 'PRO') {
    HTMLPath = path.join(__dirname, 'views','emailtemp.hbs');
    app.use(express.static(path.join(__dirname, 'public')))

    const accessLogStream = fs.createWriteStream(
      path.join(__dirname, 'accessLog'),
      { flags: 'a' }
    );
    app.use(morgan('combined', { stream: accessLogStream }))
}
else if(process.env.MODE == 'DEV') {
    HTMLPath = path.join(__dirname, '..','views', 'emailtemp.hbs');
    app.use(express.static(path.join(__dirname, '..', 'public')))
    app.use(morgan('dev'));
}



// Compile template
let template = handlebars.compile(fs.readFileSync(HTMLPath, 'utf8'));

////////////////////////////////////
/// Routes
app.get('/', (req:Request, res:Response, next: NextFunction) => {
    res.send('index.html');
})

app.get('/mailme', (req:Request, res:Response, next: NextFunction) => {
    res.render('src/emailtemp',
        {
            name:'shoalin',
            email: 'sweet@gmail.com',
            subject: 'Crazy Love',
            message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium tempora fugiat debitis dolorum ab corporis adipisci, modi sed veniam.',
            baseurl: process.env.BASE_URL,
            layout:false
        }
    );
})

app.post('/mailme', (req:Request, res:Response, next: NextFunction) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "mail.acentiaenergy.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.USEREMAIL, // generated ethereal user
            pass: process.env.PASS, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let messageInfo = {
        from: '"Support Contact" <adrian@acentiaenergy.com>', // sender address
        to: "adrian@acentiaenergy.com", // list of receivers
        subject: "Support Contact Request", // Subject line
        text: "Hello world?", // plain text body
        html: template(
            {
                name: name,
                email: email,
                subject: subject,
                message: message,
                baseurl: process.env.BASE_URL
            }
        )
    };

    transporter.sendMail(messageInfo, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        res.send('message sent');
    })
})

app.use((req:Request, res:Response, next: NextFunction) => {
    res.status(404).send('<h1>Oops!! Resource not found</h1>')
})

app.use((error:Error, req:Request, res:Response, next: NextFunction) => {
    res.status(500).send('<h1>Server Error: We working on it</h1>')
})

export default app;