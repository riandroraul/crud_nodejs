const http = require('http')
const fs = require('fs')
const port = 3000

http 
  .createServer( (req, res) => {
    res.writeHead(200, {
      'Content-type': 'text/html'
    })
    const url = req.url

    const renderHtml = (path, res) => {
      fs.readFile(path, (error, data) => {
        if(error){
          res.writeHead(404)
          res.write('Error file not found')
        }else{
          res.write(data)
        }
        res.end()
      });
    }

    switch(url){
      case '/about':
        renderHtml('./about.html', res)
        break;
      case '/books':
        renderHtml('./books.html', res)
        break;
      default: 
        renderHtml('./index.html', res)
    }
  })
  .listen(port, () => console.log(`Server is listening on port ${port}`));



    // if(url === '/about'){
    //   renderHtml('./about.html', res)
    // } else if(url === '/books'){
    //   res.write(`<h1>ini adalah halaman Buku</h1>`)
    //   res.end()
    // } else {
    //   renderHtml('./index.html', res)
    // }