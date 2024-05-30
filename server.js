const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const thoughtRoutes = require("./routes/thoughtRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost/socialnetworkdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});