export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  const modal = document.querySelector(".modal");
  if (text) {
    modal.innerHTML = `
      <div class="modal-inner">${text}</div>
    `;
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
};
