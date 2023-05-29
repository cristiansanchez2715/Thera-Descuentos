
class productos {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    }
      
    var bicicleta = new productos("bicicleta", 60000)
    var patineta = new productos("patineta", 30000)
    var patines = new productos("patines", 35000)
    var monopatin = new productos("monopatin", 55000)
    var monociclo = new productos("monociclo", 45000)
    var bmx= new productos("bmx", 100000)
    


//Funcionalidades Navegacion

const lista = document.querySelectorAll('.lista1')
const secciones = document.querySelectorAll('.seccion')

//click en la lista
 
lista.forEach( ( cadalista , i)=>{
    lista[i].addEventListener("click", () =>{
        lista.forEach( (cadalista, i )=> {
            lista[i].classList.remove('activo')
            secciones[i].classList.remove('activo')
        } )

        lista[i].classList.add('activo')
        secciones[i].classList.add('activo')
    })
})





//Funcionalidades Sofware

const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular').value
const pResult = document.querySelector('#result')
const pResult1 = document.querySelector('#result1')
const pResult2 = document.querySelector('#result2')
const pResult3 = document.querySelector('#result3')
const pResult4 = document.querySelector('#result4')
const pResult5 = document.querySelector('#result5')
const pResult6 = document.querySelector('#result6')
const pResult7 = document.querySelector('#result7')
const pResult8 = document.querySelector('#result8')
const pResult9 = document.querySelector('#result9')
const btn1 = document.getElementById('boton1')
const btn2 = document.getElementById('boton2')
const btn3 = document.getElementById('boton3')
const btn4 = document.getElementById('boton4')
const btn5 = document.getElementById('boton5')
const btn6 = document.getElementById('boton6')
const btn7 = document.getElementById('boton7')
const btn8 = document.getElementById('boton8')
const btn9 = document.getElementById('boton9')
const btnNuevo = document.getElementById("botonNuevo")



var bicicleta = 20.000

btn1.addEventListener('click', descuento1)
btn2.addEventListener('click', descuento2)
btn3.addEventListener('click', descuento3)
btn4.addEventListener('click', descuento4)
btn5.addEventListener('click', descuento5)
btn6.addEventListener('click', descuento6)
btn7.addEventListener('click', descuento7)
btn8.addEventListener('click', descuento8)
btn9.addEventListener('click', descuento9)



var descuentos = [descuento1, descuento2, descuento3]

function calcularPrecioConDescuento(){
    const price1 =inputPrice.value;
    const discount =inputDiscount.value;

    const newPrice = (price1 * (100  - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es ' + newPrice; 
    }

    function descuento1(){
       let descuento = 10;
        const price1 = Number(inputPrice.value);
        const newPrice = (price1 * (100  - descuento)) / 100;

    pResult1.innerText = 'El nuevo precio con descuento es ' + newPrice; 
    }

    
    function descuento2(){
        let descuento = 20;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
     pResult2.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }

     
     
    function descuento3(){
        let descuento = 30;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
         
     pResult3.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }

     function descuento4(){
        let descuento = 40;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
         
     pResult4.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }
     function descuento5(){
        let descuento = 50;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
         
     pResult5.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }
     function descuento6(){
        let descuento = 60;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
         
     pResult6.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }
     function descuento7(){
        let descuento = 70;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
         
     pResult7.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }
     function descuento8(){
        let descuento = 80;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
         
     pResult8.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }
     function descuento9(){
        let descuento = 90;
         const price1 = Number(inputPrice.value);
         const newPrice = (price1 * (100  - descuento)) / 100;
 
         
     pResult9.innerText = 'El nuevo precio con descuento es ' + newPrice; 
     }




     function insertarValorBicicleta(){
     let precioBicicleta = 20000
    
    pResult.innerHTML = 'El precio de la bicicleta es de ' + precioBicicleta

     }



var botonCalculo = document.getElementById("calcular")
var botonCalculo2 = document.getElementById("calcular2")

botonCalculo2.addEventListener('click', calcularPrecioConDescuento)
botonCalculo.addEventListener("click", clasificarArticulo)
var definitivo = document.getElementById("resultadoPersonalizado")


  function clasificarArticulo(){
    
var input = document.getElementById("articulo").value
var inputDescuento = document.getElementById("descuento").value

    if (input === "bicicleta"){
        descuento(bicicleta, inputDescuento)
    }
    else  if (input === "patineta"){
        descuento(patineta,inputDescuento)
    }
    else  if (input === "patines"){
        descuento(patines,inputDescuento)
    }
    else  if (input === "monopatin"){
        descuento(monopatin,inputDescuento)
    }
    else  if (input === "monociclo"){
        descuento(monociclo,inputDescuento)
    }
    
    else  if (input === "bmx"){
        descuento(bmx, inputDescuento)
    }
 
    else {
        definitivo.innerText = 'El producto no esta en la lista'
        
    }
  }

  

  function descuento(producto, inputDescuento){
    var inputDescuento = document.getElementById("descuento").value
    const newPrice = (producto.precio * (100 - inputDescuento)) / 100;
    definitivo.innerText = 'El nuevo precio para ' + producto.nombre + " es de " + newPrice; 
  }

console.log(bicicleta.nombre)


// var precioNuevo = document.getElementById("precioNuevo")
const productosCreadosResult = document.getElementById("productosCreadosResult")
const productosCreados = []
var nuevaLista = document.getElementById("agregarLista")
// var nombreNuevo = document.getElementById("nombreNuevo")



function probar(){

}
document.addEventListener("DOMContentLoaded", function() {
    
    
    var btnprueba = document.getElementById("probar");
    btnprueba.addEventListener("click", function() {
       
        alert(nombreNuevo)
    });
  });

  var nuevoProducto
  var productoAdicional = nombreNuevo.value
  var precioAdicional = precioNuevo.value
  btnNuevo.addEventListener("click", creaProducto)

  function creaProducto() {
    var productoAdicional = prompt("Ingrese el nombre del producto:");
    var precioAdicional = prompt("Ingrese el precio del producto:");
  
    var nuevoProducto = new productos(productoAdicional, precioAdicional);
    pintarProductosCreados(nuevoProducto);
    return nuevoProducto
  }


function pintarProductosCreados(nuevoProducto){
  var nuevoElemento = document.createElement('li')
  var nuevoBr = document.createElement('br')
  var ul = document.getElementById('ul')
 
  ul.appendChild(nuevoElemento)
  ul.appendChild(nuevoBr)
  ul.appendChild(nuevoBr)
  nuevoElemento.innerHTML = nuevoProducto.precio

}