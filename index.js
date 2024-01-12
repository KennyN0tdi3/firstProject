// console.log(123) // вывод результата в консоль браузера.
// console.log('Hello world') // вывод результата в консоль браузера конкретно строки.

// let a = 123;

// const c = 231;

// a = 521;

// console.log(a)


// let a = 25;
// let b = 35;

// let operation = a * b; // умножение
// operation = a / b; // деление
// operation = a + b;
// operation = a - b;

// let float = 1.25; // число с плавающей запятой
// console.log(float)


// let y = 'hello adnreyka'
// y = y + 25 + 25
// console.log(y)

// document.querySelector() это функция которая позволяет взять из html какой-то тэг при помощи
// id или class. внутри принимает либо .name либо #name ('.name') или ('#name')
// const selectorThinks = document.querySelector('.thinks');
// selectorThinks.style = 'color: red';

// document.querySelector('.thinks').style = 'color: green';


// let bool = true; // boolean (либо false либо true)


// // если мы сравниваем мы пишем ==
// // если мы приравниваем мы пишем =.
// if(false) { // когда  мы пишем == на место сравнения подставляет boolean значение (true or false)
//     console.log('asdasd')
// }


// let a = 25
// let b = 25
// console.log(a == b)
// if(a==b) {
//     console.log ('Alo eto eldorado')
// } else {
//     console.log('ne alo :(')
// }

// // queryTest
// document.querySelector('.queryTest').style = 'border: 1px solid red'
// const firstBtn = document.querySelector('.clickme')

// firstBtn.addEventListener('click', () => {
//     // тут происходят действия при событии которое мы описали выше ('click') для 
//     // firstBtn который является ссылкой на Html кнопочку.
//     document.querySelector('.thinks').style = 'color: blue';
// })



/////////// 15 . 12 . 23

// const firstInputSelector = document.querySelector('.input1')
// const secondInputSelector = document.querySelector('.input2')
// const btnSumSelector = document.querySelector('.btnSum')

// if(25 !== 35) {
//     console.log('не равно')
// } else {
//     console.log('равно')
// }

// btnSumSelector.addEventListener('click', () => {
//     const value1 = Number(firstInputSelector.value);
//     const value2 = Number(secondInputSelector.value);
    
//     // при сравнении операторы которые возращают true или false
//     // == | < | > | !== (не равно) | <= | >=

//     if(25==25) {
//         console.log('some')
//     }
//     if(35==25) {
//         console.log('any')
//     }
//     // тут нужно сравнить 2 значения. Если они одинаковые то выведи в консоль 'Это тодно и то же'
//     // если значение первое больше чем второе - выведи в консоль 'input 1 > input 2'
//     // если значение второго больше чем первое - выведи в консоль 'askdjlasdkasd'
//     // Если сумма двух значений будет равна 300 то выведи в консоль  'Отсоси у тракториста' 
//     // EXTENDED: Если сумма двух занчений равна 50 то поменяй цвет у Some thinks на красненький
//     if(value1==value2) {
//         console.log('Это одно и тоже')
//     }
//     if(value1>value2) {
//         console.log('input 1 > input 2')
//     }
//     if(value1+value2==50) {
//         document.querySelector('.thinks').style = 'color: red'
//     }
//     if(value1+value2==300) {
//         console.log('Отсоси у тракториста')
//     }
//     if(value2>=value1) {
//         console.log('askdjlasdkasd')
//     }
//     if(value2==value1) {}
// })





// function writeHello() { // объявление функции
//     console.log('фывдлфыв')
// }

// writeHello(); // вызов ф-ции

// const myText = 'asd';

// function sum() {
//     // context function |  sum -> myText область видимости
//     const myText = 'someText2'
//     const b = 25
//     console.log (myText)
// }

// sum();


// function isMoreThenZero(number) { // number - параметр, имя которое
//     // присваивается  переданному числу ( в данном случае)
//     return number > 0 // возращает на место вызова
// }

// const isMore = isMoreThenZero(25);

// console.log(isMore)

// if(isMoreThenZero(12)) {
//     console.log('число больше нуля')
// }


// function text(jopa) {
//     console.log (jopa)

