const express = require('express')
const app = express();

const userRoutes = require('./routes/user')
const analyticsService = require('./services/analytics')
const analyticsRoutes = require('./routes/analytics')
const error = require('./services/error');

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
        const durationInMilliseconds = analyticsService.getDurationInMilliseconds(start)
        console.log(`${req.method} ${req.originalUrl} [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    res.on('close', () => {
        const durationInMilliseconds = analyticsService.getDurationInMilliseconds(start)
        console.log(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
    })

    next()
})

app.use(analyticsService.countRequests)
app.use(analyticsService.countindividualRequests)

app.use('/user' , userRoutes)
app.use(analyticsRoutes)

app.use(error.get404);

module.exports = app
