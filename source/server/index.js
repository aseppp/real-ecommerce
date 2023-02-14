const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const router = require("./routes/index");
app.use("/api", router);

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json("Server Running properly");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server working properly on port ${PORT}`);
});
