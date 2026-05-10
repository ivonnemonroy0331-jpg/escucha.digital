/* global React, window */
/* ============================================================
   views.jsx — Vistas alineadas a los datos reales de las
   2 escuchas digitales
   ============================================================ */

const { Pill, Bar, Waves } = window.GPC;

/* ============ 1. RESUMEN ============ */
function ResumenView() {
  const { KPIS, PRESENCE_SCORES, CRITICAL_FINDINGS, CLIENT } = window.GP;
  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Escucha digital · {CLIENT.reportDate}</div>
          <h1 className="view-title">Resumen<br/><span className="accent">ejecutivo</span></h1>
          <p className="view-subtitle">Diagnóstico integral de la presencia digital, audiencia y oportunidades de marca para la Dra. Gina Pizarro — Dermatóloga · {CLIENT.city}.</p>
        </div>
        <div className="view-meta">
          <strong>9 dimensiones</strong>
          Análisis activo
        </div>
      </header>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        {KPIS.map((k, i) => (
          <div key={i} className={`card ${i === 0 ? "card-ink" : i === 1 ? "card-pink" : i === 2 ? "card-lav" : ""}`}>
            <div className="card-title">{k.label}</div>
            <div className="stat">
              <div className="stat-value">{k.value}</div>
              <div className="stat-delta">{k.delta}</div>
              <div className="tiny muted" style={{ marginTop: 4 }}>{k.note}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginBottom: 20 }}>
        <div className="card">
          <div className="card-title">Puntuación de presencia digital</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PRESENCE_SCORES.map(s => (
              <div key={s.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 12.5 }}>
                  <span style={{ fontWeight: 600 }}>{s.label}</span>
                  <strong>{s.value}/100</strong>
                </div>
                <Bar value={s.value} variant={s.tone === "pos" ? "" : s.tone === "neg" ? "ink" : "lav"} />
              </div>
            ))}
          </div>
        </div>

        <div className="card card-pink">
          <div className="card-title">Hallazgos críticos</div>
          <ol className="list-clean">
            {CRITICAL_FINDINGS.map((f, i) => (
              <li key={i}>
                <div className="num">{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.4, marginBottom: 4 }}>{f.t}</div>
                  <Pill tone={i <= 1 ? "" : i === 2 ? "pill-ink" : "pill-lav"}>{f.s}</Pill>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="card card-ink">
        <div className="card-title">Síntesis estratégica</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
          <div>
            <div className="tiny upper" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Activo central</div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.1, marginBottom: 6 }}>Especialización dermatológica + portafolio completo de tecnologías Tier 1</div>
            <div className="tiny" style={{ color: "rgba(255,255,255,0.65)" }}>El argumento de mayor confianza ya existe — falta comunicarlo.</div>
          </div>
          <div>
            <div className="tiny upper" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Brecha principal</div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.1, marginBottom: 6 }}>Distancia entre calidad del servicio y comunicación digital del diferencial</div>
            <div className="tiny" style={{ color: "rgba(255,255,255,0.65)" }}>Reputación 5.0★ vs presencia digital subutilizada.</div>
          </div>
          <div>
            <div className="tiny upper" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Movimiento prioritario</div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.1, marginBottom: 6 }}>Activar Meta Ads + reactivar blog + producir Reels educativos de Ultraformer e Indiba</div>
            <div className="tiny" style={{ color: "rgba(255,255,255,0.65)" }}>Recursos disponibles, ejecución inmediata.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ 2. BUYER PERSONAS ============ */
