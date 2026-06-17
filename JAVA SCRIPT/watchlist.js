//Menubar Functionality//

var menubar = document.getElementById("menubar");
var menuicon = document.getElementById("menuicon");
var closebtn = document.getElementById("closebtn");

menuicon.addEventListener("click", () => {
  menubar.style.right = "0%";
});

closebtn.addEventListener("click", () => {
  menubar.style.right = "-50%";
});
