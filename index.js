var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("knowMore");
var span = document.getElementsByClassName("close1")[0];
btn1.onclick = function () {
    modal1.style.display = "block";
}
span.onclick = function () {
    modal1.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("knowMore2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("knowMore3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function () {
    modal3.style.display = "block";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
