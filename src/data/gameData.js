
export const MINUTE = 60 * 1000;
export const HOUR = 60 * MINUTE;
export const GAME_DAY = 48 * MINUTE; // 1 jour de jeu = 48 minutes réelles
 
export const ACID = {
  supplyCost: 60000,
  cycle: 20 * 1000,
  soloSale: 335000,
  boostWindow: 30 * MINUTE, // le boost double la vitesse sur ces 30 minutes
};
 
export const BUNKER = {
  supplyCost: 75000,
  cycle: 2 * HOUR + 20 * MINUTE,
  soloSale: 210000,
};
 
export const AGENCY = {
  safeCap: 250000,
  perContract: 100, // +100 $ par jour de jeu et par contrat de sécurité terminé
  maxPerDay: 20000,
};
 
export const SALVAGE = {
  defaultCap: 250000, // 100 000 $ sans le coffre mural
  maxCars: 4,
  // Versement par jour de jeu selon le nombre de voitures remorquées
  // (l'index du tableau = le nombre de voitures).
  // 1 et 4 voitures : chiffres trouvés dans les guides. 2 et 3 : estimations.
  depositByCars: [0, 7200, 12800, 18400, 24000],
  // Sans nouveau remorquage, le versement baisse par paliers de 96 minutes.
  decayStep: 96 * MINUTE,
  decay: [1, 0.875, 0.8, 0.7, 0.6, 0.5],
  decayOneCar: [1, 2 / 3, 0.5, 0.4],
};
 
export const NIGHTCLUB = {
  safeCap: 250000,
  maxPerDay: 50000,   // versement plein à partir de 90 % de popularité
  fullFrom: 90,
  decayPerDay: 5,     // −5 % par jour de jeu (avec l'amélioration Personnel)
  promoBoost: 25,     // mission de promotion
  djBoost: 10,        // changer de DJ résident
  djCost: 10000,
};
 
export const COOLDOWNS = {
  cayo: 72 * HOUR,       // règle perso : 3 jours pour changer d'objet principal
  payphone: 10 * MINUTE,
  bounty: 24 * HOUR,
};
 
export const PAYPHONE_BASE = 15000; // paiement sans le bonus d'assassinat
export const SALVAGE_ROBBERIES_PER_WEEK = 3;
export const DEFAULT_TARGET = 1201000; // routine quotidienne complète
 
export const GOALS = [
  { value: 500000, label: "500 000 $" },
  { value: 1000000, label: "1 000 000 $" },
  { value: 1201000, label: "1 201 000 $ · routine complète" },
  { value: 2000000, label: "2 000 000 $" },
  { value: 3000000, label: "3 000 000 $" },
  { value: 5000000, label: "5 000 000 $" },
  { value: 10000000, label: "10 000 000 $" },
];
 
// Contrats de l'Atelier Auto. « net » = ta part après la commission de 10 %.
export const AUTO_CONTRACTS = [
  { name: "Union Depository", payout: 300000 },
  { name: "Superdollar Deal", payout: 185000 },
  { name: "Agency Deal", payout: 182000 },
  { name: "Lost Contract", payout: 180000 },
  { name: "Bank Contract", payout: 178000 },
  { name: "Prison Contract", payout: 175000 },
  { name: "E.C.U. Job", payout: 172000 },
  { name: "Data Contract", payout: 170000 },
].map((contract) => ({ ...contract, net: Math.round(contract.payout * 0.9) }));
