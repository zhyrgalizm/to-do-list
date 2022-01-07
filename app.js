//®®
//
// // let mass = ['Kyzburak', 'Zhakshylyk', 'zhyrgalizm', 'kyzya', 'aibek']
// //
// // // result = mass.filter(total => total.split.)
// //
// // // let result = mass.filter(total => total)
// // // result.
// //
// // let str = 'wasdwasdwasdwa wadwa wa dw            adwa sd a dwa dwa '
// // // let result =
// // let result = str.split(' ')
// // // str.split('..')
// //
// // // let result = mass.filter(total => total.length <= 6)
// // //
// // console.log(result)
//
// let body = document.body
// let btn = document.getElementById('btn')
// let btn1 = document.getElementById('btn1')
// let count = document.getElementById('count')
// let number = 0
// // let i = 50
//
//
//
// // setTimeout(()=> body.style.background = '', 3000
// // )
// // let i = 0
//
// let color = ['red', 'blue','black', 'yellow', 'green']
// body.style.background = 'red'
//
//
//
// // btn.onclick = function(){
// //     console.log('w')
// // }
// btn.onclick = ()=>{
//     // if(number <= 10){
//     //     number++
//     //     count.innerHTML = number
//     // }
//         count.style.fontSize = i + 'px'
//         i+=10
//         number++
//         count.innerHTML = number
//
// }
// btn1.onclick = ()=>{
//     count.style.fontSize = i + 'px'
//     i-=10
//     number--
//     count.innerHTML = number
// }
//
// let mass = ['Kyzburak', 'Zhakshylyk', 'zhyrgalizm', 'kyzya', 'aibek']
// let arr = []
//
// mass.forEach(total =>{
//     if (total.length >= 6) arr.push(total)
// })
//
// console.log(arr)
//
//
// // let arr = []
// // for (let result of mass) {
// //     if(result.length >= 6) arr.push(result)
// // }
// //
// // result = mass.filter(total => total.push(mass))
// // console.log(result)
//
// // console.log(mass)
// // console.log(arr)
//
//
//
// // mass.forEach((total => log{
// // })


// let body = document.body
//
// // let mass = ['Kyzburak', 'Zhakshylyk', 'zhyrgalizm', 'kyzya', 'aibek']
// let color = ['red', 'blue','black', 'yellow', 'green']
//
// // for (const color of color) {
// //     body.style.background = 'blue'
// // }
// body.style.background = 'blue'


// let days = document.getElementById('days')

//
// const dedkine = '2022-12-31'
//
//
// const getTime = (endTime)=>{
//     const total = Date.parse(endTime) - Date.parse(new Date())
//     const days = Math.floor(total / (1000 * 60 * 60 * 24))
//     const hour = Math.floor(total / (1000 * 60 * 60) % 24)
//
//     const min = Math.floor(total / (1000 * 60) % 60 )
//     //
//     const sec = Math.floor(total / 1000 % 60)
//
//
//     return{
//         total,
//         days,
//         hour,
//         min,
//         sec
//     }
//
//     // const days = Math.floor(total / (1000 % 60))
//     // console.log(hour)
//
// }
//
// const setClock = (endTime)=>{
//     const  days = document.getElementById('days')
//     const  hours = document.getElementById('hours')
//     const  min = document.getElementById('min')
//     const  sec = document.getElementById('sec')
//
//
//     function updateClock () {
//         const data = getTime(endTime)
//         days.innerHTML = data.days + ' day'
//         hours.innerHTML = data.hour + ' hours'
//         min.innerHTML = data.min + ' min'
//         sec.innerHTML = data.sec + ' sec'
//
//         if (data.total <= 0) clearInterval(timeInterval)
//     }
//     updateClock()
//
//
//     let timeInterval = setInterval(updateClock, 1000)
//
// }
//
// setClock(dedkine)
// // let data = getTime(dedkine)


// const link = document.querySelector('a')
//
//
// link.addEventListener("click", (event)=>{
//     event.preventDefault() // отменяет действие браузера по умолчанию
//     console.log(event)
// })
//
//
// // getTime(dedkine)



//сохранить ключ  и значение в локальое хранилище

// localStorage.setItem('number', 5)
// localStorage.setItem('num', 'hello')
//
//
// let getData = localStorage.getItem('number')
// localStorage.getItem()


// УДАЛИТЬ СВОЙСТВО ИЗ ЛОКАЛЬОГО ХРАНИЛИЩА

// localStorage.removeItem('number')
// localStorage.clear()
// console.log(getData)




// localStorage.clear() // // очистка всего локалього хранилища

// console.log(localStorage
//
// )


//
// let t = {a:1,b:2}
// t = JSON.stringify(t)
// localStorage.setItem('imgData', t )


//JSON - текстовый формат обмена данными основанный на жаваскрипт



// let obj = {
//     'web': 'fronted',
// }
//
// let obj1 = {
//     'qew': 'hsgdfgsfd'
// }


// let objTranslate = JSON.stringify(obj)
// console.log(objTranslate)
// objTranslate = JSON.parse(objTranslate)
// // alert(obj)
// console.log(objTranslate)


//===============================




// //
// const body = document.body
// const checkbox = document.getElementById('checkbox')
// const form = document.querySelector('form')
// const changeColor = document.getElementById('color')
// //
// //
// //
//
//
// if(localStorage.getItem('isChecked') ===  'true') {
//     checkbox.checked = true
//
// }
//
// changeColor.addEventListener("click", ()=>{
//     if(localStorage.getItem('theme') == 'true') {
//         localStorage.removeItem('theme')
//         body.style.background = '#fff'
//     }  else {
//         localStorage.setItem('theme', 'true')
//         body.style.background = '#222'
//     }
// })
//
// if (localStorage.getItem('theme') == 'true'){
//     body.style.background = '#222'
// }
// //
// //
//
//
//
//
// checkbox.addEventListener('change', ()=> {
//     if (localStorage.getItem('isChecked') == 'true') {
//         localStorage.removeItem('isChecked')
//     } else {
//         localStorage.setItem('isChecked', true)
//     }
//
//     // localStorage.setItem('isChecked', true)
// })
// const body = document.body
// const checkbox = document.getElementById('checkbox')
// const form = document.querySelector('form')
// const changeColor = document.getElementById('color')


// let object = {
//     name: 'vladilen',
//     age: 24,
// }
// let data = JSON.parse(object)
// localStorage.setItem(data)

// changeColor.addEventListener("click", ()=>{
//     if(localStorage.setItem('keys') == 'green') {
//         localStorage.removeItem('keys')
//         body.style.background = '#222'
//     }else{
//         localStorage.setItem('keys', 'green')
//         body.style.background = '#fff'
//     }
// })



// console.log(localStorage)


















