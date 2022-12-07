const {Router} = require("express");

const notesController = Router();

notesController.get("/" , (req,res) => {
    res.send("notes is here")
})


module.exports = {
    notesController
}
