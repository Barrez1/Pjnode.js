const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')
const { where } = require('sequelize')

// config 


//Template engine
app.engine('handlebars', handlebars.engine({ 
    defaultLayout: 'main', 
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true, 
    },    
}))
app.set('view engine', 'handlebars')

    //body parser 
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

        //rota
        app.get('/', function(req, res){
            Post.findAll({order: [['id','DESC']]}).then(function(posts){
                console.log(posts)
                res.render('home', {posts: posts})
            })
           
        })

        app.get('/cad', function(req, res){
            res.render('formulario')
        })
        app.post('/add', function(req, res){
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
               res.redirect('/')
                
            }).catch(function(erro){
                res.send("Houve um erro: "+ erro)
            })
        })
       
        app.get('/deletar/:id', function(req,res){
            Post.destroy({where: {'id': req.params.id}}).then(function(){
                res.send('Postagem deletada com sucesso')
            }).catch(function(erro){
                res.send('Esta postagem não existe')
            })
        })
  

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");

});