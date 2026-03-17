const express = require('express')
const cors = require('cors')

const app = express();

const userRoutes = require('./routes/user')
const errorController = require('./controllers/error');

app.use(cors());

app.use((req, res, next) => {
    console.log(`request method : ${req.method} and request URL : ${req.url}`)
    next()
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to webpage');
})

app.use(userRoutes)

app.use(errorController.get404);

const PORT = 3001;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});