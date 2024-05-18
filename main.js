const producto = function(nombre, tipo, variedad, precio, anio, stock) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.variedad = variedad;
    this.precio = precio;
    this.anio = anio;
    this.stock = stock;
}

let producto1 = new producto("Alambrado", "Tinto", "Cabernet Sauvignon", 5100, 2009, 11);
let producto2 = new producto("Alambrado", "Tinto", "Cabernet Franc", 5040, 2019, 7);
let producto3 = new producto("Alambrado", "Tinto", "Malbec", 5050, 2008, 14);
let producto4 = new producto("Animal Color Blend", "Tinto", "Malbec", 8400, 2015, 12);
let producto5 = new producto("Animal", "Tinto", "Malbec", 8515, 2016, 14);
let producto6 = new producto("Animal", "Tinto", "Syrah", 8310, 2015, 9);
let producto7 = new producto("Edad Moderna", "Blanco", "Sauvignon Blanc", 13500, 2021, 4);
let producto8 = new producto("Alma Negra", "Blanco", "Blend", 16150, 2020, 6);
let producto9 = new producto("Animal Chardonnay", "Blanco", "Organico", 7650, 2018, 15);
let producto10 = new producto("Animal Color Blend", "Blanco", "Blanco", 8260, 2014, 15);
let producto11 = new producto("Cepa Tradicional", "Blanco", "Semillon", 5540, 2022, 16);
let producto12 = new producto("Salentein Reserva", "Blanco", "Sauvignon Blanc", 13500, 2018, 7);
let producto13 = new producto("Casillero del Diablo", "Rose", "Malbec", 4340, 2012, 16);
let producto14 = new producto("La Linda", "Rose", "Malbec", 6180, 2012, 20);
let producto15 = new producto("Luigi Bosca", "Rose", "Malbec", 12600, 2020, 15);
let producto16 = new producto("Nina Natural", "Rose", "Blend", 6300, 2019, 11);
let producto17 = new producto("Padrillos", "Rose", "Syrah", 4740, 2017, 13);
let producto18 = new producto("Perro Callejero", "Rose", 5400, 2016, 5);
console.log("Bienvenido/a a 'Vinoteca Los Amigos', 1ingrese ejecutar() en consola para continuar");
function ejecutar() {
    let opcion = parseInt(prompt("1 - Ver lista de productos, 2 - Buscar un producto específico, 3 - Filtrar(precio, tipo, variedad o año), 4 - Realizar pedido"))
    if (opcion == 1) {
        console.log("Ha seleccionado ver la lista de productos");
    } else if (opcion == 2) {
        console.log("Ha seleccionado buscar un producto específico");
    } else if (opcion == 3) {
        console.log("Ha seleccionado filtrar productos");
    } else if (opcion == 4) {   
        console.log("Ha seleccionado realizar un pedido")
    } else {
        console.log("Valor Incorrecto")
        ejecutar();
    }
}