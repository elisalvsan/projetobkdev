const produtosLista = document.querySelector('.produtosLista')

function criarcardProduto(produto) {

    const tagLi = document.createElement('li')
    tagLi.classList.add('cardProduto')

    tagLi.innerHTML = `
        <img src="${produto.image}">
        <h3>${produto.nome}</h3>
        <p>R$: ${produto.preco}</p>
        <button type="button">Adicionar</button> 
    `
    produtosLista.appendChild(tagLi)

}

const produtoExemplo = {

    id: 0,
    nome: "Combo Whopper",
    preco: 32.90,
    image: "./src/assets/combo_whopper.png"

}



criarcardProduto(produtoExemplo)