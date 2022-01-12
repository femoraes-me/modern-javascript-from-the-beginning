class UI {
    constructor() {
        this.profile =  document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block w-100 mb-4">Veja o perfil</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Repositórios Publicos: ${user.public_repos}</span>  
                        <span class="badge badge-secondary">Gists Publicos: ${user.public_gists}</span>  
                        <span class="badge badge-success">Seguidores: ${user.followers}</span>  
                        <span class="badge badge-info">Seguindo: ${user.following}</span>  
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Empresa: ${user.company}</li>
                            <li class="list-group-item">Site/Blog: ${user.blog}</li>
                            <li class="list-group-item">Local: ${user.location}</li>
                            <li class="list-group-item">Membro desde: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Ultimos Repositórios</h3>
            <div id="repos"></div>
        `;
    }

    // EXIBIR MENSAGEM DE ALERTA
    showAlert(message, className) {

        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);

        // apagar após 3 segundos
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // REMOVER MENSAGEM DE ALERTA
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove()
        }
    }

    // limpar perfil
    clearProfile() {
        this.profile.innerHTML = '';
    }
}