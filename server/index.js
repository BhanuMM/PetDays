const express = require ("express");
const app = express();
const cors = require('cors');

// var cors = require('cors');
// app.use(cors());
app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers will be list down here
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);


db.sequelize.sync().then(() => {
    app.listen(3001,()=> {
        console.log("server running on port 3001");
        
    });
});
