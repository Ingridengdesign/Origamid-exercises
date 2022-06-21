let botao = document.querySelector("button");

if (botao) {
  botao.addEventListener("click", somar);
  function somar() {
    let div = document.querySelector("div");
    let contador = Number(div.innerText) + 1;
    if (contador < 10) {
      div.innerText = contador;
    } else {
      console.log("contador no valor máximo");
    }
  }
  somar();
}
