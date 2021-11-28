function validar(){
    var username, useremail, password, expresion;
    username  = document.getElementById("username").value;
    useremail = document.getElementById("useremail").value;
    password  = document.getElementById("password").value;
    passwordrepeat  = document.getElementById("passwordrepeat").value;

    expresion = /\w+@\w+\.+[a-z]/;
    texto

    if (username === "" || useremail === "" || password === "" || passwordrepeat){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (username.length>80){
        alert("El nombre es muy largo");
        return false;
    }
    else if (useremail.length>50 || password.length>50){
        alert("El e-mail o password deben tener máximo 50 caracteres");
        return false;
    }
    else if (expresion.test(useremail)){
        alert("El correo electrónico no es válido");
        return false;
        
    }

}