//Деструкторизации массивов

const fib = [1, 1, 2, 3, 5, 8, 13];

//Достаем первые три числа из массива

//const [a, b, c] = fib;
//console.log(a, b, c);//1 1 2

//При деструкторизации массива некоторые значения массива, можно пропускать, если надо достать 2 и 4 значения, то можно сделать таким способ

const [, a, , b] = fib;
console.log(a, b);//1 3

//Если есть многомерный массив

const line = [[10, 17], [14, 7]];

//Сохраним каждое число массива в константе

const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y)//10 17 14 7;

//Параметры по умолчанию тоже поддерживаются
//Есть массив с двумя именами, а мы попытаемся деструкторировать его в три константы

//const people = ['chris', 'sandra'];
//const [d, e, f = 'guest'] = people;
//console.log(d, e, f);//chris sandra guest

//Добавим и массив еще одно значение

//const people = ['chris', 'sandra', 'bob'];
//const [d, e, f = 'guest'] = people;
//console.log(d, e, f);//chris sandra bob

//Добавим поосле троеточия еще одно имя константы

const people = ['chris', 'sandra', 'bob'];
const [d, ...other] = people;
console.log(other);//(2) ["sandra", "bob"]

//Если функция принимает массив в качестве аргумента, то его тоже можно деструкторировать прямо в объявлении функции, работает также, как при структоризации объектов

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

//1 шаг - Находим всех зверей, которые говорят squeak
//Получаем все значения и ключи объекта с помощью метода Object.entries()
//Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in также перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как обьект обьявлен. Если существует нужда в определенном порядке, то  масив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);

const res = Object.entries(dict)

//2 шаг - Разбираем полученную структуру, чтобы найти те элементы с squeak
    
    //.filter((arr) => arr[1] === 'squeak');

//console.log(res) к 1 шагу;
//const res = Object.entries(dict)
//(4) [Array(2), Array(2), Array(2), Array(2)]
                //0: (2) ["duck", "quack"]
                //1: (2) ["dog", "wuff"]
                //2: (2) ["mouse", "squeak"]
                //3: (2) ["hamster", "squeak

//console.log(res) ко 2 шагу;
//.filter((arr) => arr[1] === 'squeak');
//0: (2) ["mouse", "squeak"]
//1: (2) ["hamster", "squeak"]

//3 шаг - Применим метод деструкторизации
.filter(([, value]) => value === 'squeak')

//console.log(res); к 3 шагу
//0: (2) ["mouse", "squeak"]
//1: (2) ["hamster", "squeak"]

//4 шаг - Достаем из массива только ключи где животные произносят 'squeak'
    .map(([key]) => key);
    console.log(res);//(2) ["mouse", "hamster"]

//Синтаксис деструкторизации позволяет комбинировать деструкторизацию для объектов и деструкторизацию для массивов
const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
}
//Получаем координаты точек start и end
//Используем синтаксис деструкторизации для объекта
const { coordinates: { start: [startX, startY], end: [endX, endY]} } = shape;
console.log(startX, startY, endX, endY);//10 15 17 15













































