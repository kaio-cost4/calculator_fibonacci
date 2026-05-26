const fibonacci = (x) => {
    if(x===0 || x===1)
        return 1;
    let fm1 = 1, fm2 = 1, fm;
    for(let i=2; i<=x;i++){
        fm=fm1+fm2;
        fm2=fm1;
        fm1=fm;
    }
    return fm;
}
// PEGAR O BOTÃO
const button = document.getElementById("calculateButton");

// ADICIONAR EVENTO DE CLIQUE
button.addEventListener("click", () => {
        // PEGAR O VALOR DO INPUT
    const inputValue =
        document.getElementById("inputNumber").value;

    // CONVERTER PARA NÚMERO
    const number = Number(inputValue);

    // CALCULAR FIBONACCI
    const result = fibonacci(number);

    // MOSTRAR RESULTADO NA TELA
    document.getElementById("result").innerText =
        `Resultado: ${result}`;
});