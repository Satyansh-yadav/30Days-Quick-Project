const pageContent = document.getElementById("page-content");
const pageButtons = document.querySelectorAll(".page-btn");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

const pages = [
  "Page 1: Welcome to the first page!",
  "Page 2: Here is some more information.",
  "Page 3: You're halfway through!",
  "Page 4: Almost at the end!",
  "Page 5: Thanks for visiting the last page",
];
let currentPage = 1;

function updatePagination() {
  pageContent.textContent = pages[currentPage - 1];

  pageButtons.forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === currentPage);
  });

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === pages.length;
}

pageButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentPage = index + 1;
    updatePagination();
  });
});

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < pages.length) {
    currentPage++;
    updatePagination();
  }
});

updatePagination();