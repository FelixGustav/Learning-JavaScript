function saudaçao (nome){
    console.log(`Bom dia ${nome}`);
}

const nome = 'gustavo';
saudaçao(nome);

function adicao(x,y){
    const resultado = x + y;
    return resultado;
}

console.log('soma',adicao(2,2));