
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css"
                   




const r = {
    src : "./images/pho1.jpg"  
}




const body = document.querySelector("body")

const textTwoYears = document.querySelector(".js-timer")
 const divTimer = document.querySelector(".field")
const daysDifference = document.querySelector('span[data-days]');
const hoursDifference = document.querySelector('span[data-hours]');
const minutesDifference = document.querySelector('span[data-minutes]');
const secondsDifference = document.querySelector('span[data-seconds]');

const button = document.querySelector(".js-button")
const input = document.querySelector("input")
 
const firstText = document.querySelector("h2")
const buttonYes = document.querySelector(".js-yes")

const div = document.querySelector(".js-container")




const buttonText = document.querySelector(".js-button-text")
const text = document.querySelector(".js-text")
const inputAnswer = document.querySelector(".js-text-input")


const textTwo = `<h1> РАЗОМ ДВА РОКИ</h1>`

textTwoYears.innerHTML = textTwo

// 



 const img = document.querySelector(".img")
 const imgSrc = img.src.slice(-18)
 const img1 = document.querySelector(".img1")
 const img1Src = img1.src.slice(-17)
 const img2 = document.querySelector(".img2")
 const img2Src = img2.src.slice(-17)
 const img3 = document.querySelector(".img3")
 const img3Src = img3.src.slice(-17)
 const img4 = document.querySelector(".img4")
 const img4Src = img4.src.slice(-17)



const imgLove =document.querySelector(".love")
const loveSrc  = imgLove.src.slice(-17)












 //  const img = document.querySelector(".img")
 //  const img = document.querySelector(".img")
 //  const img = document.querySelector(".img")
 console.dir(img);
 console.log(img1Src)
 console.log(img2Src);



 const array = []



 const img6 = document.querySelector(".img6")
 array.push ( img6.src.slice(-16))
 const img7 = document.querySelector(".img7")
 array.push(img7.src.slice(-16))
 const img8 = document.querySelector(".img8")
 array.push(img8.src.slice(-16))
 const img9 = document.querySelector(".img9")
 array.push (img9.src.slice(-16))
 const img10 = document.querySelector(".img10")
 array.push(img10.src.slice(-16))
 const img11 = document.querySelector(".img11")
 array.push(img11.src.slice(-16))
 const img12 = document.querySelector(".img12")
 array.push(img12.src.slice(-16))
 const img13 = document.querySelector(".img13")
 array.push(img13.src.slice(-16))
 const img13Src = img13.src.slice(-16)

 const img14 = document.querySelector(".img14")
 array.push(img14.src.slice(-16))
 const img15 = document.querySelector(".img15")
 const img15Src = img15.src.slice(-17)
 array.push(img15.src.slice(-17))
 const img16 = document.querySelector(".img16")
 array.push(img16.src.slice(-17))
 const img17 = document.querySelector(".img17")
 array.push(img17.src.slice(-17))
 const img18 = document.querySelector(".img18")
 array.push( img18.src.slice(-17))
 const img19 = document.querySelector(".img19")
 array.push( img19.src.slice(-17))
 const img21 = document.querySelector(".img21")
 array.push(img21.src.slice(-17))
 const img22 = document.querySelector(".img21")
 array.push(img22.src.slice(-17))
 const img23 = document.querySelector(".img22")
 const img23Src = img23.src.slice(-17)
 array.push(img23.src.slice(-17))
 const img24 = document.querySelector(".img23")
 array.push(img24.src.slice(-17))
 const img25 = document.querySelector(".img24")
 array.push(img25.src.slice(-17))
 const img26 = document.querySelector(".img26")
 array.push(img26.src.slice(-17))
 const img27 = document.querySelector(".img27")
 array.push(img27.src.slice(-17))
 const img28 = document.querySelector(".img28")
 array.push(img28.src.slice(-17))
 const img29 = document.querySelector(".img29")
 array.push(img29.src.slice(-17))
 const img30 = document.querySelector(".img30")
 array.push(img30.src.slice(-17))
 const img31 = document.querySelector(".img31")
 array.push(img31.src.slice(-17))
 const img32 = document.querySelector(".img32")
 array.push(img32.src.slice(-17))


 const img34 = document.querySelector(".img34")
 array.push(img34.src.slice(-17))
 const img35 = document.querySelector(".img35")
 array.push(img35.src.slice(-17))
 const img36 = document.querySelector(".img36")
 array.push(img36.src.slice(-17))
 console.log(array);
// let timeUser = new Date();
// inputAnswer.setAttribute("hidden",true)
// buttonText.setAttribute("hidden",true)

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] >= options.defaultDate) {
//         console.log("f");
//         // Notify.failure('Please choose a date in the future');
//         return;
//       }
  
//       if (selectedDates[0] > options.defaultDate) {
//         startButton.disabled = false;
//       }
//     },
  
// };
// flatpickr();




  
// const interval = setInterval(() => {
//         let timeUser = new Date();
//         let firstDay = new Date("08.13.2023 ")
      
//         const { days, hours, minutes, seconds } = convertMs(Number(firstDay) - Number(timeUser));
       
//         // daysDifference.textContent = addLeadingZero(days);
//         // hoursDifference.textContent = addLeadingZero(hours);
//         // minutesDifference.textContent = addLeadingZero(minutes);
//         // secondsDifference.textContent = addLeadingZero(seconds);
        
//         //   input.disabled = true
//         //   startButton.disabled = true;
         
//             }, 
//             1000);

    function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
  
  function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      
      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    //  Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
}


