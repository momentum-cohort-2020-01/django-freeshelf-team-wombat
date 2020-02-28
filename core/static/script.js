let bookSelector = document.querySelectorAll(".book")
let titleSelector = document.querySelectorAll(".title")
let authorSelector = document.querySelectorAll(".author")
let descriptionSelector = document.querySelectorAll(".description")
let urlSelector = document.querySelectorAll(".url")


let bookSorter = []
let num = 0

function test() {
    num = 0
    for (let book of bookSelector) {
        bookSorter.push({title: "", author: "", description: "", url: ""})
    }
    for (let title of titleSelector) {
        bookSorter[num]["title"] = title.innerText
        num += 1
    }
    num = 0
    for (let author of authorSelector) {
        bookSorter[num]["author"] = author.innerText
        num += 1
    }
    num = 0
    for (let description of descriptionSelector) {
        bookSorter[num]["description"] = description.innerText
        num += 1
    }
    num = 0
    for (let url of urlSelector) {
        bookSorter[num]["url"] = url.innerText
        num += 1
    }

    bookSorter.sort(compare)
    booksToDom()
}

function compare(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
    }
    return 0
}

function booksToDom() {
    num = 0
    for (let title of titleSelector) {
        title.innerText = bookSorter[num]['title']
        num += 1
    }
    num = 0
    for (let author of authorSelector) {
        author.innerText = bookSorter[num]['author']
        num += 1
    }
    num = 0
    for (let description of descriptionSelector) {
        description.innerText = bookSorter[num]['description']
        num += 1
    }
    num = 0
    for (let url of urlSelector) {
        url.innerText = bookSorter[num]['url']
        url.setAttribute("href", bookSorter[num]['url'])
        num += 1
    }
}

// test()