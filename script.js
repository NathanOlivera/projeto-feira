usuario = localStorage

function cadastro(user, pass, pass2) {
    if (pass == pass2 && user!='' && pass!='') {
        localStorage.setItem("nick", user)
        localStorage.setItem("senha", pass)
        window.location = "index.html"
    } else if (user == '' || pass == '' || pass2 == '') {
        document.getElementById('alert').innerHTML = "Por favor, digite seu usuario e senha!"
        document.getElementById('alert').style.display = "block"
    } else if (pass != pass2) {
        document.getElementById('alert').innerHTML = "Por favor, digite senhas iguais!"
        document.getElementById('alert').style.display = "block"
        document.getElementById('ilogin').value = ''
        document.getElementById('ipass').value = ''
        document.getElementById('ipass2').value='' 
    } 
}

function validar(user, pass) {
    const usuario = localStorage.getItem("nick")
    const senha = localStorage.getItem("senha")
    if (user == usuario && pass == senha) {
        window.location = "inicio.html"
    }
    else {
        document.getElementById('alert').style.display = "block"
        document.getElementById('ilogin').value = ''
        document.getElementById('ipass').value = ''
    }
}