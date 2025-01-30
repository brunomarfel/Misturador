function misturaCores() {
    //Cores Array
    let cores = {
        vermelho: [255, 0, 0],    
        verde: [0, 255, 0], 
        azul: [0, 0, 255],    
        branco: [255,255,255],
        preto: [0,0,0],
        amarelo: [255,255,0]
    };

    let corA = document.getElementById("corA").value; //Chamar Elementos por ID
    let corB = document.getElementById("corB").value;

    let rgb1 = cores[corA]; //Buscar Dados da Opcao 
    let rgb2 = cores[corB];

    //Ciclo (Outra maneiro: Método Map)
    let misturaCor = []; 
    for (let i = 0; i < rgb1.length; i++) {
    misturaCor[i] = Math.round((rgb1[i] + rgb2[i]) / 2); //Math Round Arredondar
}

let novaCor = `rgb(${misturaCor[0]}, ${misturaCor[1]}, ${misturaCor[2]})`;
document.body.style.backgroundColor = novaCor; //Mudar Body
}

document.getElementById("misturarButton").addEventListener("click", misturaCores); //Adicionar Event