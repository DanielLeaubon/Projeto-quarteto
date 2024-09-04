mainFormulario.style.display = 'none'

var formularioVal = window.document.querySelector(`button#abrirFechar`)
formularioVal.addEventListener('click', formularioDisplay)

function formularioDisplay() {
    mainFormulario.style.display = 'none'
}

var formularioBotaoVal = window.document.querySelector(`button#formularioBotao`)
formularioBotaoVal.addEventListener('click', formularioBotaoDisplay)

function formularioBotaoDisplay() {
    mainFormulario.style.display = 'contents'
}