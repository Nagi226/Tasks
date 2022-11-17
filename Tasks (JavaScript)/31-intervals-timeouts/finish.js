/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */



let counter = 0
let a = 1
intervalID = setInterval(function () {
    
    console.log('Сообщение номер '+ a)
    a = a + 1

    counter++
    if (counter === 5) {
        clearInterval(intervalID)
    }
}, 
    2000)






 



