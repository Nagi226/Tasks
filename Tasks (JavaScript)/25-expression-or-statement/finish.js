/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15
//**инструкция (statement)*/
const myObject = {
  x: 10,
  y: true,
}

//**ыражение-инструкция (expression statement */
myObject.z = 'abc'

//**ыражение-инструкция (expression statementt */
delete myObject.x

//**statement */
let newVariable

//**ыражение-инструкция (expression statement*/
newVariable = 30 + 5


//**ыражение-инструкция (expression statement */
console.log(newVariable)

//**xpression statemen
if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
}



