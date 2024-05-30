let r1 = false,r2 = false;
function botaoFunc(btn){
    if(r1 && r2){
        alert("Sucesso");
        window.location.href = "./index.html";
    }
    else
        alert("Dados inválidos!");
}
function validarCampo(cmp){
    if(cmp.value== "" || cmp.value== " "){
        alert("Senha inválida!");
        r2 = false;
    }
    else{
        r2 = true;
    }
}
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    r1 = true;
    }
    else{
        alert("E-mail invalido");
        r1 = false;
    }
}