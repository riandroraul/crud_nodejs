const books = require('./books')
// const { saveBooks, pertanyaan } = require('./books')



// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('masukkan nama penerbit: ', (penerbit) => {
//             resolve(penerbit)
//         })
//     })
// }

// const pertanyaan3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('masukkan nama pengarang: ', (pengarang) => {
//             resolve(pengarang)
//         });
//     });
// }

const main = async () => {
    const namaBuku = await books.pertanyaan('masukkan nama buku : ')
    const penerbit = await books.pertanyaan('masukkan nama penerbit : ')
    const pengarang = await books.pertanyaan('masukkan nama pengarang : ')

    books.saveBooks(namaBuku, penerbit, pengarang)
}

main()

// rl.question('masukkan nama buku: ', (namaBuku) => {
//     rl.question('masukkan nama penerbit: ', (penerbit) => {
//         rl.question('masukkan nama pengarang: ', (pengarang) => {

//             const book = {namaBuku, penerbit, pengarang}
//             const file = fs.readFileSync('data/books.json', 'utf-8')
//             const books = JSON.parse(file)
            
//             books.push(book)
//             fs.writeFileSync('data/books.json', JSON.stringify(books))
//             console.log('berhasil')
//             rl.close();
//         })
//     })
// })
