console.log(`------------------ 1 ---------------------------`)
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const divElem = document.querySelector(".numbers")
for (let i = 100; i >= 50; i -= 10) {
    const pElem = document.createElement("p")
    pElem.innerText = i
    divElem.append(pElem)
}


console.log(`------------------ 2 ---------------------------`)
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const stringArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"]
const divContainer = document.querySelector(".strings_container")
for (let i = 0; i < stringArr.length; i++) {
    const pElem = document.createElement("p")
    pElem.innerText = stringArr[i]
    divContainer.append(pElem)
}


console.log(`------------------ 3 ---------------------------`)
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const usrers = [{
        first_name: "Vladimiros",
        last_name: "Batiridis",
        age: 37
    },
    {
        first_name: "Regina",
        last_name: "Batiridou",
        age: 31
    },
    {
        first_name: "Ioannis",
        last_name: "Batiridis",
        age: 9
    },
    {
        first_name: "Filippos",
        last_name: "Batiridis",
        age: 5
    },
    {
        first_name: "Markos",
        last_name: "Batiridis",
        age: 4
    },
]
const usersElem = document.querySelector(".users_container")
for (let i = 0; i < usrers.length; i++) {
    const { first_name, last_name, age} = usrers[i]
    if (age >= 18) {
        const pFirstName = document.createElement("p")
        pFirstName.innerText = `First_name: ${first_name}`

        const pLastName = document.createElement("p")
        pLastName.innerText = `Last_name: ${last_name}`

        const pAge = document.createElement("p")
        pAge.innerText = `Age: ${age}`

        const divElem = document.createElement("div")
        divElem.append(pFirstName, pLastName, pAge)
        usersElem.append(divElem)
    }
}