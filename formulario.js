function adicionar(){
    let nome1 = dados.nome.value;
    let sobrenome2 = dados.sobrenome.value;
    let curso3 = document.getElementById('curso').options[document.getElementById('curso').selectedIndex].innerText;
    let tabela = document.getElementById('grid');
    var campos = [];

    if (nome1 == ''){
        campos.push('Nome');
    }
    if(nome1 != ''){
        let existe = false;
        for(i = 0; i < campos.length; i++){
            if(campos[i] == nome1){
                existe = true;
            }
        }
        if(existe){
            alert('Nome já adicionado');
        } 
    }

    if (sobrenome2 == ''){
        campos.push('Sobrenome');
    }
    if(sobrenome2 != ''){
        let existe = false;
        for(i = 0; i < campos.length; i++){
            if(campos[i] == sobrenome2){
                existe = true;
            }
        }
        if(existe){
            alert('Nome já adicionado');
        } 
    }
    if (curso3 == 'Selecione uma opção...'){
        campos.push('Curso');
    }

    if (campos.length > 0 ){
        alert('Preencha o(s) campo(s): ' + campos.join(', ') + '!');
    }

    else {
        alert('Estudante Adicionado');

    let linha = document.createElement('tr');// aqui cria uma linha para tabela (tr) e atribui para variavel 'tr1'
    linha.id = 'trex'; // coloca o 'id' trex para tr1
    let coluna1 = document.createElement('td'); // aqui cria uma coluna para tabela e guarda variavel 'td1'
    coluna1.innerHTML = nome1; // aqui escreve o valor da variavel 'nome1' na coluna criada da tabela (td1)
    coluna1.id = 'curso3';
    tabela.appendChild(linha);
    tabela.appendChild(coluna1);

    let coluna2 = document.createElement('td');
    coluna2.innerHTML = sobrenome2;
    coluna2.id = 'curso3';
    tabela.appendChild(coluna2);

    let coluna3 = document.createElement('td');
    coluna3.innerHTML = curso3;
    coluna3.id = 'curso3';
    tabela.appendChild(coluna3);
}
}
    function enviar(){
        var tb = document.getElementsByTagName('td');
        
        if(tb.length >= 9  ){
           alert('Dados enviado com sucesso !');
           document.getElementById('nome').value='';
           document.getElementById('sobrenome').value='';
           document.getElementById('curso').value='';
           document.getElementById('grid').remove();
          }
          
     else{
           alert('Adicione pelo menos 3 estudantes')
       }
    }

