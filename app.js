const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/mainstyles.css');
});
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/mainstyles.css');
});
app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/about.html');
    res.sendFile(__dirname + '/mainstyles.css');
});
app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
    res.sendFile(__dirname + '/mainstyles.css');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    console.log('Form submitted.')
    res.send(`Username is $cstable1`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
