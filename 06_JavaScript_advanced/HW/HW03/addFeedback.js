// скрипт для страницы addFeedback.html. Сохранение отзывов

const nameProductEl = document.querySelector(".name_product");
const feedbackEl = document.querySelector(".feedback");
const saveFeedbackEl = document.querySelector(".btn");
const errorMessage = document.querySelector(".error__message");
const changePageEl = document.querySelector(".changePage");

// функция сохранения нового отзыва
function saveFeedback() {
  const nameProduct = nameProductEl.value.trim();
  const feedback = feedbackEl.value.trim();
  // проверка, что поля заполнены
  if (nameProduct && feedback) {
    // saveFeedbackInStorage - функция из repo.js (файл для работы с localStorage)
    saveFeedbackInStorage(nameProduct, feedback);
  } else {
    errorMessage.textContent = "Заполните все поля";
  }
}

// функция перехода на новую страницу (страница с продуктами)
function changePage() {
  window.open("product.html", "_self");
}

saveFeedbackEl.addEventListener("click", saveFeedback);

changePageEl.addEventListener("click", changePage);
