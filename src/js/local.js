// Находим форму и инпут
const form = document.querySelector('#js-form');
const input = document.querySelector('#textarea');

// Добавляем слушателей событий на форму и на инпут
form.addEventListener('submit', handleFormSubmit);
input.addEventListener('input', handleText);

// Вызов функции, которая получает данные из local и подставляет их в инпут
populateMassege();

// Функция для прерывания перезагрузки страницы при отправке, очистки local и очистки инпута
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Отправили имя');
  localStorage.removeItem('input-text');
  event.target.reset();
}

// Функция для записи инпута в local
function handleText(event) {
  const message = event.target.value;

  localStorage.setItem('input-text', message);
}

// Функция для переноса содержимого local в инпут
function populateMassege() {
  const savedMessage = localStorage.getItem('input-text');

  if (savedMessage) {
    console.log(savedMessage);
    input.value = savedMessage;
  }
}
