//Prototypes

// const animal = {
//     say: function () {
//         console.log(this.name, 'goes', this.voice)
//     }
// };

//Создадим два объекта, у которых есть общее свойство say 
// const dog = {
//     name: 'dog',
//     voice: 'woof',
//     // say: function () {
//     //     console.log(this.name, 'goes', this.voice);
//     // }
// };

// const dog = Object.create(animal);
// //Возвращаем объекту dog его свойства
// dog.name = 'Dog';
// dog.voice = 'woof';
// dog.say();//Dog goes woof
// //Object.setPrototypeOf(dog, animal);

// const cat = {
//     name: 'cat',
//     voice: 'meow',
//     // say: function () {
//     //     console.log(this.name, 'goes', this.voice);
//     // }
// };
// Object.setPrototypeOf(cat, animal);


// dog.say();//dog goes woof
// cat.say();//cat goes meow

//Вынесем функцию say в отдельный объект (смотри выше)
//Но объекты cat и dog не знают о функции say в объекте animal, нужно установать эту связь:
//1 способ - использование функции Object.setPrototypeOf - влияет на произодительность кода. Не рекомендуется использовать.(смотри выше)
//2 способ - Object.create(); - Метод Object.create() создаёт новый объект с указанными объектом прототипа и свойствами.(смотри выше)
//3 способ, вынесем создание логики нового животного и установки прототипной связи в отдельную функцию, и передадим ей два аргумента name и voice

// function createAnimal (name, voice) {
//     const result = Object.create(animal);
//     result.name = name;
//     result.voice = voice;
//     return result;
// };

// const dog = createAnimal('Dog', 'woof');
// const cat = createAnimal('Cat', 'meow');

// dog.say();//Dog goes woof
// cat.say();//Cat goes meow

//4 способ с помощью ключевого слова New
function Animal (name, voice) {
    this.name = name;
    this.voice = voice;
};

//У каждой обычной функции в JS есть свойство prototype изначально - пустой объект

Animal.prototype.say = function () {
    console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

dog.say();//Dog goes woof
cat.say();//Cat goes meow

//Создадим объект без прототипа
const obj = Object.create(null);
console.log(obj);//{}












