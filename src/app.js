const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const router = require('./routes/routes');
const { urlencoded } = require('body-parser')

const app = express();

app.use(methodOverride("_method"));
app.use(express.json())
app.use(urlencoded({extended:false}))
app.set('view engine','ejs');
app.set('views',path.resolve('src','views'));
app.use(express.static(path.resolve('src','public')));

app.use(router);

app.listen(3000,()=> console.log('Servidor Rodando em:','http://localhost:3000'));