// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//const { write } = require("@popperjs/core");

// Write your JavaScript code.

/*
При открытии сайта спрашиваем возраст пользователя, он его вводит. 
Сохраняем результат в переменную и выполняем проверку.
Если пользователь старше 18 лет — показываем ему приветствие и загружаем сайт.
Если младше — сообщаем, что наш сайт для лиц старше 18 лет, и перенаправляем на google.com.

//alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
let ageBox = prompt('Введите свой возраст');
ageBox > 18 ? alert("Приветствуем на LifeSpot! " + new Date().toLocaleString()) : alert(" Вы младше 18 лет.Вы будете перенаправены"); window.location.href = "http://www.google.com"

// Получим коллекцию всех элементов страницы
let elements = document.getElementsByTagName('*');

// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length}`);

let arr = [1, 2, 3]

arr.forEach(function (item, index, array) {

    console.log(item)

});



let elements = document.getElementsByTagName('input');
let elements = document.getElementsByClassName('video-container')
for (let i = 0; i <= elements.length; i = i + 1) {
    console.log(elements[i]);
}
// Получим первый элемент DOM в коллекции
let element = elements[0]; // Получим строковое значение
let elementText = element.value;
//let buttonIn = document.getElementById("myButton")
// Выведем во всплывающее окно
alert(elementText)
*/
let AgeSession = function AgeProv() { 
let session = new Map();
// Сохраним UserAgent
session.set("userAgent", window.navigator.userAgent)


// Запросим возраст пользователя и тоже сохраним
session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

// Проверка на возраст и сохранение сессии
if (session.get("age") >= 18) {
    let startDate = new Date().toLocaleString();

    alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
    session.set("startDate", startDate)
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com"
    a = true + 20 + "name"
}

// Вывод в консоль
for (let result of session) {
    console.log(result)
}
}
setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);
//AgeProv();

let contentFiler = function (inputString) { 
// Сохраняем текст пользовательского запроса.
//let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
// Находим контейнеры с видео, которые необходимо фильтровать
let elements = document.getElementsByClassName('video-container');
// Пробегаемся по контейнерам
for (let i = 0; i <= elements.length; i++) {
    // Вытаскиваем текст описания видео, которое необходимо отфильтровать
    let videoText = elements[i].getElementsByTagName('h2')[0].innerText;
    // Выполняем фильтрацию, сравнивая значения в нижнем регистре
    if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
        // Описание
        elements[i].style.display = 'none';
    } else {
        elements[i].style.display = 'inline-block';
    }
}
}     

var writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '<div class="review-button">' + `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +'</div>';
}

function AddReviews() //функция добавления отзывов
{
    let review = {}
    //сохраняем свойство имени 
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }
    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }
    //сохраняем текущее время
    review["date"] = new Date().toLocaleString()

    writeReview(review)
}

 //зарплаты в $
const salary = {
    Maria: 400,
    Sergey: 800,
    Jana: 750
};


salary.Maria = 800;
console.log(salary.Maria); 

salary.Maxim = 950; 
delete salary.Sergey;

for (let key in salary) {
    console.log(salary[key]);
}



