const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const UserRoute = require("./routes/UserRouter")
const SongRoute = require("./routes/SongRouter")
const PlayListRoute = require("./routes/PlayListRouter")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/spoti",{useNewUrlParser: true});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.on("open",()=>{
    console.log('[DataBase] ===> MongoDB is connected!! <=== ')
});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/user", UserRoute)
app.use("/song", SongRoute)
app.use("/playlist", PlayListRoute)

app.listen(port, ()=>{console.log('[Server ] is running on : ${port}')});