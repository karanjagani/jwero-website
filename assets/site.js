/* Jwero marketing site — shared behaviour. No frameworks, ~4 KB. */
(function () {
  'use strict';

  // --- CONFIG ---
  var WA_NUMBER = '919967160916'; // WhatsApp Business number, digits only
  var WA_MESSAGES = {
    default: 'Hi Jwero — I would like to see a quick demo.',
    announce: 'Hi Jwero — saw the site, show me the live WhatsApp demo.',
    header: 'Hi Jwero — I would like to see a quick demo.',
    sticky: 'Hi Jwero — I would like to see a quick demo.',
    home: 'Hi Jwero — show me how the AI workforce works, with approvals.',
    roles: 'Hi Jwero — I want to understand how this helps my team, role by role.',
    proof: 'Hi — testing the inbox this button leads to. Show me what you’ve got.',
    report: 'Hi Jwero — I would like a sample growth report for my business.',
    close: 'Hi Jwero — I would like to see a quick demo.',
    pilot: 'Hi Jwero — I would like to start a pilot with my own data.',
    faq: 'Hi Jwero — I have a question that wasn’t on your FAQ.',
    platform: 'Hi Jwero — show me the full platform, one record at a time.',
    ai: 'Hi Jwero — show me the AI workforce approval queue live.',
    memory: 'Hi Jwero — show me a live customer record.',
    integrations: 'Hi Jwero — here is the software stack I run today, tell me what bridges.',
    tally: 'Hi Jwero — I want to understand exactly how the Tally bridge works.',
    onboarding: 'Hi Jwero — walk me through onboarding for my team.',
    roadmap: 'Hi Jwero — I have a question about something on your roadmap.',
    whatsapp: 'Hi Jwero — show me WhatsApp commerce for my business.',
    instagram: 'Hi Jwero — show me Instagram & Facebook commerce.',
    aiagents: 'Hi Jwero — show me an AI sales agent in action.',
    crm: 'Hi Jwero — show me the jewellery CRM and customer record.',
    catalog: 'Hi Jwero — show me the catalogue with live gold-rate pricing.',
    inventory: 'Hi Jwero — show me inventory ageing and dead-stock visibility.',
    billing: 'Hi Jwero — show me GST invoicing at the live gold rate.',
    erp: 'Hi Jwero — show me orders, purchases and manufacturing in one place.',
    schemes: 'Hi Jwero — I want to see gold savings schemes running digitally.',
    digitalgold: 'Hi Jwero — show me how digital gold works.',
    multistore: 'Hi Jwero — I run multiple stores, show me the multi-store structure.',
    'industries-retail': 'Hi Jwero — I’m in retail, help me find my segment.',
    solutions: 'Hi Jwero — help me find the right solution for my business.',
    'single-store': 'Hi Jwero — I run a single store, show me how Jwero fits.',
    chains: 'Hi Jwero — I run multiple stores, I’d like to talk to a specialist.',
    manufacturers: 'Hi Jwero — I’m a manufacturer/wholesaler, show me the WIP and gold-loss ledger.',
    'pain-index': 'Hi Jwero — here is the pain I’m dealing with: ',
    deadstock: 'Hi Jwero — I ran the dead stock calculator. Here are my numbers: ',
    scheme_calc: 'Hi Jwero — I ran the gold scheme calculator. Here are my numbers: ',
    wa_revenue_calc: 'Hi Jwero — I ran the WhatsApp revenue estimator. Here are my numbers: ',
    goldloss_calc: 'Hi Jwero — I ran the gold-loss calculator. Here are my numbers: ',
    leadleak: 'Hi Jwero — show me how you stop lead leakage.',
    security: 'Hi Jwero — I have a security question.',
    'security-pdf': 'Hi Jwero — please send the security overview PDF.',
    customers: 'Hi Jwero — I’d like to see real proof before a demo.',
    lighthouse: 'Hi Jwero — I’m interested in the Lighthouse Partner program.',
    compare: 'Hi Jwero — I currently use a WhatsApp tool, help me compare.',
    migration: 'Hi Jwero — help me plan my migration.',
    pricing: 'Hi Jwero — what does this actually cost for my business?',
    'tier-assist': 'Hi Jwero — what does the Assist tier cost?',
    'tier-approve': 'Hi Jwero — what does the Approve tier cost?',
    'tier-autopilot': 'Hi Jwero — what does the Autopilot tier cost?',
    company: 'Hi Jwero — I’d like to talk to your team directly.',
    contact: 'Hi Jwero — reaching out via the contact page.',
    enterprise: 'Hi Jwero — I’m evaluating for a multi-store/enterprise deployment.',
    bookdemo: 'Hi Jwero — I would like to see a quick demo.',
    products: 'Hi Jwero — help me figure out which products matter for my business.',
    luxury: 'Hi Jwero — I run a luxury/boutique jewellery business, show me clienteling.',
    bridal: 'Hi Jwero — I focus on bridal, show me the wedding-journey tracking.',
    diamond: 'Hi Jwero — I sell diamonds, show me the certificate-aware catalogue.',
    gold: 'Hi Jwero — I sell gold jewellery, show me live-rate pricing and schemes.',
    silver: 'Hi Jwero — I sell silver at volume, show me the bulk catalogue tools.',
    labgrown: 'Hi Jwero — I sell lab-grown diamonds, show me the online-first tools.',
    gemstone: 'Hi Jwero — I sell gemstones, show me provenance-rich catalogue fields.',
    diamondwholesale: 'Hi Jwero — I’m a diamond wholesaler, show me B2B catalogues.',
    goldwholesale: 'Hi Jwero — I’m a gold wholesaler, show me rate-linked ordering.',
    b2b: 'Hi Jwero — I sell B2B (silver/gemstone/pearl), show me the wholesale tools.',
    casting: 'Hi Jwero — I run a casting unit, show me WIP and loss tracking.',
    cad: 'Hi Jwero — I run a CAD service, show me job intake and approval flow.',
    oem: 'Hi Jwero — I’m an OEM manufacturer, show me multi-client job-work.',
    export: 'Hi Jwero — I run an export house, show me order-to-shipment tracking.',
    bullion: 'Hi Jwero — I’m a bullion dealer/trader, show me deal capture.',
    brands: 'Hi Jwero — I run a jewellery brand, show me brand governance across channels.',
    d2c: 'Hi Jwero — I run a D2C/ecommerce-first brand, show me what you add to Shopify.',
    startups: 'Hi Jwero — I’m starting a new jewellery business, help me figure out what I need.',
    franchise: 'Hi Jwero — I run a franchise network, show me franchisor controls.',
    'compare-hub': 'Hi Jwero — I want to compare Jwero to a tool I’m using or considering.',
    ornate: 'Hi Jwero — I currently use Ornate NX, help me compare.',
    synergics: 'Hi Jwero — I currently use Synergics, help me compare.',
    jewelacc: 'Hi Jwero — I currently use JewelAcc, help me compare.',
    marg: 'Hi Jwero — I currently use Marg ERP, help me compare.',
    sioniq: 'Hi Jwero — I’m evaluating Jwero against SIONIQ, help me compare.',
    zithara: 'Hi Jwero — I currently use Zithara, help me compare.',
    wati: 'Hi Jwero — I currently use WATI, help me compare.',
    interakt: 'Hi Jwero — I currently use Interakt, help me compare.',
    doubletick: 'Hi Jwero — I currently use DoubleTick, help me compare.',
    quicksell: 'Hi Jwero — I currently use QuickSell, help me compare.',
    shopify: 'Hi Jwero — I run a Shopify store, show me what Jwero adds.',
    zohocrm: 'Hi Jwero — I currently use Zoho CRM, help me compare.',
    'faq-hub': 'Hi Jwero — I have a question that wasn’t on your FAQ page: ',
    partners: 'Hi Jwero — I’d like to talk about the partner program. Here’s who I’d bring first: ',
    'blog-hub': 'Hi Jwero — I’d like to see a topic covered on the blog: ',
    'blog-whatsapp': 'Hi Jwero — I read the WhatsApp guide, show me how it works for my business.',
    'blog-deadstock': 'Hi Jwero — I read the dead stock guide, show me matched selling and rotation.',
    'blog-scheme': 'Hi Jwero — I read the gold scheme guide, show me digital collection for my scheme book.',
    optimize: 'Hi Jwero — show me the Optimize suite: heatmaps, A/B tests, popups and webchat for my website.',
    'blog-tally': 'Hi Jwero — I read the Tally guide, tell me exactly what moves and what stays in Tally.',
    'blog-goldloss': 'Hi Jwero — I read the gold-loss guide, show me the wastage ledger and recovery desk.',
    'blog-repair': 'Hi Jwero — I read the repair custody-chain guide, show me how it works for my business.',
    'blog-huid': 'Hi Jwero — I read the HUID/hallmarking guide, show me compliance tracking.',
    'blog-catalog': 'Hi Jwero — I read the digital catalogue guide, show me a live-price catalogue.'
  };

  function waLink(ctx, extra) {
    var msg = (WA_MESSAGES[ctx] || WA_MESSAGES.default) + (extra || '');
    var page = location.pathname.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home';
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg + ' [ref:' + page + '/' + ctx + ']');
  }

  // Wire every WhatsApp CTA
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.setAttribute('href', waLink(a.getAttribute('data-wa')));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  // --- theme -------------------------------------------------------
  // Light is the brand default; an inline head script applies any saved choice
  // before first paint. Here we only wire the toggle.
  var root = document.documentElement;
  document.querySelectorAll('.theme-toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('jwero-theme', next);
    });
  });

  // --- nav ---------------------------------------------------------
  var burger = document.querySelector('.nav-burger');
  if (burger) burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // one dropdown open at a time; close on outside click
  var dds = Array.prototype.slice.call(document.querySelectorAll('details.nav-dd'));
  dds.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) dds.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dd')) dds.forEach(function (d) { d.open = false; });
  });

  // --- misc --------------------------------------------------------
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // --- scroll reveal -------------------------------------------------
  var revealTargets = document.querySelectorAll(
    '.section .card, .section .stat, .router-card, .pillar, .impact-card, .jtbd-item, .section .mock, .onerecord-grid, .verdict-box .v-cell, .tier'
  );
  if (revealTargets.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(el);
    });
  }

  // Growth report sample tabs
  var report = document.querySelector('[data-report]');
  if (report) {
    var data = {
      week: { back: '14', appt: '9', rev: '38,400', msg: '212' },
      month: { back: '61', appt: '37', rev: '1,64,900', msg: '890' }
    };
    report.querySelectorAll('.report-tabs button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        report.querySelectorAll('.report-tabs button').forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
        btn.setAttribute('aria-selected', 'true');
        var d = data[btn.getAttribute('data-tab')];
        Object.keys(d).forEach(function (k) {
          var el = report.querySelector('[data-r="' + k + '"]');
          if (el) el.textContent = d[k];
        });
      });
    });
  }

  // --- calculators ---------------------------------------------------
  var CUR = { INR: '₹', USD: '$', GBP: '£', AED: 'AED ', EUR: '€' };
  function fmt(n, cur) {
    var loc = cur === 'INR' ? 'en-IN' : 'en-US';
    return (CUR[cur] || '') + Math.round(n).toLocaleString(loc);
  }
  function bindRange(id, out, unit) {
    var el = document.getElementById(id);
    if (!el) return null;
    var lab = document.getElementById(out);
    var f = function () { if (lab) lab.textContent = Number(el.value).toLocaleString('en-IN') + (unit || ''); };
    el.addEventListener('input', f); f();
    return el;
  }

  // Dead stock calculator
  var ds = document.getElementById('calc-deadstock');
  if (ds) {
    var v = bindRange('ds-value', 'ds-value-out'); // total inventory value (thousands)
    var p = bindRange('ds-pct', 'ds-pct-out', '%');
    var r = bindRange('ds-rate', 'ds-rate-out', '%');
    var cur = document.getElementById('ds-cur');
    function dsCalc() {
      var c = cur.value;
      var total = Number(v.value) * 1000;
      var dead = total * Number(p.value) / 100;
      var carryYr = dead * (Number(r.value) + 2.5) / 100; // financing + ~2.5% insurance/storage/handling
      var carryMo = carryYr / 12;
      var freed = dead * 0.4;
      document.getElementById('ds-dead').textContent = fmt(dead, c);
      document.getElementById('ds-monthly').textContent = fmt(carryMo, c);
      document.getElementById('ds-yearly').textContent = fmt(carryYr, c);
      document.getElementById('ds-freed').textContent = fmt(freed, c);
      var wa = document.getElementById('ds-wa');
      if (wa) wa.setAttribute('href', waLink('deadstock',
        'inventory ' + fmt(total, c) + ', dead ' + fmt(dead, c) + ', yearly carrying cost ' + fmt(carryYr, c)));
    }
    [v, p, r, cur].forEach(function (el) { el.addEventListener('input', dsCalc); el.addEventListener('change', dsCalc); });
    dsCalc();
  }

  // Gold scheme calculator
  var gs = document.getElementById('calc-scheme');
  if (gs) {
    var en = bindRange('gs-enrol', 'gs-enrol-out');
    var inst = bindRange('gs-inst', 'gs-inst-out');
    var up = bindRange('gs-uplift', 'gs-uplift-out', '%');
    var gcur = document.getElementById('gs-cur');
    function gsCalc() {
      var c = gcur.value;
      var yearlyEnrol = Number(en.value) * 12;
      var corpus = yearlyEnrol * Number(inst.value) * 11; // 11 paid months
      var redemption = corpus * 1.35; // avg redemption basket vs corpus (assumption, editable below)
      var uplift = redemption * Number(up.value) / 100;
      document.getElementById('gs-corpus').textContent = fmt(corpus, c);
      document.getElementById('gs-locked').textContent = fmt(redemption, c);
      document.getElementById('gs-uplift-val').textContent = fmt(uplift, c);
      var wa = document.getElementById('gs-wa');
      if (wa) wa.setAttribute('href', waLink('scheme_calc',
        'enrolments ' + en.value + '/month, corpus ' + fmt(corpus, c) + '/yr, locked-in revenue ' + fmt(redemption, c)));
    }
    [en, inst, up, gcur].forEach(function (el) { el.addEventListener('input', gsCalc); el.addEventListener('change', gsCalc); });
    gsCalc();
  }

  // WhatsApp revenue estimator
  var wr = document.getElementById('calc-warevenue');
  if (wr) {
    var wrEnq = bindRange('wr-enq', 'wr-enq-out');
    var wrAov = bindRange('wr-aov', 'wr-aov-out');
    var wrReply = bindRange('wr-reply', 'wr-reply-out', '%');
    var wrCur = document.getElementById('wr-cur');
    var FAST_CLOSE = 0.15, SLOW_CLOSE = 0.03, TARGET_REPLY = 0.95;
    function wrCalc() {
      var c = wrCur.value;
      var enq = Number(wrEnq.value);
      var aov = Number(wrAov.value);
      var replyNow = Number(wrReply.value) / 100;
      var current = enq * (replyNow * FAST_CLOSE + (1 - replyNow) * SLOW_CLOSE) * aov;
      var potential = enq * (TARGET_REPLY * FAST_CLOSE + (1 - TARGET_REPLY) * SLOW_CLOSE) * aov;
      var gapMo = Math.max(0, potential - current);
      var gapYr = gapMo * 12;
      document.getElementById('wr-current').textContent = fmt(current, c);
      document.getElementById('wr-potential').textContent = fmt(potential, c);
      document.getElementById('wr-gap-mo').textContent = fmt(gapMo, c);
      document.getElementById('wr-gap-yr').textContent = fmt(gapYr, c);
      var wa = document.getElementById('wr-wa');
      if (wa) wa.setAttribute('href', waLink('wa_revenue_calc',
        enq + ' enquiries/mo, ' + Number(wrReply.value) + '% replied fast today, gap ' + fmt(gapMo, c) + '/mo'));
    }
    [wrEnq, wrAov, wrReply, wrCur].forEach(function (el) { el.addEventListener('input', wrCalc); el.addEventListener('change', wrCalc); });
    wrCalc();
  }

  // Gold-loss calculator
  var gl = document.getElementById('calc-goldloss');
  if (gl) {
    var glVol = bindRange('gl-vol', 'gl-vol-out');
    var glRate = bindRange('gl-rate', 'gl-rate-out');
    var glObserved = bindRange('gl-observed', 'gl-observed-out', '%');
    var glExplained = bindRange('gl-explained', 'gl-explained-out', '%');
    var glCur = document.getElementById('gl-cur');
    function glCalc() {
      var c = glCur.value;
      var vol = Number(glVol.value);
      var rate = Number(glRate.value);
      var observed = Number(glObserved.value) / 100;
      var explained = Number(glExplained.value) / 100;
      var unexplainedPct = Math.max(0, observed - explained);
      var grams = vol * unexplainedPct;
      var monthly = grams * rate;
      var yearly = monthly * 12;
      document.getElementById('gl-grams').textContent = grams.toFixed(1) + ' g';
      document.getElementById('gl-monthly').textContent = fmt(monthly, c);
      document.getElementById('gl-yearly').textContent = fmt(yearly, c);
      var wa = document.getElementById('gl-wa');
      if (wa) wa.setAttribute('href', waLink('goldloss_calc',
        vol + 'g/mo, ' + grams.toFixed(1) + 'g unexplained, ' + fmt(monthly, c) + '/mo'));
    }
    [glVol, glRate, glObserved, glExplained, glCur].forEach(function (el) { el.addEventListener('input', glCalc); el.addEventListener('change', glCalc); });
    glCalc();
  }

  // Demo form (static build: show confirmation; wire to CRM API in production)
  var form = document.getElementById('demo-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-ok').style.display = 'block';
    form.querySelector('button[type=submit]').disabled = true;
  });
})();
