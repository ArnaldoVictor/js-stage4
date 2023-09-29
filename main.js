/* 
1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

*/

import utils from './utils.js'

// 1
utils.sayHelloWorld()

// 2
const num1 = 4
const num2 = 2

console.log(utils.sum(num1, num2))

// 3
const testNum = 'teste'

if (utils.isNumber(testNum))
    console.log('É um número')
else
    console.log('Não é um número')

// 4
const testString = 'outroTeste'

if (utils.isString(testString))
    console.log('É uma string')
else
    console.log('Não é uma string')

// 5
const testBoolean = 2

if (utils.isBoolean(testBoolean))
    console.log('É um booleano')
else
    console.log('Não é um booleano')

// 6
console.log(utils.diff(num1, num2))

// 7
console.log(utils.mult(num1, num2))

// 8
console.log(utils.div(num1, num2))

// 9
const testEvenOdd = 9

if (utils.isEven(testEvenOdd))
    console.log('É um número par')
else
    console.log('Não é um número par')

// 10
if (!utils.isEven(testEvenOdd))
    console.log('É um número ímpar')
else
    console.log('Não é um número ímpar')