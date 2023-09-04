import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/",(req,res)=>
{
  res.render("index.ejs");
});

app.get("/mywallet",(req,res)=>
{
  res.render("mywallet.ejs");
});
app.get("/login",(req,res)=>
{
  res.render("login.ejs");
});

app.get("/signup",(req,res)=>
{
  res.render("signup.ejs");
})

app.listen(port,()=>
{
  console.log("Port is running");
});
/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
