const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/user')
const errorController = require('./controllers/error');

app.use(cors());

app.use((req ,res , next) => {
    console.log(req.method , req.url)
    next()
})

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes)

app.use(errorController.get404);

app.post('/' , (req , res) => {
    res.send('<html><h1>welcome to page </h1> </html>')
})

const PORT = 3001;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});