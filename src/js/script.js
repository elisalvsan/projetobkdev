const produtosLista = document.querySelector(".produtosLista")
const listaProdutos = document.querySelector(".listaProdutos")

function criarcardProduto(produto){
    
    const tagLi  = document.createElement("li")

    tagLi.classList.add("cardProduto")
    
    tagLi.innerHTML = `
        <img src="${produto.image}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button type="button" id="${produto.id}">Adicionar</button>
    `
    return tagLi
}

function listarProdutos(listaProdutos){

    for(let i  = 0; i<listaProdutos.length; i++){
        
        const produto = listaProdutos[i]

        const cardMontado = criarcardProduto(produto)
       
        produtosLista.appendChild(cardMontado)

    }

}
listarProdutos(produtos)

let carrinho = []

produtosLista.addEventListener("click", adicionarProdutoCarrinho)
function adicionarProdutoCarrinho(event){
    
    //IDENTIFICANDO ELEMENTO CLICADO
    const botao = event.target
    
    //VERIFICANDO SE É UM BOTÃO
    if(botao.tagName == "BUTTON"){
        
        const idProduto = botao.id

        const produtoFiltrado = produtos.find((produto)=> produto.id == idProduto)
        
        carrinho.push(produtoFiltrado)
        
        listarProdutosCarrinho()

    }
    
}

function listarProdutosCarrinho(){

    listaProdutos.innerHTML = ""

    for(let i = 0; i<carrinho.length; i++){

        const produto = carrinho[i]

        //CRIAR O TEMPLATE 
        const tagLi = document.createElement("li")
        tagLi.classList.add("cardProduto")
        
        tagLi.innerHTML = `
            <div class="infoNome">
                <img src="${produto.image}" alt="${produto.nome}">
                <p>${produto.nome}</p>
            </div>
        
            <div class="infoPreco">
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button>
                    <img src="./src/assets/lixo.png" alt="Lixo para remover produto">
                </button>
            </div>
        `
        listaProdutos.appendChild(tagLi)
        
    }
  
}
