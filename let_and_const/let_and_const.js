let name = 'Serg';
console.log(name);

//const нельзя изменять
// const pi = 3.14;
// pi = 4;

//можно измеять содержание массива, если присвоен в константе, но название массива менять нельзя
const names = ['Peter', 'Bod'];
console.log(names);

names.push('Jenny');
console.log(names);

//names = []; нельзя

//можно измеять содержание объекта, если присвоен в константе, но название объекта менять нельзя
const person = {
    name: 'Joe',
    age: 25
};
console.log(person);

person.name = 'Bobo';
console.log(person);

//person = 'Serg'; нельзя

//Проблема с var была из за области видимости, область видимости была вся функция
//let и const видны только в рамках кода, где объявленны
if(true){
    let a = 1;
}
//за блоком if переменная a уже не видна!!!

for(var i = 0; i < 3; i++){
    setTimeout(function() {
        console.log(i);
    }, i*100);
}//три 3

for(let i = 0; i < 3; i++){
    setTimeout(function() {
        console.log(i);
    }, i*100);
}//1 2 3