// const firstDay = new Date("05.13.2021")

input.addEventListener("input", hadlerInpup)
button.addEventListener("click", handlerClick)

let num
function hadlerInpup(evt){
    // console.log(evt.target.value);
    num = evt.target.value
}


function handlerClick(evt){
    console.log(num);
    // console.log(Number(num) === 2);
    if(num === "13.05.2021"){
        console.log("перше привіт");
    }else if(num ){
console.log("object");
    }
}

// ========================== перший текст ====================

buttonYes.addEventListener("click", handlerClickYes)

function handlerClickYes(evt){
   buttonYes.setAttribute("hidden",true)
   inputAnswer.removeAttribute("hidden")
   buttonText.removeAttribute("hidden")
    firstText.textContent ="Почнемо з легкого:"
    text.textContent = "Дата нашого знайомства?"
    buttonYes.remove()
}


//  ============================= питання ======================

buttonText.addEventListener("click", hadlerClickText)
inputAnswer.addEventListener("input",hadlerAnswer)

let answer
function hadlerAnswer(evt) {
    answer = evt.target.value
}





function hadlerClickText(evt) {
if(answer == "13.05.2021"){
    firstText.textContent ="Молодець:"
    text.textContent = "А час пам'ятаєш?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${imgSrc} alt="">
`)
instance.show()
    return
}
if(answer == "23:54"){
    firstText.textContent = " Да, я знаю що на скрині був час, просто спочатку придумувалися питання, і взагалі це тест на уважність, продовжимо:"
    text.textContent = "В який день ми вперше погуляли?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img1Src} alt="">

`)
instance.show()
    return
}
if(answer == "неділя"){
    firstText.textContent = "Умнічка "
    text.textContent = "і як тобі наша прогулянка, сподобалася?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img2Src} alt="">

`)
instance.show()
    return
}
if(answer == "так"){
    firstText.textContent = "Мені теж сподобалося "
    text.textContent = "яке слово з нашої другої зустрічі я тобі згадую?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${'img4Src'} alt="aoto">

`)
instance.show()
    return
}
if(answer == "одолженіє"){
    firstText.textContent = "Да,да, я тобі це завжди згадувати буду "
    text.textContent = "за який смайлік ти зі мною дуже багато сперечалася?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img4Src} alt="aoto" width="500">
<p class =" text">Бачиш що з одолженія вийшло</p>

`)
instance.show()
    return
}
// if(answer == "сердечко"){
//     firstText.textContent = "Да,да, я тобі це завжди згадувати буду "
//     text.textContent = "за який смайлік ти зі мною дуже багато сперечалася?"
//     input.value = ""
//     const instance = basicLightbox.create(`
// <img src=${img3Src} alt="aoto" >

// `)
// instance.show()
//     return
// }
if(answer == "сердечко"){
    firstText.textContent = "Правильно, але ти й сперечалася тоді, Тут мало бути питання про кількість сердечок, але телеграм їх не рахує😅, тому: "
    text.textContent = "На твою думку скільки разів в переписці зустрічається слово люблю?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img3Src} alt="aoto" >

`)
instance.show()
    return
}
if(answer > 5700){
    firstText.textContent = "А ще більше сказано в житті "
    text.textContent = "Якого слова в переписці більше: кохана чи коханий?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${loveSrc} alt="" >

`)
instance.show()
    return
}

if(answer== "кохана"){
    firstText.textContent = "Практично в два рази, айайай "
    text.textContent = "А пам'ятаєш чому ти мене вперше назвала котиком?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img23Src} alt="" >

`)
instance.show()
    return
}
if(answer== "з жалості"){
    firstText.textContent = "Тоже мені😒 "
    text.textContent = "А в якому місяці я вперше тобі сказав що люблю тебе?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img13Src} alt="" >

`)
instance.show()
    return
}
if(answer== "лютий"){
    firstText.textContent = "Умнічка "
    text.textContent = "хочеш побачити невеличкий сюрприз?"
    input.value = ""
    const instance = basicLightbox.create(`
<img src=${img15Src} alt="" >

`)
instance.show()
buttonText.textContent = "дивитись сюрприз"
    return
}
if(answer = "хочу"){
console.log(input.value);
    randomPhoto()

}

}



// var img9 = new Image(img); // Создаёт новый элемент изображения
// img9.src = r.src // Устанавливает путь
// div.appendChild(img9)
// console.dir(img9);
// console.dir(new Image(img));
// console.log(img13Src);











// =========================== РАНДОМНЕ ФОТО =====================


function getNumber(){
    // Math.random()
 return Math.floor( Math.random()* (28-0) + 0);
}




function randomPhoto(){
    setInterval(()=>{
        const random = array[getNumber()]

body.style.backgroundImage = `url(${random}),url(${"https://klike.net/uploads/posts/2022-09/1664008578_g-8.jpg"})`
body.style.backgroundSize = " 550px, 1700px"
body.style.backgroundRepeat = "repeat-x"
body.style.backgroundPosition = "50% 50%"
    }, 1000)

}


