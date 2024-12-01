let NomeHeroi = prompt("Insira o nome do herói:");
let QuantidadeXp = parseFloat(prompt("Insira a quantidade de XP do herói:"));

if (QuantidadeXp <= 1000) {
    console.log(`O herói de nome ${NomeHeroi} está no nível de ferro.`);
} else if (QuantidadeXp >= 1001 && QuantidadeXp <= 2000) {
    console.log(`O herói de nome ${NomeHeroi} está no nível de bronze.`);
} else if (QuantidadeXp >= 2001 && QuantidadeXp <= 5000) {
    console.log(`O herói de nome ${NomeHeroi} está no nível de prata.`);
} else if (QuantidadeXp >= 5001 && QuantidadeXp <= 7000) {
    console.log(`O herói de nome ${NomeHeroi} está no nível de ouro.`);
} else if (QuantidadeXp >= 7001 && QuantidadeXp <= 8000) {
    console.log(`O herói de nome ${NomeHeroi} está no nível de platina.`);
} else if (QuantidadeXp >= 8001 && QuantidadeXp <= 9000) {
    console.log(`O herói de nome ${NomeHeroi} está no nível de ascendente.`);
} else if (QuantidadeXp >= 9001 && QuantidadeXp <= 10000) {
    console.log(`O herói de nome ${NomeHeroi} está no nível de imortal.`);
} else if (QuantidadeXp > 10000) { 
    console.log(`O herói de nome ${NomeHeroi} está no nível de radiante.`);
}
