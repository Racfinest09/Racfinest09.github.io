/*console.log ("Hola mundo");
var nombre = "Nicolas";
var apellido = "Ruiz";
const PI = 3.1415;
let cantidad = "42"

console.log (nombre);
console.log (apellido);
console.log(PI);
console.log (cantidad);
console.log ()

let persona ={
    nombre: "Ana",
    apellido: "Rodriguez",
    edad: 30
};

let lista = ["Carlos","Pedro","Maria","Juan","Nicolas"]

console.log (persona);
console.log ("Edad de la persona: ",persona.edad);
console.log ("Nombre de la persona: ",persona.nombre);
console.log ("Apellido de la persona: ",persona.apellido);
console.log ("Los compañeros de clase de Ana son: ",lista[0],lista[1],lista[2],lista[3],lista[4]);
function saludar(){
    console.log("hola grupo, comienza la clase");
}
saludar();

let numero1 = 65
let numero2 = 70
console.log (" A continuacion aplicaran las operaciones aritmeticas basicas en los siguientes numeros:")
let suma = numero1+numero2;
let resta = numero2-numero1;
let multiplicacion = numero1*numero2;
let division = numero1/numero2;

console.log ("Esta es la suma de 65 + 70: ",suma);
console.log ("Esta es la resta de:",70,"-", 65,"=", resta);
console.log ("Esta es la multiplicacion de 65 * 70: ",multiplicacion);
console.log ("Esta es la division de 65 / 70: ",division);

let x = 10;
console.log (x);
x +=5; // => x+5=15
console.log("SUMA",x);
x *=5; // => x*5 => 50
console.log ("MULTILICACION",x);
x -=5; // => x-5 => 45
console.log ("RESTA",x);
x /=5; // => x/5 => 2
console.log ("DIVISION",x);

if(x<5){
    console.log("Hola");
}
else{
    console.log("Chao");
}

let x = 10;
let y = 20;
console.log(x);
console.log(y);

x++; 
console.log(x<y);
console.log(x>y);
console.log(x!=y);
console.log(x==y);

function saludar(nombre, apellido){
    return "Hola, "+nombre + " "  +apellido;
}
let saludo = saludar("Ana","Perez");
console.log(saludo);//Hola Ana

let sumar = function (x,y){
    return x + y;
}
console.log(sumar(5,8))

let restar = (x,y) => x - y;
console.log(restar(5,8))

function multiplicar(x,y){
    return x*y
}
console.log(multiplicar(5,8))

function dividir(x,y){
    return x/y
}
console.log (dividir(0,6))

let global = "Soy global";
function prueba(){
    let local = "Soy local";
    console.log(global);
    console.log(local);//No podemos llamar a una variable que esta dentro de una funcion//
}
prueba();

for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
 for (let i = 0; i<=20;i+=1) {
    console.log("Numeros:"+ i);
}
let x = 0;
for (let i =1;i<=100;i++){//hacer un factorial
    x += i;
}
let promedio = x/101
console.log("Promedio numeros del 1 al 100:"+x)
console.log("Promedio numeros del 1 al 100:"+promedio)

for (let p =0;p<=100;p+=2){
    console.log("Numeros pares: ",p)
}
for (let p =0;p<=100;p+=3){
    console.log("Numeros inpares: ",p)
}
let i = 1
let x = i
while (i<=12){
    //console.log("Numero: "+ i);
    x=x*=i
    console.log("Numero: "+ x);
    i++
}

let numeros = [1,2,3,4,5];
for(let numero of numeros){
    console.log(numero);
}*/
let estudiantes = [
    {nombre:"carlos",edad:40},
    {nombre:"pedro",edad:25},
    {nombre:"juan",edad:33},
    {nombre:"julio",edad:48},
    {nombre:"jose",edad:22},
];
for (let estudiante of estudiantes){
    console.log(estudiante);
}
let suma=0;
for(let estudiante of estudiantes) {
    suma+=estudiante.edad;
}
console.log(estudiantes.length);
console.log(suma/estudiantes.length);