
//* https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let delenie  = distanceToPump/mpg;
  
    
    if (delenie <= fuelLeft) {
      return true
    }
    return false;
    
  };


  //* https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

  function billboard(name, price = 30){
    let sum = 0
    for (let i = 0; i < name.length; i++ ) {
      sum += price
    }
      return sum
    } 



  //  https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

  function abbrevName(name){
    const a = name.split(" ");
    const firstName = a[0];
    const lastName = a[1]
    return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase()
    
    }


// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
//Quarter of the year

    const quarterOf = (month) => {

      if (month <= 3){
        return 1
      } else if (month >= 4 && month <= 6){
        return 2
      } else if (month >= 7 && month <= 9){
        return 3
      } else {
        return 4}
        
      }
// или
      const quarterOf2 = (month) => {
        return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
        
      }



      // https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
      //Bit Counting
      var countBits = function(n) {

        const base = (n).toString(2).split('');
        
     
        const result = base.reduce((sum, num) => sum + Number(num), 0);
        
        return result;
     };





     //https://www.codewars.com/kata/5a580064e6be38fd34000147/train/javascript
     //Create Four Letter Birding Codes from Bird Names
     function birdCode(arr){
      return arr.map(el => buildCode(el))
    }
    
    function buildCode(str) {
      const arr = str.split(/[ -]+/);
      let newStr = '';
    
      switch (arr.length) {
        case 1:
          newStr = arr[0].slice(0, 4);
          break;
        case 2: {
          newStr = arr[0].slice(0, 2);
          newStr += arr[1].slice(0, 2);
          break;
        }
        case 3: {
         newStr = arr[0].slice(0, 1);
          newStr += arr[1].slice(0, 1);
    
          newStr += arr[2].slice(0, 2);
          break;
        }
        case 4:
          newStr = arr.map(el => el.slice(0, 1)).join('')
          break;
      }
    
      return newStr.toUpperCase();
    }
      


    //https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
    //Does my number look big in this?
    function narcissistic(value) {
      const _value = String(value).split('');
    
      let _result = 0;
    
      for (ch of _value) {
        const num = parseInt(ch, 0)
    
        _result += Math.pow(num, _value.length);
      }
    
      return _result === value;
    }


    //Find the missing letter
    //https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

    function findMissingLetter(array) {
      let first = array[0].charCodeAt(0)
      for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
          return String.fromCharCode(first + i)
        }
      }
      throw new Error("Invalid input")
    }


    //https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
    //Friend or Foe?
    function friend(friends){
      return friends.filter(el => el.length === 4);
    }

    // Multiples of 3 and 5.
    //https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
    function solution(number){
      var sum = 0;
      
      for(var i = 1;i< number; i++){
        if(i % 3 == 0 || i % 5 == 0){
          sum += i
        }
      }
      return sum;
    }

    //https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
    //Sum of positive
    function positiveSum(arr) {
      return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
   }

   //https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
   //Which are in?

   function inArray(a1, a2) {
    var str = a2.join(' ');
    return a1.filter(s => str.indexOf(s) !== -1).sort();
  }


  //  Задача на проверку уникальных букв в двух строках

  function solve(a,b){
    return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
   }


   //Задача на сортировку массива перывй самый большой элемент, первый самый маленький, второй самый болшой и т. д.
   function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
  }

  //Найти минимальное количество камней, которые нужно убрать со стола, чтобы камни в каждой паре соседних камней имели разные цвета.
  function solve(stones) {
    let count = 0
    for (let i = 1; i <= stones.length; i++) {
      if (stones[i] === stones[i-1]) { count++ }
    }
    return count
  }

  
  //Найти в строке гласные символы aeiou
  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  //Найти номер буквы в алфавите и переобразовать строку в эти номера
  function alphabetPosition(text) {
    return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
  }


  //Отсортировать только нечетные цифры из массива

  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }