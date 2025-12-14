let display = document.getElementById('display')

function adicionaNaTela(value) {
    display.value += value;
    console.log(value);
}

function limpaTela() {
    display.value = '';
    console.log('Limpa Tela');
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}