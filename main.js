// console.log("hola mundo");

// ESTRUCTURA CONDICIONAL IF
// if (condition) {
// } else {
// }

/*var edad1 = 34;
var edad2 = 32;

if (edad1 > edad2) {
  document.write("edad 1 es mayor");
} else if (edad2 > edad1) {
  document.write("edad 2 es mayor");
} else if ((edad1 = edad2)) {
  document.write("las edades son iguales");
} else {
  document.write("ingresar un numero ");
}
*/

// var horaLlegada = 8.3;
// var diezmo = 8.15;

// if (horaLlegada > diezmo) {
//   document.write("toco pagar");
// }

// var edadPersona = 18;
// var mayoriaEdad = 20;

// if (edadPersona >= mayoriaEdad) {
//   if (edadPersona >= 20) {
//     document.write("con cedula");
//   } else {
//     document.write("siga");
//   }
// } else {
//   document.write("largo de aqui");
// }

// var tiempoCoccion = 15;
// var tieneSal = true;

// if (tiempoCoccion >= 15 && tieneSal == true) {
//   console.log("ya esta rico");
// } else {
//   console.log("...");
// }

//ESTRUCTURA CONDICIONAL Switch

// var meses = parseInt(prompt("ingresar numero de mes"));
// switch (meses) {
//   case 1:
//     console.log("es enero");
//     break;
//   case 2:
//     console.log("es febrero");
//     break;
//   default:
//     console.log("ingresar mes");
//     break;
// }

// ARREGLOS
var mercado = ["pan", 4, "huevos"];
mercado[1] = "mantequilla";
console.log(mercado[1]);
console.log(mercado.length);

// mercado[mercado.length] = "carne"; ESTA ES UNA OPCIÓN DE AGREGAR ELEMENTOS AL ARREGLO

mercado.push("carne");
console.log(mercado);
