"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const morgan_1 = __importDefault(require("morgan"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const app = express_1.default();
app.set('x-powered-by', false);
//app.engine('hbs', handlebars({
//layoutsDir: 'views/templates/', 
// defaultLayout: 'main', 
//extname: 'hbs'
//}))
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
////////////////////////////////////
/// Static files & Logs
let HTMLPath = '';
if (process.env.MODE == 'PRO') {
    HTMLPath = path_1.default.join(__dirname, 'views', 'emailtemp.hbs');
    app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'accessLog'), { flags: 'a' });
    app.use(morgan_1.default('combined', { stream: accessLogStream }));
}
else if (process.env.MODE == 'DEV') {
    HTMLPath = path_1.default.join(__dirname, '..', 'views', 'emailtemp.hbs');
    app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
    app.use(morgan_1.default('dev'));
}
// Compile template
let template = handlebars_1.default.compile(fs_1.default.readFileSync(HTMLPath, 'utf8'));
////////////////////////////////////
/// Routes
app.get('/', (req, res, next) => {
    res.send('index.html');
});
app.get('/mailme', (req, res, next) => {
    res.render('src/emailtemp', {
        name: 'shoalin',
        email: 'sweet@gmail.com',
        subject: 'Crazy Love',
        message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium tempora fugiat debitis dolorum ab corporis adipisci, modi sed veniam.',
        baseurl: process.env.BASE_URL,
        layout: false
    });
});
app.post('/mailme', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer_1.default.createTransport({
        host: "mail.acentiaenergy.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USEREMAIL,
            pass: process.env.PASS,
        },
    });
    // send mail with defined transport object
    let messageInfo = {
        from: '"Support Contact" <support@acentiaenergy.com>',
        to: "support@acentiaenergy.com",
        subject: "Support Contact Request",
        text: "Hello world?",
        html: template({
            name: name,
            email: email,
            subject: subject,
            message: message,
            baseurl: process.env.BASE_URL
        })
    };
    transporter.sendMail(messageInfo, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.send('message sent');
    });
});
app.use((req, res, next) => {
    res.status(404).send('<h1>Oops!! Resource not found</h1>');
});
app.use((error, req, res, next) => {
    res.status(500).send('<h1>Server Error: We working on it</h1>');
});
exports.default = app;
