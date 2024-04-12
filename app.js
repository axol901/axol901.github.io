const express = require('express');
const app = express();
const port = 3000;

// make necessary elements or files accessible
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// send appropriate html files when client navigates to certain urls
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});
app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// when submitting form, assign content of form elements to server-side variables and print them to the console
app.post('/submit-form', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const message = req.body.message;

    console.log('Form submitted.');
    console.log('First Name: '+fname);
    console.log('Last Name: '+lname);
    console.log('Email: '+email);
    console.log('Message: '+message);

    res.sendFile(__dirname + '/contact.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
