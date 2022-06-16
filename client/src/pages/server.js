const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", router);
app.listen(process.env.PORT, () => console.log("Server Running"));

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
    to: process.env.CMADDY,
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
