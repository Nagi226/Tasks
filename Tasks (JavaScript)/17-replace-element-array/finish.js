/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */


 const massiv = [1, 'string', null]

 console.log(massiv)

// удалить 2 элемент и заменить 
massiv.splice(1,1, 'Другое')

console.log(massiv)


//вариант 2
const myArray = ['abc', null, 25, true]

console.log(myArray)

myArray[1] = 125

console.log(myArray)