import Bases from "./bases.js"
import Lista from "./lista.js"

let b = new Bases (1, 'uno', 15);
let lista = new Lista ();

lista.agregar(b);

b = new Bases (2, 'dos', 10);
lista.agregar(b);
b = new Bases (3, 'tres', 15);
lista.agregar(b);
b = new Bases (4, 'cuatro', 10);
lista.agregar(b);
console.log(lista);

console.log(lista.buscar(3));

console.log(lista.listar());


/*console.log(lista.eliminar(2));
console.log(lista)*/

console.log(lista.listarInv());

console.log(lista.crearTarjeta('dos', 7, 60));

