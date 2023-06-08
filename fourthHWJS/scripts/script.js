console.log('============== 1 ===========')
// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// const min = (a, b) => a < b ? a : b;
// console.log(min(1, 3))

function giveMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(`The minimal number is: ${giveMin(7, -5)}`)
console.log(`The minimal number is: ${giveMin(8, 2)}`)



console.log('============== 2 ===========')
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.


function givEven(a, b) {
    const arr = []

    if (a < b) {
        for (let i = b; i > a; i--) {
            if (i % 2 === 0) {
                arr.push(i)
            }
        }
    } else {
        for (let i = b; i < a; i++) {
            if (i % 2 === 0) {
                arr.unshift(i)
            }
        }
    }
    return arr
}
console.log(givEven(15, 4))
console.log(givEven(3, 19))



console.log('============== 3 ===========')
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(a, b = 2) {
    return a ** b
}
console.log(power(5))
console.log(power(3))


console.log('============== 4 ===========')
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function sumN(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(sumN(7))



console.log('============== 5 ===========')
//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function giveSum(n, m) {
    let sumEven = 0
    let sumOdd = 0
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i
        } else {
            sumOdd += i
        }
    }
    return {
        sumEven,
        sumOdd
    }
}
console.log(giveSum(2, 13))



console.log('============== 6 ===========')
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.


function giveArray(arr) {
        let max = arr[0]
           if (arr.length === 0) {
            return null}
        for (let i = 0; i < arr.length; i++) {
            if (max.length < arr[i].length) {
                max = arr[i]
            } 
    }
    return max
}
    console.log(giveArray(['one', 'two', 'three', 'four']))
