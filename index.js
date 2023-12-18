import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "your-secret-key", resave: true, saveUninitialized: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { array: req.session.arr1 || [] });
});

app.get("/home", (req, res) => {
  res.render("index.ejs", { array: req.session.arr1 || [] });
});

app.get("/work", (req, res) => {
  res.render("indexW.ejs", { array: req.session.arr2 || [] });
});

app.post("/submit", (req, res) => {
  req.session.arr1 = req.session.arr1 || [];
  req.session.arr1.push(req.body.name);
  res.render("index.ejs", { array: req.session.arr1 });
  console.log(req.session.arr1);
});

app.post("/submitWork", (req, res) => {
  req.session.arr2 = req.session.arr2 || [];
  req.session.arr2.push(req.body.name);
  res.render("indexW.ejs", { array: req.session.arr2 });
  console.log(req.session.arr2);
});

app.listen(port, () => {
  console.log(`Server currently listening to port ${port}.`);
});


