function enviar() {
    let name= document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;
    let rua = document.getElementById('rua').value;
    let bairro = document.getElementById('bairro').value;
    let cep = document.getElementById('cep').value;
    let sex = document.getElementById('sex').value;

//  Código para fazer a data ficar com o padrão brasileiro

    let dat = document.getElementById('d').value;
    let dataa = dat;
    let datb = dataa.split('-').reverse().join('/');

// Código para descobrir a idade do usuário

var dataAtual = new Date();
    
    var data_nascimento = new Date(document.getElementById('d').value);

    var anos = dataAtual.getFullYear() - data_nascimento.getFullYear();

    if(dataAtual.getMonth() != data_nascimento.getMonth())
    {
        if(dataAtual.getMonth() < data_nascimento.getMonth())
        {
            anos--;
        }
    }
    else
    {
        if(dataAtual.getDate() < data_nascimento.getDate())
        {
            anos--;
        }
    }


//  Alertas que aparecerão na tela após a finalização do formulário
    
     alert("Nome: "+name + "\n"
      + "Telefone: "+tel +"\n"
       + "Sexo: "+sex + "\n"
       + "Data de Nascimento: "+datb + "\n"
       + "Email: "+email + "\n"
       + "CPF: "+cpf + "\n"
       + "Estado: "+estado + "\n"
       + "Cidade: "+cidade + "\n"
       + "Rua: "+rua + "\n"
       + "Bairro: "+bairro + "\n"
       + "Cep: "+cep);

      alert("Sua idade: "+anos);

}