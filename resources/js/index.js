/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

// fetch().then().then().catch()
// () => {}
// () => 
                   
let getData = () => {
    // log para verificar que estemos conectados
    //console.log("pablo")
fetch("https://jsonplaceholder.typicode.com/posts")
.then((infoApi) => infoApi.json() 
    //recibiendo la info del api y usamos el meotdo JSON()
    )
.then((infoApiReady) => {
    //console.log(infoApiReady);
for(let i = 0; i < 3; i++){
    //verificar que nos da i
    // dot notation 
    // dot chaining 
    console.log(infoApiReady[i].title);

    // dom selection para apuntar a "recentProjectsColumns" y usamos `` + ${} para mezclar html + logic
document.querySelector(".recentProjectsColumns").innerHTML += `

 <div class="recentProjectBox">
    <img class="columnaImg"                               
     src="./resources/images/projects-section/${infoApiReady[i].id}.jpg" 
    alt="Dibujo geométrico colorido">
    <h3 class="boxTitle">${infoApiReady[i].title.substring(0, 10)}...</h3>           
    <p class="boxParraf">${infoApiReady[i].body.substring(0, 20)}...</p>
    <a class="learnMore" href="">Learn More</a>
</div>
`
}
}
    //iterar sobre lo que recibamos y filtramos la cantidad de info needed + inyeccion de html
    )
.catch((error) => console.log(error))

}
getData()


let diegoTest = async () => {
    // 
   await fetch().then().then().catch()
}