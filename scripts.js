const ticket = 200;

const desEstudiante = 0.8;
const desTrainee = 0.5;
const desJunior = 0.15;

const cantidad = document.getElementById("cantidad")
const categoria = document.getElementById("categoria")
const totalAPagar = document.getElementById("totalAPagar")
const btnResumen = document.getElementById("resumen")

console.log(cantidad);

function calcularPago(){
    let total = cantidad.value * ticket;

    switch (categoria.value) {
        case "estudiante":
            total = total - (total*desEstudiante);
            break;
        case "Trainne":
            total = total - (total*desTrainee);
            break;
        case "junior":
            total = total - (total*desJunior);
            break;        
    
    } 
    totalAPagar.textContent = " Total a Pagar: $ ${total}" ;


}

btnResumen.addEventListener("click", (e)=> {
        e.preventDefault();      //incluir preventDefault en cada caso de botones//
        calcularPago();
});    
