const express = require('express')
const morgan = require('morgan')
const cors = require('cors' )
const bodyParser = require('body-parser');
const app = express()

app.options('*', cors())

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
/*app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));*/
app.use(bodyParser.urlencoded({extended: true, parameterLimit: 100000, limit: '500mb', }));
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: false}))
app.use(require('./router/router'))

app.listen(app.get('port'))
console.log(`Server on port ${app.get('port')}`)