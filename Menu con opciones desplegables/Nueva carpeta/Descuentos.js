var descuento = document.querySelector("#descuento")
var boton = document.querySelector("#boton")
boton.addEventListener("click", probar)

var numero = document.querySelector("#numero")
var elNumero = numero.value


function probar(){
    console.log(elNumero)
}
probar(elNumero)


class productos {
  constructor(nombreProducto, precio){
    this.nombreProducto = nombreProducto;
    this.precio = precio;
  }
}
descontar = [(10), (20), (30),]

function descuento(productos, descontar){


  valorDescontado = (productos.precio * (100 - descontar )) / 100
console.log(valorDescontado)
}

var bicicleta = new productos("bicicleta", 80.000)
var monociclo = new productos("monociclo", 40.000)
var patineta = new productos("patineta", 38.000)

descuento(bicicleta, descontar[0])