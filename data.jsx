/* global window */
/* ============================================================
   data.jsx — Contenido REAL extraído de las 2 escuchas + PDF
   ============================================================ */

const CLIENT = {
  name: "Dra. Gina Pizarro",
  specialty: "Dermatóloga",
  city: "Barranquilla · Atlántico",
  handle: "@dra.ginapizarro",
  site: "draginapizarro.com",
  address: "Cra. 53 #82-86, Barranquilla",
  reportDate: "Mayo 2026",
  analyst: "Ivonne M.",
};

const KPIS = [
  { label: "Capacidad semanal", value: "100", delta: "60 clínicas · 40 estéticas", deltaType: "pos", note: "Citas/sem instaladas" },
  { label: "Ticket promedio", value: "$350k", delta: "COP por consulta", deltaType: "pos", note: "Base de ingreso" },
  { label: "Google Reviews", value: "5.0★", delta: "20 reseñas verificadas", deltaType: "pos", note: "Calificación perfecta" },
  { label: "Doctoralia", value: "319+", delta: "Certificado excelencia", deltaType: "pos", note: "99% sentiment positivo" },
];

const PRESENCE_SCORES = [
  { label: "Reputación (Google / Doctoralia)", value: 92, tone: "pos" },
  { label: "Portafolio de servicios (amplitud)", value: 95, tone: "pos" },
  { label: "Sitio web (estructura + SEO)", value: 68, tone: "neu" },
  { label: "Redes sociales (alcance + contenido)", value: 62, tone: "neu" },
  { label: "Comunicación del diferencial", value: 55, tone: "neg" },
  { label: "SEO orgánico local", value: 50, tone: "neg" },
];

const CRITICAL_FINDINGS = [
  { t: "El diferencial clínico-dermatológico es el activo más poderoso y el menos comunicado digitalmente", s: "Brecha crítica de marca" },
  { t: "Ultraformer e Indiba: mayor ticket, menor demanda — requieren educación de contenido urgente", s: "Alto ingreso bloqueado" },
  { t: "Meta Ads con tarjeta disponible y contenido AV existente — pauta lista para lanzar sin inversión en producción", s: "Acción inmediata" },
  { t: "Facebook con solo 552 seguidores frente al potencial de la audiencia 35+ en Barranquilla", s: "Canal subutilizado" },
  { t: "Blog del sitio web inactivo: es el motor de SEO más barato y potente disponible", s: "Visibilidad orgánica" },
];

