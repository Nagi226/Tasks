/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массиваC
 */

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

function randomRange(MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
  }
let randomRange1 = randomRange(MIN, MAX)
console.log(randomRange1)


const result = false

const containsRandomRange = myNumbers.includes(x => x === randomRange1);
if (containsRandomRange)
{
    console.log('Найден дубликат' + randomRange1)

    randomRange1 = randomRange(MIN, MAX);

    if(myNumbers.includes(x => x === randomRange1)){

    }
    else{
        console.log('Добаввляем новое число: ' + randomRange1)
        myNumbers.push(randomRange1);
    }
}
else{
    console.log('Совпадений нет добавденов  массив')
    myNumbers.push(randomRange1)

}

console.log(myNumbers)


// myNumbers.forEach((number)  => {
//   if (number === randomRange1 )
//   {
//     result = true
//     randomRange1 = randomRange(MIN, MAX)
//   }
// }
// )

  

