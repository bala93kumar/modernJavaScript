let express = require("express");
let app = express();

app.use(express.urlencoded({ extended: false }));

// old code

//to connect to mongoDb

let { MongoClient } = require("mongodb");
let db;

async function go() {
  let client = new MongoClient(
    `mongodb+srv://bala93kumar:pass@cluster0.sibmaoa.mongodb.net/toDoApp?retryWrites=true&w=majority`
  );
  await client.connect();
  db = client.db;
  app.listen(3000);
}
go();

//new code form mongoDb

app.get("/", (req, res) => {
  //   res.send("hello welcome to our app");
  res.sendFile("index.html", { root: __dirname });
});

app.post("/toDo", (req, res) => {
  db.collection("items").insertOne(
    { text: req.body.items },
    function (req, res) {
      res.send("toDo received");
    }
  );
  console.log(req.body.items);
});
