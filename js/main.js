var elBody = document.querySelector('body');
var elBtn = document.querySelector('.btn-darkk');
var elBtn2 = document.querySelector('.btn-darkk-mobile');

elBtn.addEventListener("click", function(){
    elBody.classList.toggle('dark');
});

elBtn2.addEventListener("click", function(){
    elBody.classList.toggle('dark');
});