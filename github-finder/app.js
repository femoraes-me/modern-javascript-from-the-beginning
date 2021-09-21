// instanciando objeto da classe Github
const github = new Github;

// Search Input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const inputText = e.target.value;

    if (inputText !== '') {
        // fazendo a chamada http
        github.getUser(inputText).then(data => {
            // verificação se usuário foi encontrado
            if(data.profile.message === 'Not Found') {
                // perfil não encontrado - exibir alerta

            } else {
                // perfil encontrado - exibir perfil

            }
        })
    } else {
        // campo de texto em branco - limpar perfil
    }
})