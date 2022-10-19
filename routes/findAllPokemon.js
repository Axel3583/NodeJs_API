const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/pokemons', (req,res) => {
        Pokemon.findAll()
        .then(pokemons => {
            const message = 'La liste de tous les pokemons ! Bien vu'
            res.json({message, data: pokemons})
        })
    })
}

