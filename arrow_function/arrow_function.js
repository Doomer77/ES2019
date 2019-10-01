//Фукции в js это объекты
//Функции можно передавать аргументом в другие функции
//Можно присваивать их значение переменным
//Можно возвращать как результат из других функций

function square(x){
    return x*x;
}

//Arrow-functions

const sq = (x) => x*x;
console.log(sq(2));//4

//Если функция принимает только один аргумент, то синтаксис будем таким
const sq2 = x => x*x;
console.log(sq2(3));//9

const arr = ['1', '3', '2', '4'];
//преобразование в числовые данные
const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0);
console.log(res);

//Если функция многострочная, то синтаксис будет таким
const sq3 = (x) => {
    return x*x;
}

//Стрелочные функции сохраняют ключевое значение this!!!!

// const greeter = {
//     greet: function (name){
//         console.log('Hello', name);
//     },

//     grettAll: function (names){
//         names.forEach(function(name) {
//             this.greet(name);
//         });
//     }
// };

// greeter.grettAll(['Bob', 'Mark', 'Pete']);//this.greet is not a function

const greeter2 = {
    greet: function (name){
        console.log('Hello', name);
    },

    grettAll: function (names){
        names.forEach((name) => {
            this.greet(name);
        });
    }
};

greeter2.grettAll(['Bob', 'Mark', 'Pete']);//Hello Bob Hello Mark Hello Pete

//У функции стрелок нет свойства prototype, из нее нельзя создавать новые объекты
// const Person = () => {

// };

// new Person();//Person is not a constructor