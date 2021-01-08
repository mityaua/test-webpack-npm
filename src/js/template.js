// Массив данных
const fruits = ['kiwi', 'orange', 'banana', 'apple']

// Находим в DOM список
const fruitsRef = document.querySelector('#fruit-list');

// Делаем иттерацию по массиву и возвращаем разметку для каждого элемента
const markup = fruits.map(item => `<li><a href="">${item}</a></li>`).join('');

// Добавляет результат разметки в DOM
fruitsRef.insertAdjacentHTML('beforeend', markup);