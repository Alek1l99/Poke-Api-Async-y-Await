let seleccionPokemon = document.getElementById('pokemon');
let pokedex = {};

async function getPokemon (){
  try{
    let pokemon = seleccionPokemon.value;
    alert("Se consumio el sercicion con el pokemon " + pokemon)
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
    const data = await response.json();
    pokedex= data;
    console.log("La Habilidad de " + pokemon + " es: " + pokedex.abilities[0].ability.name);
  }catch(error) {
    console.log('El Error es:'+ error)
  }
  obtenerVersion();
}

function obtenerVersion(){
  const versiones = pokedex.game_indices;
  versiones.forEach(index => {

    let nombreVersion = index.version.name
    console.log("Aparece en estas version " + nombreVersion)

      }
  );
}







// function getPokemon(){
//     let pokemon = seleccionPokemon.value;
//     alert("Se llamo al servicio con el pokemon " + pokemon);
//     fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
//     .then(response => response.json())
//     .then(data =>{
//       pokedex=data;
//       console.log(pokedex.name)
//       })
//       .catch(error => {
//         console.log('El Error es:'+ error)
//       });
// }