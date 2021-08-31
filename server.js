const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

const rollbar = Rollbar({
    accessToken: 'c72f1b33d87544fc8a2639ab4faab10d',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`4545 is the port you're looking for`))