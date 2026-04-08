const nomeJogador = "gt";
let faseAtual = 3;
let hp ="2";

let pontosPorMissao = [80, 85, 90, 100];

//pontosPorMissao.length
let pontuacaoTotal = 0;

for (let i = 0; i < pontuacoes.length; i++) {
    pontuacaoTotal = pontuacaoTotal + pontuacoes[i]
}
let media = pontuacaoTotal / pontuacoes.length;

let passouDeFase = (media >= 75 && vidas > 0) || ((fase === 1))

console.log(`seja bem vindo: ${nomeJogador}!` );
console.log(pontosPorMissao);
