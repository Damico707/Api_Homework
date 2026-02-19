document.getElementById("boton-find").addEventListener("click",function (){
    let nombre= document.getElementById("nameInput").value;
    console.log(nombre)
    let link="https://rickandmortyapi.com/api/character/?name="+nombre;
    console.log(link)
    fetch(link)
    .then(function (res){console.log (res.json)})
})