//     if(jopa == 'Что-то') {
//         return 'что то найдено'
//     }


//     return 'Не что-то'
//     console.log('это работать не будет т.к ретёрн сверху')
// }

// const ass = text('Хуйня')
// console.log (ass)


// function myFuncFunc(a, b) {
//     console.log('some')
//     return 'Что нибудь'
// }

// const myFunc = (a, b) => {
//     console.log(a)
//     return 'Что нибудь'
// }

// const myResult = myFunc(25, 123);

// console.log(myResult)

// const aMoreThenB = (a,b) => {
//     if (a > b) {
//         return 'а больше'
//     }
//     if (a < b ) {
//         return 'б больше'
//     }
//     return 'равно'
// }

// const a = 35;
// const b = 35;

// // если а больше Б то нужно их сложить и вывести результат в консоль
// // если б больше а то нужно от б отнять а
// // если они равны, нужно умножить

// if(aMoreThenB(a,b) === 'а больше') {
//     console.log(a+b)
// }

// if(aMoreThenB(a,b) === 'б больше') { 
//     console.log(b-a)  
     
// }
// if(aMoreThenB(a,b)== 'равно') {
//     console.log(b*a)
// }

// сумма товара, скидка (в процентах, используем число)


// const calculateTotal = (price, discount) => {
//     let sumWithDiscount = price - ( (price/100) * discount )
//     return sumWithDiscount
// }  

// let totalPrice = calculateTotal(20, 50); // Цена 100, скидка 10%
// console.log("Итоговая сумма:", totalPrice);



// const arr = [213,2,3,4,5,25];

// const nameArr = ['Женя', 'Андрюха', 'Кралекс']

// console.log(nameArr[25])

// const arr = [25, 35,45,100]
// const sum = arr[0]+arr[1]+arr[3]
// console.log (sum)  


// namesarr


// const namesarr = ['Леха', 'тоха', 'Жоха']

// // console.log(namesarr[0])
// // console.log(namesarr[1])
// // console.log(namesarr[2])

// let a = 1;

// // a++ это и ниже одинаково
// // a = a + 1

// for(let i = 0; i < 3; i++) {
//     console.log(namesarr[i])
// }



// const nameArr = ['Женя', 'Андрюха', 'Кралекс', 'Даша']

// for(let i = 0; i < nameArr.length; i++) {
//     console.log(nameArr[i] + ' Пошел нахуй')
// }

console.log(9%2 === 0)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbers.length; i++ ) {
    if (numbers[i]%2 == 0) {
        console.log(numbers[i] +' делится на 2') 
        // *число* делится на 2
    }  else {
        console.log(numbers[i] +' не делится на 2') 
        // *число* не делится на 2
    }
}

// 1 не делится на 2
// 2 делится на 2
// 3 не делится на 2
// ... e.t.c для каждого элемента


/******************** ДЗ  ******************/

/******* 1  ********* */
// У нас есть массив чисел numbers. 
// Нам нужно вывести каждое число из этого массива, 
// умноженное на 2.
// let numbers = [1, 2, 3, 4, 5];



/******* 2 ********* */
// У нас есть массив colors
// с названиями цветов. Нам нужно вывести каждый
// цвет из этого массива в формате "Цвет: название_цвета".

/******* 3 ********* */

// Дана функция которая считает сумму с скидкой
// дан массив из цен (минимум 4 элемента)
// нужно для каждого элемента массива посчитать цену с скидкой
// вывести в консоль в формате "цена с скидкой *priceDiscount*"


/******* 4 ********* */
// Напишите функцию calculateArea,
//  которая принимает два аргумента: width
//   (ширина) и height (высота).
//    Функция должна возвращать площадь
//     прямоугольника по формуле площадь = ширина × высота.

// После этого напишите код для вызова этой функции с 
// различными значениями ширины и высоты прямоугольника 
// и выведите результаты.



/******* 5 ********* */
// Напишите функцию convertTemperature, 
// которая принимает два аргумента: temperature 
// (температура в градусах Цельсия) и toFahrenheit (
//     булевое значение, которое указывает, нужно 
//     ли конвертировать температуру в градусы Фаренгейта).
//      Если toFahrenheit равно true, функция должна вернуть 
//      температуру в градусах Фаренгейта, иначе вернуть 
//      температуру в градусах Цельсия.

