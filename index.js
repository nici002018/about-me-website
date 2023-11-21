const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

app.set("view engine", "html");
app.set("port", process.env.PORT || 6765);

app.use(compression());

const cacheControl = {
  maxAge: 86400,
};

app.use(express.static(path.join(__dirname, "web"), cacheControl));

const server = app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
