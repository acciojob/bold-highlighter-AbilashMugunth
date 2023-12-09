const strongTags = document.querySelectorAll("p strong");

function highlight() {
  strongTags.forEach((element) => {
    element.style.color = "green";
  });
}

function return_normal() {
  strongTags.forEach((element) => {
    element.style.color = "black";
  });
}