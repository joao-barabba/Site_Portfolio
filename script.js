document//Aqui tratamento de eventos
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  ); //Neste JS declaro a variavel Hamburguer e adciono um evento de click nela,assim quando o click ocorre a classe show menu acontece
  document.querySelector("#qtde").addEventListener("change",atualizarPreco)
  document.querySelector("#js").addEventListener("change",atualizarPreco)
  document.querySelector("#layout-sim").addEventListener("change",atualizarPreco)
  document.querySelector("#layout-nao").addEventListener("change",atualizarPreco)
  document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = "Prazo: "+ prazo + " semanas"
    atualizarPreco()
  })

  function atualizarPreco(){
    const qtde =document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    
    let preco = qtde*100;
      if (temJS) preco *= 1.1//Usando atribuição estou multiplicando o preço por 1.1 pois quero por 10%
      if (incluiLayout) preco += 250
      let taxaUrgencia =  1 - prazo*0.1;
      preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML ="R$ "+ preco.toFixed(2)//Usei aqui este método para limitar as casas ddecimais no preço final .Aqui desenvolvi o dinamismo de valores na página.

  }
