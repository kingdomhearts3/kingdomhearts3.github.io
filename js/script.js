var index = 1;
var interval;
var start = null;

function onStart(){
  //document.getElementById("video").load();
}


function next(){
  if (index < 8) {
    index++;
    change(index);
  }
  else {
    index = 1;
    change(index);
  }
}

function prev(){
  if (index > 1) {
    index--;
    change(index);
  }
  else {
    index = 8;
    change(index);
  }
}

window.addEventListener("touchstart",function(event) {
  if(event.touches.length === 1) {
    start = event.touches.item(0).clientX;
  }
  else {
    start = null;
  }
});

window.addEventListener("touchend",function(event) {
  var offset = 300;

  if(start) {
    var end = event.changedTouches.item(0).clientX;
    //right to left swipe
    if(end < start - offset ) {
      next();
    }
    //left to right swipe
    if(end > start + offset) {
      prev();
    }
  }
});

function change(n) {
  switch(index) {
    case 1:
      document.getElementById("video").poster = "videos/kh3poster.png";
      document.getElementById("source").src = "videos/kh3.mp4";
      document.getElementById("video").load();
      document.getElementById("info").style.display = "none";
      document.getElementById("countdown").style.display = "initial";
      break;
    case 2:
      document.getElementById("video").poster = "videos/khposter.png";
      document.getElementById("source").src = "videos/kh.mp4";
      document.getElementById("video").load();
      document.getElementById("countdown").style.display = "none";
      document.getElementById("info").style.display = "initial";
      document.getElementById("info").innerHTML = "kingdom hearts";

      clearInterval(interval);
      interval = setInterval(function()	{
        if (document.getElementById("info").innerHTML === "kingdom hearts") {
            document.getElementById("info").innerHTML = "sept 17, 2002";
        }
        else {
          document.getElementById("info").innerHTML = "kingdom hearts";
        }
      }, 7000);
      break;
    case 3:
      document.getElementById("video").poster = "videos/khcomposter.png";
      document.getElementById("source").src = "videos/khcom.mp4";
      document.getElementById("video").load();
      document.getElementById("info").innerHTML = "chain of memories";

      clearInterval(interval);
      interval = setInterval(function()	{
        if (document.getElementById("info").innerHTML === "chain of memories") {
            document.getElementById("info").innerHTML = "dec 7, 2004";
        }
        else {
          document.getElementById("info").innerHTML = "chain of memories";
        }
      }, 7000);
      break;
    case 4:
      document.getElementById("video").poster = "videos/kh2poster.png";
      document.getElementById("source").src = "videos/kh2.mp4";
      document.getElementById("video").load();
      document.getElementById("info").innerHTML = "kingdom hearts II";

      clearInterval(interval);
      interval = setInterval(function()	{
        if (document.getElementById("info").innerHTML === "kingdom hearts II") {
              document.getElementById("info").innerHTML = "mar 28, 2006";
        }
        else {
          document.getElementById("info").innerHTML = "kingdom hearts II";
        }
      }, 7000);
      break;
    case 5:
      document.getElementById("video").poster = "videos/kh358daysposter.png";
      document.getElementById("source").src = "videos/kh358days.mp4";
      document.getElementById("video").load();
      document.getElementById("info").innerHTML = "358/2 days";

      clearInterval(interval);
      interval = setInterval(function()	{
        if (document.getElementById("info").innerHTML === "358/2 days") {
            document.getElementById("info").innerHTML = "sept 29, 2009";
        }
        else {
          document.getElementById("info").innerHTML = "358/2 days";
        }
      }, 7000);
      break;
    case 6:
      document.getElementById("video").poster = "videos/khbbsposter.png";
      document.getElementById("source").src = "videos/khbbs.mp4";
      document.getElementById("video").load();
      document.getElementById("info").style = "font-size: 16px";
      document.getElementById("info").innerHTML = "birth by sleep";

      clearInterval(interval);
      interval = setInterval(function()	{
        if (document.getElementById("info").innerHTML === "birth by sleep") {
            document.getElementById("info").innerHTML = "sept 7, 2010";
        }
        else {
          document.getElementById("info").innerHTML = "birth by sleep";
        }
      }, 7000);
      break;
    case 7:
      document.getElementById("video").poster = "videos/kh3dposter.png";
      document.getElementById("source").src = "videos/kh3d.mp4";
      document.getElementById("video").load();
      document.getElementById("info").style = "font-size: 14px";
      document.getElementById("info").innerHTML = "dream drop distance";

      clearInterval(interval);
      interval = setInterval(function()	{
        if (document.getElementById("info").innerHTML === "dream drop distance") {
            document.getElementById("info").innerHTML = "jul 31, 2012";
        }
        else {
          document.getElementById("info").innerHTML = "dream drop distance";
        }
      }, 7000);
      break;
    case 8:
      document.getElementById("video").poster = "videos/khfcpposter.png";
      document.getElementById("source").src = "videos/khfcp.mp4";
      document.getElementById("video").load();
      document.getElementById("countdown").style.display = "none";
      document.getElementById("info").style.display = "initial";
      document.getElementById("info").style = "font-size: 16px";
      document.getElementById("info").innerHTML = "0.2 Birth by Sleep";

      clearInterval(interval);
      interval = setInterval(function()	{
        if (document.getElementById("info").innerHTML === "0.2 Birth by Sleep") {
            document.getElementById("info").innerHTML = "jan 24, 2017";
        }
        else {
          document.getElementById("info").innerHTML = "0.2 Birth by Sleep";
        }
      }, 7000);
      break;
    }
}

var x = setInterval(function() {
  getCountdown();
}, 1000);

var date = new Date("jan 29, 2019 00:00:00").getTime();
//var daysLeft = date - currentDate;
//var d = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
  //var days = convertRoman(d);

function getCountdown() {
  var currentTime = new Date().getTime();
  var distance = date - currentTime;
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var days = convertRoman(d);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (hours < 10) {
      hours = "0" + hours;
    }

  if (minutes < 10) {
      minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("countdown").innerHTML = days + " " + hours + ":" + minutes + ":" + seconds;

  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("countdown").style = "font-size: 15px";
    document.getElementById("countdown").innerHTML = "kingdom hearts III";
  }
}

function convertRoman(num) {
    var result = '';
    var decimal = [100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["C", "XC", "L", "XL", "X","IX","V","IV","I"];

    for (var i = 0; i <= decimal.length; i++) {
      while (num % decimal[i] < num) {
      result += roman[i];

        num -= decimal[i];
      }
    }
  return result;
  }