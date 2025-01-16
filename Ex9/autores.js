function authors() {
    let authors = [];
    for (let i = 0; i < booksByCategory.length; i++) {
        let ctg = booksByCategory[i];
        for (let j = 0; j < ctg.books.length; j++) {
            let book = ctg.books[j];
            if (authors.indexOf(book.author) === -1) {
                authors.push(book.author);
            }
        }
    }
    return authors;
}

console.log(authors());