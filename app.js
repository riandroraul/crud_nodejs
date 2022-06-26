const express = require ('express');
const expressLayout = require ('express-ejs-layouts');

const app = express();
const port = 3000;

// menggunakan view engine ejs
app.set('view engine', 'ejs');
app.use(expressLayout)

app.get('/', (req, res) => {
    // res.send('hello world')
    // res.sendFile('./index.html', {root: __dirname})
    res.render('index', {title: 'Halaman Home', layout: 'layouts/main-layout'});
})
app.get('/about', (req, res) => {
    // res.send('ini adalah halaman about')
    // res.sendFile('./about.html', {root: __dirname})
    res.render('about', {title: 'Halaman About', layout: 'layouts/main-layout'})
})
app.get('/books', (req, res) => {
    // res.send('ini adalah halaman buku')
    // res.sendFile('./books.html', {root: __dirname})
    const books = [
        {
            namaBuku: 'Belajar MongoDB',
            penerbit: 'Dicoding',
            pengarang: 'Doddy Satria'
        },
        {
            namaBuku: 'Belajar NodeJS',
            penerbit: 'Pijar Camp',
            pengarang: 'Bagus Pratama'
        },
        {
            namaBuku: 'Belajar Github',
            penerbit: 'Babastudio',
            pengarang: 'Dennis Eka Putra'
        }
    ];
    res.render('books', {title: 'Halaman Buku',layout: 'layouts/main-layout', nama: 'riandroaul', books})
})
app.get('/product/:id', (req, res) => {
    res.send(`Product id : ${req.params.id} <br> category: ${req.query.category}`)
})

app.use('/', (req, res) => { // untuk menangkap url yang tidak ada
    res.status(404)
    res.send('Halaman tidak ditemukan')
})
app.listen(port, () => {
    console.log(`Books App | listening at http://localhost:${port}`)
});

