const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const cors = require('cors');
const path = require("path");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_LOCAL_URL, () => console.log('DB connected'));

app.listen(8800,() => console.log('Backend server is running...'));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(cors())
app.use(express.json());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    try{
        return res.status(200).json("File uploaded successfully.")
    }catch (error){
        console.warn(error);
    }
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

