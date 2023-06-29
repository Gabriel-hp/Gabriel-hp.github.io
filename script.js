var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
},     15000)

function proximaImg(){
    cont++

    if (cont > 3){
        cont = 1
    }
    
    document.getElementById('radio'+cont).checked = true    
}

function abrirMenu(){
    let Barramenuaberto = document.getElementById ('Barra-menu');

    if(Barramenuaberto.style.width == "0px"){
        Barramenuaberto.style.width = '300px';
    }else{
        Barramenuaberto.style.width = '0px';
    }
}