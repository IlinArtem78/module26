function showSlide(currentClass, nextClass) {
    const current = document.querySelector(`.${currentClass}`);
    const next = document.querySelector(`.${nextClass}`);

    if (current) current.style.display = "none";
    if (next) next.style.display = "block";
}

///Навигация кнопками 
//первый сладй ( с 1 на 2)
btn1Next.addEventListener('click', function (e) {
    const hide1img = document.getElementsByClassName('img-first');
    hide1img[0].style.display = "none"; 

    if (document.getElementsByClassName('img-second').length > 0) { 
        document.getElementsByClassName('img-second')[0].style.display = "block"; 
    }

});

//второй слайд (с 2 на 1)
btn2prev.addEventListener('click', function (e) {
    const hide2img = document.getElementsByClassName('img-second');
    hide2img[0].style.display = "none"; 

    if (document.getElementsByClassName('img-first').length > 0) { 
        document.getElementsByClassName('img-first')[0].style.display = "block"; 
    }

});
//второй слайд(с 2 на 3)
btn2Next.addEventListener('click', function (e) {
    const hide2img = document.getElementsByClassName('img-second');
    hide2img[0].style.display = "none"; 

    if (document.getElementsByClassName('img-third').length > 0) { 
        document.getElementsByClassName('img-third')[0].style.display = "block"; 
    }

});



//третий слайд (с 3 на 2)
btn3prev.addEventListener('click', function (e) {
    const hide3img = document.getElementsByClassName('img-third');
    hide3img[0].style.display = "none";

    if (document.getElementsByClassName('img-second').length > 0) {
        document.getElementsByClassName('img-second')[0].style.display = "block";
    }

});



//навигация с помощью движения мыши
//слайд 1 (с 1 на 2)
/*
const pic1To2 = document.getElementsByClassName('first');
pic1To2[0].addEventListener('wheel', function (e) {
    const hide1img = document.getElementsByClassName('img-first');
    hide1img[0].style.display = "none";
  
    if (document.getElementsByClassName('img-second').length > 0) {
        document.getElementsByClassName('img-second')[0].style.display = "block";
    }
}); 
//слайд 2 (с 2 на 1)
const pic2To1 = document.getElementsByClassName('second');
pic2To1[0].addEventListener('wheel', function (e) {
    const hide2img = document.getElementsByClassName('img-second');
    hide2img[0].style.display = "none";



    if (document.getElementsByClassName('img-first').length > 0) {
        document.getElementsByClassName('img-first')[0].style.display = "block";
    }
}); 

//слайд 2 (с 2 на 3)
const pic2To3 = document.getElementsByClassName('second');
pic2To3[0].addEventListener('wheel', function (e) {
    const hide2img = document.getElementsByClassName('img-second');
    hide2img[0].style.display = "none";
    

    if (document.getElementsByClassName('img-third').length > 0) {
        document.getElementsByClassName('img-third')[0].style.display = "block";
    }
}); 


//слайд 3 (с 3 на 2)
const pic3to2 = document.getElementsByClassName('third');
pic3to2[0].addEventListener('wheel', function (e) {
    const hide3img = document.getElementsByClassName('img-third');
    hide3img[0].style.display = "none";
   

    if (document.getElementsByClassName('img-second').length > 0) {
        document.getElementsByClassName('img-second')[0].style.display = "block";
    }
});
*/



document.querySelector('.first')?.addEventListener('wheel', () => showSlide('img-first', 'img-second'));
document.querySelector('.second')?.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        showSlide('img-second', 'img-third'); // Вниз (вперёд)
    } else {
        showSlide('img-second', 'img-first'); // Вверх (назад)
    }
});
document.querySelector('.third')?.addEventListener('wheel', () => showSlide('img-third', 'img-second'));


