let bookSelector = document.querySelectorAll(".book")
let bookSorter = []
let title = 0

function test() {
    for (let book of bookSelector) {
        bookSorter.push(book.firstElementChild.innerText)
        bookSorter.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        })
    }
    for (let book of bookSelector) {
        book.firstElementChild.innerText = bookSorter[title]
        title += 1
    }
}

test()