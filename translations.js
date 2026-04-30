// ============================================
//  translations.js
//  All site text in English and Danish
// ============================================

const translations = {
  en: {
    // --- NAV ---
    nav_logo:      "Vytautas Tamulevicius",
    nav_home:      "Home",
    nav_services:  "Services",
    nav_about:     "About",
    nav_contact:   "Contact",
    nav_cta:       "Get in touch",

    // --- FOOTER ---
    footer_copy:   "© 2026 Vytautas Tamulevicius - Independent consultant",
    footer_li:     "LinkedIn",
    footer_email:  "Email",

    // ==================
    //  INDEX
    // ==================
    hero_label:    "Independent Consultant",
    hero_h1:       "Senior Architect, DevSecOps and Quality Engineering",
    hero_sub:      "I help engineering teams and leadership build secure, reliable and observable systems. From DevSecOps platform design to quality engineering strategy, I bring both the technical depth and the organisational experience to make it stick across teams and stakeholders.",
    hero_cta:      "Get in touch",

    services_label: "What I do",
    services_h2:    "Services",
    s1_title:       "Architecture Leadership",
    s1_desc:        "Solution architecture, system design, and technical direction for complex, integration-heavy environments.",
    s2_title:       "Enterprise &amp; Strategic Architecture",
    s2_desc:        "Aligning technology decisions with business goals — modernisation guidance, stakeholder collaboration, architecture decisions that hold.",
    s3_title:       "Quality, DevSecOps &amp; Observability",
    s3_desc:        "Test strategy, release confidence, monitoring, and secure development practices — helping teams ship without surprises.",
    services_link:  "See full service details",

    bringin_label:  "Is this a fit?",
    bringin_h2:     "When to bring me in",
    bringin_1:      "You're facing a significant architecture decision and need a senior perspective before committing",
    bringin_2:      "Your systems are growing and becoming increasingly hard to maintain, extend, or reason about",
    bringin_3:      "You're modernising legacy infrastructure and need a clear, realistic path forward",
    bringin_4:      "You need senior technical leadership — without a full-time hire or a large consulting firm",
    bringin_5:      "Quality, reliability, or observability has become a recurring problem, and quick fixes haven't held",
    bringin_6:      "You have capable engineers but lack someone to set direction, make trade-off calls, and keep the big picture in view",

    test_label:     "What others say",
    test_h2:        "Testimonials",
    t1_quote:       "Vytautas brought clarity to a system design we had been going back and forth on for months. He asked the right questions, laid out the trade-offs honestly, and gave us a path we could actually execute.",
    t1_cite:        "Engineering Manager, EPOS",
    t2_quote:       "What I appreciated most was the absence of hype. He looked at our situation as it actually was and gave us a realistic assessment — including the things we didn't want to hear.",
    t2_cite:        "CTO, Nordic Fintech Startup",
    t3_quote:       "Strong technical depth combined with the ability to communicate clearly with non-technical stakeholders. That combination is rare and genuinely valuable.",
    t3_cite:        "VP Engineering, Insurance Platform",

    about_label:    "About me",
    about_h2:       "A bit of background",
    about_p1:       "I'm a Senior Architect with a background in DevSecOps, quality engineering and platform enablement, built across enterprise environments in insurance, industrial IoT and large-scale integrations. I co-founded a DevSecOps function, built a Center of Excellence from scratch, and designed both the strategy and tooling that engineering teams actually use in production.",
    about_p2:       "I work independently because it lets me focus entirely on the problem at hand. The person you speak with is the person doing the work.",
    about_link:     "Read more about me",

    cta_label:      "Let's talk",
    cta_h2:         "Have a challenge worth solving?",
    cta_p:          "I'm happy to have an initial conversation — no commitment, no sales pitch. If there's a fit, we'll know quickly.",
    cta_btn:        "Get in touch",

    // ==================
    //  SERVICES PAGE
    // ==================
    sp_label:       "What I offer",
    sp_h1:          "Services",
    sp_intro:       "I work across three areas — architecture, strategy, and quality. Most engagements touch more than one. The goal is always the same: clear thinking, sound decisions, and outcomes that hold up over time.",

    sp_s1_h2:       "Architecture Leadership",
    sp_s1_p:        "Good architecture doesn't come from frameworks or templates — it comes from understanding the system, the team, and the constraints in front of you. I work alongside engineering teams to provide direction that's technically sound and practically executable.",
    sp_s1_l1:       "Solution architecture and system design for complex, distributed systems",
    sp_s1_l2:       "Integration-heavy environments — APIs, event-driven systems, legacy connectivity",
    sp_s1_l3:       "Technical direction and architecture decision records (ADRs)",
    sp_s1_l4:       "Design reviews and architecture assessments",
    sp_s1_l5:       "Helping teams move from ad hoc decisions to a coherent technical direction",

    sp_s2_h2:       "Enterprise &amp; Strategic Architecture",
    sp_s2_p:        "The gap between business intent and technical execution is where most problems live. I help bridge it — working with both technical teams and non-technical stakeholders to ensure that architecture decisions are grounded in what the business actually needs.",
    sp_s2_l1:       "Aligning technology decisions with business goals and constraints",
    sp_s2_l2:       "Modernisation guidance — realistic roadmaps, not wishful thinking",
    sp_s2_l3:       "Stakeholder collaboration and architecture communication",
    sp_s2_l4:       "Architecture governance without unnecessary bureaucracy",
    sp_s2_l5:       "Supporting organisations through significant technology transitions",

    sp_s3_h2:       "Quality, DevSecOps &amp; Observability",
    sp_s3_p:        "This is where most of my recent enterprise work has lived. I've built DevSecOps platforms, co-founded quality engineering functions, and helped organisations move from fragile releases to systematic, observable delivery at scale, across multiple teams.",
    sp_s3_l1:       "DevSecOps platform design and implementation — strategy, tooling, and team enablement",
    sp_s3_l2:       "Center of Excellence setup: standards, workflows, and capability building across engineering teams",
    sp_s3_l3:       "Test strategy and quality engineering focused on real release risk, not just coverage",
    sp_s3_l4:       "Release pipeline design and deployment confidence",
    sp_s3_l5:       "Monitoring, alerting, and observability using Dynatrace, Grafana, and related tooling",
    sp_s3_l6:       "Secure development practices embedded in the workflow from the start",
    sp_s3_l7:       "Security tooling rollout and developer adoption at enterprise scale",

    ai_label:       "A note on AI",
    ai_p:           "I follow AI regulation developments closely and have hands-on experience integrating AI APIs into product systems. I treat AI as a practical capability to be assessed carefully in context — not a headline feature or a default answer. If it genuinely solves a real problem in your situation, I can help evaluate the options and integrate them thoughtfully. I don't position AI as a core expertise, but I won't pretend it doesn't exist either.",

    hiw_label:      "How I work",
    hiw_h2:         "Engagement style",
    hiw_p:          "I work both as a focused advisor on specific, well-defined problems and as an embedded technical lead for longer engagements — depending on what the team actually needs. Some situations call for a sharp, time-limited review and a clear set of recommendations. Others need sustained presence: someone in the room for the hard calls, week after week. I'm comfortable with both and happy to discuss what makes sense for your situation.",
    hiw_btn:        "Discuss your situation",

    // ==================
    //  ABOUT PAGE
    // ==================
    ab_label:       "Background",
    ab_h1:          "About me",
    ab_p1:          "I'm a Senior Architect with over a decade of experience working on systems where the stakes are real. Insurance platforms, industrial IoT, large-scale enterprise integrations. The kind of environments where a poor architecture decision doesn't just slow you down; it costs you years.",
    ab_p2:          "My most recent work has been in DevSecOps and quality engineering. I co-founded a DevSecOps function at a major Nordic insurer, built a Center of Excellence that set standards and ways of working across multiple engineering teams, and designed the security tooling platform used across the organisation.",
    ab_p3:          "Before that, I led a small engineering team at EPOS, where I designed and physically built an IoT test lab to simulate real-world hardware interactions. It didn't exist before. We built it from scratch, both technically and organisationally. That's a fairly good example of how I work: I don't wait for perfect conditions. I figure out what's needed and build it.",
    ab_p4:          "My background sits at the intersection of technical depth and delivery. I've worked closely with both engineering teams and senior stakeholders, translating architecture decisions into language that works in a boardroom, and translating business constraints into approaches that engineers can actually build. I understand both sides of that conversation and have spent a long time getting better at bridging them.",
    ab_p5:          "I work independently because it means the person you speak with is the person doing the work. No handoff after the proposal. No junior team in the background.",
    ab_p6:          "I take on both focused engagements and longer embedded roles, depending on what the situation actually calls for. What draws me to a piece of work is whether it has genuine impact. Problems that matter to the people working on them, and outcomes that hold up over time.",
    ab_p7:          "If any of that sounds like what you're looking for, I'm happy to have a conversation.",
    ab_btn:         "Get in touch",

    // ==================
    //  CONTACT PAGE
    // ==================
    ct_label:       "Let's talk",
    ct_h1:          "Get in touch",
    ct_intro:       "I'm happy to have an initial conversation about your situation — no commitment, no sales pitch. Describe what you're dealing with and I'll respond directly.",
    ct_name_label:  "Name",
    ct_name_ph:     "Your name",
    ct_email_label: "Email",
    ct_email_ph:    "your@email.com",
    ct_msg_label:   "Message",
    ct_msg_ph:      "Tell me a bit about your situation — what are you working on, and where do you need support?",
    ct_submit:      "Send message",
    ct_note:        "I typically respond within one business day.",
    ct_success:     "Thank you — your message has been sent. I'll be in touch shortly.",
    ct_alt_h3:      "Prefer direct contact?",
    ct_li_link:     "LinkedIn",
  },

  dk: {
    // --- NAV ---
    nav_logo:      "Vytautas Tamulevicius",
    nav_home:      "Forside",
    nav_services:  "Ydelser",
    nav_about:     "Om mig",
    nav_contact:   "Kontakt",
    nav_cta:       "Kontakt mig",

    // --- FOOTER ---
    footer_copy:   "© 2026 Vytautas Tamulevicius - Uafhængig konsulent",
    footer_li:     "LinkedIn",
    footer_email:  "E-mail",

    // ==================
    //  INDEX
    // ==================
    hero_label:    "Uafhængig konsulent",
    hero_h1:       "Senior Arkitekt, DevSecOps og Quality Engineering",
    hero_sub:      "Jeg hjælper engineering-teams og ledelse med at opbygge sikre, pålidelige og observerbare systemer. Fra DevSecOps-platformdesign til quality engineering-strategi bringer jeg både den tekniske dybde og den organisatoriske erfaring til at forankre det på tværs af teams og interessenter.",
    hero_cta:      "Kontakt mig",

    services_label: "Hvad jeg laver",
    services_h2:    "Ydelser",
    s1_title:       "Arkitekturledelse",
    s1_desc:        "Solution architecture, systemdesign og teknisk retning til komplekse, integrationsintensive miljøer.",
    s2_title:       "Enterprise &amp; Strategisk Arkitektur",
    s2_desc:        "Tilpasning af teknologibeslutninger til forretningsmål — moderniseringsvejledning, interessentsamarbejde og arkitekturbeslutninger, der holder.",
    s3_title:       "Kvalitet, DevSecOps &amp; Observability",
    s3_desc:        "Teststrategi, release-tryghed, monitorering og sikre udviklingsmetoder — hjælper teams med at levere uden overraskelser.",
    services_link:  "Se alle ydelser",

    bringin_label:  "Passer dette til dig?",
    bringin_h2:     "Hvornår giver det mening at kontakte mig",
    bringin_1:      "Du står over for en vigtig arkitekturbeslutning og har brug for en senior vinkel, inden du forpligter dig",
    bringin_2:      "Dine systemer vokser og bliver stadig sværere at vedligeholde, udvide eller overskue",
    bringin_3:      "Du moderniserer ældre infrastruktur og har brug for en klar, realistisk vej fremad",
    bringin_4:      "Du har brug for senior teknisk ledelse — uden en fuldtidsansættelse eller et stort konsulenthus",
    bringin_5:      "Kvalitet, driftssikkerhed eller observability er et tilbagevendende problem, og hurtige løsninger har ikke holdt",
    bringin_6:      "Du har dygtige udviklere, men mangler nogen til at sætte retningen, træffe de svære valg og bevare overblikket",

    test_label:     "Hvad andre siger",
    test_h2:        "Referencer",
    t1_quote:       "Vytautas skabte klarhed over et systemdesign, vi havde diskuteret frem og tilbage i måneder. Han stillede de rigtige spørgsmål, lagde afvejningerne ærligt frem og gav os en vej, vi faktisk kunne eksekvere.",
    t1_cite:        "Engineering Manager, EPOS",
    t2_quote:       "Det jeg satte mest pris på, var fraværet af hype. Han så på vores situation, som den faktisk var, og gav os en realistisk vurdering — inklusiv det, vi ikke havde lyst til at høre.",
    t2_cite:        "CTO, Nordisk fintech-startup",
    t3_quote:       "Stor teknisk dybde kombineret med evnen til at kommunikere klart med ikke-tekniske interessenter. Den kombination er sjælden og reel værdifuld.",
    t3_cite:        "VP Engineering, Forsikringsplatform",

    about_label:    "Om mig",
    about_h2:       "Lidt baggrund",
    about_p1:       "Jeg er Senior Arkitekt med baggrund i DevSecOps, quality engineering og platform enablement, opbygget på tværs af enterprise-miljøer inden for forsikring, industrielt IoT og store integrationer. Jeg medstiftede en DevSecOps-funktion, opbyggede et Center of Excellence fra bunden og designede både strategi og værktøjer, som engineering-teams faktisk bruger i produktion.",
    about_p2:       "Jeg arbejder uafhængigt, fordi det giver mig mulighed for at fokusere fuldt ud på det aktuelle problem. Den person, du taler med, er den person, der udfører arbejdet.",
    about_link:     "Læs mere om mig",

    cta_label:      "Lad os tale",
    cta_h2:         "Har du en udfordring, der er værd at løse?",
    cta_p:          "Jeg tager gerne en indledende samtale — ingen forpligtelse, ingen salgstale. Hvis der er et match, finder vi hurtigt ud af det.",
    cta_btn:        "Kontakt mig",

    // ==================
    //  SERVICES PAGE
    // ==================
    sp_label:       "Hvad jeg tilbyder",
    sp_h1:          "Ydelser",
    sp_intro:       "Jeg arbejder inden for tre områder — arkitektur, strategi og kvalitet. De fleste opgaver berører mere end ét. Målet er altid det samme: klar tænkning, solide beslutninger og resultater, der holder over tid.",

    sp_s1_h2:       "Arkitekturledelse",
    sp_s1_p:        "God arkitektur kommer ikke fra frameworks eller skabeloner — den kommer fra en forståelse af systemet, teamet og de begrænsninger, du står over for. Jeg arbejder tæt med engineering-teams om at give en retning, der er teknisk solid og praktisk gennemførlig.",
    sp_s1_l1:       "Solution architecture og systemdesign til komplekse, distribuerede systemer",
    sp_s1_l2:       "Integrationsintensive miljøer — API'er, event-drevne systemer, legacy-forbindelser",
    sp_s1_l3:       "Teknisk retning og Architecture Decision Records (ADR'er)",
    sp_s1_l4:       "Design reviews og arkitekturvurderinger",
    sp_s1_l5:       "Hjælper teams med at gå fra ad hoc-beslutninger til en sammenhængende teknisk retning",

    sp_s2_h2:       "Enterprise &amp; Strategisk Arkitektur",
    sp_s2_p:        "Kløften mellem forretningsmæssige intentioner og teknisk eksekvering er der, de fleste problemer opstår. Jeg hjælper med at bygge bro — ved at arbejde med både tekniske teams og ikke-tekniske interessenter for at sikre, at arkitekturbeslutninger er forankret i det, virksomheden faktisk har brug for.",
    sp_s2_l1:       "Tilpasning af teknologibeslutninger til forretningsmål og begrænsninger",
    sp_s2_l2:       "Moderniseringsvejledning — realistiske roadmaps, ikke ønsketænkning",
    sp_s2_l3:       "Interessentsamarbejde og arkitekturkommunikation",
    sp_s2_l4:       "Arkitekturstyring uden unødvendig bureaukrati",
    sp_s2_l5:       "Støtte til organisationer gennem større teknologiskift",

    sp_s3_h2:       "Kvalitet, DevSecOps &amp; Observability",
    sp_s3_p:        "Her har størstedelen af mit seneste enterprise-arbejde fundet sted. Jeg har bygget DevSecOps-platforme, medstiftet quality engineering-funktioner og hjulpet organisationer med at gå fra skrøbelige releases til systematisk, observerbar levering i stor skala på tværs af flere teams.",
    sp_s3_l1:       "Design og implementering af DevSecOps-platforme — strategi, værktøjer og team enablement",
    sp_s3_l2:       "Opbygning af Center of Excellence: standarder, arbejdsgange og kompetenceopbygning på tværs af engineering-teams",
    sp_s3_l3:       "Teststrategi og quality engineering med fokus på reel release-risiko, ikke bare dækning",
    sp_s3_l4:       "Design af release-pipelines og deployment-tryghed",
    sp_s3_l5:       "Monitorering, alarmering og observability med Dynatrace, Grafana og relaterede værktøjer",
    sp_s3_l6:       "Sikre udviklingsmetoder integreret i arbejdsgangen fra starten",
    sp_s3_l7:       "Udrulning af sikkerhedsværktøjer og udvikleradoption i enterprise-skala",

    ai_label:       "En bemærkning om AI",
    ai_p:           "Jeg følger nøje med i udviklingen af AI-regulering og har praktisk erfaring med at integrere AI API'er i produktsystemer. Jeg behandler AI som en praktisk mulighed, der skal vurderes omhyggeligt i kontekst — ikke som et overskriftsbegreb eller et standardsvar. Hvis det reelt løser et problem i din situation, kan jeg hjælpe med at evaluere mulighederne og integrere dem gennemtænkt. Jeg positionerer ikke AI som en kernekompetence, men jeg vil heller ikke lade som om, det ikke eksisterer.",

    hiw_label:      "Sådan arbejder jeg",
    hiw_h2:         "Samarbejdsform",
    hiw_p:          "Jeg arbejder både som fokuseret rådgiver på specifikke, veldefinerede problemer og som indlejret teknisk leder i længere forløb — afhængigt af hvad teamet faktisk har brug for. Nogle situationer kalder på en skarp, tidsbegrænset gennemgang og et klart sæt anbefalinger. Andre kræver vedvarende tilstedeværelse: én i rummet til de svære beslutninger, uge efter uge. Jeg er komfortabel med begge dele og tager gerne en samtale om, hvad der giver mening i din situation.",
    hiw_btn:        "Drøft din situation",

    // ==================
    //  ABOUT PAGE
    // ==================
    ab_label:       "Baggrund",
    ab_h1:          "Om mig",
    ab_p1:          "Jeg er Senior Arkitekt med over et årtis erfaring med systemer, hvor indsatsen er reel. Forsikringsplatforme, industrielt IoT, store enterprise-integrationer. Den slags miljøer, hvor en dårlig arkitekturbeslutning ikke bare bremser dig — den koster dig år.",
    ab_p2:          "Mit seneste arbejde har ligget inden for DevSecOps og quality engineering. Jeg medstiftede en DevSecOps-funktion hos et større nordisk forsikringsselskab, opbyggede et Center of Excellence, der satte standarder og arbejdsgange på tværs af flere engineering-teams, og designede den sikkerhedsplatform, der bruges i hele organisationen.",
    ab_p3:          "Inden da ledede jeg et lille engineering-team hos EPOS, hvor jeg designede og fysisk opbyggede et IoT-testlaboratorium til at simulere virkelige hardware-interaktioner. Det fandtes ikke i forvejen. Vi byggede det fra bunden — både teknisk og organisatorisk. Det er et ret godt eksempel på, hvordan jeg arbejder: jeg venter ikke på perfekte betingelser. Jeg finder ud af, hvad der er behov for, og bygger det.",
    ab_p4:          "Min baggrund befinder sig i skæringspunktet mellem teknisk dybde og levering. Jeg har arbejdet tæt med både engineering-teams og senior interessenter — oversat arkitekturbeslutninger til et sprog, der virker i bestyrelseslokalet, og oversat forretningsbegrænsninger til løsninger, som udviklere faktisk kan bygge. Jeg forstår begge sider af den samtale og har brugt lang tid på at blive bedre til at bygge bro imellem dem.",
    ab_p5:          "Jeg arbejder uafhængigt, fordi det betyder, at den person, du taler med, er den person, der udfører arbejdet. Ingen overdragelse efter tilbuddet. Intet juniort team i baggrunden.",
    ab_p6:          "Jeg tager både fokuserede opgaver og længere indlejrede roller, afhængigt af hvad situationen faktisk kræver. Det, der tiltrækker mig ved et stykke arbejde, er om det har reel indvirkning. Problemer der betyder noget for dem, der arbejder med dem, og resultater der holder over tid.",
    ab_p7:          "Lyder noget af det som det, du leder efter, er jeg glad for at tage en samtale.",
    ab_btn:         "Kontakt mig",

    // ==================
    //  CONTACT PAGE
    // ==================
    ct_label:       "Lad os tale",
    ct_h1:          "Kontakt",
    ct_intro:       "Jeg tager gerne en indledende samtale om din situation — ingen forpligtelse, ingen salgstale. Beskriv hvad du arbejder med, og jeg vender tilbage direkte.",
    ct_name_label:  "Navn",
    ct_name_ph:     "Dit navn",
    ct_email_label: "E-mail",
    ct_email_ph:    "din@email.com",
    ct_msg_label:   "Besked",
    ct_msg_ph:      "Fortæl mig lidt om din situation — hvad arbejder du med, og hvor har du brug for støtte?",
    ct_submit:      "Send besked",
    ct_note:        "Jeg svarer typisk inden for én hverdag.",
    ct_success:     "Tak — din besked er afsendt. Jeg vender tilbage snarest.",
    ct_alt_h3:      "Foretrækker du direkte kontakt?",
    ct_li_link:     "LinkedIn",
  }
};

// ============================================
//  i18n engine
// ============================================
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update placeholders separately
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Update lang switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'dk' ? 'da' : 'en';

  // Persist
  localStorage.setItem('lang', lang);
}

function initI18n() {
  const saved = localStorage.getItem('lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
