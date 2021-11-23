

let img = document.querySelector(".graphs");
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');


btn1.addEventListener('click', () => {
    img.src = 'images/lin_reg_tsla_tweet_copy.png';
})

btn2.addEventListener('click', () => {
    img.src = 'images/lin_reg_tsla_spy_copy.png';
})

btn3.addEventListener('click', () => {
    img.src = 'images/lin_reg_combined _copy.png';
})