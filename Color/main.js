
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const randNum = (min, max) => 
    Math.floor(Math.random() * (max - min * 1) + min);

const randColor = () => 
    `rgb(${randNum(0, 255)}, ${randNum(0, 255)}, ${randNum(0, 255)})`;

// btn.addEventListener('click', function(e) {
//     this.style.backgroundColor = randColor;
//     console.log('Clicked');

//     container.textcontainer = 'Working !!!';
// });


document.querySelector('.btn')
      .addEventListener('click', function(e) {
      	// e.preventDefault;
        console.log('LINK');
        this.style.backgroundColor = randColor();
    });

document.querySelector('.container')
      .addEventListener('click', function(e) {
      	// e.preventDefault;
        console.log('LINK');
        this.style.backgroundColor = randColor();
    });