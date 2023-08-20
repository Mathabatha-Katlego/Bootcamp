const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');

app.use(express.static('public'))

const app = express();

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notfound.html');

app.get('/about', (req, res) => { // called when request to /about comes in
    res.sendFile(path.resolve(__dirname, 'about.html'))
})
app.get('/contact', (req, res) => { //called when request to /contact comes
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.get('/about', (req, res) => {
    res.end('The about page');
});

app.get('/contact', (req, res) => {
    res.end('The contact page');
});

app.get('/', (req, res) => {
    res.end('The home page');
});

app.use((req, res) => {
    res.writeHead(404);
    res.end('Page not found');
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
