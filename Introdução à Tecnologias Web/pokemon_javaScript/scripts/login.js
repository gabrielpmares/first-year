
// Get the modal
var modal = document.getElementById('Login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let signupBTN = document.getElementById('signupbtn');


signupBTN.addEventListener('click', signup());


function signup() {
    if (document.getElementById('uname').value != '' && document.getElementById('pw').value != '') {
        localStorage.setItem('username', document.getElementById('uname').value);
        localStorage.setItem('password', document.getElementById('pw').value);
        alert('Registo efetuado com sucesso!!');
        window.location = 'homepage.html';
        return false;
    }
}

function login() {
    if (document.getElementById('uname').value == localStorage.getItem("username") && document.getElementById('psw').value == localStorage.getItem("password")) {
        alert('Login efetuado com sucesso!!');
        window.location = 'customization.html';
        return false
    } else {
        alert("Credenciais inválidas, tente novamente")
    }
}