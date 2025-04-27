//Maquina de escribir
let texto ="Hello World! ('print');";
let i =0;
function escribirTexto() {
    if(i< texto.length) {
        document.getElementById("maquina").textContent += texto[i++];
        setTimeout(escribirTexto, 100);
    }
}
escribirTexto(); 
