// Procurar o botao
document.querySelector('#add-time')
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    // Pegar os campos. Quais Campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pega o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: Onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}