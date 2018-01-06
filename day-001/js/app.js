console.log('abc');

document.querySelector('.box-left').style.height = document.querySelector('.box-right').clientHeight + 'px';

document.querySelector('#toggle-login').addEventListener('click', function() {
    document.querySelector('#sign-up').classList.add('hide');
    document.querySelector('#login').classList.add('active');
});

document.querySelector('#toggle-sign-up').addEventListener('click', function() {
    document.querySelector('#sign-up').classList.remove('hide');
    document.querySelector('#login').classList.remove('active');
});

document.querySelector('#illustration-box').addEventListener('click', function() {
    document.querySelector('.section-left').classList.add('hide');
    document.querySelector('.section-right').style.zIndex = 100;
});