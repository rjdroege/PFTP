const express = require("express");

const app = express();

app.use(express.static("./dist/accountability"));

app.get("/*", (_, res) =>
res.sendFile("index.html", { root: "dist/accountability"}));

app.listen(process.env.PORT || 8080);
