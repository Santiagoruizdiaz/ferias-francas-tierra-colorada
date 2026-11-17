"use strict";

/* ==========================================================================
   Base de datos verificada: 21 Ferias Activas en Posadas
   Asoc. Civil Ferias Francas de la Tierra Colorada (@feriasfrancast.c)
   ========================================================================== */
const FERIAS_DATA = [
  // Martes (1)
  {
    id: "bosetti-mar",
    dia: "Martes",
    barrio: "Paseo Bosetti",
    direccion: "Calle Bolívar (entre Buenos Aires y Rivadavia)",
    horario: "6:00 a 13:00 hs",
    tag: "Céntrica",
    tagTipo: "historica",
    mapsQuery: "Paseo Bosetti Posadas Misiones"
  },

  // Miércoles (6)
  {
    id: "santa-rita-mie",
    dia: "Miércoles",
    barrio: "Santa Rita",
    direccion: "Av. Monseñor de Andrea N° 4199 (casi Av. Chacabuco)",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av. Monseñor de Andrea 4199 Posadas Misiones"
  },
  {
    id: "itaembe-mini-mie",
    dia: "Miércoles",
    barrio: "Itaembé Miní",
    direccion: "Av. 147 y Av. 164",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av 147 y Av 164 Itaembe Mini Posadas Misiones"
  },
  {
    id: "itaembe-guazu-mie",
    dia: "Miércoles",
    barrio: "Itaembé Guazú",
    direccion: "Polideportivo (Las Calandrias y Las Azaleas)",
    horario: "6:00 a 13:00 hs",
    tag: "Nuevo",
    tagTipo: "nuevo",
    mapsQuery: "Polideportivo Itaembe Guazu Posadas Misiones"
  },
  {
    id: "consejo-educacion-mie",
    dia: "Miércoles",
    barrio: "Consejo de Educación",
    direccion: "Sede Consejo General de Educación (consultar punto en @feriasfrancast.c)",
    horario: "6:00 a 13:00 hs",
    tag: "Institucional",
    tagTipo: "nuevo",
    mapsQuery: "Consejo General de Educacion Posadas Misiones"
  },
  {
    id: "centro-convenciones-mie",
    dia: "Miércoles",
    barrio: "Centro de Convenciones",
    direccion: "Parque del Conocimiento / Centro de Convenciones",
    horario: "6:00 a 13:00 hs",
    tag: "Institucional",
    tagTipo: "nuevo",
    mapsQuery: "Centro de Convenciones Posadas Misiones"
  },
  {
    id: "jardin-ninos-mie",
    dia: "Miércoles",
    barrio: "Jardín de los Niños",
    direccion: "Zona Barrio Jardín / Jardín de los Niños",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Barrio Jardin Posadas Misiones"
  },

  // Sábado (10)
  {
    id: "villa-cabello-sab",
    dia: "Sábado",
    barrio: "Villa Cabello",
    direccion: "Calle Fermín Fierro casi Av. Eva Perón (Tinglado 'Pepe Piró')",
    horario: "6:00 a 13:00 hs",
    tag: "Desde 1998",
    tagTipo: "historica",
    mapsQuery: "Feria Franca Villa Cabello Fermin Fierro Posadas Misiones"
  },
  {
    id: "villa-urquiza-sab",
    dia: "Sábado",
    barrio: "Villa Urquiza",
    direccion: "Av. Cabred N° 2307 (esq. calle Herrera)",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av Cabred 2307 Posadas Misiones"
  },
  {
    id: "itaembe-mini-sab",
    dia: "Sábado",
    barrio: "Itaembé Miní",
    direccion: "Av. 147 y Av. 164",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av 147 y Av 164 Itaembe Mini Posadas Misiones"
  },
  {
    id: "itaembe-guazu-sab",
    dia: "Sábado",
    barrio: "Itaembé Guazú",
    direccion: "Calles Las Rosas y Las Calandrias",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Las Rosas y Las Calandrias Itaembe Guazu Posadas Misiones"
  },
  {
    id: "miguel-lanus-sab",
    dia: "Sábado",
    barrio: "Miguel Lanús",
    direccion: "Av. Presidente Perón y calle Isla San Pedro",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av Presidente Peron e Isla San Pedro Miguel Lanus Posadas Misiones"
  },
  {
    id: "los-alamos-sab",
    dia: "Sábado",
    barrio: "Los Álamos",
    direccion: "Calle 154 N° 4239",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Calle 154 4239 Los Alamos Posadas Misiones"
  },
  {
    id: "club-guarani-sab",
    dia: "Sábado",
    barrio: "Club Guaraní",
    direccion: "Calle Ramón García N° 190",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Ramon Garcia 190 Posadas Misiones"
  },
  {
    id: "a4-sab",
    dia: "Sábado",
    barrio: "Barrio A-4",
    direccion: "Av. Cocomarola y calle N° 186 (puede iniciar 7:00 hs)",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av Cocomarola y calle 186 Barrio A4 Posadas Misiones"
  },
  {
    id: "centenario-sab",
    dia: "Sábado",
    barrio: "Centenario ('Los Abuelos')",
    direccion: "Av. Centenario N° 3540 (casi Av. Tomás Guido)",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av Centenario 3540 Posadas Misiones"
  },
  {
    id: "san-isidro-sab",
    dia: "Sábado",
    barrio: "San Isidro",
    direccion: "Barrio San Isidro (consultar punto exacto en @feriasfrancast.c)",
    horario: "6:00 a 13:00 hs",
    tag: "Barrial",
    tagTipo: "nuevo",
    mapsQuery: "Barrio San Isidro Posadas Misiones"
  },

  // Domingo (4)
  {
    id: "santa-rita-dom",
    dia: "Domingo",
    barrio: "Santa Rita",
    direccion: "Av. Monseñor de Andrea N° 4199",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av Monseñor de Andrea 4199 Posadas Misiones"
  },
  {
    id: "chacra-32-33-dom",
    dia: "Domingo",
    barrio: "Chacra 32-33",
    direccion: "Av. Ramón Martirénez N° 5099 (zona Francisco de Haro y Bustamante)",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Chacra 32 33 Feria Franca Posadas Misiones"
  },
  {
    id: "club-racing-dom",
    dia: "Domingo",
    barrio: "Club Racing",
    direccion: "Calle Entre Ríos y Av. Roque Sáenz Peña",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Entre Rios y Roque Saenz Pena Posadas Misiones"
  },
  {
    id: "club-huracan-dom",
    dia: "Domingo",
    barrio: "Club Huracán",
    direccion: "Av. Santa Catalina y Av. López y Planes",
    horario: "6:00 a 13:00 hs",
    tag: "",
    tagTipo: "",
    mapsQuery: "Av Santa Catalina y Av Lopez y Planes Posadas Misiones"
  }
];

