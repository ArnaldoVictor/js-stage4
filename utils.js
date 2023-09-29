const Utils = {
    sayHelloWorld: () => alert('Hello World!'),

    sum: (num1, num2) => num1 + num2,

    diff: (num1, num2) => num1 - num2,

    div: (num1, num2) => num1 / num2,

    mult: (num1, num2) => num1 * num2,

    isNumber: (num) => !isNaN(num),

    isEven: (num) => num % 2 == 0,

    isString: (text) => typeof text === 'string',

    isBoolean: (text) => typeof text === 'boolean'
}

export default Utils
