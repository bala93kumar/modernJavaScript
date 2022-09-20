let express = require("express");

let ourApp = express();

ourApp.use(
  express.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

ourApp.get("/", (req, res) => {
  res.send(` <form action="/answer" method="POST">
     <h3>what is the syk color in the eve?</h3>
    <input  type="text" name="valueField"></input>
    <button>Submit Answer</button>
  </form>`);
});

ourApp.post("/answer", (req, res) => {
  //   res.send("Thank you for answering");
  //   console.log(req.body.valueField);

  if (req.body.valueField.toUpperCase() == "BLUE") {
    res.send(`<h3> congratulations! </h3>
    <a href="/">Back to home page</a>`);
  } else {
    res.send(`<p> Sorry you are wrong </p>
    <a href="/">Back to home page</a> `);
  }
});

ourApp.listen(3000);
