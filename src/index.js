const express = require("express");
const bodyParser = require("body-parser");
const predictRoute = require("./routes/predictRoute");
const historyRoute = require("./routes/historyRoute");

const app = express();
app.use(bodyParser.json());
app.use("/predict", predictRoute);
app.use("/predict/histories", historyRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
