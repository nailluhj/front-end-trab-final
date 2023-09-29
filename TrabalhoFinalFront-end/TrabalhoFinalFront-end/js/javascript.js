//Rolar para cima
const btn = document.getElementById("btnTop")

const githubBranco = "./src/img/githubbranco.png"
const githubPreto = "./src/img/githubpreto.png";

let dark = false;

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()

//ModoDarkLight
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    const githubIcons = document.querySelectorAll('.github') 

    if (!dark) {
        githubIcons.forEach(icon => {
            icon.src = githubBranco;
            dark = true;
        })
    } else {
        githubIcons.forEach(icon => {
            icon.src = githubPreto;
        dark = false;
        })
    }
})

// Exibir campos de informações do cartão quando a opção de cartão de crédito for selecionada
document.querySelector('#cartaoCredito').addEventListener('change', function () {
    document.querySelector('#infoCartao').style.display = this.checked ? 'block' : 'none';
  });
