const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

app.set("view engine", "ejs");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// your code goes here

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

//the overflow , underflow and error condition

const Overflow = {
  status: "Failure",
  message: "Overflow",
};
const Underflow = {
  status: "Failure",
  message: "Underflow",
};
const Input = {
  status: "Error",
  message: "Must input both numbers",
};
const InputType = {
  status: "Error",
  message: "Invalid data types",
};

//add condition

app.post("/add", (req, res) => {
  if (!req.body.num1 || !req.body.num2) res.json(Input);
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) res.json(InputType);
  let sum = parseFloat(req.body.num1) + parseFloat(req.body.num2);
  if (sum > 1000000) res.json(Overflow);
  else if (sum < -1000000) res.json(Underflow);
  else {
    res.json({
      status: "success",
      message: "The sum of given two numbers",
      sum: sum,
    });
  }
});
app.get("/add", (req, res) => {
  res.sendFile(__dirname + "/add.html");
});

//substraction condition

app.post("/sub", (req, res) => {
  if (!req.body.num1 || !req.body.num2) res.json(Input);
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) res.json(InputType);
  let difference = parseFloat(req.body.num1) - parseFloat(req.body.num2);
  if (difference > 1000000) res.json(Overflow);
  else if (difference < -1000000) res.json(Underflow);
  else {
    res.json({
      status: "success",
      message: "The difference of given two numbers",
      difference: difference,
    });
  }
});
app.get("/sub", (req, res) => {
  res.sendFile(__dirname + "/diff.html");
});

//multiplication condition

app.post("/multiply", (req, res) => {
  if (!req.body.num1 || !req.body.num2) res.json(Input);
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) res.json(InputType);
  let multi = parseFloat(req.body.num1) * parseFloat(req.body.num2);
  if (multi > 1000000) res.json(Overflow);
  else if (multi < -1000000) res.json(Underflow);
  else {
    res.json({
      status: "success",
      message: "The product of given two numbers",
      result: multi,
    });
  }
});
app.get("/multiply", (req, res) => {
  res.sendFile(__dirname + "/mult.html");
});

//division condition

app.post("/div", (req, res) => {
  if (!req.body.num1 || !req.body.num2) res.json(Input);
  if (isNaN(req.body.num1) || isNaN(req.body.num2)) res.json(InputType);
  if (parseInt(req.body.num2) == 0)
    res.json({
      status: "Error",
      message: "Cannot divide by zero",
    });
  let div = parseFloat(req.body.num1) / parseFloat(req.body.num2);
  if (div > 1000000) res.json(Overflow);
  else if (div < -1000000) res.json(Underflow);
  else {
    res.json({
      status: "success",
      message: "The division of given two numbers",
      result: div,
    });
  }
});
app.get("/div", (req, res) => {
  res.sendFile(__dirname + "/div.html");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
