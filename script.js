


//gerador de RGB aleatório principal

function randomRgb(){
  const r = Math.floor((Math.random()* 255));
  const g = Math.floor((Math.random()* 255));
  const b = Math.floor((Math.random()* 255));
  return `(${r}, `+`${g}, `+`${b})`;
}

//gerador de RGB aleatório

const criateRgb = document.querySelector("#rgb-color");
const adicionaRgb = document.createElement("h3");
adicionaRgb.innerHTML = randomRgb();
criateRgb.appendChild(adicionaRgb);

const geraRGB = "rgb"+randomRgb();


function randomColor() {
    const hex = (Math.random()*0xFFFFFF<<0).toString(16);
    return `#${hex}`;
  }
    let x = randomColor()
    let circulo1 = document.querySelector("#circulo1");
    circulo1.style.backgroundColor = x;
    
    let y = randomColor()
    let circulo2 = document.querySelector("#circulo2");
    circulo2.style.backgroundColor = y;

    let z = randomColor()
    let circulo3 = document.querySelector("#circulo3");
    circulo3.style.backgroundColor = z;

    let b = randomColor()
    let circulo4 = document.querySelector("#circulo4");
    circulo4.style.backgroundColor = b;

    let a = randomColor()
    let circulo5 = document.querySelector("#circulo5");
    circulo5.style.backgroundColor = a;

    let c = randomColor()
    let circulo6 = document.querySelector("#circulo6");
    circulo6.style.backgroundColor = c;

    //requisito 5

  const acertou = document.querySelector("#answer");
  const cor1 = document.querySelector("#circulo1");
  const cor2 = document.querySelector("#circulo2");
  const cor3 = document.querySelector("#circulo3");
  const cor4 = document.querySelector("#circulo4");
  const cor5 = document.querySelector("#circulo5");
  const cor6 = document.querySelector("#circulo6");
  const rgbColor = document.querySelector("#rgb-color");
  
  cor1.addEventListener("click", function(){
    if(cor1.style.backgroundColor == geraRGB){
      acertou.innerHTML = "Acertou!";
  }else{
    
    acertou.innerHTML = "Errou! Tente novamente!"; 
  }
  });

  cor2.addEventListener("click", function(){
    if(cor2.style.backgroundColor == geraRGB){
      /* console.log(cor1); */
      acertou.innerHTML = "Acertou!";
  }else{
    acertou.innerHTML = "Errou! Tente novamente!"; 
  }
  });

cor3.addEventListener("click", function(){
  if(cor3.style.backgroundColor == geraRGB){
    /* console.log(cor1); */
    acertou.innerHTML = "Acertou!";
}else{
  acertou.innerHTML = "Errou! Tente novamente!"; 
}
});

cor4.addEventListener("click", function(){
  if(cor4.style.backgroundColor == geraRGB){
    /* console.log(cor1); */
    acertou.innerHTML = "Acertou!";
}else{
  acertou.innerHTML = "Errou! Tente novamente!"; 
}
});

cor5.addEventListener("click", function(){
  if(cor5.style.backgroundColor == geraRGB){
    /* console.log(cor1); */
    acertou.innerHTML = "Acertou!";
}else{
  acertou.innerHTML = "Errou! Tente novamente!"; 
}
});


cor6.addEventListener("click", function(){
  if(cor6.style.backgroundColor == geraRGB){
    /* console.log(cor1); */
    acertou.innerHTML = "Acertou!";
}else{
  acertou.innerHTML = "Errou! Tente novamente!"; 
}
});


//botão reset

const botun = document.querySelector("#reset-game");
botun.addEventListener("click", function(){
  location.reload();
})

