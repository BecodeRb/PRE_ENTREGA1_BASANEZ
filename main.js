console.log(`BERNARDO BASANEZ PREENTREGA 1 `)

// Declaro el nombre del huesped y verifico que este registrado
do{
    usuario = prompt(`Ingrese Apellido de reserva`).toLocaleUpperCase()
    habitacion = Number(prompt ('Ingrese una habitacion numerica'))

    if(usuario == `GONZALEZ`){

        console.log(`Usuario correcto`);
    }
    
    else{
        alert(`Apellido incorrecto`);
        
    }

    if(habitacion == 280){
    
        console.log(`Habitación correcta`);
    }
    
    else{
        alert(`Habitación invalida`);
        
    }

    while (isNaN(habitacion) || habitacion == ``) {
    
    habitacion = confirm('Favor de ingresar un número de habitación valido')

}

// Presentacion usuario y habitación valida

} while ((usuario != `GONZALEZ`) || (habitacion != 280)) {
    alert(`Bienvenido ` + usuario + ` de la habitación ` + habitacion + ` \n Este es el menú de pizzas del hotel` + `\n Haga su pedido`)

    document.write(`MENÚ DEL DÍA: 🍕🍕🍕PIZZAS🍕🍕🍕`)
}


// VARIABLES DE TIPOS DE PIZZA
let pizza1 = 140;
let pizza2 = 100;
let pizza3 = 160;
let pizza4 = 150;
let pizza5 = 120;
let pizza6 = 200;


var precio;

//FUNCION QUE PERMITE SELECCIONAR LA PIZZA

function seleccionarpizza(){
    let pizza

    do {
        pizza = parseInt(prompt(`Seleccione la Pizza 🍕:
        1 -Margarita ($ 140) 
        2 -Pepperoni ($100)
        3 -4 Quesos ($160)
        4 -Jamon ($150)
        5 -Proscciuto ($ 120)
        6 -Trufa ($200)`))
    } while (( pizza > 0 && pizza > 6 ) );
    return pizza
}

eleccion = seleccionarpizza()

switch (eleccion) {
    case 1:
        precio = pizza1
        eleccion = `Margarita`
     break;
    case 2:
        precio = pizza2
        eleccion = `Pepperoni`
    break;
    case 3:
        precio = pizza3
        eleccion = `4 Quesos`
    break;
     case 4:
        precio =  pizza4
        eleccion = `Jamon`
    break;
    case 5:
        precio = pizza5
        eleccion = `Proscciuto`
     break;
    case 6:
        precio =  pizza6
        eleccion = `Trufa`
}

alert(`¡Gracias! `+ usuario + ` de la habitación ` + habitacion + `\n Su pedido es una pizza de ` + eleccion + ` y el precio es: $` + precio + ` `)






 

