const { Sequelize, DataTypes } = require('sequelize')
const modelsPokemon = require('../models/pokemons')

const Pokemons = require('./pokemons')

const sequelize = new Sequelize(
    'pokedexdb',
    'root',
    '',
    {
      host: 'localhost',
      dialect: 'mysql'
    },
    logging = false
 )

 const Pokemon = modelsPokemon(sequelize, DataTypes)
 
 const initDb = () => {
    return sequelize.sync({force: true})
    .then(_=> {
        
const Pokemons = require('./pokemons')
           Pokemons.map(pokemon => {
           Pokemon.create({
                name: pokemon.name,
                hp: pokemon.hp,
                cp: pokemon.cp,
                picture: pokemon.picture,
                types: pokemon.types
                }).then(pokemons => console.log(pokemons.toJSON()))
           })

        console.log('Toutes les données ont été initialisée dans la base !')
    })
    
 }

 module.exports = {
    initDb, Pokemon
 }




 /*sequelize.authenticate()
 .then(_=> console.log('Connexion à la base de données et création de la table pokedexdb bien établie. ') )
 .catch(error => console.error(`Impossible de se connecter ${error}`))

 module.exports = sequelize
 */


 