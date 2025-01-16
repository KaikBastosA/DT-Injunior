function countBooksInCategory() {
    let booksCount = {};
    for (let ctg of booksByCategory) {
        booksCount[ctg.category] = ctg.books.length;
    }
    return booksCount;
}

console.log(countBooksInCategory());