const BUYER_PERSONAS = [
  {
    id: "valentina",
    emoji: "👩",
    name: "Valentina",
    tagline: "La mujer que se cuida con criterio",
    role: "Buyer persona principal · Mayor volumen de consultas",
    services: ["Estética facial", "Botox", "Aquapure"],
    rows: [
      ["Edad", "28 – 45 años"],
      ["Ubicación", "Barranquilla, norte / Atlántico"],
      ["Perfil", "Profesional independiente, empleada del sector privado o empresaria. NSE medio-alto a alto."],
      ["Motivación", "Verse bien sin perder naturalidad. Resultados visibles, no extremos. Sentirse rejuvenecida, no 'operada'."],
      ["Pain points", "Desconfía de clínicas sin respaldo médico. Le preocupa el sobrediagnóstico estético. Malas experiencias previas."],
      ["Cómo llega", "Referido por amigas, búsqueda Google 'dermatóloga Barranquilla', Instagram orgánico."],
      ["Qué la convierte", "Credenciales visibles + antes/después reales + testimonio de alguien conocido."],
      ["Frase que la activa", "'Antes de cualquier relleno, tu piel necesita un diagnóstico real.'"],
    ],
  },
  {
    id: "marcela",
    emoji: "👩‍💼",
    name: "Marcela",
    tagline: "La ejecutiva anti-envejecimiento",
    role: "Perfil premium · Mayor ticket por paciente",
    services: ["Ultraformer MPT", "Bioestimuladores", "Profhilo"],
    rows: [
      ["Edad", "40 – 58 años"],
      ["Perfil", "Gerente, directora, empresaria o médica. Alta capacidad adquisitiva. Viaja a Bogotá/Medellín o al exterior."],
      ["Motivación", "Preservar su apariencia sin cirugía. Resultados visibles y duraderos. Valora tecnología de punta."],
      ["Pain points", "No encuentra en Barranquilla el nivel de tecnología que ve en Bogotá. Teme resultados artificiales."],
      ["Comportamiento", "Decisión racional. Compara clínicas. Sigue a médicos de Bogotá y Miami."],
      ["Qué la convierte", "Que la Dra. explique la tecnología (Ultraformer Tier 1), formación en Buenos Aires y resultados con contexto clínico."],
      ["Frase que la activa", "'Ultraformer MPT: la tecnología de las mejores clínicas del mundo — ahora en Barranquilla.'"],
    ],
  },
  {
    id: "santiago",
    emoji: "🧑",
    name: "Santiago",
    tagline: "El joven con acné o alopecia",
    role: "Dermatología clínica · Alta frecuencia de consulta",
    services: ["Acné", "Alopecia / PRP", "Consulta dermatológica"],
    rows: [
      ["Edad", "18 – 32 años (o padres de menores)"],
      ["Perfil", "Estudiante universitario, joven profesional o adulto con problemas de piel activos. NSE variado."],
      ["Motivación", "Resolver una condición que afecta su autoestima. Busca solución real, no cosmética."],
      ["Pain points", "Ha ido a clínicas estéticas que no resolvieron el problema de raíz. Frustración con tratamientos que no duran."],
      ["Comportamiento", "Muy activo en Instagram y TikTok. Consume contenido educativo. Se fía de reseñas reales."],
      ["Qué lo convierte", "Reels educativos sobre acné/alopecia + antes/después + que la Dra. explique el diagnóstico diferencial."],
      ["Frase que lo activa", "'El acné tiene cura cuando se trata desde la medicina, no desde la cosmética.'"],
    ],
  },
  {
    id: "carmen",
    emoji: "👩‍🦳",
    name: "Carmen",
    tagline: "La mujer que prioriza su bienestar corporal",
    role: "Cuerpo y bienestar · Alta fidelización con paquetes",
    services: ["Indiba", "Depilación láser", "Fixer corporal"],
    rows: [
      ["Edad", "35 – 55 años"],
      ["Perfil", "Mujer activa, madre de familia. Busca soluciones corporales con resultados progresivos."],
      ["Motivación", "Mejorar zonas específicas, eliminar vello definitivo, reducir flacidez postparto."],
      ["Pain points", "Invirtió en tratamientos sin resultado. No entiende cómo funciona Indiba. Depilación láser le parece cara por sesión."],
      ["Comportamiento", "Facebook activo, grupos de mamás. Sensible a paquetes y descuentos por sesiones."],
      ["Qué la convierte", "Carrusel educativo Indiba + paquete visible con descuento + testimonio de resultado real."],
      ["Frase que la activa", "'Indiba no es solo estética — es la tecnología que regenera tu piel desde adentro.'"],
    ],
  },
];

