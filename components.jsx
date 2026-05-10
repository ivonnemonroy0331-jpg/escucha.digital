/* global React */
/* ============================================================
   components.jsx — primitivos compartidos
   ============================================================ */

const { useState, useMemo, useEffect } = React;

/* ---------- Icons (inline SVG) ---------- */
const Ico = {
  dashboard: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>),
  competitors: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M15 15h2a4 4 0 0 1 4 4v2"/></svg>),
  gaps: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6"/><path d="M12 22v-6"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="M2 12h6"/><path d="M22 12h-6"/><path d="m4.93 19.07 4.24-4.24"/><path d="m14.83 9.17 4.24-4.24"/></svg>),
  hash: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>),
  trend: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>),
  chat: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
  funnel: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>),
  money: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
  star: () => (<svg className="nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
  search: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>),
  arrowUp: () => (<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>),
  arrowDown: () => (<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>),
};

/* ---------- Wave background ---------- */
const Waves = ({ variant = "default" }) => (
  <svg className="wave-bg" style={{ top: -40, right: -60, width: 520 }} viewBox="0 0 520 380" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,200 C140,120 280,280 520,160 L520,0 L0,0 Z" fill="#E0CFEF" opacity="0.55"/>
    <path d="M0,260 C160,180 320,340 520,220 L520,40 L0,40 Z" fill="#FCE8F2" opacity="0.7"/>
  </svg>
);

/* ---------- Reusable bits ---------- */
const Pill = ({ tone = "", children }) => <span className={`pill ${tone}`}>{children}</span>;

const ThreatBadge = ({ level }) => {
  const cls = level === "ALTO" ? "threat-high" : level === "MEDIO" ? "threat-mid" : "threat-low";
  return <span className={`pill ${cls}`}>● {level}</span>;
};

const PlatformDot = ({ p }) => {
  const c = { meta: "var(--meta)", google: "var(--google)", tiktok: "var(--tiktok)", youtube: "var(--youtube)", instagram: "var(--magenta)" }[p] || "var(--ink-faint)";
  return <span className="platform-dot" style={{ background: c }} />;
};

const Bar = ({ value, max = 100, variant = "" }) => (
  <div className="bar-track">
    <div className={`bar-fill ${variant}`} style={{ width: `${(value / max) * 100}%` }} />
  </div>
);

const Signature = () => (
  <div style={{ position: "absolute", bottom: 20, right: 32, textAlign: "right", zIndex: 1, pointerEvents: "none" }}>
    <div className="signature" style={{ fontSize: 26 }}>By. Ivonne M.</div>
    <div className="sig-caption">Escucha digital · {window.GP.CLIENT.reportDate}</div>
  </div>
);

window.GPC = { Ico, Waves, Pill, ThreatBadge, PlatformDot, Bar, Signature };
