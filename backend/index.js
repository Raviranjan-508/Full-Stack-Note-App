const express = require("express");
const connection = require("./config/db");
const { notesController } = require("./routes/note.routes");
const { userController } = require("./routes/user.routes");


const app = express();
const PORT = 8080;
app.use(express.json());

app.get("/" , (req,res) => {
    res.send("Hello from express")
})

app.use("/user" , userController);

app.use("/notes", notesController);

app.listen(PORT , async () => {
    try {
        await connection
        console.log("DB is connected successfully")
    } catch (error) {
        console.log(`error: ${error}`)
    }
    console.log(`DB is connected on port no ${PORT}`);
})