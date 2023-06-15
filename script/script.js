function coolAlert() {
  window.alert("thx u :)");
}

function boringAlert() {
  window.alert("ouch :(");
}

let closed = false;

function closeNav() {
  if (closed == false) {
    document.getElementById("nav-list").style.display = "none";
    document.getElementById("nav-button").innerHTML = "O";
    closed = true;
  } else {
    document.getElementById("nav-list").style.display = "block";
    document.getElementById("nav-button").innerHTML = "X";
    closed = false;
  }
}

let allVisible = true;

function changeVisibleLanguages() {
  if (allVisible == true) {
    document.getElementById("visible-languages-button").className = "secondary-button";
    document.getElementById("visible-languages-button").innerHTML = "See all languages";
    document.getElementById("portuguese").style.display = "none";
    document.getElementById("japanese").style.display = "none";
    document.getElementById("language-grid").className = "language-flex";
    allVisible = false;
    document.getElementById("en-level").style.display = "block";
    document.getElementById("es-level").style.display = "block";
    document.getElementById("fr-level").style.display = "block";
  } else {
    document.getElementById("visible-languages-button").className = "primary-button";
    document.getElementById("visible-languages-button").innerHTML = "See only languages I can use with ease";
    document.getElementById("portuguese").style.display = "block";
    document.getElementById("japanese").style.display = "block";
    document.getElementById("language-grid").className = "language-grid";
    allVisible = true;
    document.getElementById("en-level").style.display = "none";
    document.getElementById("es-level").style.display = "none";
    document.getElementById("fr-level").style.display = "none";
  }
}