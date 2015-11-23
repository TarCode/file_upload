var express = require('express'),
    router = express.Router(),
    multer = require('multer');

router.post('/upload',multer({ dest: './public/uploads/'}).single('image'), function(req, res){
  console.log(req.file);
  res.render('home', {msg:"Successfully Uploaded image"})
});

module.exports = router;
