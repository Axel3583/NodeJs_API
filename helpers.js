

exports.sucess = (message, data) => {
  return {message, data}
}

exports.getPokemonId = (pokemons) => {
   const PokemonId= pokemons.map(pokemons => pokemons.id)
   const maxId = PokemonId.reduce((a,b) => Math.max(a,b))
   const uniquId = maxId + 1
   return uniquId
}
