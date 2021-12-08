const express = require('express');
const path = require('path');
const routes = require('./routes');
const { urlencoded } = require('body-parser')

const app = express();

app.set('view engine','ejs');
app.set('views',path.resolve('src','views'));
app.use(express.static(path.resolve('src','public')));

app.use(express.json())
app.use(urlencoded({extended:false}))

app.use(routes);

app.listen(3000,()=> console.log('Servidor Rodando em:','http://localhost:3000'));