const SEGMENTS = [
  {
    id: "ultraformer", icon: "⚡", tone: "pp",
    name: "Ultraformer MPT — Lifting sin cirugía",
    role: "Mayor ticket · Menor demanda espontánea → Prioridad #1 de contenido educativo",
    badge: "Alto ticket",
    rows: [
      ["Audiencia primaria", "Mujeres 38–58 · NSE alto · Barranquilla norte"],
      ["Intereses Meta Ads", "Anti-aging, bienestar femenino, medicina estética, cirugía sin bisturí"],
      ["Formato de contenido", "Reel educativo '¿Qué hace el Ultraformer MPT?' + carrusel antes/después"],
      ["Objeción principal", "'No sé qué es' / '¿Es seguro?' → Explicar con voz de la Dra."],
      ["Mensaje clave", "'El único equipo Tier 1 de lifting sin cirugía disponible en Barranquilla'"],
      ["CTA recomendado", "→ Agendar valoración gratuita por WhatsApp"],
    ],
  },
  {
    id: "botox", icon: "💉", tone: "pa",
    name: "Botox + Bioestimuladores (Radiesse, Sculptra, Profhilo)",
    role: "Mayor frecuencia + mayor ingreso · Palanca de fidelización",
    badge: "Frecuencia alta",
    rows: [
      ["Audiencia primaria", "Mujeres 30–55 · Profesionales · NSE medio-alto"],
      ["Intereses Meta Ads", "Skincare, belleza, rejuvenecimiento facial, medicina estética, self-care"],
      ["Formato de contenido", "Carrusel 'Botox vs Bioestimulador: ¿cuál necesito?' + Reel comparativo"],
      ["Objeción principal", "'Me voy a ver artificial' → Mostrar resultados naturales reales"],
      ["Mensaje clave", "'Resultados que se notan, no que se gritan — con respaldo dermatológico'"],
      ["CTA recomendado", "→ Consulta de valoración / encuesta en Stories"],
    ],
  },
  {
    id: "aquapure", icon: "🌊", tone: "pc",
    name: "Aquapure — Limpieza e hidratación profunda",
    role: "Alta frecuencia · Entrada al portafolio · Ideal para nuevos pacientes",
    badge: "Puerta de entrada",
    rows: [
      ["Audiencia primaria", "Mujeres 22–40 · Cualquier NSE · Piel grasa, mixta, con acné"],
      ["Intereses Meta Ads", "Cuidado de la piel, skincare, rutinas belleza, acné, poros"],
      ["Formato de contenido", "Video del proceso Aquapure en consulta + resultado inmediato"],
      ["Objeción principal", "'¿Cuánto dura el resultado?' → Serie de 3 sesiones recomendadas"],
      ["Mensaje clave", "'Hidratación médica profunda — no es una limpieza de spa'"],
      ["CTA recomendado", "→ Promo primera sesión + protocolo personalizado"],
    ],
  },
  {
    id: "dermclinica", icon: "🩺", tone: "pt",
    name: "Dermatología clínica — Acné, manchas, alopecia",
    role: "Mayor volumen de consultas · Fidelización a largo plazo",
    badge: "Volumen alto",
    rows: [
      ["Audiencia primaria", "Hombres y mujeres 16–40 · Padres de jóvenes con acné · Adultos con alopecia"],
      ["Intereses Meta Ads", "Acné, caída de cabello, manchas en piel, dermatología, tratamiento médico"],
      ["Formato de contenido", "Reels educativos: '3 tipos de acné y cómo se tratan diferente' · Mitos vs verdades"],
      ["Objeción principal", "'Ya usé cremas y no sirvió' → Explicar diagnóstico médico diferencial"],
      ["Mensaje clave", "'Tu piel necesita diagnóstico, no solo productos'"],
      ["CTA recomendado", "→ Consulta dermatológica + opción virtual"],
    ],
  },
  {
    id: "indiba", icon: "💪", tone: "pg",
    name: "Indiba + Depilación láser — Paquetes corporales",
    role: "Baja demanda espontánea → Oportunidad de recurrencia con paquetes",
    badge: "Recurrencia",
    rows: [
      ["Audiencia primaria", "Mujeres 30–55 · Activas · Postparto · NSE medio-alto"],
      ["Intereses Meta Ads", "Fitness, bienestar, postparto, depilación definitiva, reafirmación corporal"],
      ["Formato de contenido", "Carrusel '¿Qué pasa con cada sesión de Indiba?' + tabla comparativa paquetes"],
      ["Objeción principal", "'Una sola sesión no vale la pena' → Promover paquetes con descuento progresivo"],
      ["Mensaje clave", "'La transformación corporal que no requiere cirugía — solo constancia'"],
      ["CTA recomendado", "→ Paquete de 4 sesiones Indiba / 8 sesiones depilación"],
    ],
  },
];

const MARKET_KPIS = [
  { label: "Procedimientos estéticos", value: "540K", note: "Realizados en Colombia 2025", badge: "+10% vs 2024" },
  { label: "Mercado global estética", value: "$100B+", note: "USD superado en 2025", badge: "→ $239B en 2033" },
  { label: "Crecimiento no invasivo", value: "+40%", note: "Últimos 5 años global (ISAPS)", badge: "CAGR 11.5%" },
  { label: "Público masculino", value: "15%", note: "De procedimientos no invasivos", badge: "Segmento emergente" },
];

