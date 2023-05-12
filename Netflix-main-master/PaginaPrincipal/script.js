// variaveis de contagem da direção

var num = 150
var num2 = 150

// slide do botao direito

var btnRight = document.getElementById('btnRight')

btnRight.addEventListener('click', ()=>{
    var limi = document.getElementById('limitador').getBoundingClientRect().left

    var limit = Math.round(limi)

    var er = document.getElementById('btnRight').getBoundingClientRect().left

    var ref = Math.round(er)

    var slidecontainerCarrossel = document.getElementById('containerCarrossel')

    var carrossel = document.getElementById('carrossel')


    if(limit > ref){
        slidecontainerCarrossel.style.transform = 'translateX(-'+num+'px)'

        num  = num + 150

        num2 = num - 150
    }else{

        var stoped = ref * slidecontainerCarrossel.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 150

        var stopedRoubd = Math.round(stoped)

        slidecontainerCarrossel.style.transform = 'translateX(-'+stopedRoubd+'px)'
    }
});


//botao esquerdo

var btnLeft = document.getElementById('btnLeft');

btnLeft.addEventListener('click', () => {

  var slidecontainerCarrossel = document.getElementById('containerCarrossel');

  var slide = slidecontainerCarrossel.getBoundingClientRect().left;

  var er = btnLeft.getBoundingClientRect().left;

  var ref = Math.round(er);

  var limitador = document.getElementById('limitador');

  var limi = limitador.getBoundingClientRect().left;

  var limit = Math.round(limi);

  var num = 150;
  var num2 = 0;

  if (slide < limit) {

    slidecontainerCarrossel.style.transform = 'translateX(' + num2 + 'px)';

    num = num - 150;
    num2 = num2 - 150;

  } else if (slide < ref) {

    slidecontainerCarrossel.style.transform = 'translateX(' + num2 + 'px)';

    num = num - 150;
    num2 = num2 - 150;

  } else {
    
    slidecontainerCarrossel.style.transform = 'translateX(0)';
    num = 150;
    num2 = 0;
  }
});