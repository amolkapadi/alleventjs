//form event
function event1() {
    alert("This is a click Event");
}

function event2() {
    alert("This is a mouseover Event");
}

function event3() {
    alert("This is a mouseout Event");
}

function event4() {
    alert("This is a Double click Event")
}
function event5() {
    alert("This is onmouseenter Event")
}


//keyboard event
function event6() {
    alert("This is Keydown  Event")
}

function event6() {
    alert("This is Keydown  Event")
}

function event7() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
//onfocus
function event9(x) {
    document.getElementById(x).style.background = "blue";
}
//onsubmit
function event10() {
    alert("The form was submitted");
}