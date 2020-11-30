// alert("teste");

function contas() {
    const descri = document.getElementById('descri')
    const valor = document.getElementById('valor')
    const data = document.getElementById('data')
    const tipo = document.getElementById('tipo')
    const salvar = document.getElementById('salvar')

    if(tipo === 'Despesa' || 'Receita' || 'despesa' || 'receita') {
        var inicial = valor * -1;
    }

    salvar.addEventListener('click', function(e){
        e.preventDefault()

    resultado.value = calcular(inicial.value, valor.value)
    valor.value = ''
    inicial.value = ''

    })

    const calcular = (valorPrimeiro, valorSegundo) => {
        var sobra
        valor = valorPrimeiro
        inicial = valorSegundo

    }

}