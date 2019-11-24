const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')

//require('./database');

const app = express()

app.use(cors())
app.use('/_p_',bodyParser.urlencoded({extended: true})) // server pra transformar oq vem da pag em objeto pra usar o request
app.use(express.json())
app.use(routes)


app.listen(process.env.PORT || 5500);
