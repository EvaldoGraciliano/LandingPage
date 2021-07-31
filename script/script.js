// function typeWrite(elemento,elemento2){
  
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML ='';

//   const textoArray2 = elemento2.innerHTML.split('');
//   elemento2.innerHTML='';

//   textoArray.forEach((letra,i)=> {
//     setTimeout(function(){
//       elemento.innerHTML += letra;
//   }, 75)
// });

// textoArray2.forEach((letra,i)=> {
//   setTimeout(function(){
//     elemento2.innerHTML += letra;
// }, 300*i)
// });




// }

// const titulo = document.querySelector('h1');
// const titulo2 = document.getElementById('20x');

// typeWrite(titulo,titulo2);



function responsividade(){

if ($(window).width() > 900) {
  x  = document.getElementById('topo');
  x.src='img/5.png'

  video = document.getElementById('videoyoutube');
  video.width= '500px';
  video.height='300px'

}

}

responsividade();