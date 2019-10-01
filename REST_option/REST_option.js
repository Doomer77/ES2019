//REST - parametr

//До ES2015
max(1, 3);
max(1, 3, 3, 4, 5);

function max(){
    //pseudo-arrey
    var numbers = Array.prototype.slice.call(arguments);
}

//REST-parameter-особый параметр функции, который формирует в настоящий массив все те аргументы, которые не были присвоены обычным параметром
//Новый вид записи
function max2(...numbers) {
    console.log(numbers);
}
max2(1, 3, 4);//[1, 3, 4]
max2(1);//[1]
max2();//[]

//Перед REST параметром могут идти обычные параметры функции
function max3(a, b, ...numbers) {
    console.log(numbers);
}
max3(1, 3, 5);//[3]

//REST параметр обязан идти последним в функции
//Не должно быть больше одного REST параметра

















