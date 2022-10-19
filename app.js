const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const sequelize = require('./db/sequelize')




const app = new express()
const port = 4000

app
   .use(morgan('dev'))
   .use(bodyParser.json())

sequelize.initDb()

require('./routes/createPokemon')(app)
require('./routes/findAllPokemon')(app)
require('./routes/findPokemonByPk')(app)
require('./routes/updatePokemon')(app)
require('./routes/destroyPokemon')(app)


  

/*
app.get('/', (req,res) => res.send('Hello World !!'))

app.get('/api/pokemons', (req,res) => { 
    const message = 'Tu as la liste de tous les pokedex.'
    res.json(sucess(message,pokemons))
})

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemonId = pokemons.find(pokemons => pokemons.id === id)
    const message = "Tu as le Pokemon en fonction de L'id."
    res.json(sucess(message,pokemonId))
})



app.put('/api/pokemons/:id', (req,res) => {
    const id =parseInt(req.params.id)
    //const pokemonUpdated = pokemons.find(pokemons => pokemons.id = id)
    const pokemonUpdated = { ...req.body , ...{id: id}}
    pokemons.map(pokemons => { 
        return (pokemons.id === id) ? pokemonUpdated : pokemons.id  
    })
    const message = `Le pokemon ${req.body.name} à bien été modifié.`
    res.json(sucess(message,pokemonUpdated))
})


app.delete('/api/pokemons/:id', (req,res) => {
    const id =parseInt(req.params.id)
    const pokemonDeleted = pokemons.find(pokemons => pokemons.id === id)
    pokemons.filter(pokemons => pokemons.id !== id)
    const message = `Le pokemon ${pokemonDeleted.name} à bien été supprimer.`
    res.json(sucess(message,pokemons))
})

*/


app.listen(port, () => console.log(`Vous êtes en ligne sur : http://localhost:${port} `))

