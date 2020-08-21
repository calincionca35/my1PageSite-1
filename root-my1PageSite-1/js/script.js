/*eslint-env browser*/
"use strict";
//Global Variables    

//Helper Function
var $ = function (id) {
    return document.getElementById(id);
};

// Show/Hide Main Menu
function toggleNav() {
    if ($("mainMenu").style.display === "none") {
        $("mainMenu").style.display = "block";
        $("toTop").style.zIndex = -1;
    } else {
        $("mainMenu").style.display = "none";
        $("toTop").style.zIndex = 2;
    }
    
}

// Show Page
function showPage() {
    if (screen.width > 767) {
        $("mainMenu").style.display = "block"
    } else if ($("mainMenu").style.display = "block") {
        $("mainMenu").style.display = "none"
        $("toTop").style.zIndex = 2;
    }
}

// Show/Hide to Top Button
function toggleTopBtn () {
    let y = window.scrollY;
    if ( y > 20) {
        $("toTop").style.visibility = "visible";
    } else {
        $("toTop").style.visibility = "hidden";
    }
}

// Scroll to Top Button
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//Footer Copyright Year
$("copyRightYear").innerHTML = new Date().getFullYear();