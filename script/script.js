const dateForm = document.querySelector("#date-form")
const dateNameInp = document.querySelector(".date-name")
const dateLastNameInp = document.querySelector(".date-lastName")
const dateAgeInp = document.querySelector(".date-age")
const datesContainer = document.querySelector(".dates-container")

//  ========= 1 ==========
// dateForm.addEventListener("submit", function(event) {
//     event.preventDefault()
//     console.log("Name: ", dateNameInp.value)
//     console.log("LastName: ", dateLastNameInp.value)
//     console.log("Age: ", dateAgeInp.value)
// })

//  ========= 2 ==========

// let users = []
// dateForm.addEventListener("submit", function(event) {
//     event.preventDefault()
//     const dateObj = {
//         name: dateNameInp.value,
//         lastName: dateLastNameInp.value,
//         age: dateAgeInp.value,
//     }
    
//     users.push(dateObj)
//     // console.log("users => ", users)
//     dateForm.reset()
// })

//  ========= 3 ==========

// function createDateCard (name1, name2, ages) {
//     const divElem = document.createElement("div")
//     const pName = document.createElement("p")
//     const pLastName = document.createElement("p")
//     const pAge = document.createElement("p")
//     pName.innerText = name1
//     pLastName.innerText = name2
//     pAge.innerText = ages
//     divElem.classList.add("date-item")
//     divElem.append(pName, pLastName, pAge)

//     return divElem
// }

// let users = []
// dateForm.addEventListener("submit", function(event) {
//     event.preventDefault()
//     const dateObj = {
//         name: dateNameInp.value,
//         lastName: dateLastNameInp.value,
//         age: dateAgeInp.value,
//     }
    
//     users.push(dateObj)
//     console.log(createDateCard(dateObj.name, dateObj.lastName, dateObj.age))
//     dateForm.reset()
// })

//  ========= 4 ==========

// let users = []

// function createDateCard (name1, name2, ages) {
//     const divElem = document.createElement("div")
//     const pName = document.createElement("p")
//     const pLastName = document.createElement("p")
//     const pAge = document.createElement("p")
//     pName.innerText = name1
//     pLastName.innerText = name2
//     pAge.innerText = ages
//     divElem.classList.add("date-item")
//     divElem.append(pName, pLastName, pAge)

//     return divElem
// }

// function rerender() {
//     datesContainer.innerHTML = ""
//     for (let i = 0; i < users.length; i++) {
//         const {name, lastName, age} = users[i]
//         const dateCard = createDateCard(name, lastName, age)
//         datesContainer.append(dateCard)
//     }
// }

// dateForm.addEventListener("submit", function(event) {
//     event.preventDefault()
//     const dateObj = {
//         name: dateNameInp.value,
//         lastName: dateLastNameInp.value,
//         age: dateAgeInp.value,
//     }
    
//     users.push(dateObj)
//     rerender()
//     console.log(createDateCard(dateObj.name, dateObj.lastName, dateObj.age))
//     dateForm.reset()
// })


//  ========= 5 ==========

let users = []

function createDateCard (name1, name2, ages) {
    const divElem = document.createElement("div")
    const pName = document.createElement("p")
    const pLastName = document.createElement("p")
    const pAge = document.createElement("p")
    pName.innerText = name1
    pLastName.innerText = name2
    pAge.innerText = ages
    divElem.classList.add("date-item")
    divElem.append(pName, pLastName, pAge)

    return divElem
}

function rerender() {
    datesContainer.innerHTML = ""
    for (let i = 0; i < users.length; i++) {
        const {name, lastName, age} = users[i]
        const dateCard = createDateCard(name, lastName, age)
        dateCard.addEventListener("dblclick", function() {
            users.splice(i, 1)
            rerender()
        })
       datesContainer.append(dateCard) 
    }
}

dateForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const dateObj = {
        name: dateNameInp.value,
        lastName: dateLastNameInp.value,
        age: dateAgeInp.value,
    }
    
    users.push(dateObj)
    rerender()
    console.log(createDateCard(dateObj.name, dateObj.lastName, dateObj.age))
    dateForm.reset()
})