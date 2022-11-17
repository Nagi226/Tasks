/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */


const datenow = new Date()

console.log(datenow.getTime())


//**Вариант 2  */
const currentDate = new Date()

const currentDateInMs = currentDate.getTime()

console.log(currentDateInMs)