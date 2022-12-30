const express = require('express')
const res = require('express/lib/response')
const axios = require('axios')

const app = express()

app.listen('3000')

let author = "Mago Minimalista"

//middleware
app.use(express.json())

//routers
app.route('/').get((req,res) => res.send(author))
app.route('/').post( (req,res) => res.send(req.body))
app.route('/').put( (req,res) => {
    author = req.body.author
    res.send(author)
})
app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})
app.route('/sobre').post( (req,res) => {
    const {nome, cidade} = req.body
    res.send(`Nome: ${nome}, Cidade: ${cidade}`)
})
app.route('/sobre').get((req,res) => res.send(req.query))

//Usando axios
app.route('/github').get( (req,res) => {
    axios.get('https://api.github.com/users/magominimalista')
    .then(result => res.send(`<img src="${result.data.avatar_url}" />`))
    .catch(error => console.error(error))
})