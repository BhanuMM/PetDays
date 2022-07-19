const express = require ("express");
const app = express();


const db = require("./models");

//Routers will be list down here
// const usersRouter = require("./routes/Users");
// app.use("/auth", usersRouter);


db.sequelize.sync().then(() => {
    app.listen(3001,()=> {
        console.log("server running on port 3001");
        
    });
});
