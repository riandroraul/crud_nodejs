const { stdout } = require('process')
const fs = require('fs');
// readline
const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: stdout,
});


// membuat folder baru jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

// membuat file baru jika belum ada
const filePath = './data/books.json';
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]', 'utf-8')
}

const pertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
      rl.question(pertanyaan, (namaBuku) => {
          resolve(namaBuku)
      })
  })
}

const saveBooks = (namaBuku, penerbit, pengarang) => {
    const book = {namaBuku, penerbit, pengarang}

    const file = fs.readFileSync('data/books.json', 'utf-8')
    const books = JSON.parse(file)
    
    books.push(book)
    fs.writeFileSync('data/books.json', JSON.stringify(books))
    console.log('berhasil')
    rl.close();
}

module.exports = {saveBooks, pertanyaan}