function PersonasView() {
  const { BUYER_PERSONAS } = window.GP;
  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Audiencia · ¿A quién le hablamos?</div>
          <h1 className="view-title">Buyer<br/><span className="accent">personas</span></h1>
          <p className="view-subtitle">4 perfiles construidos a partir del portafolio de servicios, las reseñas reales y la conversación digital del sector estético en Barranquilla.</p>
        </div>
        <div className="view-meta">
          <strong>4 perfiles</strong>
          Mapeo activo
        </div>
      </header>

      <div className="grid grid-2">
        {BUYER_PERSONAS.map((p, idx) => (
          <div key={p.id} className={`card ${idx === 0 ? "card-pink" : idx === 1 ? "card-lav" : ""}`}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "white", display: "grid", placeItems: "center", fontSize: 30, border: "1px solid var(--line)" }}>{p.emoji}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 30, margin: 0, lineHeight: 1, letterSpacing: 0.5 }}>{p.name}</h3>
                <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600, marginTop: 3 }}>{p.tagline}</div>
                <div className="tiny muted" style={{ marginTop: 4 }}>{p.role}</div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
              {p.services.map(s => <Pill key={s} tone="pill-outline">{s}</Pill>)}
            </div>

            <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 12, padding: "12px 14px" }}>
              {p.rows.map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 12, padding: "8px 0", borderBottom: "1px dashed var(--line)", fontSize: 12.5 }}>
                  <span className="tiny upper muted" style={{ fontSize: 10.5, paddingTop: 1 }}>{k}</span>
                  <span style={{ color: "var(--ink-soft)", lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ 3. SEGMENTACIÓN POR SERVICIO ============ */
function SegmentosView() {
  const { SEGMENTS } = window.GP;
  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Segmentación por servicio</div>
          <h1 className="view-title">Cinco<br/><span className="accent">palancas</span> de crecimiento</h1>
          <p className="view-subtitle">Cinco segmentos prioritarios del portafolio, con audiencias específicas, mensajes clave y formato de contenido recomendado para activar pauta y orgánico.</p>
        </div>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {SEGMENTS.map((s, i) => (
          <div key={s.id} className={`card ${i === 0 ? "card-pink" : i === 1 ? "" : i === 2 ? "card-lav" : ""}`}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--ink)", color: "white", display: "grid", placeItems: "center", fontSize: 28 }}>{s.icon}</div>
              <div>
                <div className="tiny upper" style={{ color: "var(--magenta-deep)", fontWeight: 800, marginBottom: 4 }}>Servicio · 0{i + 1}</div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 26, margin: 0, lineHeight: 1.05, letterSpacing: 0.4 }}>{s.name}</h3>
                <div style={{ fontSize: 12.5, color: "var(--ink-soft)", marginTop: 6 }}>{s.role}</div>
              </div>
              <Pill tone="pill-ink">{s.badge}</Pill>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {s.rows.map(([k, v]) => (
                <div key={k} style={{ background: "rgba(255,255,255,0.7)", borderRadius: 10, padding: "10px 14px", fontSize: 12.5 }}>
                  <div className="tiny upper muted" style={{ fontSize: 10, marginBottom: 3 }}>{k}</div>
                  <div style={{ color: "var(--ink-soft)", lineHeight: 1.45 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ 4. TENDENCIAS DE MERCADO ============ */
function TendenciasView() {
  const { MARKET_KPIS, TRENDS } = window.GP;
  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Tendencias del mercado · 2025–2026</div>
          <h1 className="view-title">Lo que viene<br/>en <span className="accent">estética</span></h1>
          <p className="view-subtitle">Ocho movimientos del mercado global y colombiano cruzados con el portafolio actual de la Dra. Gina, para priorizar el contenido de los próximos 6 meses.</p>
        </div>
      </header>

      <div className="grid grid-4" style={{ marginBottom: 24 }}>
        {MARKET_KPIS.map((k, i) => (
          <div key={i} className={`card ${i === 0 ? "card-ink" : i === 2 ? "card-pink" : ""}`}>
            <div className="card-title">{k.label}</div>
            <div className="stat-value stat-value-sm" style={{ marginBottom: 4 }}>{k.value}</div>
            <div className="tiny muted" style={{ marginBottom: 8 }}>{k.note}</div>
            {k.badge && <Pill tone={i === 0 ? "pill-ink" : "pill-lav"}>{k.badge}</Pill>}
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        {TRENDS.map((t, idx) => (
          <div key={t.id} className={`card ${idx === 0 ? "card-pink" : idx === 4 ? "card-lav" : ""}`}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: 14, background: "var(--ink)", color: "white", display: "grid", placeItems: "center", fontSize: 24, flexShrink: 0 }}>{t.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                  <div className="tiny upper" style={{ color: "var(--magenta-deep)", fontWeight: 800, letterSpacing: 1.6 }}>Tendencia · 0{t.n}</div>
                  <Pill tone="pill-outline">{t.tag}</Pill>
                </div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 22, margin: "6px 0 4px", lineHeight: 1.1, letterSpacing: 0.4 }}>{t.name}</h3>
                <div className="tiny muted">{t.role}</div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "0 0 12px", lineHeight: 1.55 }}>{t.body}</p>

            <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 10, padding: "10px 12px", marginBottom: 12 }}>
              <div className="tiny upper muted" style={{ marginBottom: 6 }}>Portafolio relacionado</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {t.services.map(s => <Pill key={s} tone="pill-lav">{s}</Pill>)}
              </div>
            </div>

            <div style={{ borderLeft: "3px solid var(--magenta)", paddingLeft: 12, fontSize: 12.5, color: "var(--ink-soft)", fontStyle: "italic", lineHeight: 1.55 }}>{t.msg}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ 5. RESEÑAS & SENTIMENT ============ */
function ComentariosView() {
  const { REVIEWS_KPIS, SENTIMENT_CATEGORIES, COMMENTS, REVIEW_INSIGHTS } = window.GP;
  const categories = [...new Set(COMMENTS.map(c => c.cat))];

  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Reseñas · Voz del paciente</div>
          <h1 className="view-title">Lo que dicen<br/><span className="accent">de la Dra.</span></h1>
          <p className="view-subtitle">Análisis de 339+ reseñas verificadas en Google y Doctoralia. Reputación digital excepcional y patrones lingüísticos accionables para contenido.</p>
        </div>
        <div className="view-meta">
          <strong>99% positivo</strong>
          Sentimiento general
        </div>
      </header>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        {REVIEWS_KPIS.map((k, i) => (
          <div key={i} className={`card ${i === 1 ? "card-ink" : i === 3 ? "card-pink" : ""}`}>
            <div className="card-title">{k.label}</div>
            <div className="stat-value">{k.value}</div>
            <div className="tiny muted" style={{ margin: "6px 0 8px" }}>{k.note}</div>
            {k.badge && <Pill tone={i === 1 ? "pill-ink" : "pill-lav"}>{k.badge}</Pill>}
          </div>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div className="card-title">Sentimiento por categoría</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {SENTIMENT_CATEGORIES.map(s => (
              <div key={s.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 12.5 }}>
                  <span style={{ fontWeight: 600 }}>{s.label}</span>
                  <strong>{s.v}%</strong>
                </div>
                <Bar value={s.v} />
              </div>
            ))}
          </div>
        </div>

        <div className="card card-lav">
          <div className="card-title">Insights cualitativos</div>
          <ol className="list-clean">
            {REVIEW_INSIGHTS.map((r, i) => (
              <li key={i}>
                <div className="num">{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{r.t}</div>
                  <div className="tiny" style={{ color: "var(--ink-soft)", marginBottom: 4 }}>{r.d}</div>
                  <Pill tone="pill-ink">{r.a}</Pill>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {categories.map(cat => (
        <div key={cat} style={{ marginBottom: 24 }}>
          <div className="card-title" style={{ paddingLeft: 4, marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--magenta)" }} />
            {cat}
          </div>
          <div className="grid grid-2">
            {COMMENTS.filter(c => c.cat === cat).map((c, i) => (
              <div key={i} className="comment">
                <div className="comment-avatar">{c.initials}</div>
                <div className="comment-body">
                  <div className="comment-head">
                    <span className="user">{c.user}</span>
                    {c.stars > 0 && <span style={{ color: "var(--magenta)" }}>{"★".repeat(c.stars)}</span>}
                    <span className="tiny muted" style={{ marginLeft: "auto" }}>{c.source}</span>
                  </div>
                  <div className="comment-text" style={{ fontStyle: "italic" }}>"{c.text}"</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                    {c.tags.map(t => <Pill key={t} tone="pill-pos">{t}</Pill>)}
                  </div>
                  {c.opportunity && (
                    <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 8, background: "var(--magenta-pale)", fontSize: 12, color: "var(--ink-soft)", borderLeft: "3px solid var(--magenta)" }}>
                      <strong>Oportunidad detectada → </strong>{c.opportunity}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============ 6. REDES SOCIALES ============ */
function RedesView() {
  const { SOCIAL_KPIS, IG_STRENGTHS, FB_STRENGTHS, IG_OPPS, FB_OPPS, EDITORIAL } = window.GP;
  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Redes sociales</div>
          <h1 className="view-title">Instagram &<br/><span className="accent">Facebook</span></h1>
          <p className="view-subtitle">Diagnóstico de ambos canales activos, fortalezas, oportunidades específicas y propuesta de calendario editorial semanal.</p>
        </div>
      </header>

      <div className="grid grid-4" style={{ marginBottom: 22 }}>
        {SOCIAL_KPIS.map((k, i) => (
          <div key={i} className={`card ${i === 0 ? "card-pink" : i === 2 ? "card-ink" : ""}`}>
            <div className="card-title">{k.label}</div>
            <div className="stat-value stat-value-sm">{k.value}</div>
            <div className="tiny muted" style={{ margin: "6px 0 8px" }}>{k.note}</div>
            {k.badge && <Pill tone={k.tone === "pos" ? "pill-pos" : "pill-neu"}>{k.badge}</Pill>}
          </div>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginBottom: 22 }}>
        {[
          { name: "Instagram", h: "@dra.ginapizarro", S: IG_STRENGTHS, O: IG_OPPS, color: "card-pink", icon: "📷" },
          { name: "Facebook", h: "552 seguidores · canal por crecer", S: FB_STRENGTHS, O: FB_OPPS, color: "card-lav", icon: "📘" },
        ].map(p => (
          <div key={p.name} className={`card ${p.color}`}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--ink)", color: "white", display: "grid", placeItems: "center", fontSize: 22 }}>{p.icon}</div>
              <div>
                <h3 style={{ fontFamily: "var(--display)", fontSize: 26, margin: 0, lineHeight: 1, letterSpacing: 0.4 }}>{p.name}</h3>
                <div className="tiny muted" style={{ marginTop: 4 }}>{p.h}</div>
              </div>
            </div>

            <div className="tiny upper muted" style={{ marginBottom: 8, fontWeight: 800 }}>Fortalezas</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: 6 }}>
              {p.S.map((s, i) => <li key={i} style={{ display: "flex", gap: 8, fontSize: 12.5, color: "var(--ink-soft)" }}><span style={{ color: "var(--pos)" }}>●</span>{s}</li>)}
            </ul>

            <div className="tiny upper muted" style={{ marginBottom: 8, fontWeight: 800 }}>Oportunidades</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {p.O.map((o, i) => (
                <li key={i} style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12.5, color: "var(--ink-soft)" }}>
                  <span style={{ display: "flex", gap: 8 }}><span style={{ color: "var(--magenta)" }}>▲</span>{o.t}</span>
                  {o.s && <Pill tone="pill-ink" style={{ alignSelf: "flex-start", marginLeft: 18 }}>{o.s}</Pill>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-title">Calendario editorial semanal sugerido</div>
        <table className="tbl">
          <thead><tr><th>Día</th><th>Canal</th><th>Tipo de contenido</th></tr></thead>
          <tbody>
            {EDITORIAL.map(e => (
              <tr key={e.day}>
                <td><div className="name">{e.day}</div></td>
                <td><Pill tone="pill-lav">{e.channel}</Pill></td>
                <td style={{ fontSize: 13 }}>{e.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============ 7. SITIO WEB ============ */
function WebView() {
  const { WEB_KPIS, WEB_PAGES, WEB_STRENGTHS, WEB_IMPROVEMENTS, SEO_OPPS, CLIENT } = window.GP;
  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Sitio web · {CLIENT.site}</div>
          <h1 className="view-title">El activo<br/><span className="accent">web</span></h1>
          <p className="view-subtitle">Análisis estructural del sitio actual: páginas existentes, fortalezas, brechas críticas (Ultraformer e Indiba sin página propia) y oportunidades SEO locales.</p>
        </div>
      </header>

      <div className="grid grid-4" style={{ marginBottom: 22 }}>
        {WEB_KPIS.map((k, i) => (
          <div key={i} className={`card ${i === 1 ? "card-pink" : i === 3 ? "card-lav" : ""}`}>
            <div className="card-title">{k.label}</div>
            <div className="stat-value stat-value-sm">{k.value}</div>
            {k.note && <div className="tiny muted" style={{ margin: "6px 0 8px" }}>{k.note}</div>}
            {k.badge && <Pill tone={k.tone === "pos" ? "pill-pos" : "pill-neu"}>{k.badge}</Pill>}
          </div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 22, padding: 0, overflow: "hidden" }}>
        <table className="tbl">
          <thead><tr><th>Sección del sitio</th><th>Contenido actual</th><th>Estado</th></tr></thead>
          <tbody>
            {WEB_PAGES.map(([k, v, s]) => (
              <tr key={k}>
                <td><div className="name">{k}</div></td>
                <td style={{ fontSize: 13, lineHeight: 1.5, maxWidth: 460 }}>{v}</td>
                <td><Pill tone={s.includes("crítica") || s.includes("Urgente") ? "pill-neg" : s.includes("Excelente") || s.includes("Sólido") || s.includes("Completo") || s.includes("Diferenciador") ? "pill-pos" : "pill-neu"}>{s}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-2" style={{ marginBottom: 22 }}>
        <div className="card card-pink">
          <div className="card-title">Fortalezas del sitio</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {WEB_STRENGTHS.map((s, i) => <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}><span style={{ color: "var(--pos)", fontWeight: 800 }}>●</span>{s}</li>)}
          </ul>
        </div>
        <div className="card">
          <div className="card-title">Mejoras prioritarias</div>
          <ol className="list-clean">
            {WEB_IMPROVEMENTS.map((o, i) => (
              <li key={i}>
                <div className="num">{i + 1}</div>
                <div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)", marginBottom: o.s ? 6 : 0, lineHeight: 1.5 }}>{o.t}</div>
                  {o.s && <Pill tone="pill-ink">{o.s}</Pill>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="card card-ink">
        <div className="card-title">Oportunidades SEO local</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {SEO_OPPS.map(([k, v]) => (
            <div key={k} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 16px" }}>
              <div className="tiny upper" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 6, fontWeight: 800 }}>{k}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.92)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ 8. PLAN 30 DÍAS ============ */
function PlanView() {
  const { PLAN_KPIS, ACTIONS_W1, ACTIONS_W24, PILLARS_BY_PERSONA } = window.GP;
  return (
    <div className="view">
      <Waves />
      <header className="view-header">
        <div>
          <div className="view-eyebrow">Plan 30 días</div>
          <h1 className="view-title">Activación<br/><span className="accent">inmediata</span></h1>
          <p className="view-subtitle">Hoja de ruta accionable de los primeros 30 días: lo que se ejecuta en semana 1 vs semanas 2–4, y pilares de contenido por persona.</p>
        </div>
      </header>

      <div className="grid grid-4" style={{ marginBottom: 22 }}>
        {PLAN_KPIS.map((k, i) => (
          <div key={i} className={`card ${i === 2 ? "card-pink" : ""}`}>
            <div className="card-title">{k.label}</div>
            <div className="stat-value stat-value-sm">{k.value}</div>
            <div className="tiny muted" style={{ margin: "6px 0 8px" }}>{k.note}</div>
            {k.badge && <Pill>{k.badge}</Pill>}
          </div>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginBottom: 22 }}>
        <div className="card card-pink">
          <div className="card-title">Semana 1 · Quick wins</div>
          <ol className="list-clean">
            {ACTIONS_W1.map((a, i) => (
              <li key={i}><div className="num">{i + 1}</div><div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>{a}</div></li>
            ))}
          </ol>
        </div>
        <div className="card">
          <div className="card-title">Semanas 2–4 · Producción + pauta</div>
          <ol className="list-clean">
            {ACTIONS_W24.map((a, i) => (
              <li key={i}><div className="num">{i + 1}</div><div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>{a}</div></li>
            ))}
          </ol>
        </div>
      </div>

      <div className="card card-lav" style={{ marginBottom: 22 }}>
        <div className="card-title">Pilares de contenido por persona</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {PILLARS_BY_PERSONA.map(([k, v]) => (
            <div key={k} style={{ background: "white", borderRadius: 12, padding: "14px 16px" }}>
              <div className="tiny upper" style={{ color: "var(--magenta-deep)", fontWeight: 800, marginBottom: 6 }}>{k}</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card card-ink" style={{ padding: 36, textAlign: "center" }}>
        <div className="card-title" style={{ justifyContent: "center" }}>Filosofía del plan</div>
        <h2 style={{ fontFamily: "var(--display)", fontSize: 48, margin: "8px 0 14px", letterSpacing: 0.5, lineHeight: 1 }}>
          La Dra. Gina ya hace una <span style={{ fontFamily: "var(--script)", color: "var(--magenta)", fontSize: 64 }}>medicina excepcional</span>
        </h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", maxWidth: 620, margin: "0 auto", lineHeight: 1.55 }}>
          Su reputación 5.0★ lo confirma. El plan no busca crear algo que no existe — busca <strong style={{ color: "var(--magenta)" }}>traducir digitalmente</strong> la calidad clínica que ya entrega cada día.
        </p>
      </div>
    </div>
  );
}

window.GPV = {
  ResumenView, PersonasView, SegmentosView, TendenciasView,
  ComentariosView, RedesView, WebView, PlanView,
};
