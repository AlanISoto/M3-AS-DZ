const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");
const multer = require("multer");

const app = express();

app.use(cors());

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage: storage }); // Only accept file uploads with the image name.

app.use(upload.single("image")); //

app.use("/api", apiRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