/* ==========================================================================
   Rubros de Productos (Divisiones del Índice de Precios IPFF - IPEC)
   ========================================================================== */
const PRODUCTOS_DATA = [
  {
    cat: "huerta",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 23V11"/><path d="M14 20c-5 0-8.5-3.4-8.5-8.5 4.6 0 8.5 3.3 8.5 8.5Z"/><path d="M14 16c5 0 8.5-3.4 8.5-8.5-4.6 0-8.5 3.3-8.5 8.5Z"/><path d="M10.5 7.5c1.3-2.1 3.5-3 3.5-3s2.2.9 3.5 3"/></svg>`,
    titulo: "Verduras y Hojas Verdes",
    nota: "Cortadas la tarde anterior en la quinta",
    items: "Lechuga, acelga, rúcula, repollo, morrón, tomate, zapallito, choclo, pepinos y bok choy.",
    tag: "Cosechadas en la semana"
  },
  {
    cat: "huerta",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="16" r="7.5"/><path d="M14 8.5C14 5.8 16 4 19 4c0 2.5-1.6 4.2-4.2 4.5"/><path d="M11 14.5c1-.8 2.1-1.2 3.4-1.2"/></svg>`,
    titulo: "Frutas de Estación",
    nota: "Maduradas en la planta, sin cámara",
    items: "Pomelo, limón, mandarina, naranja, mamón, banana misionera y sandía según temporada.",
    tag: "Hasta 72% más económico (IPEC)"
  },
  {
    cat: "chacra",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 10c-2.5 1.8-4.5 5-4 8.5.4 2.5 2.3 4.5 5 4.5 3.6 0 7.5-4.2 7.5-8.5 0-3.2-2-5.2-4.5-5.5-1.6-.2-2.7.2-4 1Z"/><path d="M14 9V4.5"/><path d="M14 6.5c2.2 0 3.8-1.4 3.8-3.2-1.9 0-3.8 1.2-3.8 3.2Z"/><path d="M9.5 16l2.5.6M13.5 19l2-.5"/></svg>`,
    titulo: "Mandioca y Raíces",
    nota: "Tierra colorada · sale blandita al hervor",
    items: "Mandioca fresca recién arrancada de la tierra colorada, mandioca pelada/congelada, batata y jengibre.",
    tag: "Clásico de la chacra"
  },
  {
    cat: "granja",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5.5c3.8 0 6.8 5.2 6.8 10 0 3.8-2.9 6.8-6.8 6.8S7.2 19.3 7.2 15.5c0-4.8 3-10 6.8-10Z"/><path d="M11 13.5c0-1.6.7-3.1 1.6-4.1"/></svg>`,
    titulo: "Granja, Carnes y Huevos",
    nota: "Criados en chacras familiares del interior",
    items: "Huevos de campo, carne vacuna y porcina fresca, embutidos caseros, pollos y pescados locales.",
    tag: "Producción familiar"
  },
  {
    cat: "granja",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 13.5L17.5 7c3 1.4 5 4 5 6.5v6.5h-17v-6.5Z"/><path d="M5.5 13.5h17"/><circle cx="11" cy="17" r="1"/><circle cx="16.5" cy="16.5" r="1.2"/></svg>`,
    titulo: "Lácteos y Quesos",
    nota: "Cuajada y amasado casero de colonia",
    items: "Queso criollo artesanal, ricota, crema y leche fresca de tambo familiar.",
    tag: "Elaboración propia"
  },
  {
    cat: "elaborados",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17.5c0-4.5 4-8 9-8s9 3.5 9 8c0 2-1.3 3-3.2 3H8.2C6.3 20.5 5 19.5 5 17.5Z"/><path d="M10.5 11.5l1.5 2.5M14.5 10.5l1.2 2.8M18.2 11.8l1 2.2"/></svg>`,
    titulo: "Panificación y Almidones",
    nota: "Recetas de abuelas, horno y almidón misionero",
    items: "Pan casero, roscas, tortas fritas, chipas calentitas y almidón de mandioca artesanal.",
    tag: "Recetas ancestrales"
  },
  {
    cat: "elaborados",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8.5" y="9" width="11" height="14" rx="3"/><path d="M9 9h10l-.8-3.5H9.8L9 9Z"/><path d="M8.5 14h11"/></svg>`,
    titulo: "Dulces, Miel y Envasados",
    nota: "Frascos caseros sin conservantes de fábrica",
    items: "Mermeladas y dulces regionales, miel pura de monte, pickles, encurtidos y opciones nuevas como kimchi.",
    tag: "Sin conservantes industriales"
  },
  {
    cat: "monte",
    icon: `<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 13h11c.3 5.2-2.2 9.5-5.5 9.5S8.2 18.2 8.5 13Z"/><path d="M7.5 13h13"/><path d="M16 13l3-7"/></svg>`,
    titulo: "Yerba, Yuyos y Plantas",
    nota: "Para el mate temprano o el tereré fresco",
    items: "Yerba mate artesanal, hierbas medicinales y aromáticas para mate o tereré, flores y plantas ornamentales.",
    tag: "Saberes del monte"
  }
];