const TRENDS = [
  { id: "t1", n: 1, icon: "🧬", name: "Skin Quality como nuevo estándar estético", tag: "Alineada ✓", role: "Tendencia #1 Colombia 2025–2026 · 'Estética silenciosa'",
    body: "El nuevo panorama se aleja de transformaciones radicales. Foco en regeneración biológica y calidad de la piel — textura refinada, poros minimizados, elasticidad y luminosidad natural.",
    services: ["Aquapure", "Profhilo", "Exosomas", "Skinvive", "Glow Up", "Nanopore"],
    msg: "'Tu piel no necesita cambiar — necesita recuperar su mejor versión desde adentro.' Ella ya lo hace. Solo falta decirlo." },
  { id: "t2", n: 2, icon: "💉", name: "Bioestimuladores de colágeno en auge", tag: "Alto potencial ↑", role: "Tendencia global con fuerte tracción en Colombia",
    body: "El enfoque regenerativo será protagonista. Bioestimuladores como Sculptra, Radiesse y NCTF marcan una nueva era en el rejuvenecimiento natural.",
    services: ["Radiesse", "Sculptra", "NCTF HA135", "Profhilo", "Glow Up"],
    msg: "La Dra. tiene el portafolio completo de bioestimuladores — uno de los pocos consultorios en Barranquilla con la gama completa. Comunicarlo es urgente." },
  { id: "t3", n: 3, icon: "⚡", name: "Tecnología no invasiva sustituyendo cirugía", tag: "Servicio estrella", role: "Segmento con CAGR 11.5% hasta 2032 · Ultraformer lidera",
    body: "El segmento no invasivo experimenta la tasa de crecimiento anual compuesta más rápida (11.5%) entre 2025-2032, impulsada por terapia láser, peelings químicos y ultrasonido.",
    services: ["Ultraformer MPT", "Indiba", "Fixer (RF fraccionada)", "Depilación láser"],
    msg: "Ultraformer MPT está en la cresta exacta de esta tendencia. Un solo Reel 'lifting sin cirugía Barranquilla' puede capturar búsqueda orgánica masiva." },
  { id: "t4", n: 4, icon: "🛡️", name: "Prejuvenation — medicina estética desde los 25", tag: "Segmento clave", role: "El grupo 30–45 es el más activo del mercado colombiano",
    body: "Entre 30 y 45 años está el grupo más activo del mercado, que combina tratamientos preventivos y correctivos con toxina, bioestimuladores, tecnologías y skincare de grado médico.",
    services: ["Baby Botox", "Consulta preventiva", "Skincare médico", "Protocolo despigmentante"],
    msg: "'La piel que cuidas a los 30 es la piel que tienes a los 50.' — Ideal para Valentina (28–45)." },
  { id: "t5", n: 5, icon: "🏥", name: "Profesionalización médica del sector", tag: "Diferencial regulatorio", role: "Solo dermatólogos pueden usar ciertas tecnologías en Colombia",
    body: "La regulación eleva los estándares: solo médicos con especialidad pueden usar ciertas tecnologías. La profesionalización trae segmentación y cada nicho crece y se profesionaliza.",
    services: ["Especialización médica", "Aval regulatorio", "Bioseguridad"],
    msg: "'Cualquiera puede ofrecer estética. No cualquiera puede garantizar la salud de tu piel.'" },
  { id: "t6", n: 6, icon: "💪", name: "Cuerpo: contorno y flacidez sin cirugía", tag: "Crecimiento rápido", role: "CAGR 10.9% en tratamientos corporales hasta 2032",
    body: "El segmento corporal experimenta la CAGR más rápida (10.9% hasta 2032), impulsada por reducción de grasa, contorno corporal y depilación.",
    services: ["Indiba corporal", "Fixer estrías", "Depilación láser Primelease"],
    msg: "Indiba está en la cresta pero casi no se comunica. Carmen es el target perfecto con paquetes de 4–12 sesiones." },
  { id: "t7", n: 7, icon: "👨", name: "Mercado masculino en crecimiento", tag: "Segmento nuevo", role: "15% actual → tendencia al alza en Colombia",
    body: "En 2025, armonización facial, Baby Botox y marcación mandibular están entre los más solicitados por hombres 30-50 años. Los pacientes están mucho más informados.",
    services: ["Botox/Xeomin", "Aquapure", "Depilación láser", "PRP capilar", "Consulta"],
    msg: "La Dra. ya atiende alopecia masculina. Contenido específico para hombres abre un segmento que la competencia no comunica en Barranquilla." },
  { id: "t8", n: 8, icon: "💻", name: "Paciente hiperconectado e informado", tag: "Urgente comunicar", role: "La decisión de compra ocurre en Instagram antes de la consulta",
    body: "El paciente colombiano evolucionó. Hoy las nuevas generaciones se acercan con enfoque preventivo. Preguntan por marcas, principios activos y protocolos de bioseguridad. Llegan informados.",
    services: ["Blog SEO", "Reels educativos", "Carruseles guardables"],
    msg: "Si la Dra. no aparece en 'Ultraformer Barranquilla', el paciente informado va a quien sí aparece, aunque sea menos calificado." },
];

