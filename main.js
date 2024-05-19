// FUNCIÓN CONSTRUCTORA PARA PRODUCTOS
const producto = function(numero, nombre, tipo, variedad, precio, anio, stock) {
    this.numero = numero;
    this.nombre = nombre; 
    this.tipo = tipo;
    this.variedad = variedad;
    this.precio = precio;
    this.anio = anio;
    this.stock = stock; 
}

// INSTANCIAS DE "PRODUCTO" REPRESENTANDO DISTINTOS VINOS
let prod1 = new producto(1, "alambrado", "tinto", "cabernet sauvignon", 5100, 2009, 11);
let prod2 = new producto(2, "alambrado", "tinto", "cabernet Franc", 5040, 2019, 7);
let prod3 = new producto(3, "alambrado", "tinto", "malbec", 5050, 2008, 14);
let prod4 = new producto(4, "animal color blend", "tinto", "malbec", 8400, 2015, 12);
let prod5 = new producto(5, "animal", "tinto", "malbec", 8515, 2016, 14);
let prod6 = new producto(6, "animal", "tinto", "syrah", 8310, 2015, 9);
let prod7 = new producto(7, "edad moderna", "blanco", "sauvignon blanc", 13500, 2021, 4);
let prod8 = new producto(8, "alma negra", "blanco", "blend", 16150, 2020, 6);
let prod9 = new producto(9, "animal chardonnay", "blanco", "organico", 7650, 2018, 15);
let prod10 = new producto(10, "animal color blend", "blanco", "blanco", 8260, 2014, 15);
let prod11 = new producto(11, "cepa tradicional", "blanco", "semillon", 5540, 2022, 16);
let prod12 = new producto(12, "salentein reserva", "blanco", "sauvignon blanc", 13500, 2018, 7);
let prod13 = new producto(13, "casillero del diablo", "rose", "malbec", 4340, 2012, 16);
let prod14 = new producto(14, "la linda", "rose", "malbec", 6180, 2012, 20);
let prod15 = new producto(15, "luigi bosca", "rose", "malbec", 12600, 2020, 15);
let prod16 = new producto(16,"nina natural", "rose", "blend", 6300, 2019, 11);
let prod17 = new producto(17, "padrillos", "rose", "syrah", 4740, 2017, 13);
let prod18 = new producto(18, "perro callejero", "rose", "blend", 5400, 2016, 5);

// LISTA DE PRODUCTOS
let listaDeProductos = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12, prod13, prod14, prod15, prod16, prod17, prod18];

// INICIO DE APP
console.log("Bienvenido/a a 'Vinoteca Los Amigos', ingrese ejecutar() en consola para continuar");

// FUNCIÓN PRINCIPAL
function ejecutar() {
    let opcion = parseInt(prompt("1 - Ver lista de productos, 2 - Buscar un producto específico, 3 - Filtrar(tipo o variedad), 4 - Realizar pedido"));
    // OPCIÓN 1
    if (opcion == 1) {
        console.log("Ha seleccionado ver la lista de productos");
        // MOSTRAR LISTA BREVE
        for (let i = 0; i <= 18; i++) {
            console.log(listaDeProductos[i].nombre + ", " + listaDeProductos[i].variedad + " " + listaDeProductos[i].tipo);
        }
        ejecutar();
    // OPCIÓN 2
    } else if (opcion == 2) {
        console.log("Ha seleccionado buscar un producto específico");
        let busqueda = prompt("Ingrese el nombre del producto que desee buscar");
        // FUNCIÓN BUSCAR PRODUCTO
        let encontrado = listaDeProductos.find((e) => e.nombre === busqueda.toLowerCase());
        if (encontrado === undefined) {
            console.log("No se pudo encontrar el producto...");
        } else {
            console.log("Producto encontrado...");
            console.log(encontrado);
        }
        console.log("Ingrese ejecutar() para reiniciar")
    // OPCIÓN 3
    } else if (opcion == 3) {
        console.log("Ha seleccionado filtrar productos");
        let busqueda = prompt("Ingrese tipo(tinto, blanco o rose) o variedad(uva) a filtrar");
        // FUNCIÓN FILTRAR PRODUCTOS
        let encontrado = listaDeProductos.filter((e) => e.tipo === busqueda.toLowerCase() || e.variedad === busqueda.toLowerCase());
        if (encontrado.length > 0) {
            console.log("Sen han encontrado " + encontrado.length + " resultados...");
            console.log(encontrado);
        } else {
            console.log("No hay resultados...");
        }
        console.log("Ingrese ejecutar() para reiniciar")
    // OPCIÓN 4 
    } else if (opcion == 4) {   
        console.log("Ha seleccionado realizar un pedido");
        console.log("A continuación podrá ver la lista de productos disponibles y para añadirlos, deberá escribir el número de producto seguido por la cantidad deseada. Luego de añadir cada producto deberá escribir 1 o 2 si desea o no seguir añadiendo productos.")
        // LISTA DE COMPRA
        let carrito = []
        // MOSTRAR LISTA DETALLADA
        for (let i = 0; i <= 18; i++) {
            console.log(listaDeProductos[i].numero + ", " + listaDeProductos[i].nombre + ", " + listaDeProductos[i].variedad + " " + listaDeProductos[i].tipo + ", $" + (listaDeProductos[i].precio).toFixed(2) + " | " + listaDeProductos[i].stock + " en stock.");
        }
        // FUNCIÓN VALIDAR SELECCIÓN Y AÑADIR PRODUCTO
        let validarYAnadir = function() {
            let seleccion = parseInt(prompt("Ingrese el número de producto(1-18) que desee añadir a su carrito"));
            if (isNaN(seleccion) || seleccion == 0 || seleccion > 18) {
                console.log("Valor Incorrecto");
                validarYAnadir();
            } else {
                carrito.push(listaDeProductos[seleccion - 1])
            }
        }


    } else {
        console.log("Valor Incorrecto");
        ejecutar();
    }
}  