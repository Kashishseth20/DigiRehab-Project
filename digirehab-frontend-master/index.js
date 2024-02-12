$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbgscroll").css("background", " rgba(28,119,195,0.8)");
    }

    else {
      $(".navbgscroll").css("background", "");
    }
  })
})
//date block************************************************
$(function () {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10)
    month = '0' + month.toString();
  if (day < 10)
    day = '0' + day.toString();

  var minDate = year + '-' + month + '-' + day;

  $('#date').attr('min', minDate);
});
// Click on the first tablink on load //For adding backgorunf color to button and white color to text
//add a funciton which removes svg-icons class on active and adds svgicon and adds svg-icon back on clicking the other button
//my link is the id given to div below the button for changing content and tablink is the class given to buttons to acces them on click and change the color of text to white and bg to blue
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  console.log(tablinks);
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" re-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " re-red";
}


document.getElementsByClassName("tablink")[0].click();
//Testing

var myBtns = document.querySelectorAll('.button-test');
var mySVGs = document.querySelectorAll('.svg-icons');

function removeSVGclass() {
  var mySVGs = document.querySelectorAll('.svg-icons');
  mySVGs.forEach(b => b.classList.remove('active-svg'));
}

myBtns[0].onclick = function () {
  removeSVGclass();
  mySVGs[0].classList.add('active-svg');
}

myBtns[1].onclick = function () {
  removeSVGclass();
  mySVGs[1].classList.add('active-svg');
}
myBtns[2].onclick = function () {
  removeSVGclass();
  mySVGs[2].classList.add('active-svg');
}
myBtns[3].onclick = function () {
  removeSVGclass();
  mySVGs[3].classList.add('active-svg');
}
myBtns[4].onclick = function () {
  removeSVGclass();
  mySVGs[4].classList.add('active-svg');
}
myBtns[5].onclick = function () {
  removeSVGclass();
  mySVGs[5].classList.add('active-svg');
}




// Typewriter carousel effect

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 10;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 150 - Math.random() * 50;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// End of Typewriter carousel effect

//changing numbers



!function (e) { var t = {}; function n(r) { if (t[r]) return t[r].exports; var a = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports } n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var a in e) n.d(r, a, function (t) { return e[t] }.bind(null, a)); return r }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/", n(n.s = 2) }([, , function (e, t, n) { e.exports = n(3) }, function (e, t, n) { "use strict"; function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } n.r(t); new (function () { function e() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.registerEventListeners() } var t, n, a; return t = e, (n = [{ key: "registerEventListeners", value: function () { var e = this, t = document.querySelectorAll(".purecounter"); if (this.intersectionListenerSupported()) for (var n = new IntersectionObserver(this.animateElements.bind(this), { root: null, rootMargin: "20px", threshold: .5 }), r = 0; r < t.length; r++)n.observe(t[r]); else window.addEventListener && (this.animateLegacy(t), window.addEventListener("scroll", function (n) { e.animateLegacy(t) }, { passive: !0 })) } }, { key: "animateLegacy", value: function (e) { for (var t = 0; t < e.length; t++) { !0 === this.parseConfig(e[t]).legacy && this.elementIsInView(e[t]) && this.animateElements([e[t]]) } } }, { key: "animateElements", value: function (e, t) { var n = this; e.forEach(function (e) { var r = void 0 !== e.target ? n.parseConfig(e.target) : n.parseConfig(e); return r.duration <= 0 ? e.innerHTML = r.end.toFixed(r.decimals) : !t && !n.elementIsInView(e) || t && e.intersectionRatio < .5 ? e.target.innerHTML = r.start > r.end ? r.end : r.start : void setTimeout(function () { return void 0 !== e.target ? n.startCounter(e.target, r) : n.startCounter(e, r) }, r.delay) }) } }, { key: "startCounter", value: function (e, t) { var n = this, r = (t.end - t.start) / (t.duration / t.delay), a = "inc"; t.start > t.end && (a = "dec", r *= -1), r < 1 && t.decimals <= 0 && (r = 1); var i = t.decimals <= 0 ? parseInt(t.start) : parseFloat(t.start).toFixed(t.decimals); e.innerHTML = i, !0 === t.once && e.setAttribute("data-purecounter-duration", 0); var o = setInterval(function () { var s = n.nextNumber(i, r, t, a); e.innerHTML = n.formatNumber(s, t), ((i = s) >= t.end && "inc" == a || i <= t.end && "dec" == a) && (clearInterval(o), i != t.end && (e.innerHTML = t.decimals <= 0 ? parseInt(t.end) : parseFloat(t.end).toFixed(t.decimals))) }, t.delay) } }, { key: "parseConfig", value: function (e) { for (var t = [].filter.call(e.attributes, function (e) { return /^data-purecounter-/.test(e.name) }), n = { start: 0, end: 9001, duration: 2e3, delay: 10, once: !0, decimals: 0, legacy: !0 }, r = 0; r < t.length; r++) { var a = t[r].name.replace("data-purecounter-", ""); n[a.toLowerCase()] = "duration" == a.toLowerCase() ? parseInt(1e3 * this.castDataType(t[r].value)) : this.castDataType(t[r].value) } return n } }, { key: "nextNumber", value: function (e, t, n, r) { return r || (r = "inc"), "inc" === r ? n.decimals <= 0 ? parseInt(e) + parseInt(t) : parseFloat(e) + parseFloat(t) : n.decimals <= 0 ? parseInt(e) - parseInt(t) : parseFloat(e) - parseFloat(t) } }, { key: "formatNumber", value: function (e, t) { return t.decimals <= 0 ? parseInt(e) : e.toLocaleString(void 0, { minimumFractionDigits: t.decimals, maximumFractionDigits: t.decimals }) } }, { key: "castDataType", value: function (e) { return /^[0-9]+\.[0-9]+$/.test(e) ? parseFloat(e) : /^[0-9]+$/.test(e) ? parseInt(e) : e } }, { key: "elementIsInView", value: function (e) { for (var t = e.offsetTop, n = e.offsetLeft, r = e.offsetWidth, a = e.offsetHeight; e.offsetParent;)t += (e = e.offsetParent).offsetTop, n += e.offsetLeft; return t >= window.pageYOffset && n >= window.pageXOffset && t + a <= window.pageYOffset + window.innerHeight && n + r <= window.pageXOffset + window.innerWidth } }, { key: "intersectionListenerSupported", value: function () { return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype } }]) && r(t.prototype, n), a && r(t, a), e }()) }]);