const REVIEWS_KPIS = [
  { label: "Total reseñas rastreadas", value: "339+", note: "Google: 20 · Doctoralia: 319+" },
  { label: "Calificación Google", value: "5.0★", note: "20 reseñas verificadas", badge: "Perfecto" },
  { label: "Doctoralia", value: "319", note: "Opiniones de pacientes", badge: "Certificado excelencia" },
  { label: "Sentimiento general", value: "99%", note: "Comentarios positivos", badge: "Excepcional" },
];

const SENTIMENT_CATEGORIES = [
  { label: "Atención y trato", v: 98 },
  { label: "Resultados clínicos", v: 95 },
  { label: "Explicación / educación", v: 97 },
  { label: "Tecnología / equipos", v: 93 },
  { label: "Facilidad de agendar", v: 88 },
  { label: "Instalaciones", v: 90 },
];

const COMMENTS = [
  { cat: "Excelencia médica y explicación", user: "Sebastian G.", source: "Google · Hace 3 años", initials: "SG", stars: 5, text: "Excelente servicio, la Doctora Gina es muy profesional y definitivamente es una verdadera experiencia poner el cuidado de mi piel a cargo de una gran profesional. Recomendada.", tags: ["Profesionalismo", "Confianza", "Recomendación"] },
  { cat: "Excelencia médica y explicación", user: "Paciente anónimo", source: "Google · Verificado", initials: "PA", stars: 5, text: "La Doctora Gina es una excelente dermatóloga, muy acertada en sus procedimientos y con un trato delicado y muy amable. Me explicó claramente lo que iba haciendo mientras dejaba la piel de mi cara como nueva. Cuenta con equipos de última generación.", tags: ["Comunicación clara", "Tecnología", "Resultados", "Trato amable"] },
  { cat: "Excelencia médica y explicación", user: "Paciente Doctoralia", source: "Doctoralia · Dermatología", initials: "PD", stars: 5, text: "Me sentí muy bien en manos de la Dra. Gina, su conocimiento me dio mucha confianza al explicarme los diferentes procedimientos, y muy feliz con los resultados.", tags: ["Confianza", "Conocimiento", "Resultados"] },
  { cat: "Excelencia médica y explicación", user: "Paciente recurrente", source: "Doctoralia · Visitas sucesivas", initials: "PR", stars: 5, text: "Excelente y muy eficaz en el tratamiento, muy dedicada y asertiva. Súper recomendada.", tags: ["Eficacia", "Dedicación", "Recomendación"] },
  { cat: "Tecnología, equipos e instalaciones", user: "Octavio P.", source: "Google · Hace 3 años", initials: "OP", stars: 5, text: "Tuve la oportunidad de tratarme con la Dra. Pizarro. Es una excelente profesional, el proceso de agendar es muy sencillo, tiene los mejores equipos del mercado y además es un amor de persona. A ojos cerrados recomiendo a la Dra. Pizarro.", tags: ["Equipos top", "Agendamiento", "Trato cálido"] },
  { cat: "Tecnología, equipos e instalaciones", user: "Paciente Google", source: "Google · Verificado", initials: "PG", stars: 5, text: "Excelente dermatóloga, equipos de último nivel. Me fue súper biennn.", tags: ["Tecnología", "Satisfacción"] },
  { cat: "Tecnología, equipos e instalaciones", user: "Paciente Google", source: "Google · Verificado", initials: "RM", stars: 5, text: "Profesionalismo y limpieza en sus instalaciones. ¡Gran atención!", tags: ["Instalaciones", "Higiene", "Atención"] },
  { cat: "Experiencia y calidad humana", user: "Paciente Google", source: "Google · Verificado", initials: "TC", stars: 5, text: "El servicio es excelente, tanto la doctora como la cosmetóloga. La mejoría en la piel es muy notoria, me encanta y recomiendo este lugar.", tags: ["Equipo", "Resultados visibles", "Recomendación"] },
  { cat: "Experiencia y calidad humana", user: "Paciente Google", source: "Google · Verificado", initials: "GA", stars: 5, text: "Una experiencia muy agradable por su profesionalismo, calidad humana y excelente trato. El ambiente es muy agradable.", tags: ["Calidad humana", "Ambiente", "Profesionalismo"] },
  { cat: "Experiencia y calidad humana", user: "Paciente Doctoralia", source: "Toxina botulínica", initials: "DC", stars: 5, text: "Excelente atención como siempre, recomendada a ojos cerrados.", tags: ["Recurrente", "Botox", "Fidelización"] },
  { cat: "Demanda espontánea (oportunidad)", user: "Padre de paciente", source: "Google · Consulta espontánea", initials: "FP", stars: 0, text: "Sé que no debería preguntar pero ¿podrías darme un precio? Quiero que mires a mi hijo, está súper preocupado por su cabello, dice que se está quedando calvo pero no lo creo porque tiene 13 años. ¿Podrías darme una aproximación?", tags: ["Alopecia joven", "Padres decisores", "Consulta virtual"], opportunity: "Hay demanda no capturada de padres buscando dermatóloga para hijos adolescentes. Una Story/Reel '¿A qué edad se puede tratar la alopecia?' puede activar este segmento." },
];

