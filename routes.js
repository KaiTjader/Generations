const express = require("express");
const router = express.Router();
const sqlCommands = require("./db/mySQLConnect.js");

router.get("/", function (req, res){
    console.log("im in /");
    res.render('page1');
    //res.send("hello world");
});

router.get('/api/data', (req, res)=>{
    const data = "order66";
    //const userData = getUserData("game_resources");
    const testData = sqlCommands.print();
    res.json(testData);
});

module.exports = router;