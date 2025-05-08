//seta os valores para cada um

let setores = { pista: 100, superior: 200, inferior: 400 };

/*Aqui o JavaScript vai percorrer cada chave (ou propriedade) do objeto setores.
Na 1ª volta: setor = "pista"
Na 2ª volta: setor = "superior"
Na 3ª volta: setor = "inferior"

.textContent = setores[setor]:

Define o texto dentro do elemento com o valor correspondente.
Se setor = "pista", acessamos setores["pista"], que vale 100. */

for (let setor in setores) {
    document.getElementById(`qtd-${setor}`).textContent = setores[setor];
}



function comprar() {
    //recuperar valores
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    
// validar se a quantidade é menor ou igual ao número de ingressos disponíveis
    if (quantidade > setores[tipoIngresso]) {
        alert("Não temos essa quantidade de ingressos disponíveis para esse setor");
        return;
    } else {
        //validar a quantidade que o cliente deseja comprar
        
        //subtrair a quantidade escolhida do tipo de ingresso no objeto
        setores[tipoIngresso] -= quantidade;

        document.getElementById(`qtd-${tipoIngresso}`).textContent = setores[tipoIngresso];
    }

    document.getElementById('qtd').value = '';

}





// zerar o valor da quantidade depois de adicionar