const REVIEW_INSIGHTS = [
  { t: "La palabra más repetida es 'explicación'", d: "Los pacientes valoran que la Dra. les explique. Llevar esa explicación a redes = extensión natural de la consulta.", a: "→ Reels donde ella explica" },
  { t: "El equipo médico genera confianza", d: "Dra. + cosmetóloga reciben menciones positivas. Humanizarlo en redes aumenta la confianza pre-cita.", a: "→ Presentar al equipo en IG/FB" },
  { t: "Alta fidelización visible", d: "Pacientes mencionan 'como siempre'. Capital de fidelización para convertir en testimonios de años.", a: "→ Serie 'Mis pacientes de siempre'" },
  { t: "'Equipos de último nivel' espontáneo", d: "Pacientes perciben la tecnología sin nombrarla. Nombrarla (Ultraformer, Indiba, Aquapure) ancla la percepción.", a: "→ Carrusel 'Los equipos que tenemos'" },
  { t: "Cero comentarios negativos públicos", d: "Reputación digital impecable. Momento ideal para escalar volumen: pasar de 20 a 50+ reseñas Google multiplica visibilidad local.", a: "→ Campaña de solicitud post-consulta" },
];

const SOCIAL_KPIS = [
  { label: "Instagram", value: "@dra.ginapizarro", note: "Perfil profesional activo", badge: "Principal", tone: "pos" },
  { label: "Facebook", value: "552", note: "seguidores en página", badge: "Por crecer", tone: "neu" },
  { label: "Meta Business Suite", value: "Activa", note: "Tarjeta con cupo disponible", badge: "Lista para ads", tone: "pos" },
  { label: "Contenido AV", value: "Disponible", note: "Fotos, videos, antes/después", badge: "Solicitar acceso", tone: "neu" },
];

const IG_STRENGTHS = [
  "Bio con credenciales completas (UniNorte · UBA · Fellow Láser · TeleDermatología)",
  "Hashtag de marca propio: #tupieltumejoraccesorio",
  "Link activo a sitio web con CTA de WhatsApp",
  "Presencia en Doctoralia con calificación positiva",
  "Contenido audiovisual disponible para producción inmediata",
];

const FB_STRENGTHS = [
  "Página activa vinculada a Meta Business Suite",
  "Canal ideal para audiencia 35–55 años (Carmen y Marcela)",
  "Permite grupos locales de Barranquilla para alcance orgánico",
  "Integrada con Instagram para publicación simultánea",
];

