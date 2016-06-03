var express = require('express');
var router = express.Router();

var info = {
  title:"How to put snow skis on",
  firstSteps: [
    "Put your ski boots on (separate instructions)",
    "Ensure your boots are buckled",
    "Unlock the skis from each other",
  ],
  secondSteps: [
    "Place the skis on the snow, flat side down",
    "Stand next to your skis, facing the same way the skis are pointing",
    "Put the toe of your right boot under the front of binding of the ski on the right",
    "Make sure your right heel is lined up with the back binding",
    "Push your right heel down until you hear your boot click",
  ],
  lastSteps:[
    "Repeat previous steps for your left foot",
    "Go ski!",
  ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(info);
  res.render('index', { title: info.title });
});

router.get('/how-to-put-skis-on', function(req, res){
  res.render("how-to-put-skis-on",{
    steps: info.firstSteps,
    title: "First Steps",
    home: "/",
    next:"/how-to-put-skis-on/keep-going"
  })
})

router.get('/how-to-put-skis-on/keep-going', function(req, res){
  res.render("how-to-put-skis-on",{
    steps: info.secondSteps,
    title: "Second Steps",
    home: "/",
    back:"/how-to-put-skis-on",
    next:"/how-to-put-skis-on/keep-going/last-steps"
  })
})

router.get('/how-to-put-skis-on/keep-going/last-steps', function(req, res){
  res.render("how-to-put-skis-on",{
    steps: info.lastSteps,
    title: "Final Steps",
    home: "/",
    back:"/how-to-put-skis-on/keep-going",
    pic:"https://media.giphy.com/media/xTcnSQYEkDRNu4vXAk/giphy.gif",
    moreInfo: "http://www.mechanicsofsport.com/skiing/how_to_ski/skis_on.html"
  })
})


module.exports = router;
