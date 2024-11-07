function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    let nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    let nota3 = parseFloat(document.getElementById("nota3").value) || 0;
    let nota4 = parseFloat(document.getElementById("nota4").value) || 0;
    
    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        document.getElementById("resultado").textContent = "Erro: Por favor, insira uma nota válida (0 ou maior).";
        return;
    }

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    document.getElementById("resultado").textContent = `Média: ${media.toFixed(1)}`;
}

document.getElementById("nota1").addEventListener("input", calcularMedia);
document.getElementById("nota2").addEventListener("input", calcularMedia);
document.getElementById("nota3").addEventListener("input", calcularMedia);
document.getElementById("nota4").addEventListener("input", calcularMedia);
