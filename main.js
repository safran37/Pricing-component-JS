let bold = document.querySelector(".first");
let bold2 = document.querySelector(".second");
let bold3 = document.querySelector(".third");
const labelButton = document.querySelector("label");
const toggle = document.querySelector(".toggle");
labelButton.addEventListener("click", () => {
  if (labelButton.classList.contains("blue")) {
    labelButton.classList.remove("blue");
    labelButton.classList.add("gray");
    toggle.classList.remove("right");
    toggle.classList.add("left");
    bold.innerText = "$199.99";
    bold2.innerText = "$249.99";
    bold3.innerText = "$399.99";
  } else if (labelButton.classList.contains("gray")) {
    labelButton.classList.remove("gray");
    labelButton.classList.add("blue");
    toggle.classList.add("right");
    toggle.classList.remove("left");
    bold.innerText = "$19.99";
    bold2.innerText = "$24.99";
    bold3.innerText = "$39.99";
  }
});
