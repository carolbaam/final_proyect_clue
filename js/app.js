var testArray= [];
for (var i=0; i<10; i++){
    //agregar elementos al arreglo en la última posición
    testArray.push(i);
}
console.log(testArray);
//eliminar el primer elemento de un arreglo
testArray.shift();
console.log(testArray);
//eliminar el último elemento del array
testArray.pop();
console.log(testArray);
//revertir los elementos del arrreglo
testArray.reverse();
console.log(testArray);
/*------------------------------------------------------------*/

var testString="abcde";
testString.charAt(2);


/*para obtener un caracter a partir de su código Ascii  utilizo
el método String.fromCharcode */

var code= testString.charCodeAt(2)
console.log(code);