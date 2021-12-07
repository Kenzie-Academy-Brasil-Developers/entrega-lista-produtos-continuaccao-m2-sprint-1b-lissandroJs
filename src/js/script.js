
const ul = document.querySelector('.containerListaProdutos ul');


function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ordenada =document.createElement('ol')
        const botaoAdd = document.createElement('button')



        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        botaoAdd.innerText = 'Adicionar ao Carrinho'
        
        
        for(let i =0 ; i < produto.componentes.length ; i++){

            const liOrde = document.createElement('li')
            liOrde.innerText = produto.componentes[i]
            ordenada.appendChild(liOrde)
        }


     
        
       
        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ordenada)
        li.appendChild(botaoAdd)
        

        // Adicionando li ao HTML
        ul.appendChild(li);
       
    });
    
}

montarListaProdutos(produtos)

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    
    montarListaProdutos(listaHortifruti)
    addValorTotal(listaHortifruti)
}
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);


const botaoMostarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')

botaoMostarTodos.addEventListener('click',()=> montarListaProdutos(produtos))


let inputDigitado = document.querySelector(".campoBuscaPorNome")

inputDigitado = inputDigitado



const botaoBuscarNome = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")

botaoBuscarNome.addEventListener('click',()=> {
    let valor = inputDigitado.value
    let produtoFiltrado = produtos.filter((prod)=>{
        let valorMaior = valor.toUpperCase()
        
        let prodMaior = prod.nome.toLocaleUpperCase()
        if(valorMaior == prodMaior){
            montarListaProdutos([prod])
            addValorTotal([prod])
        }
        
    })
    
    
})