const COMPARE_STATES = {
  on: {
    bullets: [
      "Verduras cosechadas esa misma semana en la chacra.",
      "21 de 25 productos relevados más baratos (IPEC Misiones).",
      "Ingreso directo para 412 familias productoras del interior."
    ],
    origen: "Cosechada esta semana en chacras de Misiones",
    origenPill: "Recién cosechado",
    precio: "Pomelo −72% · Batata −59% · Limón −56%",
    precioPill: "Precio de productor",
    destino: "100% a la familia feriante que te atiende",
    destinoPill: "A la familia colona"
  },
  off: {
    bullets: [
      "Traslados largos y semanas en cámara de frío.",
      "Márgenes sumados en cada eslabón de intermediación.",
      "Sin contacto ni vínculo con quien cultivó el alimento."
    ],
    origen: "Días o semanas entre empaque, flete y góndola",
    origenPill: "Cámara de frío",
    precio: "Remarcación por logística e intermediarios",
    precioPill: "Con recargos",
    destino: "El productor recibe apenas una fracción del precio",
    destinoPill: "Intermediarios"
  }
};

const DIAS_SEMANA = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const VALID_VIEWS = ["inicio", "ferias", "mesa", "historia", "comunidad"];

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function obtenerInfoDiaActual() {
  const ahora = new Date();
  const idx = ahora.getDay();
  const nombreHoy = DIAS_SEMANA[idx];
  const hora = ahora.getHours();
  const feriasHoy = FERIAS_DATA.filter((f) => f.dia === nombreHoy);

  if (feriasHoy.length > 0) {
    return {
      esDiaDeFeria: true,
      diaObjetivo: nombreHoy,
      nombreHoy,
      abiertaAhora: hora >= 6 && hora < 13,
      ferias: feriasHoy
    };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const sigNombre = DIAS_SEMANA[(idx + offset) % 7];
    const sigFerias = FERIAS_DATA.filter((f) => f.dia === sigNombre);
    if (sigFerias.length > 0) {
      return {
        esDiaDeFeria: false,
        diaObjetivo: sigNombre,
        nombreHoy,
        abiertaAhora: false,
        offset,
        ferias: sigFerias
      };
    }
  }

  return {
    esDiaDeFeria: false,
    diaObjetivo: "Sábado",
    nombreHoy,
    abiertaAhora: false,
    offset: 1,
    ferias: FERIAS_DATA.filter((f) => f.dia === "Sábado")
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const estadoHoy = obtenerInfoDiaActual();

  // ------------------------------------------------------------------------
  // 1. Animación por letra del titular en Inicio (sin cortar palabras)
  // ------------------------------------------------------------------------
  const heroChars = document.getElementById("hero-chars");
  if (heroChars) {
    const words = heroChars.textContent.trim().split(/\s+/);
    let charIndex = 0;
    heroChars.innerHTML = words
      .map((w) => {
        const chars = [...w]
          .map((ch) => `<span class="char" style="--i:${charIndex++}">${ch}</span>`)
          .join("");
        return `<span class="word-group">${chars}</span>`;
      })
      .join(" ");
  }

  // Parallax suave sobre las tarjetas del escenario en Inicio
  const stageRoom = document.getElementById("stage-room");
  const stageParallax = document.getElementById("stage-parallax");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (stageRoom && stageParallax && !prefersReduced) {
    const layers = stageParallax.querySelectorAll("[data-depth]");
    stageRoom.addEventListener("mousemove", (e) => {
      const rect = stageRoom.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      layers.forEach((el) => {
        const d = parseFloat(el.dataset.depth || "1");
        const tx = (nx * 16 * d).toFixed(1);
        const ty = (ny * 12 * d).toFixed(1);
        const rot = el.classList.contains("stage-card-main")
          ? "-2deg"
          : el.classList.contains("stage-card-side")
          ? "4.5deg"
          : el.classList.contains("stage-card-stamp")
          ? "-4.5deg"
          : "0deg";
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot})`;
      });
    });

    stageRoom.addEventListener("mouseleave", () => {
      layers.forEach((el) => {
        el.style.transform = "";
      });
    });
  }

  function checkManifestoVisible() {
    const manifestoEl = document.getElementById("scene-manifesto");
    if (!manifestoEl || manifestoEl.classList.contains("is-visible")) return true;
    const rect = manifestoEl.getBoundingClientRect();
    if (rect.width > 0 && rect.top < window.innerHeight * 0.95) {
      manifestoEl.classList.add("is-visible");
      return true;
    }
    return false;
  }

  // IntersectionObserver para el manifiesto cinético (palabras + tachado SVG)
  const sceneManifesto = document.getElementById("scene-manifesto");
  if (sceneManifesto) {
    if ("IntersectionObserver" in window && !prefersReduced) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              sceneManifesto.classList.add("is-visible");
              obs.unobserve(sceneManifesto);
            }
          });
        },
        { threshold: 0.05 }
      );
      obs.observe(sceneManifesto);
      const onScrollManifesto = () => {
        if (checkManifestoVisible()) {
          window.removeEventListener("scroll", onScrollManifesto);
          obs.unobserve(sceneManifesto);
        }
      };
      window.addEventListener("scroll", onScrollManifesto, { passive: true });
      setTimeout(checkManifestoVisible, 200);
    } else {
      sceneManifesto.classList.add("is-visible");
    }
  }

  // ------------------------------------------------------------------------
  // 2. Comparador Interactivo ON / OFF en Inicio
  // ------------------------------------------------------------------------
  const sceneSwitch = document.getElementById("scene-switch");
  const switchBullets = document.getElementById("switch-bullets");
  const cmpOrigen = document.getElementById("cmp-origen");
  const cmpOrigenPill = document.getElementById("cmp-origen-pill");
  const cmpPrecio = document.getElementById("cmp-precio");
  const cmpPrecioPill = document.getElementById("cmp-precio-pill");
  const cmpDestino = document.getElementById("cmp-destino");
  const cmpDestinoPill = document.getElementById("cmp-destino-pill");

  document.querySelectorAll(".mode-toggle__opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      const data = COMPARE_STATES[mode];
      if (!data || !sceneSwitch) return;
      sceneSwitch.dataset.feria = mode;
      switchBullets.innerHTML = data.bullets.map((b) => `<li>${b}</li>`).join("");
      cmpOrigen.textContent = data.origen;
      cmpOrigenPill.textContent = data.origenPill;
      cmpPrecio.textContent = data.precio;
      cmpPrecioPill.textContent = data.precioPill;
      cmpDestino.textContent = data.destino;
      cmpDestinoPill.textContent = data.destinoPill;
    });
  });

  // ------------------------------------------------------------------------
  // 3. Sistema de Pestañas (Tab Router) + Cajón "índice ="
  // ------------------------------------------------------------------------
  const tabViews = document.querySelectorAll(".tab-view");
  const hudTabs = document.querySelectorAll(".hud-tab");
  const indexCards = document.querySelectorAll(".index-card");
  const indexToggle = document.getElementById("index-toggle");
  const indexDrawer = document.getElementById("index-drawer");

  function toggleIndexDrawer(forceOpen) {
    const isOpen = typeof forceOpen === "boolean" ? forceOpen : !document.body.classList.contains("index-open");
    document.body.classList.toggle("index-open", isOpen);
    indexToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    indexDrawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  indexToggle.addEventListener("click", () => toggleIndexDrawer());

  function switchView(viewName, updateHash = true) {
    const target = VALID_VIEWS.includes(viewName) ? viewName : "inicio";

    tabViews.forEach((sec) => {
      const active = sec.dataset.view === target;
      sec.classList.toggle("is-active", active);
    });

    hudTabs.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.goto === target);
    });

    indexCards.forEach((card) => {
      card.classList.toggle("is-current", card.dataset.goto === target);
    });

    toggleIndexDrawer(false);

    if (updateHash) {
      history.replaceState(null, "", target === "inicio" ? "#inicio" : `#${target}`);
    }

    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });

    if (target === "inicio") {
      requestAnimationFrame(checkManifestoVisible);
      setTimeout(checkManifestoVisible, 200);
    }
  }

  document.querySelectorAll("[data-goto]").forEach((el) => {
    el.addEventListener("click", () => {
      switchView(el.dataset.goto, true);
    });
  });

  // Abrir pestaña según hash inicial si existe
  const initialHash = window.location.hash.replace("#", "").trim();
  if (VALID_VIEWS.includes(initialHash)) {
    switchView(initialHash, false);
  }

  // ------------------------------------------------------------------------
  // 4. Estado en vivo del día + Gramática corregida (espera / esperan)
  // ------------------------------------------------------------------------
  const hudStatusDot = document.getElementById("hud-status-dot");
  const hudStatusLabel = document.getElementById("hud-status-label");
  const stageLiveFooter = document.getElementById("stage-live-footer");
  const todayTitle = document.getElementById("today-title");
  const todaySubtitle = document.getElementById("today-subtitle");
  const countHoy = document.getElementById("count-hoy");
  const btnFilterToday = document.getElementById("btn-filter-today");

  const cant = estadoHoy.ferias.length;
  const wordFeria = cant === 1 ? "feria" : "ferias";
  const verbEsperar = cant === 1 ? "te espera" : "te esperan";

  countHoy.textContent = String(cant);

  if (estadoHoy.esDiaDeFeria) {
    hudStatusDot.classList.remove("is-rest");
    hudStatusLabel.textContent = `Hoy ${estadoHoy.nombreHoy}: ${cant} ${wordFeria} (6 a 13 hs)`;
    stageLiveFooter.textContent = `@feriasfrancast.c · Hoy ${estadoHoy.nombreHoy} abren ${cant} ${wordFeria} de 6 a 13 hs`;

    todayTitle.textContent = `Hoy ${estadoHoy.nombreHoy} ${cant === 1 ? "abre 1 feria" : `abren ${cant} ferias`}`;
    todaySubtitle.textContent = `${estadoHoy.ferias.map((f) => f.barrio).join(" · ")} (de 6:00 a 13:00 hs).`;
    btnFilterToday.textContent = `Mostrar solo las de hoy (${cant})`;
  } else {
    hudStatusDot.classList.add("is-rest");
    const cuando = estadoHoy.offset === 1 ? `mañana ${estadoHoy.diaObjetivo}` : `este ${estadoHoy.diaObjetivo}`;
    const cuandoCap = cuando.charAt(0).toUpperCase() + cuando.slice(1);
    hudStatusLabel.textContent = `Próxima feria: ${estadoHoy.diaObjetivo} (${cant} ${wordFeria})`;
    stageLiveFooter.textContent = `@feriasfrancast.c · Hoy ${estadoHoy.nombreHoy} descansamos · Próxima feria: ${estadoHoy.diaObjetivo} (${cant} ${wordFeria})`;

    todayTitle.textContent = `Hoy ${estadoHoy.nombreHoy} no hay feria · Próxima: ${estadoHoy.diaObjetivo}`;
    todaySubtitle.textContent = `${cuandoCap} ${verbEsperar} ${cant} ${wordFeria}: ${estadoHoy.ferias.map((f) => f.barrio).join(" · ")}.`;
    btnFilterToday.textContent = `Ver ${wordFeria} del ${estadoHoy.diaObjetivo} (${cant})`;
  }

  // ------------------------------------------------------------------------
  // 5. Render y filtros de las 21 Ferias
  // ------------------------------------------------------------------------
  let filtroDia = "todas";
  let textoBusqueda = "";

  const feriasGrid = document.getElementById("ferias-grid");
  const dayTabs = document.querySelectorAll(".day-tab");
  const searchInput = document.getElementById("ferias-search");

  function renderFerias() {
    const query = normalizarTexto(textoBusqueda.trim());
    const diaRealFiltro = filtroDia === "hoy" ? estadoHoy.diaObjetivo : filtroDia;

    const filtradas = FERIAS_DATA.filter((f) => {
      const coincideDia = diaRealFiltro === "todas" || f.dia === diaRealFiltro;
      if (!coincideDia) return false;
      if (!query) return true;
      return normalizarTexto(`${f.barrio} ${f.direccion} ${f.dia} ${f.tag}`).includes(query);
    });

    if (filtradas.length === 0) {
      feriasGrid.innerHTML = `
        <div class="ferias-empty">
          No encontramos ferias con “${textoBusqueda}” para ese filtro. Probá buscando otro barrio o seleccionando “Todas”.
        </div>`;
      return;
    }

    feriasGrid.innerHTML = filtradas
      .map((f) => {
        let badgeHtml = "";
        if (f.tag) {
          const clase = f.tagTipo === "historica" ? "badge-tag--marron" : "badge-tag--verde";
          badgeHtml = `<span class="badge-tag ${clase}">${f.tag}</span>`;
        }
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.mapsQuery)}`;
        return `
          <article class="feria-card">
            <div>
              <div class="feria-card__top">
                <span class="feria-card__day">${f.dia}</span>
                ${badgeHtml}
              </div>
              <h3 class="feria-card__title">${f.barrio}</h3>
              <p class="feria-card__address">${f.direccion}</p>
            </div>
            <div class="feria-card__meta">
              <span class="feria-card__hours">
                <svg class="inline-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>
                ${f.horario}
              </span>
              <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="feria-card__map">
                Ver en mapa ↗
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function activarTabDia(dia) {
    filtroDia = dia;
    dayTabs.forEach((btn) => {
      const active = btn.dataset.day === dia;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    renderFerias();
  }

  dayTabs.forEach((btn) => {
    btn.addEventListener("click", () => activarTabDia(btn.dataset.day));
  });

  btnFilterToday.addEventListener("click", () => activarTabDia("hoy"));

  searchInput.addEventListener("input", (e) => {
    textoBusqueda = e.target.value;
    renderFerias();
  });

  renderFerias();

  // ------------------------------------------------------------------------
  // 6. Render y filtros de Productos (Pestaña La Mesa e IPEC)
  // ------------------------------------------------------------------------
  const productosGrid = document.getElementById("productos-grid");
  const catPills = document.querySelectorAll(".cat-pill");
  let catActiva = "todos";

  function renderProductos() {
    const lista = PRODUCTOS_DATA.filter((p) => catActiva === "todos" || p.cat === catActiva);
    productosGrid.innerHTML = lista
      .map(
        (p) => `
        <article class="prod-card">
          <div>
            <div class="prod-card__icon" aria-hidden="true">${p.icon}</div>
            <h3 class="prod-card__title">${p.titulo}</h3>
            <p class="prod-card__note">${p.nota}</p>
            <p class="prod-card__list">${p.items}</p>
          </div>
          <span class="prod-card__tag">${p.tag}</span>
        </article>
      `
      )
      .join("");
  }

  catPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      catActiva = pill.dataset.cat;
      catPills.forEach((btn) => btn.classList.toggle("is-active", btn === pill));
      renderProductos();
    });
  });

  renderProductos();

  // ------------------------------------------------------------------------
  // 7. Formulario interactivo con pestañas (Pestaña Comunidad)
  // ------------------------------------------------------------------------
  const formTabs = document.querySelectorAll(".form-tab");
  const labelZona = document.getElementById("label-zona");
  const inputZona = document.getElementById("f-zona");
  const labelDetalle = document.getElementById("label-detalle");
  const inputDetalle = document.getElementById("f-detalle");
  const contactForm = document.getElementById("contact-form");
  const formResult = document.getElementById("form-result");
  const formPreview = document.getElementById("form-preview");
  const btnCopyMsg = document.getElementById("btn-copy-msg");

  const TAB_CONFIG = {
    vecino: {
      titulo: "Consulta de vecino / consumidor",
      labelZona: "Tu barrio o feria de interés",
      placeholderZona: "Ej. Villa Cabello / Itaembé Guazú",
      labelDetalle: "¿Qué querés consultar?",
      placeholderDetalle: "Ej. Quisiera confirmar horario de este sábado y disponibilidad de quesos o mandioca..."
    },
    feriante: {
      titulo: "Solicitud de productor / nuevo socio",
      labelZona: "Localidad / Colonia de tu chacra",
      placeholderZona: "Ej. Gobernador Roca / Cerro Azul / Los Helechos",
      labelDetalle: "¿Qué producís y en qué ferias te gustaría participar?",
      placeholderDetalle: "Ej. Producimos hortalizas de hoja, huevos de campo y panificados..."
    },
    evento: {
      titulo: "Invitación a cumbre, escuela o evento",
      labelZona: "Institución / Barrio / Localidad",
      placeholderZona: "Ej. Escuela / Fiesta Provincial / Evento barrial en Posadas",
      labelDetalle: "Fecha estimada y detalles de la invitación",
      placeholderDetalle: "Ej. Queremos invitar a Ferias Francas de la Tierra Colorada con puestos para el día..."
    }
  };

  let tabActual = "vecino";

  formTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabActual = tab.dataset.tab;
      formTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      const cfg = TAB_CONFIG[tabActual];
      labelZona.textContent = cfg.labelZona;
      inputZona.placeholder = cfg.placeholderZona;
      labelDetalle.textContent = cfg.labelDetalle;
      inputDetalle.placeholder = cfg.placeholderDetalle;
    });
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("f-nombre").value.trim();
    const zona = inputZona.value.trim();
    const detalle = inputDetalle.value.trim();
    const cfg = TAB_CONFIG[tabActual];

    const mensaje = [
      `Hola Ferias Francas de la Tierra Colorada (@feriasfrancast.c),`,
      `Motivo: ${cfg.titulo}`,
      `Nombre: ${nombre}`,
      `Ubicación: ${zona}`,
      `Consulta: ${detalle}`
    ].join("\n");

    formPreview.textContent = mensaje;
    formResult.classList.add("is-visible");
    btnCopyMsg.textContent = "Copiar mensaje";
  });

  btnCopyMsg.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(formPreview.textContent);
      btnCopyMsg.textContent = "¡Copiado!";
      setTimeout(() => {
        btnCopyMsg.textContent = "Copiar mensaje";
      }, 2200);
    } catch {
      btnCopyMsg.textContent = "Seleccioná y copiá el texto";
    }
  });

  // ------------------------------------------------------------------------
  // 8. Modal de Propuesta Web Oficial y Vista Limpia
  // ------------------------------------------------------------------------
  const pitchModal = document.getElementById("pitch-modal");
  const openPitchTop = document.getElementById("open-pitch-top");
  const openPitchFooter = document.getElementById("open-pitch-footer");
  const closePitchModal = document.getElementById("close-pitch-modal");
  const closePitchConfirm = document.getElementById("close-pitch-confirm");
  const toggleCleanPreview = document.getElementById("toggle-clean-preview");

  function abrirModal() {
    pitchModal.classList.add("is-open");
  }

  function cerrarModal() {
    pitchModal.classList.remove("is-open");
  }

  if (openPitchTop) openPitchTop.addEventListener("click", abrirModal);
  if (openPitchFooter) openPitchFooter.addEventListener("click", abrirModal);
  closePitchModal.addEventListener("click", cerrarModal);
  closePitchConfirm.addEventListener("click", cerrarModal);

  pitchModal.addEventListener("click", (e) => {
    if (e.target === pitchModal) cerrarModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (pitchModal.classList.contains("is-open")) cerrarModal();
      if (document.body.classList.contains("index-open")) toggleIndexDrawer(false);
    }
  });

  toggleCleanPreview.addEventListener("click", () => {
    document.body.classList.add("demo-oculta");
    cerrarModal();
  });
});
