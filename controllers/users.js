var express = require("express");

// this creates a router as a module
var router = express.Router();

router.post('/user-info', function(req, res){
    console.log('express submit route');
    console.log('req.body: ', req.body);

    // res.json({ 
    //     "status": "success", 
    //     "message": "Thank you. You are now subscribed." 
    // });
});

module.exports = router;