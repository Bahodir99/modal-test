var elmodal = document.querySelector('.modal');
var elclose = document.querySelector('.btn__close');
var elopen = document.querySelector('.btn__open');

elopen.addEventListener('click' , function(){
    elmodal.classList.add('open')
})

elclose.addEventListener('click', function(){
    elmodal.classList.remove('open')
})