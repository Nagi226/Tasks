/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const carsall = [
{ carBrand: 'dms', price: 20, isAvailableForSale: true },
  { carBrand: 'jj', price: 7, isAvailableForSale: false },
  { carBrand: 'djhs', price: 6, isAvailableForSale: true }
]

carsall.push({ carBrand: 'djhs', price: 6, isAvailableForSale: true })

console.log(carsall)