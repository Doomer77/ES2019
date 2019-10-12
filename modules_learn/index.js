// import { add, subtract, PI } from "./modules";

// console.log(PI);

//С каждой стороны - со стороны экспорта и импорта можно переименовывать

// import { add as a, subtract, PI } from "./modules";

// console.log(a(1, 1));

//Чтобы импортировать все из файла modules

// import * as calc from "./modules";

// console.log(calc);

//Чтобы использовать какую нибудь функцию из объекта calc

// import * as calc from "./modules";

// console.log(calc.add(1, 1));

//Кроме экспорта с именами, фаил может представить один дефолтный экспорт у которого не будет имени и будет экспортироваться по умолчанию
//Если экспорт идет по умолчанию, то мы пишем просто имя то переменной, в которую хотим сохранить то что экспортируем по умолчанию
// import Graph from "./modules";
// console.log(typeof Graph);

//Если со стороны иморта мы хотим его переимновать, нам не надо писать as , мы просто переименовываем
// import G1 from "./modules";
// console.log(typeof G1);

//Можно миксовать между собой дефолтные импорты и экспорты и именованные
// import G1, { add, subtract } from "./modules";
// console.log(typeof G1);

// import G1, * as calc from "./modules";
// console.log(typeof G1);
// console.log(calc.add(123, 123));

//Глобальные зависимости, глобальной библиотеки
import joker from "one-liner-joke";

console.log(joker.getRandomJoke().body);