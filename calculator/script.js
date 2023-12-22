const zero = document.querySelector('.zero');
const one  = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const rightbracket = document.querySelector('.rightbracket');
const leftbracket = document.querySelector('.leftbracket');
const percent = document.querySelector('.percent');
const plus = document.querySelector('.plusButton');
const subs = document.querySelector('.subsButton');
const divide = document.querySelector('.divideButton');
const multip = document.querySelector('.multipButton');
const period = document.querySelector('.periodButton');
const equal = document.querySelector('.equalsignButton');
const remove = document.querySelector('.delete'); 
const theresult = document.querySelector('.theresult')
let result = document.querySelector('.resultNumber');
let rrss = result.innerHTML ;

function addtoresult(element){
if (result.innerHTML.length < 30) {
    result.innerHTML += element;
}

}
function displayresult(){
theresult.style.animation= 'displayresult 0.5s forwards';
}
function equalsto(){
theresult.innerHTML = ' = ' + eval(result.innerHTML);
}
function removeresult(){
theresult.style.animation= 'undisplayresult 0.5s forwards';
result.innerHTML = ' ';
}

zero.onclick = function(){addtoresult(0)};
one.onclick = function(){addtoresult(1)};
two.onclick = function(){addtoresult(2)};
three.onclick = function(){addtoresult(3)};
four.onclick = function(){addtoresult(4)};
five.onclick = function(){addtoresult(5)};
six.onclick = function(){addtoresult(6)};
seven.onclick = function(){addtoresult(7)};
eight.onclick = function(){addtoresult(8)};
nine.onclick = function(){addtoresult(9)};
rightbracket.onclick = function(){addtoresult(")")};
leftbracket.onclick = function(){addtoresult("(")};
plus.onclick = function(){addtoresult("+")};
subs.onclick = function(){addtoresult("-")};
divide.onclick = function(){addtoresult("/")};
multip.onclick = function(){addtoresult("*")};
percent.onclick = function(){addtoresult("%")};
period.onclick = function(){addtoresult(".")};
equal.onclick= function(){equalsto();displayresult();limitedchracters()};
remove.onclick = function(){removeresult()};

