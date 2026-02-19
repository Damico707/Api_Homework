
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

let op = prompt("Que desea hacer? \n1-buscar por categoría \n2-buscar por id");

function buscar(variable) {
    fetch("https://rickandmortyapi.com/api/"+variable)//imprimir Api general
        .then(response => response.json())
        .then(data=>{
            console.table(data["results"]);
            let index = prompt("escoje el id (basado en el index de la tabla presentada)")
            console.table(data["results"][index]);//cuando se accede a la lista estando en console.table tengo que poner el index y no el id
        }); 
}

switch(op){
    case "1":
        let completion = prompt("ingrese la categoria");
        completion += "?name="+prompt("Ingrese el nombre a buscar")
        buscar(completion);
        break;
    case "2":
        let id = prompt("Ingrese el id a buscar(1-826)");
        fetch("https://rickandmortyapi.com/api/character/" + id)
        .then(response => response.json())
        .then(data=>{
            console.table(data);
    });