// Формула для конвертации:

// Цельсий в Фаренгейт: 
// умножьте температуру в градусах Цельсия на 9/5 и добавьте 32.
// Фаренгейт в Цельсий: 
// отнимите 32 от температуры в градусах Фаренгейта и 
// умножьте на 5/9.
//1
let numbersmulti = [1, 2, 3, 4, 5];

for(let i = 0; i <numbersmulti.length; i++){
    console.log (numbersmulti[i]*2)
}
//2
let color = ['yellow', 'blue', 'violet', 'ornage', 'green']
for(let i = 0; i < color.length; i++){
    console.log ('color: '+color[i])
}
//3
function pricedisc(pricearr, discount){
    // 1. priceArr = массив из цен
    // 2. число, % скидки.
    for(let i = 0; i < pricearr.length; i++) {
        let totalprice = pricearr[i] - ( (pricearr[i]/100) * discount)
        console.log (totalprice)
    }
}

pricedisc([25,13,162], 25)

//4

/******* 4 ********* */
// Напишите функцию calculateArea,
//  которая принимает два аргумента: width
//   (ширина) и height (высота).
//    Функция должна возвращать площадь
//     прямоугольника по формуле площадь = ширина × высота.

function calculateArea(width, height){
    const multiple = (width*height)
    return multiple
}

const returnedFunctionValue = calculateArea(25, 35); // 25 * 35
console.log ('area is', returnedFunctionValue)

// Напишите функцию convertTemperature, 
// которая принимает два аргумента: temperature 
// (температура в градусах Цельсия) и toFahrenheit (
//     булевое значение, которое указывает, нужно 
//     ли конвертировать температуру в градусы Фаренгейта).
//      Если toFahrenheit равно true, функция должна вернуть 
//      температуру в градусах Фаренгейта, иначе вернуть 
//      температуру в градусах Цельсия.

// Формула для конвертации:

// Цельсий в Фаренгейт: 
// умножьте температуру в градусах Цельсия на 9/5 и добавьте 32.
// Фаренгейт в Цельсий: 
// отнимите 32 от температуры в градусах Фаренгейта и 
// умножьте на 5/9.
//1

function converttemperature(temperature, toFahrenheit){
    const fahrenheit = (temperature * (9/5) + 32)
    const celsius = (temperature - 32 * (5/9))
    if (toFahrenheit == true){
        return fahrenheit
    }
    else{
        return celsius
    }
}
const temperaturenow = converttemperature(85, true) // temperaturenow хранит в себе число которое возращает функция converttemperature
// console.log ('ебать сложно ниче не понятно', temperaturenow)

console.log(converttemperature)
console.log(converttemperature(123, false))


function multiple(number1, number2){
  const result =(number1*number2)
  return result
}
const funcRes = multiple(5, 5)
console.log (funcRes);

function delenie(a, b){
    const result =(a/b)
    return result
}
const delenie2 = delenie(100, 2)
console.log (delenie2)
//1. Напишите функцию которая удваивает полученное число (один аргумент)
function double(mp){
    const result =(mp*2)
    return result
}

const doubleRes = double(2)
console.log  (doubleRes)
//2 2. Напишите функцию которая конвертирует футы в метры
function britisharedumb(distance, convert){
    const result = (distance*convert)
    return result
}
const convertFtoM = britisharedumb(50, 0.3048) //1фут равен 0,3048м
console.log (convertFtoM)
//3. Используя первое задание, написать функцию которая принимает массив из чисел
// Вывести каждый элемент из массива удвоенным при помощи функции из первого задания



function numberstodouble(arr) {  // тут точно гдет должно быть => но я нихуя не понял // ответ - нет не должно быть. Но может быть tak: const numberstodouble = (arr) => {...code}
    for (let i = 0; i < arr.length; i++){
        const multiple = double(arr[i])
        console.log(multiple)
    }
}

numberstodouble([1, 2, 3,25]);




