const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const companion = require("@uppy/companion");
const session = require("express-session");

app.use(
    cors({
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH", "OPTIONS"],
    })
);
app.options(
    "*",
    cors({
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
);
app.use(express.json());
app.use(
    session({
        secret: "dddddddddddfslkjdfsdlkjkdfdfsd",
        resave: false,
        saveUninitialized: true,
    })
);

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.array("my-file"), async (req, res) => {
    console.log("Test");
    console.log(req.files);
    if (req.files.length == 0) {
        return res.status(400).send("File upload failed");
    }
    res.status(200).send({ uploadUrl: "Hello Hi rashed iqbal" });
});

const options = {
    providerOptions: {
        drive: {
            key: "700238736421-blqii7e0ivfq4p4cnfra6k9jbjituvto.apps.googleusercontent.com",
            secret: "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",
        },
        dropbox: {
            key: "jb0hx3758ihn8qi",
            secret: "o9492ep2lpo76gc",
        },
    },
    server: {
        host: "localhost:7090",
        protocol: "http",
    },
    filePath: "./uploads",
    secret: "fjskljdfjlskjdjf",
    debug: true,

    streamingUpload: true,
    allowLocalUrls: false,

    corsOrigins: true,
};

app.use(companion.app(options));

const server = app.listen(7090);

companion.socket(server, options);
