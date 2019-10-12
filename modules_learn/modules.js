function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  class Graph {
    addNode() {
      console.log("node added");
    }
  }
  
  const PI = 3.1415;
  
  //Как из этого файла сделать модуль, как сказать, что этот файл соберается экспортировать наружу все эти функции
  //Пишем следующую директиву
  export { add, subtract, multiply, divide, PI };
  
  export default Graph;
