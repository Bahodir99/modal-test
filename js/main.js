var elModal = document.querySelector('.modal');
var elClose = document.querySelector('.btn__close');
var elOpen = document.querySelector('.btn__open');

elOpen.addEventListener('click' , function(){
    elModal.classList.add('open')
})

elClose.addEventListener('click', function(){
    elModal.classList.remove('open')
})