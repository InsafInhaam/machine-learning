let express = require("express");
let app = express();

app.use(function (req, res, next) {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

app.use(express.static("../static"));

app.listen(5000, function () {
  console.log(`listening on 5000`);
});
