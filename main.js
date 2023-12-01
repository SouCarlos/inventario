
let instrumentacao = document.querySelector('#instrumentacao')
let tabelaEletrica = document.querySelector('.tabela_eletrica')
let tabelainstrumentacao = document.querySelector('.tabela_instrumentacao')
let notItem = document.querySelector('.item_not_Selected')
let itemsDobradeira = [{nome: 'cilindro festo A', descricao: 'cilindro festo SAP', NI: 54321 }, {nome: 'cilindro festo B', descricao: 'cilindro festo b SAP', NI: 12345 }]
let itemNome = document.querySelector('.item_nome')
let itemDescricao = document.querySelector('.item_descrição')
let itemNI = document.querySelector('.itemNI')
let eletrica = document.querySelector('#eletrica')
let tabelas = document.querySelector('.tabelas')
let menu = document.querySelector('#menu')
let displayMenu = document.querySelector('.display_menu') 



eletrica.addEventListener('click', () => {
    mostrarTabela(tabelaEletrica, tabelainstrumentacao)
})

instrumentacao.addEventListener('click', ()=>{
     mostrarTabela(tabelainstrumentacao, tabelaEletrica)
})
function mostrarTabela(remove, add){
    remove.classList.remove('hide')
    add.classList.add('hide')
    notItem.classList.add('hide')

}
menu.addEventListener('click', ()=>{
    if(menu.checked){
        displayMenu.classList.toggle('hide')   
}else {
    displayMenu.classList.toggle('hide')  
}



})

fetch('http://127.0.0.1:3333/items').then(response => {
    console.log(response)
    return response.json()
}).then(data =>{
    console.log(data)
}).catch(error =>{
    console.error(error)
})

