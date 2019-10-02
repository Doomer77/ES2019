//SPRED оператор раскладывает массив на список не зависимых элементов, которые можно передать в другую функцию или использовать в другом массиве.
const arr = [1, 2, 3];

//До SPRED оператора что найти максимальное значение массива, надо было прописать так
//SPRED operator извлекает значения и передает их как значения в функцию
const res = Math.max.apply(Math, arr);
console.log(res);//3

//Со SPRED оператором
const res2 = Math.max(...arr);
console.log(res2);//3

//Если есть несколько массивов
const arr2 = [1, 2, 3, 4];
const arr3 = [5, 6, 7, 8];
//Находим максиму из двух массиов с помощью SPRED operator
const res3 = Math.max(...arr2, ...arr3);
console.log(res3);//8

//SPRED operator можно комбинировать с обычными аргументами
const res4 = Math.max(41, ...arr2, 5, 19, ...arr3, 10);
console.log(res4);//41

//Использование SPRED operator для создания новых массивов
//Создаем shallowCopy массива arr1
const shallowCopy = [...arr];
console.log(shallowCopy);//(3) [1, 2, 3]
//Теперь shellowCopy2 будеть содержать копии двух массивов
const shallowCopy2 = [...arr, ...arr2];
console.log(shallowCopy2);//(7) [1, 2, 3, 1, 2, 3, 4]
//И добавим собственные значения
const shallowCopy3 = [...arr, ...arr2, 43, 56, 77];
console.log(shallowCopy3);//(10) [1, 2, 3, 1, 2, 3, 4, 43, 56, 77]

//JavaScript метод apply() позволяет вызывать (выполнять) функцию как метод объекта, устанавливая ее контекст исполнения (this) в указанное значение, передавая при этом необходимые аргументы в виде массива (объекта Array), либо массивоподобного объекта.