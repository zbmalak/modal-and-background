const btnOpenModal = document.querySelector(".btn--modal");
const btnCloseModal = document.querySelector(".btn--close");
const btnChangeBgc = document.querySelector(".btn--bgc");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const wrap = document.querySelector(".wrap");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const changeBgcToRandomGradient = function () {
  const randOne = Math.floor(Math.random() * 16777215).toString(16);
  const randTwo = Math.floor(Math.random() * 16777215).toString(16);
  wrap.style.background = `linear-gradient(to right, #${randOne}, #${randTwo})`;
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

btnChangeBgc.addEventListener("click", changeBgcToRandomGradient);
