export function formatMoney(montant) {
  // 1. Arrondir à l'unité : 999.6 → 1000
  const arrondi = Math.round(montant);

  //    (condition ? siVrai : siFaux) est un « if » en une ligne
  const signe = arrondi < 0 ? "-" : "";

  const chiffres = Math.abs(arrondi)
    .toLocaleString("fr-FR")
    .replace(/\s/g, " ");

  return signe + chiffres + " $";
}

export function formatDuration(ms) {
  // Si ms est négatif, on prend 0 (un compte à rebours ne descend pas sous zéro)
  const msPositif = Math.max(0, ms);

  // 1000 ms = 1 seconde. Math.ceil arrondit vers le haut : 4,2 s → 5 s
  const total = Math.ceil(msPositif / 1000);   // 3725
  const jours = Math.floor(total / 86400);             // 86400 s dans un jour → 0
  const heures = Math.floor((total % 86400) / 3600);   // 3600 s dans une heure → 1
  const minutes = Math.floor((total % 3600) / 60);     
  const secondes = total % 60;         
    // "5" → "05", pour avoir toujours 2 chiffres
  const mm = String(minutes).padStart(2, "0");
  const ss = String(secondes).padStart(2, "0");

  // Moins d'une heure (et pas de jour) : format court "m:ss"
  if (jours === 0 && heures === 0) {
    return minutes + ":" + ss;                 // "1:05"
  }

  // Sinon, format long "h:mm:ss"
  const temps = heures + ":" + mm + ":" + ss;  // "1:02:05"

  // Avec des jours, on ajoute "2 j " devant
  if (jours > 0) {
    return jours + " j " + temps;              // "2 j 3:00:00"
  }

  return temps;
}                