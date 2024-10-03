const amout = document.getElementById("amount");

// Manipulando o input amout para receber somente números
amout.addEventListener("input", () => {

  const hasCharactersRegex = /\D+/g
  amout.value = amount.value.replace(hasCharactersRegex, "")
})