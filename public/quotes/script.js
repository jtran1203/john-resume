const quotes = [
 {
  name:'Marilyn Monroe',
  quote:'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.'
 },
 {
  name:'Mark Twain',
  quote:'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.'
 },{
  name:'Francis Chan',
  quote:'Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter.'
 },
 {
  name:'Leonardo Da Vinci',
  quote:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
 }
 ,
 {
  name:'J.K. Rowling',
  quote:'It is our choices, that show what we truly are, far more than our abilities.'
 }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const  quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quotes.length);
console.log(number)
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;

}
