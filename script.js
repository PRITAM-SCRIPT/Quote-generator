let quote=document.querySelector('.quote');
let btn=document.querySelector('.new-btn');
let person=document.querySelector('.person');

const quotes=[{
    quote:`"Be yourself; everyone else is already taken."`,
    person:`― Oscar Wilde`
},
{
    quote:`"So many books, so little time."`,
    person:`― Frank Zappa`
},
{
   quote:`"You only live once, but if you do it right, once is enough."`, 
   person:`― Mae West`
},
{
    quote:`“Be the change that you wish to see in the world.”`,
    person:`― Mahatma Gandhi`
},
{
    quote:`“In three words I can sum up everything I've learned about life: it goes on.”`,
    person:`― Robert Frost`
}]
btn.addEventListener("click",function(){
    let randomNum = Math.floor(Math.random()*quotes.length); 

 quote.innerText=quotes[randomNum].quote;
 person.innerText=quotes[randomNum].person;

})
