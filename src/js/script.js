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
    return tagLi

}

//criar funçao para listar
function listarProdutos(listaProdutos) {

    //loop para recuperar cada produto
    for (let i = 0; i < listaProdutos.length; i++) {

        const produto = listaProdutos[i];

        //passar para função(criar o card produto)
        const template = criarcardProduto(produto);
        //mostrar na tela
        produtosLista.appendChild(template);
    }

}
listarProdutos(produtos)


//função para adicionar ao carrinho
