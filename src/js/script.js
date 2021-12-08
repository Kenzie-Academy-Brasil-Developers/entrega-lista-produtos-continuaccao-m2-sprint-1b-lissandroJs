
const ul = document.querySelector('.containerListaProdutos ul');
const carrinhoProduto = document.querySelector('.containerCarrinho')
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
const botaoMostarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
let inputDigitado = document.querySelector(".campoBuscaPorNome")
const botaoBuscarNome = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")

const valorTotal = document.querySelector('#precoTotal')

function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ordenada = document.createElement('ol')
        const botaoAdd = document.createElement('button')


        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        botaoAdd.innerText = 'Adicionar ao Carrinho'


        for (let i = 0; i < produto.componentes.length; i++) {

            const liOrde = document.createElement('li')
            liOrde.innerText = produto.componentes[i]
            ordenada.appendChild(liOrde)
        }


       
        botaoAdd.setAttribute('id', produto.id)
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ordenada)
        li.appendChild(botaoAdd)

        ul.appendChild(li);

        botaoAdd.addEventListener('click', verificarId)

    });

}

montarListaProdutos(produtos)

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti)
    
}


botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);




botaoMostarTodos.addEventListener('click', () => montarListaProdutos(produtos))




botaoBuscarNome.addEventListener('click', () => {
    let valor = inputDigitado.value
    let produtoFiltrado = produtos.filter((prod) => {
        let valorMaior = valor.toUpperCase()

        let prodMaior = prod.nome.toLocaleUpperCase()
        let secaoMaior = prod.secao.toLocaleUpperCase()
        if (valorMaior == prodMaior) {
            montarListaProdutos([prod])
            
        }
        if (valorMaior == secaoMaior) {
            montarListaProdutos([prod])
        }

        if (valorMaior == 'HORTIFRUTI') {
            filtrarPorHortifruti()
        }
    })

})


function verificarId(e) {
    const addItem = e.currentTarget.id


    addItemCarrinho(addItem)

}

//carrinhoProduto
const store = []

function addItemCarrinho(id) {
    const filtar = produtos.filter((e) => e.id == id)
        const [valor] = filtar
         
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');


        console.log(store)
        img.src = valor.img;
        img.alt = valor.nome;
        h3.innerText = valor.nome;
        p.innerText = valor.preco;
        span.innerText = valor.secao;

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        carrinhoProduto.appendChild(li)
        
    
        store.push(valor)
        valorTotalSomado (store)
    
}

function valorTotalSomado (arr){

    const reduzir = arr.reduce((valor1, {preco}) => valor1 + Number(preco), 0)
    valorTotal.innerHTML = reduzir

}

