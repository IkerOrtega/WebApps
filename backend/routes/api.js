const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    //res.json({message: 'This is my API'});
    res.send("hello world!")
});

module.exports = router;