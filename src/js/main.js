const add = (a, b) => a + b;
console.log(add(2, 3));

const requestDialog = document.querySelector(".request-form"),
  bodyScroll = document.querySelector("body");

function openForm() {
  requestDialog.style.display = "flex";
  bodyScroll.style.overflow = "hidden";
}

openForm();

function closeForm() {
  requestDialog.style.display = "none";
  bodyScroll.style.overflow = "scroll";
}
closeForm();