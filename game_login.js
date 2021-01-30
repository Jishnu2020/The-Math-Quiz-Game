var mouseEvent= "empty";
var username= "";
function addUser() {
console.log("mouseleave");
mouseEvent = "mouseleave";
if(mouseEvent == "mouseleave") {
username= document.getElementById("player1_name_input").value;
window.alert("Successfully Logged-In, " + username + "!");
console.log("Successfully Logged-In, " + username + "!");
console.log("mouseleave");
mouseEvent = "mouseleave";
}
if(mouseEvent == "mouseleave") {
username= document.getElementById("player2_name_input").value;
window.alert("Successfully Logged-In, " + username + "!");
console.log("Successfully Logged-In, " + username + "!");

player1_name = document.getElementById("player1_name_input").value;
player2_name = document.getElementById("player2_name_input").value;
localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);
window.location = "game.html";
}
}