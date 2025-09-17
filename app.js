// Lista de amigos y lista de sorteados
let amigos = [];
let sorteados = [];

// Asignar texto a un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    amigos.push(nombre);
    mostrarLista();
    limpiarCaja();
    document.querySelector('.button-draw').removeAttribute('disabled');
}

// Mostrar la lista de amigos en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.join("<br>");
}

// Limpiar input
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


// Sortear un amigo que no se haya repetido
function sortearAmigo() {
    if (sorteados.length === amigos.length) {
        asignarTextoElemento('#resultado', "¡Ya se sortearon todos los amigos!");
        return;
    }

    let seleccionado;
    do {
        let indice = Math.floor(Math.random() * amigos.length);
        seleccionado = amigos[indice];
    } while (sorteados.includes(seleccionado));

    sorteados.push(seleccionado);

    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";

    // Mostrar el resultado
    asignarTextoElemento('#resultado', "El amigo secreto es: " + seleccionado);

}

function reiniciarJuego() {
    // Limpiar arrays
    amigos = [];
    sorteados = [];

    // Limpiar la lista de amigos y el resultado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Mostrar lista vacía
    document.getElementById("listaAmigos").style.display = "block";

    // Desactivar el botón de sorteo
    document.querySelector(".button-draw").disabled = true;

    // Limpiar el input
    limpiarCaja();
}