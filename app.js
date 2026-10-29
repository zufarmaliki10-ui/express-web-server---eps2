const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// Gunakan ejs
app.set("view engine", "ejs");

// third-party middleware
app.use(expressLayouts);

// built-in middleware
app.use(express.static("public"));


app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "Budi Gunawan",
      email: "budi@gmail.com",
    },
    {
      nama: "Erik",
      email: "erik@gmail.com",
    },
    {
      nama: "Doddy Ferdiansyah",
      email: "doddy@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Budi Gunawan",
    title: "Halaman Home",
    mahasiswa,
    layout: "partials/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "partials/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "partials/main-layout",
  });
});

// Dijalankan untuk request apapun yang tidak ada route nya
// Jangan simpan ini dipaling atas
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 Page not Found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
