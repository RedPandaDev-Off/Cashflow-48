import { useState, useEffect } from "react";
import { ACID } from "../data/gameData";
import { formatMoney, formatDuration } from "../lib/format";

export default function AcidCard() {
  // ① L'état : quand la production a été lancée (null = à l'arrêt)
  const [start, setStart] = useState(null);

  // ② L'heure actuelle, mise à jour chaque seconde
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer); // on arrête le timer si la carte disparaît
  }, []);

  // ③ Les valeurs calculées à partir de l'état
  const elapsed = start ? now - start : 0;
  const progress = Math.min(1, elapsed / ACID.cycle);
  const remaining = ACID.cycle - elapsed;
  const running = start !== null && progress < 1;
  const ready = start !== null && progress >= 1;

  return (
    <section className="flex flex-col gap-4 border border-line bg-panel p-5">
      <h2 className="text-xl font-bold ">Labo d'Acide</h2>

      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-lime">
          {Math.floor(progress * 100)} %
        </span>
        <span className="text-dim">
          {running
            ? formatDuration(remaining)
            : ready
              ? "Prêt à vendre"
              : "À l'arrêt"}
        </span>
      </div>

      <div className="h-2.5 border border-line bg-ink">
        <div
          className="h-full bg-lime"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ④ Ce bouton n'apparaît que si la production est à l'arrêt */}
      {start === null && (
        <button
          onClick={() => setStart(Date.now())}
          className="self-start border border-lime px-4 py-2 text-lime"
        >
          Acheter les fournitures · {formatMoney(ACID.supplyCost)}
        </button>
      )}
      {ready && (
        <button
          onClick={() => setStart(null)}
          className="self-start border border-lime px-4 py-2 text-lime"
        >
          vendre l'acide · + {formatMoney(ACID.soloSale)}
        </button>
      )}
    </section>
  );
}
