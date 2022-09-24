let express = require("express");
let app = express();

const ejs = require("ejs");
app.set("view engine", "ejs");

require("dotenv").config();

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));

var dbUrl = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.sibmaoa.mongodb.net/toDoApp?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected to DB");
  } catch (err) {
    console.log("failed to connect to DB", err);
  }
};

connectDB();

const dataModelSchema = new mongoose.Schema({
  itemList: { type: String, required: true, trim: true },
});
const dataModel = mongoose.model("Items", dataModelSchema);

// new code to connect to mongodb

// await mongoose
//   .connect(dbUrl, connectionParams)
//   .then(() => {
//     console.info("connected to the DB");
//   })
//   .catch((e) => {
//     console.log("error:", e);
//   });

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
  // actual working code to extract data from db and print in console

  dataModel.find({}, { itemList: 1, _id: 0 }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(data);
      res.render("index", { title: "To-Do App!!", records: data });
    }
  });

  // res.sendFile("index.html", { root: __dirname });
  // res.render("index", { title: "To-Do App!!" , records : data});
});

app.post("/toDo", (req, res) => {
  // db.collection("items").insertOne(
  //   { text: req.body.items },
  //   function (req, res) {
  //     res.send("toDo received");
  //   }
  // );

  var dataModel1 = new dataModel({ itemList: req.body.items });
  // dataModel1.itemList = "buy apples";
  // console.log(req.body.items);
  dataModel1.save((err, data) => {
    if (err) {
      console.error(err);
    } else {
      // res.status(200).send({ msg: "inserted" });
      res.redirect("/");
    }
  });
});

app.listen(3000);
