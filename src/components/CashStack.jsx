export default function CashStack({ label = "10,000 $", spin = false, small = false }) {
  // On construit la liste des classes selon les options
  const classes = ["cash"];
  if (spin) classes.push("cash-spin");
  if (small) classes.push("cash-small");

  return (
    <div className={classes.join(" ")}>
      {/* Les 4 côtés de la liasse */}
      <div className="cash-start" />
      <div className="cash-end" />
      <div className="cash-back">
        <div className="cash-band" />
      </div>
      <div className="cash-front">
        <div className="cash-band" />
      </div>

      {/* Le dessus : le billet + la bande */}
      <div className="cash-top">
        <div className="bill">
          <span className="bill-num tl">100</span>
          <span className="bill-num tr">100</span>
          <span className="bill-num bl">100</span>
          <span className="bill-num br">100</span>
          <span className="bill-title">CASHFLOW 48</span>
          <span className="bill-serial s1">CF 48104829 A</span>
          <span className="bill-serial s2">CF 48104829 A</span>
          <div className="bill-seal" />
          <div className="bill-portrait" />
        </div>
        <div className="cash-band">
          <div className="cash-band-text">
            <span>{label}</span>
            <span>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}