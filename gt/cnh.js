const idade = 15;
const maiorIdade = idade >= 18;
const possuiCNH = false; 

const podeDirigir = maiorIdade && possuiCNH;
console.log('pode viajar sozinho?', podeDirigir);

const podeViajarSozinho = maiorIdade || possuiCNH ;
console.log('pod viajar sozinho?, podeViajarSozinho');

const PrecisaDeAcompanhante = !maiorIdade;
console.log('precisa de acompanhante?' , PrecisaDeAcompanhante);