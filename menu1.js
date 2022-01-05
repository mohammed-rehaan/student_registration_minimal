function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function resizeToMinimum() {
  var minimum = [640, 480];
  var current = [window.outerWidth, window.outerHeight];
  var restricted = [];
  var i = 2;

  while (i-- > 0) {
    restricted[i] = minimum[i] > current[i] ? minimum[i] : current[i];
  }

  window.resizeTo(current[0], current[1]);
}

window.addEventListener("resize", resizeToMinimum, false);
