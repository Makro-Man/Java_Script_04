'use strict'

let chusla = [12,19,2017,1,-3,-10,0,33,-60,9,15,29,-1998,21,10,14,-5,0.65,70,-111];
//sort min to max
function sortedMax(number1, number2){
    return number1-number2;
}
console.log(chusla);
chusla.sort(sortedMax);
console.log(chusla);
// sort max to min
console.log('------------------------------')
function sortedMin(number1, number2){
    return number2-number1;
}
console.log(chusla);
chusla.sort(sortedMin);
console.log(chusla);
//filter
console.log('------------------------------')
function filterPositive(number){
    return number>=0;
}
function filterNegative(number){
    return number<0;
}
console.log(chusla.filter(filterPositive));
console.log(chusla.filter(filterNegative));


