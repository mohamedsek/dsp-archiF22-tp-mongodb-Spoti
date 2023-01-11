const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const UserRouter = require("./routes/UserRouter")
const SongRouter = require("./routes/SongRouter")
const PlayListRouter = require("./routes/PlayListRouter")
const MoviesRouter = require("./routes/MoviesRouter")

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

app.use("/user", UserRouter)
app.use("/song", SongRouter)
app.use("/playlist", PlayListRouter)
app.use("/movies", MoviesRouter)

app.listen(port, ()=>{console.log(`[Server ] is running on : ${port}`)});