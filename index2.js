const testPushArr = [];

testPushArr.push(123)

testPushArr.push(4)

testPushArr.push(6)

testPushArr.push(1)

console.log(2%2 == 0)


const initialArr = [1,2,3,4,5,6,7];

function getOddNumbers(array){
    const resultarray = [] // копилка
    
    for (let i = 0; i < array.length; i++ ) {
        if ( array[i] % 2 == 0) {
            resultarray.push(array[i])
        }
    }
    return resultarray
}
const pizda = getOddNumbers(initialArr)
console.log (pizda)


function vasyaMakeMoney(grades) {
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        if(grades[i] == 5) {
            sum = sum + 30;
        }
        if(grades[i] == 4) {
            sum = sum + 10;
        }
        // если 4 то + 10
    }

    return sum
}

console.log(vasyaMakeMoney(initialArr))

// Создать функцию которая принимает в себя массив,
// из этого массива сделать новый массив который содержит
// только четные элементы из массива аргумента.



// TODO: make global body background black. режет глаза пиздец

// let sum = 0;
// sum += 10;
// sum = sum + 10
// for (let i = 0; i < alright.length; i++){
//     sum = alright[i]+sum
// }
// console.log (sum);

// function writemyarg(arr){
//     let sum = 0

//     for (let i = 0; i < arr.length; i++){
//         sum = arr[i]+sum
//     }
//     console.log(sum)
// }

// const alright = [25,25];

// writemyarg(alright)

// function sumTwoNumber(arg1, arg2) {
//     const sum = arg1 + arg2
//     return sum;
// }

// function minusTwoNumber(arg1, arg2, arg3) {
//     const sum = arg1 - arg2 - arg3
//     return sum;
// }

// function writeMyArg(func, func2) {
//     let okey = func(25,25) + func2(75,25,55)
//     console.log(okey)
// }

// writeMyArg(sumTwoNumber, minusTwoNumber)

function sumTwoFunc(func1, func2) {
    const sum = func1(25,25) + func2(10,5);

    console.log(sum)
} 

sumTwoFunc(
    function(arg1, arg2) { return arg1+arg2 },
     function(arg1, arg2) {return arg1 - arg2}
     )

// function(arg1, arg2) { return arg1+arg2 }
// одно и то же
// (arg1, arg2) => (arg1 + arg2)

sumTwoFunc(
    (arg1, arg2) => arg1 + arg2,
    (arg1, arg2) => arg1 - arg2
)

function someFunc(callback) {
    console.log(callback(100)); // 120;
}

someFunc((arg1) => arg1 + 20)


// for(let i = 0; i == 10; i++) {
//     console.log(i);
// }

// while(true) {
//     console.log('some')
// }


const arrTest = [1,2,3];




// forEach принимает каллбэк с аргументами value, index, arr (последние 2 не обязательны)
// каждое value является элементом из массива по очереди ( от первого к последнему )
let sum = 0;

arrTest.forEach((value) => {
    sum += value;
})

console.log(sum);

let key = 'hello';
let some = 'some';

// key += some;

// key = key + some;

// console.log(key);

// const strArr = ['hello ', 'world'];

// let strSum = '';

// console.log(strSum);

// strArr.forEach((hi) => strSum += hi)

// console.log(strSum);

const arrowFunc = () => {
    console.log('some');
}

function normalFunc() {
    console.log('some');
}



arrowFunc();


const numSumFunc =  (number1, number2) => (number1 + number2)

console.log(numSumFunc(254,25))
// const newArr = strArr.map(value => {
//     return value + 'TestTest'
// });

// console.log(newArr);
// console.log(forEachResult) 

// for(let i = 0; i < arrTest.length; i++) {
//     sum += arrTest[i]
// }


// const myBtn = document.querySelector('.btnSum');

// let gameWork = true;

// ДЗ - Написать функцию которая принимает в аргументы 
// 2 функции. (первая принимает массив, возращает сумму элементов)
// (вторая принимает 2 аргумента, 2 числа. Суммирует их)
// функция должна возращать сумму суммы массивов
// из работы функции первого аргумента
// и суммы двух чисел из второго аргумента.
// первый аргумент передаём как ссылку на функцию ()
// второй аргумент передаём как безымянную стрелочную функцию.



// alright.push('привет');
// console.log (alright);


