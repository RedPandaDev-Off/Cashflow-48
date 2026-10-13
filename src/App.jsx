import AcidCard from "./components/AcidCard";
import CashStack from "./components/CashStack";

const App = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8">
      <header>
        {/* Titre et liasse sur la même ligne */}
        <div className="flex items-center gap-2">
          <h1 className="neon-text neon-lime text-4xl font-bold">
            Cashflow 48
          </h1>

          {/* Boîte qui réserve la place de la petite liasse */}
          <div className="cash-glow neon-lime flex h-14 w-24 shrink-0 items-center justify-center">
<div className="scale-35">
  <CashStack spin small />
</div>
          </div>
        </div>

        <p className="mt-2 text-dim">Tableau de bord business · GTA Online</p>
      </header>

      <AcidCard />
    </div>
  );
};

export default App;
