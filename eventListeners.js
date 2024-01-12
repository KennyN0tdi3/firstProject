const myInput = document.querySelector('.input1');
const myInput2 = document.querySelector('.input2');

const myBtn = document.querySelector('.btnSum');

const inputsObject = {
    inp1: document.querySelector('.inp1'),
    inp2: document.querySelector('.inp2'),
    inp3: document.querySelector('.inp3'),
}

const buttonsObject = {
    multipliebutton: document.querySelector('.multisum')
}

const viewObject = {
    card: document.querySelector('.card'), // node
    cardList: document.querySelector('.cardList') // node
}

viewObject.card.querySelector('.title').innerText = 'SomeValue'


function drowElement(title, desc, price) {
    const cloneCard = viewObject.card.cloneNode(true);
    cloneCard.querySelector('.title').innerText = title
    cloneCard.querySelector('.desc').innerHTML = desc
    cloneCard.querySelector('.price').innerHTML = price
    // console.log(viewObject.card)

    viewObject.cardList.appendChild(cloneCard);
    console.log(cloneCard);
}

// <!-- в фильм лист добавить копию (изменённую) -->
// <div class="filmsList">
//   <!-- скопировать фильм в жс -->
//   <div class="film"> 
//     <h1 class="title"></h1>
//     <h2 class="desc"></h2>
//     <p class="rating"></p>
//   </div>
// </div>
const viewFilmObject = {
    film: document.querySelector('.film'),
    filmsList: document.querySelector('.filmsList')
}

const filmsInputsObject = {
    title: document.querySelector('.titleInput'),
    desc: document.querySelector('.descInput'),
    rating: document.querySelector('.ratingInput')
}

const filmsButtonSelector = {
    addFilm : document.querySelector('.filmButt')
}

// () => {}

filmsButtonSelector.addFilm.addEventListener('click',() =>{
const cinemaViewObjectValues = {
   title: filmsInputsObject.title.value,
   desc: filmsInputsObject.desc.value,
   rating: filmsInputsObject.rating.value


}
cinemaList( 
        cinemaViewObjectValues.title,
        cinemaViewObjectValues.desc,
        cinemaViewObjectValues.rating
    )
} )

   
function cinemaList(title, desc, rating) {
    const cinemaClone = viewFilmObject.film.cloneNode(true)
    console.log(cinemaClone);
    cinemaClone.querySelector('.title').innerHTML = title
    cinemaClone.querySelector('.desc').innerHTML = desc
    cinemaClone.querySelector('.rating').innerHTML = rating
    viewFilmObject.filmsList.append(cinemaClone)
    console.log(cinemaClone)
}



function summarise() {
    const imputsValues = {
        inp1: inputsObject.inp1.value + "asdas",
        inp2: inputsObject.inp2.value,
        inp3: inputsObject.inp3.value
    }
    
    drowElement(imputsValues.inp1, imputsValues.inp2, imputsValues.inp3);
    valueArr.push(imputsValues);
    someValue = 'asdasdasd2'
    console.log(valueArr);

    return 'not this'
}

buttonsObject.multipliebutton.addEventListener("click", summarise)

const cube = document.querySelector('.cube')
let blockSwitch = false
    
cube.addEventListener('click', () => {
    if (blockSwitch){
        cube.style.backgroundColor = 'white';
        blockSwitch = false

    }
    else {
        cube.style.backgroundColor = 'black';
        blockSwitch = true
    }
    
})
// const arr = [];

// const someObject = {
//     someKey: "someValue",
// }


// arr.push(someObject);

// console.log(arr);



// // Функция для бронирования авиабилета с указанием стоимости
// function bookFlight(destination, calculatePrice) { // тут арг функция
//     const basePrice = 200; // Базовая цена за билет
//     const additionalFees = calculatePrice(destination); // Вычисление дополнительной платы в зависимости от пункта назначения

//     const totalPrice = basePrice + additionalFees;
//     console.log(totalPrice);
// }

// // Функция для определения дополнительной платы в зависимости от пункта назначения
// function calculateAdditionalFees(destination) { // тут арг это строка
//     let additionalFees = 0;
//     switch (destination) {
//         case 'Париж':
//             additionalFees = 100;
//             break;
//         case 'Токио':
//             additionalFees = 200;
//             break;
//         default:
//             additionalFees = 50;
//     }
//     return additionalFees;
// }

// // Бронирование авиабилетов с использованием функции bookFlight и функции calculateAdditionalFees
// bookFlight(() => calculateAdditionalFees('Париж')); // фиксим тут
// bookFlight(() => calculateAdditionalFees('Москва')); // фиксим тут



// myBtn.addEventListener('click', () => {
//     if(isNaN( Number(myInput.value) )) {
//         return console.log('пошёл нахуй')
//     }
//     const clicksum = Number(myInput.value) + Number(myInput2.value)
//     console.log(clicksum)
// })

// [{input1: 'Я написал говно', input2: 'теперь оно тут', id: 1}]
// после нажатия на кнопку каждый раз делаем console.log();

// OBJECTs
// key: value
// const peopleObject = {
//     people: {
//         name: "Vasya",
//         age: 18,
//     }
// }

// const testObject = {
//     someKey: "someValue",
//     someKeyFunc: (value) => {
//         console.log(value)
//     }
// }

// testObject.someKeyFunc('Print me some');
// console.log();


// const workers = {
//     vasya: {
//         name: 'Vasya',
//         age: '3 years old'
//     },
//     oleg: {
//         name: 'Oleg',
//         age: 'ne rodilsya'
//     }
// }
// console.log(workers.oleg.name)
// console.log(workers.vasya.name)


// const filmsList = [
//     {
//         id: 1,
//         filmName: '10 секунд до поноса',
//         rating: 80
//     },
//     {
//         id: 2,
//         filmName: 'Успей добежать',
//         rating: 100
//     }
// ];

// filmsList[0].printRating();
// for(let i = 0; i < filmsList.length; i++){
//     console.log(filmsList[i].filmName)
// }


// console.log(filmsList[i].filmName);

// filmsList.forEach((value) => console.log(value.filmName))
// console.log(Number('21312412asdas'))

// const numStr = '1231';
// const sum = Number(numStr) + 25;

// console.log(sum);123123


// Дз - Сделать перемножение 3х значений из инпутов с кнопкой
// Создай новые инпуты и новую кнопку. Не используй старые 
// названия classов и т д.
