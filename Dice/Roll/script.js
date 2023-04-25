

const dicePic = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn');
// console.log(dicePic);
// console.log(btnRoll);

btnRoll.addEventListener('click', () => {
    console.log('Button was clicked.');

    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice)
    dicePic.src = `dice-${dice}.png`;

});