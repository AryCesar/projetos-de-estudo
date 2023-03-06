const painel = document.querySelectorAll('.panels') /*cria constante que seleciona todos os paines*/
painel.forEach(panels =>{
    panels.addEventListener('click', () => {
        removeClasseAtiva()
        panels.classList.add('ativo')

    })    
})
function removeClasseAtiva() {
    painel.forEach(panels => {
        panels.classList.remove('ativo')
    }
)}