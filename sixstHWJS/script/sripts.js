console.log(`========================= 1 =======================`)
//Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const btnElement = document.createElement("button")
btnElement.innerText = "Click"
const divElement = document.createElement("div")
divElement.classList.add("red")
document.body.append(btnElement, divElement)
btnElement.addEventListener("click", function () {
    document.querySelector("div").style.backgroundColor = "green"
    document.querySelector("div").style.width = "100px"
    document.querySelector("div").style.height = "100px"
})


console.log(`========================= 2 =======================`)
// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const btElement = document.createElement("button")
btElement.innerText = "Click"
const div_Element = document.createElement("div")
div_Element.classList.add("pink")
btElement.classList.add("blue")
document.body.append(btElement, div_Element)
btElement.addEventListener("click", function () {
    const newDiv = document.querySelector(".pink").style.backgroundColor = "blue"
    console.log(newDiv)
})


console.log(`========================= 3 ========================`)

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const btnElem = document.createElement("button")
const divElem = document.createElement("div")
divElem.classList.add("square")
btnElem.classList.add("btn")
btnElem.innerText = "Click"

divElem.style.backgroundColor = "yellow"
document.body.append(divElem, btnElem)
divElem.style.marginTop = "100px"
btnElem.style.marginBottom = "100px"
divElem.style.width = "150px"
divElem.style.height = "150px"
btnElem.addEventListener("click", function () {
    document.querySelector(".square").style.width = "170px"
    document.querySelector(".square").style.height = "170px"
})


console.log(`========================= 4 ========================`)

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

const divDiv = document.createElement("div")
divDiv.classList.add("root")
const btnButton = document.createElement("button")
btnButton.classList.add("root-btn")
btnButton.innerText = "click"
btnButton.style.marginBottom = "100px"
document.body.append(divDiv, btnButton)

btnButton.addEventListener("click", function () {
    const pElement = document.createElement("p")
    pElement.innerText = "How are you?"
    pElement.style.color = "blue"
    divDiv.append(pElement)
})




console.log(`========================= 5 ========================`)

// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.


const div_Div = document.createElement("div")
divDiv.classList.add("root-div")
const btnButt = document.createElement("button")
btnButt.classList.add("btn")
btnButt.innerText = "click"
btnButt.style.marginBottom = "100px"
document.body.append(div_Div, btnButt)

btnButt.addEventListener("click", function () {
    const pElement = document.createElement("p")
    pElement.innerText = "What is your name?"
    pElement.style.color = "blue"
    
    divDiv.append(pElement)
    const pElem = document.createElement("p")
    pElem.innerText = "How old are you?"
    pElem.style.color = "green"
    divDiv.append(pElem)
})

