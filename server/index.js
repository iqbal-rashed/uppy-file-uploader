const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.array("my-file"), async (req, res) => {
    console.log("Test");
    console.log(req.files);
    if (req.files.length == 0) {
        return res.status(400).send("File upload failed");
    }
    res.status(200).send("File uploaded successfully");
});

app.listen(7060);
