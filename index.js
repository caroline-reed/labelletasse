const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const caferoutes = require('./routes/cafeorderapi');
const eventroutes = require('./routes/eventorderapi');
const port = process.env.PORT || 5000;
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require('dotenv').config();
console.log(process.env);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", router);

router.use(express.urlencoded({ extended: true }));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CMADDY,
    pass: process.env.CMPASS,
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", async (req, res) => {
  const body = req.body;
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(body);
  console.log(name, email, message);

  const mail = {
    from: email,
    to: "reedce9@gmail.com",
    subject: "Customer Query",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, async (error) => {
    if(error) {
      res.json({ status: "Error" });
    } else {
      res.json({ status: "Thank you!" });
    }
  });
});



mongoose
  const client = new MongoClient(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  });
  mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
