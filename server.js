/* Node Package Imports */

const express = require('express')

/* Imports */

const config = require('./src/config/config')

const app = express()

app.listen(config.app.PORT, () => {
    console.log(`Server is running on PORT ${ config.app.PORT }`)
})