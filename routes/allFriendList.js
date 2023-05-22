const express = require("express");
const router = express.Router();


const friendsName = ["Taslima" , "Joynob" , "Khadiza" , "Maniya"];

router.route('/').get((req,res) =>{
    res.json({friendList: friendsName});
})


module.exports = router;