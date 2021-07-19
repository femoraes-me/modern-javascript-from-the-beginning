// evento para o submit do formulário
document.getElementById('emprestimo-form').addEventListener('submit', function(e){

    // ocultar os resultados
    document.getElementById('results').style.display = 'none';

    // exibir o carregando
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});


function calculateResults() {

    // variáveis de interface
    const valor = document.getElementById('valor');
    const juros = document.getElementById('juros');
    const anos = document.getElementById('anos');
    const pagamentoMensal = document.getElementById('pagamento-mensal');
    const pagamentoTotal = document.getElementById('pagamento-total');
    const jurosTotal = document.getElementById('juros-total');

    // variáveis para calculo
    const principal = parseFloat(valor.value);
    const jurosCalculado = parseFloat(juros.value) / 100 / 12;
    const qtdeMeses =  parseFloat(anos.value) * 12

    // calculos para o pagamento mensal
    const x = Math.pow(1 + jurosCalculado, qtdeMeses);
    const mensal = (principal * x * jurosCalculado) / (x - 1);

    // verificando se numero é finito
    if( isFinite(mensal) ) {
        pagamentoMensal.value = mensal.toFixed(2);
        pagamentoTotal.value = (mensal * qtdeMeses).toFixed(2);
        jurosTotal.value = ( (mensal * qtdeMeses) - principal ).toFixed(2)

        // exibir os resultados
        document.getElementById('results').style.display = 'block';

        //ocultar o carregando
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Por favor, verifique os números inseridos!')
    }

}

// função para exibir o erro
function showError(error) {

    // pegando elementos da DOM
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    const errorDiv = document.createElement('div'); // criando a div
    errorDiv.className = 'alert alert-danger'; // adicionando as classes
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);

    // ocultar os resultados
    document.getElementById('results').style.display = 'none';

    //ocultar o carregando
    document.getElementById('loading').style.display = 'none';

    // remover alerta de erro após 5 segungos
    setTimeout(clearError, 5000);
}

// funcão para retirar o alerta de erro
function clearError() {
    document.querySelector('.alert').remove();
}