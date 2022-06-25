const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
app.listen(port, () => {
  console.log(`Run in ${port}`);
});
app.use(expressLayouts);

const kontak = [
  { id: 123, nama: "Dede", email: "email@gmail.com", hp: "0899776655" },
  { id: 1243, nama: "Dede", email: "email@gmail.com", hp: "0899776655" },
  { id: 12435, nama: "Dede", email: "email@gmail.com", hp: "0899776655" },
];
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const data = {
    layout: "layouts/main-layouts",
    Judul: "Home",
    title: "Welcome",
  };
  res.render("index", data);
});

app.get("/kontak", (req, res) => {
  const data = {
    layout: "layouts/main-layouts",
    Judul: "Daftar kontak",
    title: "Halaman kontak",
    kontak: kontak,
  };
  res.render("kontak", data);
});
app.get("/about", (req, res) => {
  const data = {
    layout: "layouts/main-layouts",
    Judul: "Daftar kontak",
    title: "Halaman kontak",
  };
  res.render("about", data);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Page Not Found");
});
