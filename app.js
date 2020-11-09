const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnOpenModel = document.querySelectorAll(".show-model");

const openModel = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let index = 0; index < btnOpenModel.length; index++) {
  btnOpenModel[index].addEventListener("click", function () {
    openModel();
  });
}
btnCloseModel.addEventListener("click", function () {
  closeModel();
});
overlay.addEventListener("click", function () {
  closeModel();
});

document.addEventListener("keydown", (k) => {
  if (k.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
