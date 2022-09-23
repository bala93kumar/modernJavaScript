let express = require("express");
let app = express();

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));

const dbUrl =
  "mongodb+srv://bala93kumar:pass@cluster0.sibmaoa.mongodb.net/toDoApp?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.info("connected to the DB");
  })
  .catch((e) => {
    console.log("error:", e);
  });

// old code

//to connect to mongoDb

// let { MongoClient } = require("mongodb");
// let db;

// async function go() {
//   let client = new MongoClient(
//     `mongodb+srv://bala93kumar:balakumar@cluster0.sibmaoa.mongodb.net/toDoApp?retryWrites=true&w=majority`
//   );
//   await client.connect();
//   db = client.db;
//   app.listen(3000);
// }
// go();

//new code form mongoDb

app.get("/", (req, res) => {
  //   res.send("hello welcome to our app");
  res.sendFile("index.html", { root: __dirname });
});

app.post("/toDo", (req, res) => {
  // db.collection("items").insertOne(
  //   { text: req.body.items },
  //   function (req, res) {
  //     res.send("toDo received");
  //   }
  // );
  const dataModelSchema = new mongoose.Schema({
    itemList: { type: String, required: true, trim: true },
  });

  const dataModel = mongoose.model("Items", dataModelSchema);

  var dataModel1 = new dataModel({ itemList: "buy apples" });
  // dataModel1.itemList = "buy apples";
  console.log(req.body.items);
  dataModel1.save((err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send({ msg: "inserted" });
    }
  });
});

app.listen(3000);
