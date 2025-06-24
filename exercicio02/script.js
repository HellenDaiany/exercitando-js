function verificar() {
    var data = new Date ()
    var ano =data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
        
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value) 
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       img.width = 150;
       img.height = 150;
       img.style.borderRadius = "50%"
       img.style.objectFit = "cover"
       if(fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade < 12){
            img.setAttribute('src','img/menino.jpg')
        }else if(idade < 21){
            img.setAttribute('src','img/homemjovem.jpg')
        }else if(idade < 50){
            img.setAttribute('src','img/homem.jpg')
        }else {
            img.setAttribute('src','img/idoso.jpg')
        }
       } else if (fsex[1].checked){
        genero = 'Mulher'
         if(idade >=0 && idade < 12){
            img.setAttribute('src','img/menina.jpg')
        }else if(idade < 21){
            img.setAttribute('src','img/mulherjovem.jpg')
        }else if(idade < 50){
            img.setAttribute('src','img/mulher.jpg')
        }else {
            img.setAttribute('src','img/idosa.jpg')
        }
       }
       res.computedStyleMap.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}
