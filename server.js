const express = require("express");
const cors = require("cors");

const taxRoutes = require("./routes/taxRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tax", taxRoutes);

app.get("/", (req, res) => {
  res.send("Smart Tax AI Backend Running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});