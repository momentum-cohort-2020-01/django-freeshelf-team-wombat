let bookSelector = document.querySelectorAll(".book")
let titleSelector = document.querySelectorAll(".title")
let authorSelector = document.querySelectorAll(".author")
let descriptionSelector = document.querySelectorAll(".description")

let bookSorter = []
let num = 0

function sortAtoZ() {
    for (let book of bookSelector) {
        bookSorter.push(book.firstElementChild.innerText)
        bookSorter.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        })
    }
    for (let book of bookSelector) {
        book.firstElementChild.innerText = bookSorter[title]
        num += 1
    }
}

// sortAToZ()

function test() {
    for (let book of bookSelector){
        bookSorter.push({})
    }
    for (let title of titleSelector) {
        bookSorter[0]
    }
}

test()