const express = require("express");

const app = express();

app.use("/api/ueb", require("./routes/ueb"));
app.use("/api/worker", require("./routes/worker"));
app.use("/api/entity", require("./routes/entity"));
app.use("/api/unit", require("./routes/unit"));
app.use("/api/area", require("./routes/area"));
app.use("/api/observation", require("./routes/observations"));
app.use("/api/process", require("./routes/process"));

module.exports = app;
