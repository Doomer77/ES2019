//Шаблонные строки
//До ES2019
const user = 'Bob';
const num = 17;
const  txt = 'Hello, ' + user + ' you have ' + num + ' letters in your inbox';
console.log(txt);

//SE2019
const txt2 = `Hello, ${user} you have ${num} letters in your inbox`;
console.log(txt2);//Hello, Bob you have 17 letters in your inbox

//Кроме значения переменных мы можем поставить в placeholder любое выражение в JS, которое вернет какое либо значение
const txt3 = `Hello, ${ 2 + 2 } you have ${num} letters in your inbox`;
console.log(txt3);//Hello, 4 you have 17 letters in your inbox

//В такой строке можно поставить результат вызова функции
const txt4 = `Now is ${Date.now()}`;
console.log(txt4);//Now is 1570166523660

//Шаблонные строки применяют, когда надо сделать многострочный код
//До ES2019
const html = 
    '<ul>' +
    '<li>Item One</li>' +
    '<li>Item Two</li>' +
    '</ul>';

//ES2019
const tamplateHtml = `
    <ul>
        <li>Item One</li>
        <li>Item Two</li>
    </ul>    
`;
console.log(tamplateHtml);
//<ul>
//<li>Item One</li>
//<li>Item Two</li>
//</ul> 

//Многострочные литералы можно комбинировать со значениями из JS
const items = ['tea', 'coffee'];
const tamplateHtml2 = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
    </ul>    
`;
console.log(tamplateHtml2);
//<ul>
//<li>tea</li>
//<li>coffee</li>
//</ul> 
