let http = require("http");

let App = http.createServer((req, res) => {
  // console.log(req.url);

  if (req.url == "/") {
    res.end("than for visiting the home");
  } else if (req.url == "/about") {
    res.end("thank you for visiting about");
  } else res.end("cannot find the page");
});

App.listen(3000);
