const mealkitModel = require("../models/mealkitList.js");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("general/home", {
    mealkits: mealkitModel.getTopMeals(),
  });
});

router.get("/log-in", function (req, res) {
  res.render("general/log-in");
});

router.get("/sign-up", function (req, res) {
  res.render("general/sign-up");
});

router.get("/welcome", function (req, res) {
  res.render("general/welcome");
});

//log-in validation
router.post("/log-in", function (req, res) {
  console.log(req.body);

  const { email, password } = req.body;

  let passed = true;
  let validation = {};

  //email
  if (typeof email !== "string" || email.trim().length === 0) {
    passed = false;
    validation.email = "Please enter your email.";
  }

  // password
  if (password.trim().length === 0) {
    passed = false;
    validation.password = "Please enter your password.";
  }

  if (passed) {
    res.render("general/home", {
      values: req.body,
      validation,
    });
  } else {
    res.render("general/log-in", {
      values: req.body,
      validation,
    });
  }
});

// sign-up validation
router.post("/sign-up", function (req, res) {
  console.log(req.body);

  const { firstName, lastName, email, password } = req.body;

  let passed = true;
  let validation = {};

  // firstName
  if (typeof firstName !== "string" || firstName.trim().length === 0) {
    // First name is not a string.... or, first name is an empty string.
    passed = false;
    validation.firstName = "Please enter your first name.";
  } else if (typeof firstName !== "string" || firstName.trim().length < 2) {
    // First name is not a string.... or, first name is less than two characters.
    passed = false;
    validation.firstName = "First name should be at least 2 characters long.";
  }

  //lastName
  if (typeof lastName !== "string" || lastName.trim().length === 0) {
    passed = false;
    validation.lastName = "Please enter your last name.";
  } else if (typeof lastName !== "string" || lastName.trim().length < 2) {
    passed = false;
    validation.lastName = "Last name should be at least 2 characters long.";
  }

  //email
  let malformed = /^\w+@\w+\.\w+(\.\w+)?$/.test(email);
  if (typeof email !== "string" || email.trim().length === 0) {
    passed = false;
    validation.email = "Please enter your email.";
    // Ensure the email address is not malformed.
  } else if (!malformed) {
    passed = false;
    validation.email = "You must enter with the email form.";
  }

  // password
  let passwordFormed =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{8,20}$/.test(
      password
    );
  if (password.trim().length === 0) {
    passed = false;
    validation.password = "Please enter your password.";
    // Enforce a password that is between 6 to 12 characters
  } else if (password.trim().length <= 6 || password.trim().length >= 12) {
    passed = false;
    validation.password = "Password length must between 6 to 12 characters.";
    // contains at least one lowercase letter, uppercase letter, number and symbol
  } else if (!passwordFormed) {
    passed = false;
    validation.password =
      "Password must contains at least one lowercase letter, uppercase letter, number and symbol.";
  }

  if (passed) {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

    const msg = {
      to: email,
      from: "shvyeon@naver.com",
      subject: "Welcome!",
      html: `Hello ${firstName} ${lastName}, This is ZIPMEAL<br>
            We will do our best to provide fresh meal kits using local food. <br>
            Thank you for subscribing to us. <br>
            <i>FRESHNESS TO YOUR DOORSTEP<i><br>
            ZIPMEAL<br>
            Seonhye Hyeon`,
    };

    // Validation passed, sent out an email.
    sgMail
      .send(msg)
      .then(() => {
        res.render("general/welcome", {
          values: req.body,
          validation,
        });
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        res.render("general/sign-up", {
          values: req.body,
          validation,
        });
      });
  } else {
    res.render("general/sign-up", {
      values: req.body,
      validation,
    });
  }
});

module.exports = router;
