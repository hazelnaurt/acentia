const express = require("express");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const { env } = require("process");
const nodemailer = require("nodemailer");

const home = require("./routes/home");
const about = require("./routes/about");
const clients = require("./routes/clients");
const contact = require("./routes/contact");
const policy = require("./routes/policy");
const service = require("./routes/services");
const gallery = require("./routes/gallery");
//import handlebars from "handlebars";

const app = express();

app.set("x-powered-by", false);

app.engine(
  "hbs",
  handlebars({
    layoutsDir: "views/templates/",
    defaultLayout: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

////////////////////////////////////
/// Static files & Logs
app.use(express.static(path.join(__dirname, "public")));

if (process.env.MODE == "PRO") {
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "accessLog"),
    { flags: "a" }
  );
  app.use(morgan("combined", { stream: accessLogStream }));
} else if (process.env.MODE == "DEV") {
  app.use(morgan("dev"));
}

// Compile template
//let HTMLPath = "";
//HTMLPath = path.join(__dirname, "views", "emailtemp.hbs");
//let template = handlebars.compile(fs.readFileSync(HTMLPath, "utf8"));

////////////////////////////////////
/// Routes
app.use(home);
app.use(about);
app.use(clients);
app.use(contact);
app.use("/services", service);
app.use(policy);
app.use("/events", gallery);

app.get("/about", (req, res, next) => {
  res.render("index", { title: "About Us || Acentia Energy" });
});

app.get("/mailme", (req, res, next) => {
  res.render("src/emailtemp", {
    name: "shoalin",
    email: "sweet@gmail.com",
    subject: "Crazy Love",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laudantium tempora fugiat debitis dolorum ab corporis adipisci, modi sed veniam.",
    baseurl: process.env.BASE_URL,
    layout: false,
  });
});

app.post("/mailme", (req, res, next) => {
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
    // html: template({
    //   name: name,
    //   email: email,
    //   subject: subject,
    //   message: message,
    //   baseurl: process.env.BASE_URL,
    // }),
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

    res.send("message sent");
  });
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Oops!! Resource not found</h1>");
});

app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send("<h1>Server Error: We working on it</h1>");
});

module.exports = app;
