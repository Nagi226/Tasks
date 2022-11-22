// 1
function testSize(num) {

  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
  }
  
  testSize(7);


  // 2
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2	) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
    } else if (strokes >= par + 3) {
    return names[6];
    } 
    else {
    return "Change Me";

}}

golfScore(5, 4);

  // 3 Выбор из множества вариантов с операторами Switch

  function caseInSwitch(val) {
    let answer = "";
  switch (val) {
    case 1:
      answer ="alpha";
      break;
    case 2:
      answer ="beta";
      break;
    case 3:
      answer ="gamma";
      break;
     case 4:
      answer ="delta";
      break;
  }
    return answer;
  }
  
  caseInSwitch(1);


// 4
  function switchOfStuff(val) {
    let answer = "";
  
    switch (val) {
      case "a":
        answer ="apple";
        break;
      case "b":
        answer ="bird";
        break;
      case "c":
        answer ="cat";
        break;
  
   
    default:
      answer ="stuff";
      break;
    }
  
    return answer;
  }
  
  switchOfStuff(1);


  // 5 Несколько идентичных опций в операторах switch
  function sequentialSizes(val) {
    let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  
  }
    return answer;
  }
  
  sequentialSizes(1);

// 6
  function chainToSwitch(val) {
    let answer = "";

  
   switch (val) {
   case "bob":
   answer = "Marley";
   break;
   case 42:
   answer = "The Answer";
   break;
   case 1:
   answer = "There is no #1";
   break;
   case  99:
   answer = "Missed me by this much!";
   break;
   case 7:
   answer = "Ate Nine";
   break;
  
    }
  
    return answer;
  }
  
  chainToSwitch(7);



  // 7
function abTest(a, b) {
    // Only change code below this line
  if (a <0 || b < 0) {
    return undefined
  }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);


  // 8 Counting Cards 

  let count = 0;

function cc(card) {

if (card == 2 || card ==3 || card ==4 || card ==5 || card ==6 ) {
    count += 1;
  } else if (card ==7||card ==8||card ==9) {
    } else if (card == 10 || card =='J' || card =='Q' || card =='K' || card =='A') {
      count -= 1;
    } 
    else {
    return "Change Me";

}

if(count > 0) return count + " Bet"
else return count + " Hold";


}
  
  
cc(2); cc(3); cc(7); cc('K'); cc('A');


//
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


//Accessing Object Properties with Dot Notation Доступ к свойствам объекта с помощью записи через точку

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation Доступ к свойствам объекта с помощью нотации скобок
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line



//Accessing Object Properties with Variables Обновление свойств объекта
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line


//Updating Object Properties

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder"; // Dot notation
myDog["name"] = "Happy Coder"; // Bracket notation


//Add New Properties to a JavaScript Object

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.

myDog.bark = "woof"; // Dot notation
myDog["bark"] = "woof"; // Bracket notation


//Delete Properties from a JavaScript Object
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;


//Using Objects for Lookups

// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  // Only change code below this line

  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");



// Generate Random Fractions with JavaScript


function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}


//Generate Random Whole Numbers with JavaScript 

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}


//Generate Random Whole Numbers within a Range

// Example
function ourFunction(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourFunction(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

 
// Use the parseInt Function

function convertToInteger(str) {
  return parseInt(str, 2);
}



// Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}

//Use Recursion to Create a Countdown
function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// Compare Scopes of the var and let Keywords

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}



// Prevent Object Mutation
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// Use Destructuring Assignment to Assign Variables from Arrays



let a = 8, b = 6;
// change code below this line
 [a,b] = [b,a];
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8
    

// Use Destructuring Assignment to Pass an Object as a Function's Parameters


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// change code below this line
const half = ({max, min}) => ((max + min) / 2.0); // use function argument destructurung
// change code above this line
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

