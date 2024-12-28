﻿

const writeReview = review => {
    let likeCounter = '';

    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: white">Рейтинг:</b>   ' + review.rate;
    }
    

    // Запишем результат
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}



/*
Задание 30.2.4
У нас в проекте есть страница about.html, на которую можно добавлять комментарии. 

Давайте расширим функционал этой страницы, добавив возможность оставлять отзывы 
(и у отзыва, в отличие от комментария, будет новое свойство — рейтинг).

Рейтинг отзыва отражает то, насколько он полезен для других пользователей. 

Сделайте так, чтобы на страницу вдобавок к обычным комментариям 
(которые добавляются сейчас) можно было добавить отзыв, у которого есть рейтинг, по умолчанию равный 0. 

Реализация должна быть следующая: 

Создаем объект, представляющий комментарий, со всеми свойствами, что уже есть сейчас. 
Запрашиваем у пользователя все данные как для обычного комментария (как и происходит сейчас).
Затем спрашиваем с помощью конструкции confirm(), хочет ли пользователь, чтобы его комментарий 
могли оценить другие пользователи.
Если да, то используем уже существующий комментарий в качестве прототипа и создаем из него 
новый объект — отзыв, который будет иметь дополнительное свойство — rate (т.е. рейтинг).
Затем публикуем получившийся объект  на странице (как уже реализовано сейчас). 
И ещё тут нужно будет проверить, действительно ли объект является отзывом. Если является — публикуем также и его рейтинг.


*/

function AddReviews() //функция добавления отзывов
{
    // Создаем объект обычного комментария
    let comment = {}

    // Запросим имя
    comment.author = prompt("Как вас зовут ?")
    if (comment.author == null) {
        return
    }

    // Запросим текст
    comment.text = prompt("Оставьте отзыв")
    if (comment.text == null) {
        return
    }
    // Сохраним текущее время
    comment.date = new Date().toLocaleString()

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?');

    if (enableLikes) {
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;

        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else {
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }


}





