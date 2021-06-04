console.log ('The house always wins!')

var idInput = document.getElementById('idInput');
var colorInput = document.getElementById('colorInput');

function setCard(){
  
        //Card Details
   var card = document.getElementById(idInput.value)
    card.style.color = colorInput.value;
   console.log(colorInput.value)

}

function reset(){
    console.log('Hello')
    document.getElementById('diamonds').style.color = ''
    document.getElementById('clubs').style.color = ''
    document.getElementById('hearts').style.color = ''
    document.getElementById('spades').style.color = ''

}