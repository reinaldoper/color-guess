
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
  