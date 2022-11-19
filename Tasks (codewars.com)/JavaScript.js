
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
