
let input = prompt ("Categoria a buscar")
switch (input) {
    case "1":
        valor = "character"
        valor+="?name="+prompt("nombre")
    case "2":
        valor = "location"
    case "3":
        valor
}
let myurl = ('https://rickandmortyapi.com/api/'+valor)


fetch(myurl)
.then(response=> response.json())
.then(data=> {
    console.table(data['results']);
});