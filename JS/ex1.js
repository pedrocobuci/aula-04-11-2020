document.querySelector('#botao').addEventListener('keydown', () => {
    let nome;
    
    nome = document.getElementById('nome').value;
    let sobrenome=document.getElementById('sobrenome').value;


    document.write('o nome digitado é ' +nome+' '+sobrenome);
})


document.querySelector('#botao').addEventListener('click', ()=> {
    let nome=document.getElementById('nome').value;
    let sobrenome=document.getElementById('sobrenome').value;

    /*cubo rosa = metodo */
    alert('o nome digitado é '+nome+' '+sobrenome);
})
