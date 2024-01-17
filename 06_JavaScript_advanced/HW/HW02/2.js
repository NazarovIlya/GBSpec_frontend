"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное id, для упрощения, используем `Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const mainDiv = document.querySelector(".center");

function seeData() {
  for (const index in initialData) {
    const titleProduct = document.createElement("h1");
    titleProduct.innerText = `${initialData[index].product}`;
    mainDiv.appendChild(titleProduct);

    const tempElem = initialData[index].reviews;

    for (const el in tempElem) {
      const feedback = document.createElement("div");
      feedback.classList.add("feedback");
      feedback.innerText = `${tempElem[el].text}`;
      mainDiv.appendChild(feedback);
    }

    const inputElem = document.createElement("input");
    inputElem.classList.add("inputElem");
    mainDiv.appendChild(inputElem);

    const buttonElem = document.createElement("button");
    buttonElem.classList.add("buttonElem");
    buttonElem.innerText = "Добавить отзыв";
    mainDiv.appendChild(buttonElem);
  }
}

seeData();

const buttons = document.querySelectorAll(".buttonElem");
const inputs = document.querySelectorAll(".inputElem");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const text = inputs[i].value;

    try {
      if (text.length < 10 && text.length > 500) {
        throw new Error("скорректируйте текст");
      }

      const tempElemNew = initialData[i].reviews;
      tempElemNew.push({ id: Date.now(), text: text });

      const deleteElement = document.querySelector(".center");
      deleteElement.innerHTML = "";

      seeData();
      
    } catch (error) {
      console.log(error.message);
    }
  });
}
