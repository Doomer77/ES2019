//До ES 2019
const x = 10;
const y = 30;

const point = {
    x: x,
    y: y
}

//В ES 2019 
const p = {
    x, y
}

//Упростился и способ создания методов оъектов
//До ES 2019
const point2 = {
    x: x,
    y: y,
    draw: function (){
        //....
    }
}
//В ES2019
const p2 = {
    x, 
    y,
    draw(parametrs){
        //....
    }
}
 
//При создания оъекта можно использовать значение ключей, которое вычесляется динамически
const prefix = '_blah_';
//Мы можем использовать константу prefix для орпеделения ключей объекта
const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23 
};
console.log(data);//{_blah_name: "Bob", _blah_age: 23}

//В ES 2015 появилась функция, которая позволяет локанично копировать свойства из одного объекта в другой

//1 объект с опциями по умолчанию
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
}

//2 объект данные полученные от пользователя
const opts = {
    user: 'john',
    password: 'utopia'
}

//Создадим объект который будет объеденять опции из первого объекта и из второго объекта, но опции переданные пользователем имеют более высокий приоритет

//Для реализации в ES2015 появилась новый метод Object.assign() - Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.

Object.assign(defaults, opts);
console.log(defaults);//{host: "localhost", dbName: "blog", user: "john", password: "utopia"}

//Чтобы не изменять объект defaults в нашем коде, доюавим слева еще один аргумент - пустой объект. Теперь в него будут скопированны значения из defaults, а за тем из opts 

const res = Object.assign({}, defaults, opts);
console.log(res);//{host: "localhost", dbName: "blog", user: "john", password: "utopia"}

//Object.assign() - удобно использовать для создания поверхностного копирования объектов
const person = {
    name: 'Bob',
    friends: ['Mark', 'Jacob']
}

//Создаем shallow copy
//Добавляем в пустой объект все значения из объекта person
const shallowCopy = Object.assign({}, person);
console.log(shallowCopy);//{name: "Bob", friends: Array(2)}
//Добавим в массив friends еще одно значение
person.friends.push('Jane');
console.log(shallowCopy);//{name: "Bob", friends: Array(3)}
//То это значение появится в ShallowCopy




















