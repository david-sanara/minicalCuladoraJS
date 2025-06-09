// DOM: Document Object Model
const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');
const mensajesError = ['Error', 'No se puede dividir entre 0', 'Operación inválida'];
let resultadoMostrado = false;

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        if (boton.id === 'borrar') {
            pantalla.value = '';
        } else if (boton.id === 'igual') {
            try {
                const resultado = eval(pantalla.value);

                if (resultado === Infinity || resultado === -Infinity) {
                    pantalla.value = 'No se puede dividir entre 0';
                } else if (isNaN(resultado)) {
                    pantalla.value = 'Operación inválida';
                } else {
                    pantalla.value = resultado;
                    resultadoMostrado = true;
                } 
            } catch (error) {
                    pantalla.value = 'Error';
                }
            } else {
            if (mensajesError.includes(pantalla.value)) {
                pantalla.value = '';
            }else if (resultadoMostrado){
                if (!isNaN(boton.textContent)) {
                    pantalla.value = '';
            } resultadoMostrado = false;
            }
            pantalla.value += boton.textContent;
        }
        });
});
