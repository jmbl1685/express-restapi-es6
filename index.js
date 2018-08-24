'use strict'

import app from './app'
import chalk from 'chalk'
import 'dotenv/config';

const port = process.env.PORT
const message = process.env.MESSAGE

app.listen(port, () => {
    console.log(chalk.blue(`${message} ${port}`))
})
