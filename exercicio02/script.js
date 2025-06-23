function carregar (){
    var msg = window.document.querySelector('#msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=0 && hora < 12){
        //Bom dia!
        img.src ='img/morning.jpg'
        document.body.style.background = '#edd180'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'img/afternoon.jpg'
        document.body.style.background ='#7584a3'
    }else {
        //Boa noite!
        img.src ='img/night.jpg'
        document.body.style.background = '#37486d'
    }
}
