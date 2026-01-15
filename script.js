function darkMode() {
    const themeBtn = document.getElementById("theme-btn");
    themeBtn.onclick = () => {
          themeBtn.classList.toggle("fa-sun");
          themeBtn.classList.toggle("fa-moon");

          if (themeBtn.classList.contains("fa-solid fa-sun")) {
            document.body.classList.add("darkModeBody");
          } else {
            document.body.classList.remove("darkModeBody");
          }
        }
  }

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("logo").style.fontSize = "20px";
      document.getElementById("logo").textContent = "CSP";
      document.getElementById("logo").color = "#DA70D6";
      document.getElementById("header").style.paddingTop = "12px";
    } else {
      document.getElementById("logo").style.fontSize = "24px";
      document.getElementById("logo").textContent = "Chris S Park";
      document.getElementById("logo").color = "#8C8A93";

      document.getElementById("header").style.paddingTop = "16px";
    }
  } 



//https://github.com/emjose/mousetrail-space

var dots = [],
  mouse = {
    x: 0,
    y: 0
};

var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "MouseTrail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}


function draw() {

  var x = mouse.x-3,
      y = mouse.y-3;
      
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
var name;
function readMore(name) {
  var text = document.getElementById("description"+name);
  var butt = document.getElementById(name);
  if (butt.innerHTML === "Show Details") {
    butt.innerHTML = "Hide Details";
    text.style.visibility="visible";
    text.style.color="#bae28d"
    text.style.marginBottom = "6px";
    text.style.height="auto";
  } else {
    butt.innerHTML = "Show Details";
    text.style.visibility="hidden";
    text.style.marginBottom = "0px";
    text.style.height="0";
  }
}