var express = require("express");

var router = express.Router();

router.post('/user-info', function(req, res){
    console.log('express submit route');
    // console.log('req.body: ', req.body);
    console.log('req.query: ', req.query);

    res.json({ 
        "status": "success", 
        "message": "Thank you. You are now subscribed." 
    });

    // return 'hi';

});

module.exports = router;