
let myurl = ('https://rickandmortyapi.com/api/character')
let valor = prompt ("Categoria a buscar")


fetch(myurl)
.then(response=> response.json())
.then(data=> {
    console.log(data ['results'][0][valor]);
});