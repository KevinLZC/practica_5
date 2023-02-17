let obj = {
	nombre: "Kevin",
	edad: 20,
	apellido: "Lázaro",
	keypress: function() {
		return "Se ha presionado una tecla";
	},
	mouseOver: function() {
		return "El puntero del mouse esta arriba";
	}
}
//console.log(obj.nombre);
//console.log(obj['nombre']);

//let myKey = 'nombre';
//myKey = 'keypress';
//console.log(obj[myKey]());
//myKey = 'mouseOver';
//console.log(obj[myKey]());

/*let myArray = [];

myArray.push(4)
myArray.push("una cadena")
myArray.push(obj)
myArray.push(function() {
	return "hola desde mi array";
})

console.log(myArray[3]())
console.log(myArray[2].keypress())
console.log(myArray[2].mouseOver())*/

let funcArray = [];

funcArray.push(() => {
	return "Function 1";
});

funcArray.push(() => {
	return "Function 2";
});

funcArray.push(() => {
	return "Function 3";
});

funcArray.forEach((func) => {
	console.log(func());
})

let Emitter = require('./emitter');
let emtr = new Emitter();

emtr.on('greet', () => {
	console.log("Somewhere, someone said hello!");
});

emtr.on('greet', () => {
	console.log("A greeting ocurred!");
});

console.log("Hello!");
emtr.emit('greet');

emtr.on('jump', () => {
	console.log("someone jumped!");
});

console.log(emtr);
emtr.emit('jump');

//Emmit ahora tiene la forma de un vector en donde podemos ver todas las funciones que contienen los eventos
 
