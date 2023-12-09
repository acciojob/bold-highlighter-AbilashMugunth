const strongTags = document.querySelectorAll("p strong");

function highlight() {
  strongTags.forEach((element) => {
    element.style.color = "#007F00";
  });
}

function return_normal() {
  strongTags.forEach((element) => {
    element.style.color = "";
  });
}