function validar() {
  // Obtendo referências aos elementos de entrada//
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var telefone = document.getElementById('telefone');
  var cpf = document.getElementById('cpf');
  var senha = document.getElementById('senha');
  
  // Verificando se todos os campos foram preenchidos corretamente//
  if (nome.value == "" || email.value == "" || telefone.value == "" || cpf.value == "" || senha.value == "") {
      alert("Por favor, preencha todos os campos corretamente.");
      return false;
  } else {
      // Exibe a mensagem de sucesso//
      alert("Sucesso!");
      return true;
  }
}




