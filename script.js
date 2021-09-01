//Botão subirTopo
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  //Formulário Validação

  function validaNome (nome) {
    document.getElementById("nome").value.toUpperCase();
    if (!isNaN(nome.value)) {
      nome.style.border = "red solid 4px";
      nome.style.boxShadow = "4px red";
    } else{
      nome.style.border = "green solid 4px";
      nome.style.boxShadow = "4px green";
    }
  }

  function validaSobrenome (sobrenome){
    document.getElementById("sobrenome").value.ToUpperCase();
    if (!isNaN(sobrenome.valeu)){
      sobrenome.style.border = "red solid 4px";
      sobrenome.style.boxShadow = "4px red";
    } else {
      sobrenome.style.border = "green solid 4px";
      sobrenome.style.boxShadow = "4px green";
    }
  }

  function validaEmail(email) {
    document.getElementById("email").value;
    if (email.value == "" || email.value.indexOf('@') < 0) {
      email.style.border = "red solid 4px";
      email.style.boxShadow = "4px red";
    } else {
      email.style.borde = "green solid 4px";
      email.style.boxShadow = "4px green";
    }
  }

  function validaSenha (senha) {
    if (senha.value == "") {
      senha.style.border = "red solid 4px";
      senha.style.boxShadow = "4px red";
    } else {
      senha.style.border = "green solid 4px";
      senha.style.boxShadow = "4px gree";
    }
  }