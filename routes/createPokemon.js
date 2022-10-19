const {Pokemon} = require('../db/sequelize')


module.exports = (app) => {
    app.post('/api/pokemons', (req,res) => {
        Pokemon.create(req.body).then(pokemon => {
        const message = `Le pokemon ${req.body.name} bien créee.`
        res.json({message, data: pokemon})
        })
    })
  }


/*
app.post('/api/pokemons', (req,res) => {
    const id = getPokemonId(pokemons)
    const pokedemonCreated = {...req.body, ...{id: id , created: new Date()}}
    pokemons.push(pokedemonCreated)
    const message = `Le pokemon ${req.body.name} bien créee.`
    res.json(sucess(message,pokemons))
})
*/
