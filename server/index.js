require('dotenv').config();
const express = require ("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers will be list down here
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const PORT = process.env.PORT;
db.sequelize.sync().then(() => {
    app.listen(PORT,()=> {
        console.log('server running on port 3001');
        
    });
});
