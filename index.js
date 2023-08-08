import express from "express";

const app = express();
const port = 3000;

/*STEP 2 MAKING SURE STATIC FILES ARE LINKED TO AND THE CSS SHOWS UP*/
app.use(express.static("public"));

/* STEP 1 rendering the home page✅ */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

/*STEP 3 adding the routes to handle the render of the about and contact pages*/
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/* STEP 4 IS ABOUT INCLUDING THE PARTIALS LIKE THIS <%- include("partials/header.ejs") %>
 <%- include("partials/footer.ejs") %> 
 FOR EACH EJS FILE FROM THE VIEWS :)*/
