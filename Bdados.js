
let nameform = document.querySelector('#nameForm')
let descricaoForm = document.querySelector('#descricaoForm')
let NIform = document.querySelector('#NIform')
let quantidadeForm = document.querySelector("#quantidadeForm")
let btSalvar = document.querySelector('.salvar')
const  tabelasNewItem = '';



    btSalvar.addEventListener('click', (event) => {
    const tabelaItem = {}
    event.preventDefault()
    tabelaItem.nome = nameform.value;
    tabelaItem.descricao = descricaoForm.value
    tabelaItem.NI = NIform.value
    tabelaItem.quantidade = quantidadeForm.value 
    })

 
function resetForm(item){
    nameform.value = null
    descricaoForm.value = null
    NIform.value = null
    quantidadeForm.value = null
    alert('item salvo')
}
