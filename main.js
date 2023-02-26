let savedPin = "1234";
function login() {
    let ingresar= false;
    for (let i = 2; i >= 0; i--) {

        let userPin = prompt("Ingresa aca tu PIN. Tenes " + (i + 1) + " oportunidades.");
        if (userPin === savedPin) {
            alert(" Bienvenido/a");
            ingresar = true;
            break;

        } else {
         
            
        }

    }
    return ingresar;
}

if (login()) {
    let saldo = 250000;

    let opcion = prompt("Elegí una opción: \n1- Saldo.  \n2- Retiro de dinero. \n3- Depósito. \n Presiona X para finalizar ");
    while (opcion != "X" && opcion != "x") {
        switch (opcion) {
            case "1":
                alert("Su saldo es $" + saldo)
                break;
            case "2":
                let retiro = parseFloat(prompt("Ingresa cantidad a retirar"));
                if (retiro <= saldo){
                    saldo= saldo - retiro;
                    alert("Retiro exitoso. Tu nuevo saldo es $" + saldo)
                    
                }else{
                    alert("Fondos insuficientes.")
                }

                break;
            case "3":
                let deposito = parseFloat(prompt("ingrese monto a depositar"));
                if ( Number.isNaN(deposito)){
                    alert ("El valor ingresado no es un número.");
                }else{
                    saldo = saldo + deposito;
                    alert("Su nuevo saldo es: $" + saldo); 
                }


                break;
            default:
                alert("Elegiste una opción inválida");
                break;
        }
        opcion = prompt("Elegí una opción: \n1- Saldo.  \n2- Retiro de dinero. \n3- Depósito. \n Presiona X para finalizar")
    }
   
} else {
    alert("Se retendra la tarjeta por seguridad. Contactese con el banco de lun a vie de 10 a 15hs.");
}

alert("Gracias por su visita.");