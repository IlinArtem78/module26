// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//const { write } = require("@popperjs/core");

// Write your JavaScript code.


    /*
    Для хранения всех данных сессии (время начала, user-agent, возраст пользователя) использовался объект window.sessionStorage.
Возраст у пользователя запрашивался только один раз, при первичном входе на страницу.
Приветствие показывалось только один раз, при первичном входе на страницу.
Если пользователь уже один раз прошел проверку возраста, он должен спокойно обновлять страницу и не видеть никаких всплывающих окон. 
Время начала сессии должно также проставляться только один раз, при первичном входе на страницу. 
    */

    // Проверка на возраст и сохранение сессии

        let checker = function (newVisit) {
            if (window.sessionStorage.getItem("userAge") >= 18) {
                // Добавим проверку на первое посещение, чтобы не показывать приветствие
                // лишний раз
                if (newVisit) {
                    alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
                }
            }
            else {
                alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
                window.location.href = "http://www.google.com"
            }
        }

let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
}


function handleSession(logger, checker) {

    // Проверяем дату захода и проставляем, если новый визит
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // Проверяем userAgent и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // Проверяем возраст и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)

        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
         при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    } else {

        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }
    logger()
}

setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);


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
/*
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

/*




