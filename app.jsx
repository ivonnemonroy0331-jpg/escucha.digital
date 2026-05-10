/* global React, ReactDOM, window */
const { useState, useEffect } = React;
const { Ico, Signature } = window.GPC;
const V = window.GPV;

const NAV = [
  { id: "resumen",     label: "Resumen ejecutivo", icon: "dashboard", tag: "TOP",       group: "Dashboard" },
  { id: "personas",    label: "Buyer personas",    icon: "competitors",                 group: "Audiencia" },
  { id: "segmentos",   label: "Servicios & segmentos", icon: "gaps",                    group: "Audiencia" },
  { id: "tendencias",  label: "Tendencias de mercado", icon: "trend",                   group: "Mercado" },
  { id: "comentarios", label: "Reseñas & sentiment",   icon: "chat",   tag: "339+",     group: "Mercado" },
  { id: "redes",       label: "Redes sociales",        icon: "hash",                    group: "Canales" },
  { id: "web",         label: "Sitio web & SEO",       icon: "funnel",                  group: "Canales" },
  { id: "plan",        label: "Plan 30 días",          icon: "star",   tag: "ACCIÓN",   group: "Estrategia" },
];

const GROUPS = ["Dashboard", "Audiencia", "Mercado", "Canales", "Estrategia"];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "default",
  "showSignature": true
}/*EDITMODE-END*/;

function App() {
  const [active, setActive] = useState("resumen");
  const tweaksHook = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const t = tweaksHook[0]; const setTweak = tweaksHook[1];

  useEffect(() => { document.body.setAttribute("data-density", t.density || "default"); }, [t.density]);

  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h && NAV.find(n => n.id === h)) setActive(h);
  }, []);
  useEffect(() => { window.location.hash = active; window.scrollTo({ top: 0, behavior: "smooth" }); }, [active]);

  const ViewComp = {
    resumen: V.ResumenView,
    personas: V.PersonasView,
    segmentos: V.SegmentosView,
    tendencias: V.TendenciasView,
    comentarios: V.ComentariosView,
    redes: V.RedesView,
    web: V.WebView,
    plan: V.PlanView,
  }[active];

  const activeNav = NAV.find(n => n.id === active);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">GP</div>
          <div className="brand-text">
            <div className="brand-name">Dra. Gina Pizarro</div>
            <div className="brand-sub">Escucha digital · 2026</div>
          </div>
        </div>

        {GROUPS.map(g => (
          <React.Fragment key={g}>
            <div className="nav-section-label">{g}</div>
            {NAV.filter(n => n.group === g).map(n => (
              <div key={n.id} className={`nav-item ${active === n.id ? "active" : ""}`} onClick={() => setActive(n.id)} data-screen-label={n.label}>
                {Ico[n.icon]()}
                <span>{n.label}</span>
                {n.tag && <span className="nav-tag">{n.tag}</span>}
              </div>
            ))}
          </React.Fragment>
        ))}

        <div className="sidebar-footer">
          <div className="signature">By. Ivonne M.</div>
          <div className="sig-caption">Marketing · Producción</div>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="crumb">
            <span>Escucha digital</span>
            <span>›</span>
            <span className="crumb-active">{activeNav?.label}</span>
          </div>
          <div className="search-box">
            {Ico.search()}
            <input placeholder="Buscar tema, tendencia, reseña…" />
          </div>
          <div className="date-chip">📍 Barranquilla · Atlántico</div>
        </div>

        <ViewComp />
        {t.showSignature && <Signature />}
      </main>

      {window.TweaksPanel && window.TweakSection && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection title="Densidad">
            <window.TweakRadio
              value={t.density}
              onChange={v => setTweak("density", v)}
              options={[
                { value: "compact",  label: "Compact" },
                { value: "default",  label: "Default" },
                { value: "spacious", label: "Amplio" },
              ]}
            />
          </window.TweakSection>
          <window.TweakSection title="Vista activa" subtitle="Navega sin usar el sidebar">
            <window.TweakSelect
              value={active}
              onChange={v => setActive(v)}
              options={NAV.map(n => ({ value: n.id, label: n.label }))}
            />
          </window.TweakSection>
          <window.TweakSection title="Firma en esquina">
            <window.TweakToggle value={t.showSignature} onChange={v => setTweak("showSignature", v)} />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
