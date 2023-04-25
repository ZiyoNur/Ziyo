
let number = Math.trunc(Math.random() * 10000) + 1;
// const randomNum = document.querySelector('h1').textContent = number;

document.querySelector('.btn').addEventListener('click', () => {
    number = Math.trunc(Math.random() * 10000) + 1;
    const randomNum = document.querySelector('h1').textContent = number;
    document.querySelector('.container').style.width = '800px';
    document.querySelector('.container').style.height = '600px';
});

document.querySelector('.btn-reset').addEventListener('click', () => {
    document.querySelector('.heading').textContent = '?';
    document.querySelector('.container').style.width = '500px';
    document.querySelector('.container').style.height = '500px';
    document.querySelector('body').style.backgroundColor = '#A7CA7E';
    document.querySelector('.container').style.backgroundColor = '#CCCCFF';
});

document.querySelector('.hello').addEventListener('click', () => {
    document.querySelector('.heading').textContent = 'Welcome';
    document.querySelector('.container').style.width = '1200px';
    document.querySelector('.container').style.height = '600px';
});

document.querySelector('.bye').addEventListener('click', () => {
    document.querySelector('.heading').textContent = 'Thanks';
    document.querySelector('.container').style.width = '1200px';
    document.querySelector('.container').style.height = '600px';
});