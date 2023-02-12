const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Server Running properly");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server working properly on port ${PORT}`);
});
