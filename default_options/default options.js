//Параметры по умолчантю
//До появления данной функции было так:
// function fetchOrder(count, start) {
//     if(count === undefined) {
//         count = 10;
//     }

//     if(start === undefined) {
//         start = 0;
//     }

//     console.log('Getting', count, 'order starting from', start);
// }
// //Если не задать параметры функции!!!
// fetchOrder();//Getting 10 order starting from 0

//С применением параметров по умолчанию
function fetchOrder(count = 10, start = 0) {
    console.log('Getting', count, 'order starting from', start);
}
fetchOrder();//Getting 10 order starting from 0
fetchOrder(15);//Getting 15 order starting from 0
fetchOrder(15, 50);//Getting 15 order starting from 50

//Не обязательно присваивать значение каждому параметру
function fetchOrder2(count, start  = 0) {
    console.log('Getting', count, 'order starting from', start);
}
fetchOrder(15);//Getting 15 order starting from 0

//Параметры по умолчанию идут последними в функции
//Параметром по умолчанию может быть любой тип данных

//Если функция принимает объект параметром по умолчанию
function findProducts(opts = {minPrice: 10, maxPrice: 20}) {
    console.log(opts);
}
findProducts();//{minPrice: 10, maxPrice: 20}
findProducts({});//{}