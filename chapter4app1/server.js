let express = require("express");

let app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //   res.send("hello welcome to our app");
  res.sendFile("index.html", { root: __dirname });
});

app.post("/toDo", (req, res) => {
  res.send("toDo received");
  console.log(req.body.items);
});

app.listen(3000);