function addClass() {
  var div = document.getElementsByClassName("sec4-heading3");
  var div2 = document.getElementsByClassName("sec4-para");
  var div3 = document.getElementsByClassName("sec4-images");

  div[0].className = "animate-opacity ";
  div2[0].className = "animate-opacity-para";
  div3[0].className = "animate-opacity-img";



  setTimeout(addClass, 1000);
}
var i = 0;
function addDot() {

  var div = document.getElementsByClassName("dot");
  div[i].className = "animate-opacity-dot";

  setTimeout(addDot, 1100);

}
function addDot1() {
  var div = document.getElementsByClassName("dot1");
  div[0].className = "animate-opacity-dot1";
  setTimeout(addDot1, 1200);

}
function addDot2() {
  var div = document.getElementsByClassName("dot2");
  div[0].className = "animate-opacity-dot2";
  setTimeout(addDot2, 1250);

}

function flip(no) {
  var div = document.getElementById("swipecard-" + no);
  div.className = "animate-flip";
}

$(window).on('scroll', function () {
  if (checkVisible($('#foo'))) {

    setTimeout(addClass, 0);
    setTimeout(addDot, 200);
    setTimeout(addDot1, 400);
    setTimeout(addDot2, 600);

    $(window).off('scroll');
  } else {
    // do nothing
  }

});


function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

function proceedPay() {

  alert("Handler for .click() called.");
}


function openNav(no) {
  document.getElementById("myNav" + no).style.width = "100%";
}

function closeNav(no) {
  document.getElementById("myNav" + no).style.width = "0%";
}

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBBgs2qpP_F1AE_Mae8_0Yloj2RkF1r78Y",
    authDomain: "digi-rehab.firebaseapp.com",
    databaseURL: "https://digi-rehab-default-rtdb.firebaseio.com",
    projectId: "digi-rehab",
    storageBucket: "digi-rehab.appspot.com",
    messagingSenderId: "284058497874",
    appId: "1:284058497874:web:38aa9850f4fe3125a4c08b",
    measurementId: "G-EBGGG2ZL0T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('Schedule');

//Contact Form 
document.getElementById('schedule-form').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();
	var name = getInputVal('name');
  var number = getInputVal('number');
	var email = getInputVal('email');
	var date = getInputVal('date');
	var time = getInputVal('time');
  var address = getInputVal('address');
  var complaint = getInputVal('Complaint');


	// Save message
	saveMessage(name, number, email, date, time, address, complaint);

	// Clear form
	document.getElementById('schedule-form').reset();

}

//Function to get form values
function getInputVal(id) {
	return document.getElementById(id).value;	
}

// Save message to firebase
function saveMessage(name, number, email, date, time, address, complaint){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
	  name: name,
    number: number,
	  email: email,
	  date: date,
	  time: time,
    address: address,
    complaint: complaint
	});
  }

  //Subscribe Email

  var emailSubmissionRef = firebase.database().ref('Professional Emails');

  document.getElementById('subscribe').addEventListener('submit',submitSubscribeForm);

  function submitSubscribeForm(e){
    e.preventDefault();
    var submail = getInputVal('subscribe-email');  
  
    // Save message
    saveSubMessage(submail);
  
    // Clear form
    document.getElementById('subscribe').reset();
  
  }

  function saveSubMessage(submail){
    var newMessageRef = emailSubmissionRef.push();
    newMessageRef.set({
    Email: submail
    });
    }

