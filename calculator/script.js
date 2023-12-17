let zero = document.querySelector('#zero');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let plus = document.querySelector('#plus');
let minis = document.querySelector('#minis');
let times = document.querySelector('#times');
let equal = document.querySelector('#equal');
let result = document.querySelector('.result');

zero.onclick = function(){add(0)};
one.onclick = function(){add(1)};
two.onclick = function(){add(2)};
three.onclick = function(){add(3)};
four.onclick = function(){add(4)};
five.onclick = function(){add(5)};
six.onclick = function(){add(6)};
seven.onclick = function(){add(7)};
eight.onclick = function(){add(8)};
nine.onclick = function(){add(9)};
plus.onclick = function(){add('+')};
minis.onclick = function(){add('-')};
times.onclick = function(){add('*')};

equal.onclick = function(){equals()};

function add(number){
 result.innerHTML += number;
}

function equals() {
  result.innerHTML = eval(result.innerHTML);
};

