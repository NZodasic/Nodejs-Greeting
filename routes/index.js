const express = require('express');
const router = express.Router();

let user = "";
let bd = ""; 
let getday = "";
let month_access = "";
let getyear = "";


function getRemainingDays(birthday) {
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  
  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  
  const remainingDays = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  return remainingDays;
}

router.get('/', function(req, res) {
  const remainingDays = getRemainingDays(new Date(bd));
  res.render('index', { fname: user, fday: getday, fmonth: month_access, fyear: getyear, remainingDays });
});



router.post('/find', function(req, res) {
  const fname = req.body.name;
  const day = req.body.day;
  const month = req.body.month;
  const year = req.body.year;
  user = fname;
  getday = day;
  month_access = month;
  getyear = year;
  bd = new Date(year, month - 1, day);

  res.redirect("/");
});

module.exports = router;