const IG_OPPS = [
  { t: "Highlights desorganizados — crear: Servicios · Equipos · Antes/Después · FAQ · Equipo", s: "Impacto inmediato en conversión" },
  { t: "Sin Linktree — un solo link no distribuye: cita + tienda + servicios + blog", s: "" },
  { t: "Reels educativos sin explotar — formato de mayor alcance orgánico 2025", s: "Ultraformer e Indiba primero" },
  { t: "Bio sin keyword 'dermatóloga Barranquilla' — invisible en búsqueda orgánica", s: "" },
];

const FB_OPPS = [
  { t: "552 seguidores es bajo para el potencial. Crecer con contenido cruzado desde IG + pauta local", s: "" },
  { t: "Activar publicaciones en grupos locales de Barranquilla (mamás, bienestar)", s: "Crecimiento orgánico gratuito" },
  { t: "Facebook Ads para audiencia 40–58 (Marcela y Carmen): mayor retorno en FB que IG ese rango", s: "" },
  { t: "Campaña de reseñas: redirigir pacientes desde FB a dejar reseña en Google", s: "" },
];

const EDITORIAL = [
  { day: "Lunes",     channel: "IG + FB",      content: "Reel educativo (tecnología, condición de piel, tratamiento)" },
  { day: "Martes",    channel: "IG Stories",   content: "Encuesta / caja de preguntas / detrás de escena del consultorio" },
  { day: "Miércoles", channel: "IG + FB",      content: "Carrusel: resultado con contexto clínico (antes/después + explicación)" },
  { day: "Jueves",    channel: "FB",           content: "Post de servicio con CTA — priorizar Indiba y depilación (audiencia 35+)" },
  { day: "Viernes",   channel: "IG + FB",      content: "Marca personal: la Dra. Gina como experta — formación, filosofía, consulta" },
  { day: "Sábado",    channel: "IG Stories",   content: "Tip de skincare rápido + CTA tienda (producto recomendado de la semana)" },
];

const WEB_KPIS = [
  { label: "Plataforma",    value: "WordPress",   badge: "Activa", tone: "pos" },
  { label: "E-commerce",    value: "WooCommerce", note: "14+ marcas dermatológicas", badge: "Activo", tone: "pos" },
  { label: "Agendamiento",  value: "WhatsApp",    note: "+ formulario propio", badge: "Funcional", tone: "pos" },
  { label: "SEO técnico",   value: "Básico",      note: "Meta descripción 2024", badge: "Actualizar", tone: "neu" },
];

const WEB_PAGES = [
  ["Inicio", "Banner rotativo (4 imágenes), servicios destacados, sobre mí, testimonios Google, mapa y contacto.", "Completo"],
  ["Nosotros", "Perfil Dra. Gina + equipo médico con credenciales (UBA, Hospital Italiano, CILAD).", "Sólido"],
  ["Servicios", "Dermatología · Estética Facial · Estética Corporal — páginas individuales por patología.", "Excelente SEO"],
  ["Tecnología", "Página dedicada (Fixer activo). Ultraformer e Indiba NO tienen página propia aún.", "Brecha crítica"],
  ["Tienda", "Productos de 14+ marcas: Eucerin, ISDIN, CeraVe, ISIS Pharma, Alastin, etc.", "Diferenciador"],
  ["Blog", "Sección existente con actividad muy baja. Motor SEO orgánico desaprovechado.", "Urgente reactivar"],
  ["Contacto", "Formulario + WhatsApp directo + ubicación (Cra. 53 #82-86). Horarios visibles.", "Funcional"],
];

const WEB_STRENGTHS = [
  "Páginas individuales por patología — excelente arquitectura para SEO local long tail",
  "Tienda online con 14+ marcas dermatológicas alta gama — diferenciador único en Barranquilla",
  "Reseñas Google integradas en homepage — prueba social inmediata",
  "WhatsApp como CTA principal — canal de conversión más efectivo en Colombia",
  "Credenciales del equipo médico visibles y detalladas — genera confianza antes de consulta",
];

const WEB_IMPROVEMENTS = [
  { t: "Crear páginas dedicadas para Ultraformer MPT e Indiba — servicios de mayor ticket sin página propia", s: "SEO + conversión directa" },
  { t: "Reactivar blog con 2 artículos SEO/mes: 'Ultraformer Barranquilla', 'Dermatóloga acné adulto'", s: "Tráfico orgánico gratuito" },
  { t: "Sección antes/después con contexto clínico — el contenido que más busca el paciente", s: "" },
  { t: "FAQ por servicio (ácido hialurónico, Botox, Ultraformer) — reduce objeciones, mejora SEO", s: "" },
  { t: "Actualizar meta description (2024) y añadir 'dermatóloga estética Barranquilla'", s: "" },
];

