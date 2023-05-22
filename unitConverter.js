var feet = document.getElementById('feet');
 var inch = document.getElementById('inch');

feet.addEventListener('input', function(){
   
let f = this.value;
let i = f*12;
inch.value= i;
});

inch.addEventListener('input', function(){
let i= this.value;
let f= i/12;
if(!Number.isInteger(f)){
    f= f.toFixed(2);
};

feet.value = f;
});


var KiloGram = document.getElementById('kg');
 var Pounds = document.getElementById('lbs');

KiloGram.addEventListener('input', function(){
   
let kg = this.value;
let lbs = kg*2.20;
Pounds.value= lbs;
});

Pounds.addEventListener('input', function(){
let lbs= this.value;
let kg= lbs/2.20;
if(!Number.isInteger(kg)){
    kg= kg.toFixed(2);
};

KiloGram.value = kg;
});