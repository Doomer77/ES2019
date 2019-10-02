//Деструкторизация позволяет локанично достать значения из какой либо структуры данных массива или объекта.

//Простой пример
const person = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 27
};
//Сохраним значения firstName и lastName в отдельные переменные, чтобы не писать везде наименование объекта
//Старых версях JS выглядело примерно вот так
//const firstName = person.firstName;
//const lastName = person.lastName;

//С помощью деструкторизации код выглядит на много локаничней - в фигурных скобках перечесляем константы, которые хотим достать из объекта person
const {firstName, lastName} = person;
console.log(firstName, lastName);//Peter Smith

//Когда используется такой синтаксис, то названия констант firstName, lastName будут совпадать с названием полей объекта person

//Если объект имеет внутреннюю структуру
const person2 = {
    name: {
        first: 'Peter',
        last: 'Smith',
    },
    age: 27,
    role: 'admin'
};
//const { name: {first, last} } = person2;
//console.log(first, last);//Peter Smith

//С помощью деструкторизации можно переименовать те свойства, которые достаются из объекта 
//Можно сакзать, что поле first, которое мы достали из объекта, будет сохранено в константу, которая будет называться firstName, а last в lastName
const {name: {first: firstName2, last: lastName2} } = person2;
console.log(firstName2, lastName2);//Peter Smith

//В деструкторизации можно указать значение по умолчанию
//На пример в объекте есть свойство role, а может и не быть, и если этого свойства нет, то по умолчанию оно будет равно user, и попробуем достать его из объекта person
const { role = 'user' } = person2;
console.log(role);//user
//И если мы добавим свойство role со значением admin, то свойство по умолчанию применяться не будет

//Такая техника не будет работать, если свойство по умолчанию вложенное
//const {permissions: {role = 'user'} } = person2;
//console.log(role);//Cannot destructure property `role` of 'undefined' or 'null'.
//Это ограничение можно обойти, если дать всему permissions объект по умолчанию
//const {permissions: {role = 'user'} = {} } = person2;
//console.log(role);//user

//Одно из самых полезных свойств деструкторизации!!!
//Деструкторизация аргументов функции
function connect ({
    host = 'localhost',
    port = 12345,
    user = 'guest'}) {
        console.log('user:', user, 'port:', port, 'host:', host);
}

//Если в аргументах передать пустой объект, то функция примет параметры по умолчанию
connect({});//user: guest port: 12345 host: localhost

//Если хотя бы один из параметров был добавлен, то функция примет его на входе
connect({port: 1111});//user: guest port: 1111 host: localhost

//Последний аспект деструкторизации объектов это REST элемент, работающего также, как REST аргументы в функции, собирая в отдельный объект все те свойства, которые не были присвоены переменным
//Синтаксис выглядит приблизительно так
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};
//Достаем значение duck из объекта diсt

//const {duck} = dict;
//console.log(duck);//quack

//Создаем новую константу otherAnimals, в которую попадут все значения, которые не были деструкторированы в выражении const {duck} = dict;

const { duck, ...otherAnimals} = dict;
console.log(otherAnimals);//{dog: "wuff", mouse: "squeak"}

//!!!Правила для REST элементов такие же как для REST параметров!!!



























