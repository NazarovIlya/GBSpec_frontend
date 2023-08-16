// Задача №1

const url = 'https://jsonplaceholder.typicode.com/users';
const wrap = document.querySelector('.users');

const data = await getData(url);
console.log(data);

localStorage.clear();



async function getData(url) {
  const response = await fetch(url);
  const result = response.json();
  return result;
}

const show = (element) => {
  wrap.insertAdjacentHTML("beforeend",
  `<figure class="user" id="${element.id}">
  <img src="./img/no_photo.jpg" alt="photo">
  <a href='#'><h2 class="user__name" id="${element.id}">${element.name}</a></h2></a>
  <button class="button__del">Удалить</button>
</figure>`);
  localStorage.setItem(element.id, element);
}

const deleteButton = (button) => button.addEventListener('click', () => {
  const id = button.parentElement.id;
  localStorage.removeItem(id);
  document.getElementById(id).remove();
})

data.forEach(element => show(element));

const arrayButtons = document.querySelectorAll('.button__del');
arrayButtons.forEach(element => deleteButton(element));


// Задача №2
