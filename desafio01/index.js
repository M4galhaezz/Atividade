let nome = "Vitor";
let xp = 9760;
let ranking = "";

const elo = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante",
];

const exp = [
  1000, 2000, 2001, 5000, 5001, 7000, 7001, 8000, 8001, 9000, 9001, 10000,
];

if (xp <= 1000) {
  ranking = elo[0];
} else if (xp <= 2000) {
  ranking = elo[1];
} else if (xp <= 5000) {
  ranking = elo[2];
} else if (xp <= 7000) {
  ranking = elo[3];
} else if (xp <= 8000) {
  ranking = elo[4];
} else if (xp <= 9000) {
  ranking = elo[5];
} else if (xp <= 10000) {
  ranking = elo[6];
} else {
  ranking = elo[7];
}

console.log(
  "O Herói de nome " +
    nome +
    " possuí " +
    xp +
    " de experiência e está no nível de " +
    ranking,
);
