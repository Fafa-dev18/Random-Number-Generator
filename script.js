const sorterbutton = document.querySelector("#btn");
sorterbutton.addEventListener("click", function () {
  const inputmin = parseInt(document.getElementById("input-entre").value, 10);
  const inputmax = parseInt(document.getElementById("input-e").value, 10);

  const erro = document.querySelector("#erromsg");

  if (inputmin >= inputmax) {
    erro.innerText =
      "O valor minimo não pode ser maior ou igual ao valor maximo";
    return;
    result.innerText = "";
  }
  erro.innerText = "";
  result.innerText = "";

  if (isNaN(inputmin) || isNaN(inputmax)) {
    erro.innerText = "Opa! Você esqueceu de preencher os números.";

    result.innerText = "";
    return;
  }
  result.innerText = "";

  const NumeroAleatorio =
    Math.floor(Math.random() * (inputmax - inputmin + 1)) + inputmin;

  document.getElementById("result").innerText = NumeroAleatorio;
});
