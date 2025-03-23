let img = document.getElementById('borda')
let clicado = true
function clicou(){
    if (clicado == true){
        clicado = false
        img.style.border = '2px solid #ffff'
    }else {
        img.style.border = ''
        clicado = true
    }
}