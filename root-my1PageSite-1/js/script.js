/*eslint-env browser*/
"use strict";
//Global Variables    

//Helper Function
var $ = function (id) {
    return document.getElementById(id);
};

//Progress Bar & Show/Hide to Top Button & Header Bottom Box Shadow
window.onscroll = function() {progress()};
        
function progress () {
    let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let fill = (scrolled / height) * 100;
    $("bar").style.width = fill + "%";
    if ( scrolled > 20) { // Show/Hide to Top Button
        $("toTop").style.visibility = "visible";
        $("header").style.boxShadow = "0px 10px 10px 5px rgba(232,232,232,1)";
    } else {
        $("toTop").style.visibility = "hidden";
        $("header").style.boxShadow = "none";
    }
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

// Scroll to Top Button
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//Footer Copyright Year
$("copyRightYear").innerHTML = new Date().getFullYear();
