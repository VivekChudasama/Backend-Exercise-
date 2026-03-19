const express = require('express')
const app = express();

const userRoutes = require('./routes/user')
const userController = require('./controllers/user')
const analyticsRoutes = require('./routes/analytics')
const errorController = require('./controllers/error');

//logging request method and request URL in consol
app.use((req, res, next) => {
    console.log(`request method : ${req.method} and request URL : ${req.url}`)
    next()
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('welcome to webpage');
})

//get and log the start , finish , close time of the request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} [STARTED]`)
    const start = process.hrtime()

    res.on('finish', () => {
        const durationInMilliseconds = userController.getDurationInMilliseconds(start)
        console.log(`${req.method} ${req.originalUrl} [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    res.on('close', () => {
        const durationInMilliseconds = userController.getDurationInMilliseconds(start)
        console.log(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    next()
})

app.use(userController.countRequests)
app.use(userController.countindividualRequests)

app.use(userRoutes)
app.use(analyticsRoutes)

app.use(errorController.get404);

const PORT = 3001;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});