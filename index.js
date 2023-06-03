const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')

// config 


//Template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

    //body parser 
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

        //rota
        app.get('/cad', function(req, res){
            res.render('formulario')
        })
        app.post('/add', function(req, res){
            res.send('texto: '+req.body.titulo+" Conteudo: "+req.body.conteudo )
        })

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");

});