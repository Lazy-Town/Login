function mostrarSenha() {
    var inserirSenha = document.getElementById ('cSenha')
    var botaoSenha = document.getElementById ('iconeOlho')

    if(inserirSenha.type === 'password'){
        inserirSenha.setAttribute('type','text')
        botaoSenha.classList.replace('bi-eye-slash','bi-eye-fill')
    }else{
        inserirSenha.setAttribute('type','password')
        botaoSenha.classList.replace('bi-eye-fill','bi-eye-slash')
    }
}
