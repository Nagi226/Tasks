/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

var arr = [1,2,3,4,5,6,6,6,6,6,6,6,6]

for (let i = 0; i < arr.length; i++) {
    console.log(i)
}


 function sumNumbers(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    console.log('Sum of all arguments is ', sum)
  
    return sum
  }



  
sumNumbers([1, 3])
// 4

sumNumbers(10, 20, 5)
// 35

sumNumbers(2, 5, 80, 1, 10, 12)
// 110
