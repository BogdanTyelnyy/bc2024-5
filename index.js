const {program} = require("commander")
const express = require('express')

program
    .requiredOption('-h, --host <host>', 'Your host')
    .requiredOption('-p, --port <port>', 'Your port')
    .requiredOption('-c, --cache <cache>', 'Your cache')

program.parse()
const opts = program.opts()

const app = express()
app.listen(opts.port, opts.host, () => {
    console.log(`Server run on http://${opts.host}:${opts.port}`)
})

