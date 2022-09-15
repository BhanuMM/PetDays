require('dotenv').config();
const express = require ("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers will be list down here
const authRouter = require("./routes/Auth");
app.use("/auth", authRouter);

const adminsRouter = require("./routes/Admins");
app.use("/admin", adminsRouter);

const moderatorsRouter = require("./routes/Moderators");
app.use("/mod", moderatorsRouter);


const usersRouter = require("./routes/Users");
app.use("/user", usersRouter);

const serviceRouter = require("./routes/Serviceprovider");
app.use("/service", serviceRouter);


const PORT = process.env.PORT;
db.sequelize.sync().then(() => {
    app.listen(PORT,()=> {
        console.log('server running on port 3001');
        
    });
});
