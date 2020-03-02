let bookSelector = document.querySelectorAll(".book")
let titleSelector = document.querySelectorAll(".title")
let authorSelector = document.querySelectorAll(".author")
let descriptionSelector = document.querySelectorAll(".description")
let urlSelector = document.querySelectorAll(".url")
let categorySelector = document.querySelectorAll(".category")
let addedSelector = document.querySelectorAll(".added")
let bookImageSelector = document.querySelectorAll(".book-image")
let alphabeticalButton = document.querySelector("#alphabetical")
let reverseAlphabeticalButton = document.querySelector("#reverse-alphabetical")
let dateAddedButton = document.querySelector("#date-added")
let reverseDateAddedButton = document.querySelector("#reverse-date-added")

let defaultSorter = []
let bookSorter = []
let num = 0

function sorter(arg) {
    num = 0
    for (let book of bookSelector) {
        arg.push({title: ""})
    }
    for (let title of titleSelector) {
        arg[num]["title"] = title.innerText
        num += 1
    }
    num = 0
    for (let author of authorSelector) {
        arg[num]["author"] = author.innerText
        num += 1
    }
    num = 0
    for (let description of descriptionSelector) {
        arg[num]["description"] = description.innerText
        num += 1
    }
    num = 0
    for (let url of urlSelector) {
        arg[num]["url"] = url.innerText
        num += 1
    }
    num = 0
    for (let category of categorySelector) {
        arg[num]["category"] = category.innerText
        num += 1
    }
    num = 0
    for (let added of addedSelector) {
        arg[num]["added"] = added.innerText
        num += 1
    }
    num = 0
    for (let image of bookImageSelector) {
        arg[num]["book-image"] = image.src
        num += 1
    }
}

function alphabetical(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
    }
    return 0
}

function reverseAlphabetical(a, b) {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1
    }
    return 0
}

function sortAlphabetical (arg) {
    bookSorter = []
    sorter(bookSorter)
    bookSorter.sort(arg)
    booksToDom(bookSorter)
}

function sortAdded (arg) {
    bookSorter = defaultSorter
    if (arg === false) {
        booksToDom(bookSorter.slice(0).reverse())
    }
    else {
        booksToDom(bookSorter)
    }
}

function booksToDom(arg) {
    num = 0
    for (let title of titleSelector) {
        title.innerText = arg[num]['title']
        num += 1
    }
    num = 0
    for (let author of authorSelector) {
        author.innerText = arg[num]['author']
        num += 1
    }
    num = 0
    for (let description of descriptionSelector) {
        description.innerText = arg[num]['description']
        num += 1
    }
    num = 0
    for (let url of urlSelector) {
        url.innerText = arg[num]['url']
        url.setAttribute("href", arg[num]['url'])
        num += 1
    }
    num = 0
    for (let category of categorySelector) {
        category.innerText = arg[num]['category']
        num += 1
    }
    num = 0
    for (let added of addedSelector) {
        added.innerText = arg[num]['added']
        num += 1
    }
    num = 0
    for (let image of bookImageSelector) {
        image.src = arg[num]['book-image']
        num += 1
    }
}

alphabeticalButton.addEventListener("click", function() {
    sortAlphabetical(alphabetical)
    dateAddedButton.classList.remove("button-selected")
    dateAddedButton.classList.add("button")
    alphabeticalButton.classList.remove("button")
    alphabeticalButton.classList.add("button-selected")
    reverseAlphabeticalButton.classList.remove("button-selected")
    reverseAlphabeticalButton.classList.add("button")
    reverseDateAddedButton.classList.remove("button-selected")
    reverseDateAddedButton.classList.add("button")
})  

reverseAlphabeticalButton.addEventListener("click", function() {
    sortAlphabetical(reverseAlphabetical)
    dateAddedButton.classList.remove("button-selected")
    dateAddedButton.classList.add("button")
    alphabeticalButton.classList.remove("button-selected")
    alphabeticalButton.classList.add("button")
    reverseAlphabeticalButton.classList.remove("button")
    reverseAlphabeticalButton.classList.add("button-selected")
    reverseDateAddedButton.classList.remove("button-selected")
    reverseDateAddedButton.classList.add("button")
})  

dateAddedButton.addEventListener("click", function() {
    sortAdded(true)
    dateAddedButton.classList.remove("button")
    dateAddedButton.classList.add("button-selected")
    alphabeticalButton.classList.remove("button-selected")
    alphabeticalButton.classList.add("button")
    reverseAlphabeticalButton.classList.remove("button-selected")
    reverseAlphabeticalButton.classList.add("button")
    reverseDateAddedButton.classList.remove("button-selected")
    reverseDateAddedButton.classList.add("button")
})  

reverseDateAddedButton.addEventListener("click", function() {
    sortAdded(false)
    dateAddedButton.classList.remove("button-selected")
    dateAddedButton.classList.add("button")
    alphabeticalButton.classList.remove("button-selected")
    alphabeticalButton.classList.add("button")
    reverseAlphabeticalButton.classList.remove("button-selected")
    reverseAlphabeticalButton.classList.add("button")
    reverseDateAddedButton.classList.remove("button")
    reverseDateAddedButton.classList.add("button-selected")
})  

sorter(defaultSorter)