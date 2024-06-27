import { libros } from "./libros"

export function mostrarMenu() {
    console.log('--- Menú ---');
    console.log('1. Abastecer ejemplares');
    console.log('2. Vender ejemplares');
    console.log('3. Mostrar información del libro');
    console.log('4. Agregar nuevo libro');
    console.log('0. Salir');
}


export function agregarNuevoLibro() {
    const isbn = '987654'; 
    const titulo = 'Nuevo Libro'; 
    const imagen = 'imagen2.jpg'; 
    const precioCompra = 6000;
    const precioVenta = 10000; 

    const nuevoLibros = new libros(isbn, titulo, imagen, precioCompra, precioVenta);
    console.log(`Nuevo libro "${titulo}" agregado.`);
    return nuevoLibros;
}