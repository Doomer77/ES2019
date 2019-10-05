//Spread operator for Object
//Spread operator для объектов работает также как метод Object.assing(), но код выглядит более локанично
const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts = {
    user: 'john',
    password: 'utopia'
}; 

//Создадим третий объект, объединяющий два объекта, но объединяет таким образом, что опции, которые передал пользователь имеют больший приоритет
//С помощью Object.assing()
const result = Object.assign({}, defaults, opts);

//С помощью Spread operator
const res = {...defaults, ...opts};

//Очень похоже как работает Spread operator для массивов, только в масиивах Spread operator раскрывает список аргументов, а в объектах раскрывается список ключей и свойств, которые будут присвоенны другому объекту.

console.log(res);//{host: "localhost", dbName: "blog", user: "john", password: "utopia"} 

//!!!Spread operator можно комбинировать с любым другим синтаксисом, который работает при создании объекта

//Добавим новую константу к нашему объекту
const port = '8080'; 

//Можно добавить метод в этот объект


const res2 = {
    ...defaults, 
    ...opts, 
    port,
    connect() {

    }
};
console.log(res2);//{host: "localhost", dbName: "blog", user: "john", password: "utopia", port: "8080", connect: ƒ connect()}
