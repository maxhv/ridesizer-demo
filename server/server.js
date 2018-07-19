const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const nodemailService = require(__dirname + '/email/nodemailService.js');
const compression = require('compression');

// = middlware =
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

// = check is server works =
app.get('/health-check', (req, res) => {
    res.json({
        status: 'Ok'
    })
})

// === CATCH USER ID ===

app.post('/api/form/:id', (req, res) => {

    const id = req.body.user.id;

    // === EMAIL SERVICE ===
    nodemailService.sendEmailNodemail(id, (err, info) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(info);
        }
    });

});

// set the view engine to ejs
app.set('view engine', 'ejs');

// = make express look in the public directory for assets (css/js/img) =
app.use(express.static(__dirname + '/../build', { maxage: '30d' }));

// = website entire point =
if (process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../build/index.html'));
    });
}

// === START SERVER ===
const port = process.env.PORT || 3001;
app.listen(port);

console.log(`=== NODE JS server is running on ${port} ===`);