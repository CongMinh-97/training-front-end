const quotes = [
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
];

const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
];

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const container = document.querySelector('.container');
const quoteBox = document.querySelector('#quote-box');
const newQuote = document.querySelector('#new-quote');
const tweet = document.querySelectorAll('#tweet-quote');

newQuote.addEventListener('click', function () {
    let indexRadomQuote = randomInteger(0, quotes.length - 1);
    let indexRadomColor = randomInteger(0, colors.length - 1);
    // change Text
    text.innerText = quotes[indexRadomQuote].quote;
    author.innerText = quotes[indexRadomQuote].author;
    // change color
    container.style.backgroundColor = colors[indexRadomColor];
    quoteBox.style.color = colors[indexRadomColor];
    newQuote.style.background = colors[indexRadomColor];
    tweet[0].style.backgroundColor = colors[indexRadomColor];
    tweet[1].style.backgroundColor = colors[indexRadomColor];
});






  