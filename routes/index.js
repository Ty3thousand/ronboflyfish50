const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => res.render('index', { title: "Home" }));
router.get('/about', (req, res) => res.render('about', { title: "About Us" }));
router.get('/blog', (req, res) => res.render('blog', { title: "Blog" }));
router.get('/contact', (req, res) => res.render('contact', { title: "Contact Us" }));
router.get('/colorado', (req, res) => res.render('colorado', { title: "Colorado Fly Fishing" }));

router.post('/contact', (req, res) => {
    console.log(req.body);
    res.send("Message received! We'll get back to you soon.");
});

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
