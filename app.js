const express = require('express');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

// connect th db here

app.set("view engine","ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.listen(3001);

app.get("/",(req,res) => {
    res.render("index");
});
app.get("/about",(req,res) => {
    res.render("about");
});
app.get("/contact-us",(req,res) => {
    res.render("contact");
});
app.get("/people",(req,res) => {
    res.render("people");
});
app.get("/profile",(req,res) => {
    res.render("profile");
});
app.get("/background",(req,res) => {
    res.render("background");
});
//middleware
app.use((req, res) => {
    res.render("error");
});