const SEO_OPPS = [
  ["Keywords prioritarias", "'dermatóloga Barranquilla' · 'Ultraformer Barranquilla' · 'botox Barranquilla' · 'tratamiento acné Barranquilla' · 'Indiba Barranquilla'"],
  ["Long tail fácil", "'dermatóloga para acné adulto Barranquilla' · 'lifting sin cirugía Barranquilla' · 'tratamiento manchas piel Barranquilla'"],
  ["Blog sugerido", "1) 'Ultraformer MPT: qué es y por qué está en Barranquilla' · 2) 'Skincare para clima caribeño' · 3) 'Bioestimuladores vs Botox: diferencias'"],
  ["Google Business", "Incentivar 30+ reseñas — cada reseña es señal de relevancia local para Google Maps"],
];

const PLAN_KPIS = [
  { label: "Formato estrella", value: "Reels", note: "Mayor alcance orgánico 2025" },
  { label: "Frecuencia",       value: "4–5x",  note: "publicaciones/semana" },
  { label: "Pauta Meta",       value: "Activar", note: "Tarjeta disponible", badge: "Ya" },
  { label: "SEO web",          value: "Blog",  note: "2 artículos/mes mínimo" },
];

const ACTIONS_W1 = [
  "Solicitar acceso a carpeta de contenido AV al equipo — base de toda la producción",
  "Confirmar credenciales Meta Business Suite y configurar primera audiencia personalizada (mujeres 35-55, Barranquilla, intereses: medicina estética, anti-aging)",
  "Reorganizar Highlights de Instagram: Servicios · Equipos Tier 1 · Antes/Después · FAQ · Equipo",
  "Añadir 'dermatóloga Barranquilla' como keyword en bio de Instagram para búsqueda orgánica",
];

const ACTIONS_W24 = [
  "Producir y publicar 2 Reels educativos sobre Ultraformer MPT e Indiba — los de mayor ticket sin demanda espontánea",
  "Publicar primer artículo SEO en blog: 'Ultraformer MPT en Barranquilla: lo que nadie te explica'",
  "Lanzar primera campaña Meta Ads: Reel de Ultraformer o Botox → Audiencia Marcela (38-55, NSE alto)",
  "Crear páginas web para Ultraformer MPT e Indiba con keywords locales + CTA WhatsApp",
  "Instalar Linktree o Metricool en bio IG: cita + tienda + servicios + blog",
  "Activar campaña de reseñas Google: post-consulta vía WhatsApp (meta: de 20 a 35+ reseñas)",
];

const PILLARS_BY_PERSONA = [
  ["Valentina (28–45)", "Educativo-clínico IG · Antes/después facial · Mitos Botox/ácido hialurónico · Stories encuestas"],
  ["Marcela (40–58)", "Ultraformer MPT · Bioestimuladores · Tecnología Tier 1 · Publicar horario diurno (IG + FB)"],
  ["Santiago (18–32)", "Reels acné/alopecia · Mitos vs verdades · Rutinas skincare · IG educativo · TikTok futuro"],
  ["Carmen (35–55)", "FB prioritario · Indiba corporal · Paquetes depilación · Resultados progresivos · Grupos locales"],
];

window.GP = {
  CLIENT, KPIS, PRESENCE_SCORES, CRITICAL_FINDINGS, BUYER_PERSONAS, SEGMENTS,
  MARKET_KPIS, TRENDS, REVIEWS_KPIS, SENTIMENT_CATEGORIES, COMMENTS, REVIEW_INSIGHTS,
  SOCIAL_KPIS, IG_STRENGTHS, FB_STRENGTHS, IG_OPPS, FB_OPPS, EDITORIAL,
  WEB_KPIS, WEB_PAGES, WEB_STRENGTHS, WEB_IMPROVEMENTS, SEO_OPPS,
  PLAN_KPIS, ACTIONS_W1, ACTIONS_W24, PILLARS_BY_PERSONA,
};
