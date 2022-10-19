const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/pokemons/:id', (req,res) => {
        Pokemon.findByPk(req.params.id).then(pokemon => {
            const message = `Bien vu ! ${pokemon.name}.`
            res.json({message, data: pokemon})
        })
    })
}