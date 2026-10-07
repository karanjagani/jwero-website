/* Jwero marketing site, shared behaviour. No frameworks, ~4 KB. */
(function () {
  'use strict';

  // --- BASE PATH ---
  // On a sub-path host (GitHub Pages project site) the pages carry
  // <html data-base="/repo">. On jwero.ai it is empty and all of this is a no-op.
  var BASE = document.documentElement.getAttribute('data-base') || '';
  function unbase(p) { return BASE && p.indexOf(BASE) === 0 ? (p.slice(BASE.length) || '/') : p; }
  function based(p) { return BASE && p.charAt(0) === '/' && p.charAt(1) !== '/' && p.indexOf(BASE + '/') !== 0 && p !== BASE ? BASE + p : p; }
  var HERE = unbase(location.pathname);

  // --- CONFIG ---
  var WA_NUMBER = '919169959959'; // WhatsApp Business number, digits only
  var WA_MESSAGES = {
    default: 'Hi Jwero, I would like to see a quick demo.',
    handle: 'Hi Jwero, I would like you to handle things for my jewellery business. Here is where I am:',
    referral: 'Hi Jwero, I am a customer and I have referred a jeweller to you. Their name and business:',
    one: 'Hi Jwero, I would like to start with just one function. The one I have in mind is:',
    call: 'Hi Jwero, please call me about my jewellery business.',
    start: 'Hi Jwero, this is what I want to achieve for my jewellery business:',
    plan: 'Hi Jwero, I would like a Jwero business plan for my jewellery business.',
    guarantee: 'Hi Jwero, I want to know more about the Jwero Efficiency Guarantee for my jewellery business.',
    'with-you': 'Hi Jwero, I have a team and want your specialists to work with us.',
    outcome: 'Hi Jwero, this is what I want to improve:',
    assessment: 'Hi Jwero, I took the business assessment and would like to talk to a business specialist.',
    announce: 'Hi Jwero, saw the site, show me the live WhatsApp demo.',
    header: 'Hi Jwero, I would like to see a quick demo.',
    sticky: 'Hi Jwero, I would like to see a quick demo.',
    home: 'Hi Jwero, show me how the AI workforce works, with approvals.',
    roles: 'Hi Jwero, I want to understand how this helps my team, role by role.',
    proof: 'Hi, testing the inbox this button leads to. Show me what you’ve got.',
    report: 'Hi Jwero, I would like a sample growth report for my business.',
    close: 'Hi Jwero, I would like to see a quick demo.',
    pilot: 'Hi Jwero, I would like to start a pilot with my own data.',
    faq: 'Hi Jwero, I have a question that wasn’t on your FAQ.',
    platform: 'Hi Jwero, show me the full platform, one record at a time.',
    ai: 'Hi Jwero, show me the AI workforce approval queue live.',
    memory: 'Hi Jwero, show me a live customer record.',
    pricingengine: 'Hi Jwero, show me how a price is actually calculated, on my own catalogue.',
    integrations: 'Hi Jwero, here is the software stack I run today, tell me what bridges.',
    tally: 'Hi Jwero, I want to understand exactly how the Tally bridge works.',
    onboarding: 'Hi Jwero, walk me through onboarding for my team.',
    roadmap: 'Hi Jwero, I have a question about something on your roadmap.',
    whatsapp: 'Hi Jwero, show me WhatsApp commerce for my business.',
    instagram: 'Hi Jwero, show me Instagram & Facebook commerce.',
    aiagents: 'Hi Jwero, show me an AI sales agent in action.',
    crm: 'Hi Jwero, show me the jewellery CRM and customer record.',
    catalog: 'Hi Jwero, show me the catalogue with live gold-rate pricing.',
    inventory: 'Hi Jwero, show me inventory ageing and dead-stock visibility.',
    billing: 'Hi Jwero, show me GST invoicing at the live gold rate.',
    erp: 'Hi Jwero, show me orders, purchases and manufacturing in one place.',
    schemes: 'Hi Jwero, I want to see gold savings schemes running digitally.',
    digitalgold: 'Hi Jwero, show me how digital gold works.',
    multistore: 'Hi Jwero, I run multiple stores, show me the multi-store structure.',
    showroom: 'Hi Jwero, show me the showroom / in-store visit intelligence.',
    loyalty: 'Hi Jwero, show me the loyalty and referral program.',
    hrpayroll: 'Hi Jwero, show me the HR and payroll suite.',
    repairsservice: 'Hi Jwero, show me repairs and after-sales service tracking.',
    purchasevendors: 'Hi Jwero, show me purchase orders and vendor management.',
    storefront: 'Hi Jwero, show me the ecommerce website builder.',
    'industries-retail': 'Hi Jwero, I’m in retail, help me find my segment.',
    solutions: 'Hi Jwero, help me find the right solution for my business.',
    'single-store': 'Hi Jwero, I run a single store, show me how Jwero fits.',
    chains: 'Hi Jwero, I run multiple stores, I’d like to talk to a specialist.',
    manufacturers: 'Hi Jwero, I’m a manufacturer/wholesaler, show me the WIP and gold-loss ledger.',
    'pain-index': 'Hi Jwero, here is the pain I’m dealing with: ',
    deadstock: 'Hi Jwero, I ran the dead stock calculator. Here are my numbers: ',
    scheme_calc: 'Hi Jwero, I ran the gold scheme calculator. Here are my numbers: ',
    wa_revenue_calc: 'Hi Jwero, I ran the WhatsApp revenue estimator. Here are my numbers: ',
    goldloss_calc: 'Hi Jwero, I ran the gold-loss calculator. Here are my numbers: ',
    leadleak: 'Hi Jwero, show me how you stop lead leakage.',
    security: 'Hi Jwero, I have a security question.',
    'security-pdf': 'Hi Jwero, please send the security overview PDF.',
    customers: 'Hi Jwero, I’d like to see real proof before a demo.',
    lighthouse: 'Hi Jwero, I’m interested in the Lighthouse Partner program.',
    compare: 'Hi Jwero, I currently use a WhatsApp tool, help me compare.',
    migration: 'Hi Jwero, help me plan my migration.',
    pricing: 'Hi Jwero, what does this actually cost for my business?',
    'tier-assist': 'Hi Jwero, a question about Jwero One pricing.',
    company: 'Hi Jwero, I’d like to talk to your team directly.',
    contact: 'Hi Jwero, reaching out via the contact page.',
    enterprise: 'Hi Jwero, I’m evaluating for a multi-store/enterprise deployment.',
    bookdemo: 'Hi Jwero, I would like to see a quick demo.',
    products: 'Hi Jwero, help me figure out which products matter for my business.',
    luxury: 'Hi Jwero, I run a luxury/boutique jewellery business, show me clienteling.',
    bridal: 'Hi Jwero, I focus on bridal, show me the wedding-journey tracking.',
    diamond: 'Hi Jwero, I sell diamonds, show me the certificate-aware catalogue.',
    gold: 'Hi Jwero, I sell gold jewellery, show me live-rate pricing and schemes.',
    silver: 'Hi Jwero, I sell silver at volume, show me the bulk catalogue tools.',
    labgrown: 'Hi Jwero, I sell lab-grown diamonds, show me the online-first tools.',
    gemstone: 'Hi Jwero, I sell gemstones, show me provenance-rich catalogue fields.',
    diamondwholesale: 'Hi Jwero, I’m a diamond wholesaler, show me B2B catalogues.',
    goldwholesale: 'Hi Jwero, I’m a gold wholesaler, show me rate-linked ordering.',
    b2b: 'Hi Jwero, I sell B2B (silver/gemstone/pearl), show me the wholesale tools.',
    casting: 'Hi Jwero, I run a casting unit, show me WIP and loss tracking.',
    cad: 'Hi Jwero, I run a CAD service, show me job intake and approval flow.',
    oem: 'Hi Jwero, I’m an OEM manufacturer, show me multi-client job-work.',
    export: 'Hi Jwero, I run an export house, show me order-to-shipment tracking.',
    bullion: 'Hi Jwero, I’m a bullion dealer/trader, show me deal capture.',
    brands: 'Hi Jwero, I run a jewellery brand, show me brand governance across channels.',
    d2c: 'Hi Jwero, I run a D2C/ecommerce-first brand, show me what you add to Shopify.',
    startups: 'Hi Jwero, I’m starting a new jewellery business, help me figure out what I need.',
    franchise: 'Hi Jwero, I run a franchise network, show me franchisor controls.',
    'compare-hub': 'Hi Jwero, I want to compare Jwero to a tool I’m using or considering.',
    ornate: 'Hi Jwero, I currently use Ornate NX, help me compare.',
    synergics: 'Hi Jwero, I currently use Synergics, help me compare.',
    jewelacc: 'Hi Jwero, I currently use JewelAcc, help me compare.',
    marg: 'Hi Jwero, I currently use Marg ERP, help me compare.',
    sioniq: 'Hi Jwero, I’m evaluating Jwero against SIONIQ, help me compare.',
    zithara: 'Hi Jwero, I currently use Zithara, help me compare.',
    wati: 'Hi Jwero, I currently use WATI, help me compare.',
    interakt: 'Hi Jwero, I currently use Interakt, help me compare.',
    doubletick: 'Hi Jwero, I currently use DoubleTick, help me compare.',
    quicksell: 'Hi Jwero, I currently use QuickSell, help me compare.',
    shopify: 'Hi Jwero, I run a Shopify store, show me what Jwero adds.',
    zohocrm: 'Hi Jwero, I currently use Zoho CRM, help me compare.',
    'faq-hub': 'Hi Jwero, I have a question that wasn’t on your FAQ page: ',
    partners: 'Hi Jwero, I’d like to talk about the partner program. Here’s who I’d bring first: ',
    'blog-hub': 'Hi Jwero, I’d like to see a topic covered on the blog: ',
    'blog-whatsapp': 'Hi Jwero, I read the WhatsApp guide, show me how it works for my business.',
    'blog-deadstock': 'Hi Jwero, I read the dead stock guide, show me matched selling and rotation.',
    'blog-scheme': 'Hi Jwero, I read the gold scheme guide, show me digital collection for my scheme book.',
    pos: 'Hi Jwero, show me the counter POS: exchange, returns and day-close.',
    girvi: 'Hi Jwero, show me a girvi pledge from intake to release.',
    meetings: 'Hi Jwero, send me a video counter link the way a customer would get one.',
    email: 'Hi Jwero, I want business email on my own domain inside the same inbox as WhatsApp. Show me.',
    marketplaces: 'Hi Jwero, I sell on Amazon/Flipkart. Show me orders landing on one ledger with stock pushing back.',
    quotations: 'Hi Jwero, send me a sample quotation link the way a customer gets one.',
    catalogues: 'Hi Jwero, send me a live digital catalogue link and show me what it reports back.',
    reports: 'Hi Jwero, show me a report for my kind of jewellery business.',
    training: 'Hi Jwero, show me a staff training course with a test and certificate.',
    securitypack: 'Hi Jwero, please send the security pack for my IT / evaluation committee: hosting, backups, access control, SSO, data export.',
    hindi: 'नमस्ते Jwero, मैं ज्वेलर हूँ। मुझे हिन्दी में जानकारी चाहिए।',
    brief: 'Hi Jwero, I read the one-page brief. I want to see it on my own business.',
    nudge: 'Hi Jwero, one question before I decide:',
    erp: 'Hi Jwero, we run an ERP. Show me what it cannot see about one of my customers, and what Jwero would.',
    erpswitch: 'Hi Jwero, we run an ERP and switching worries me. Walk me through the plan for my business.',
    erpmakedo: 'Hi Jwero, we make do with an ERP + WhatsApp + Excel. Show me what the gaps cost on my numbers.',
    leak: 'Hi Jwero, my enquiry numbers from the make-do calculator:',
    quote: 'Hi Jwero, please send me this as a quote:',
    diamondtraders: 'Hi Jwero, I trade loose diamonds. Show me parcels, certified stones, memo and my rate grid on one screen.',
    grid: 'Hi Jwero, show me my own per-carat rate grid in Jwero. My example line:',
    optimize: 'Hi Jwero, show me the Optimize suite: heatmaps, A/B tests, popups and webchat for my website.',
    'blog-tally': 'Hi Jwero, I read the Tally guide, tell me exactly what moves and what stays in Tally.',
    'blog-goldloss': 'Hi Jwero, I read the gold-loss guide, show me the wastage ledger and recovery desk.',
    'blog-repair': 'Hi Jwero, I read the repair custody-chain guide, show me how it works for my business.',
    'blog-huid': 'Hi Jwero, I read the HUID/hallmarking guide, show me compliance tracking.',
    'blog-catalog': 'Hi Jwero, I read the digital catalogue guide, show me a live-price catalogue.',
    'blog-crmerp': 'Hi Jwero, I read the CRM vs ERP guide, show me how one record covers both.',
    'blog-checklist': 'Hi Jwero, I read the buyer’s checklist, ask me the questions and I’ll answer honestly.',
    'blog-wedding': 'Hi Jwero, I read the wedding season guide, help me plan the timing for my business.',
    'blog-cost': 'Hi Jwero, I read the software cost guide, give me a straight number for my business.',
    'blog-bestsoftware': 'Hi Jwero, I read the how-to-compare guide, ask me these questions directly.',
    'blog-goldrate': 'Hi Jwero, I read the live gold rate guide, show me a price resolve live.',
    'blog-startonline': 'Hi Jwero, I read the starting-online guide, help me plan my first steps.',
    'blog-wapricing': 'Hi Jwero, I read the WhatsApp API pricing guide, help me understand my own conversation mix.',
    'blog-schemeslegal': 'Hi Jwero, I read the gold scheme legal guide, show me the compliance controls.',
    segmentation: 'Hi Jwero, show me live customer segmentation for my business.',
    journeys: 'Hi Jwero, show me a customer journey with the approval gate live.',
    campaigns: 'Hi Jwero, show me a campaign and broadcast, with attribution.',
    adsmanager: 'Hi Jwero, show me Ads Manager for Meta, Google and Pinterest.',
    socialmedia: 'Hi Jwero, show me the social media inbox and scheduler.'
  };

  var PERSONA_NAMES = { single: 'a single-store jeweller', chain: 'a multi-store chain', maker: 'a manufacturer', b2b: 'a wholesaler / B2B business', d2c: 'a D2C brand', franchise: 'a franchise network', trader: 'a diamond trader', staff: 'on the staff of a jewellery business' };
  function personaKey() { var q = /[?&]p=(single|chain|maker|b2b|d2c|franchise|trader|staff)/.exec(location.search); if (q) return q[1]; try { return localStorage.getItem('jwero-persona') || ''; } catch (e) { return ''; } }
  function waLink(ctx, extra) {
    var who = PERSONA_NAMES[personaKey()];
    var msg = (WA_MESSAGES[ctx] || WA_MESSAGES.default) + (extra || '') + (who && ctx !== 'announce' ? ' (I am ' + who + '.)' : '');
    var page = HERE.replace(/\W+/g, '-').replace(/^-|-$/g, '') || 'home';
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg + ' [ref:' + page + '/' + ctx + ']');
  }

  // Wire every WhatsApp CTA
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.setAttribute('href', waLink(a.getAttribute('data-wa')));
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  // --- connect: chat, voice or video through the Jwero chat widget ------------
  // Every "chat or call" button opens one panel with three doors. With the widget
  // loaded (html[data-webchat="on"]) they hand over to it: jwero.chat.open() for
  // chat, a browser call for voice and video. Without it, no site key yet, a
  // blocker, offline, each door falls back to WhatsApp, the phone or the demo
  // form, so nothing is ever a dead end.
  var Connect = (function () {
    var dlg = document.querySelector('dialog.connect');
    var WEBCHAT_ON = document.documentElement.getAttribute('data-webchat') === 'on';
    var TEL = 'tel:+919169959959', state = { wa: '', msg: '', ctx: '' };
    function deskOpen() { var ist = new Date(Date.now() + (330 + new Date().getTimezoneOffset()) * 60000), h = ist.getHours(); return h >= 10 && h < 20; }
    function widget() { var j = window.jwero; return j && j.chat && typeof j.chat.open === 'function' ? j : null; }
    function whenWidget(cb, ms) {
      var t0 = Date.now();
      (function poll() { var j = widget(); if (j) return cb(j); if (Date.now() - t0 > ms) return cb(null); window.setTimeout(poll, 150); })();
    }
    function shadow() { var host = document.getElementById('jwero-optimize-root'); return host ? (host.shadowRoot || host) : null; }
    function note(j, mode) { try { j.track('website_cta', { mode: mode, context: state.ctx, page: HERE, persona: personaKey() }); } catch (e) {} }
    // Put the page's question in the widget's box so the visitor only has to press send.
    function prefill() {
      if (!state.msg) return;
      window.setTimeout(function () {
        try { var r = shadow(), box = r && r.querySelector('textarea, input[type="text"]'); if (box && !box.value) { box.value = state.msg; box.dispatchEvent(new Event('input', { bubbles: true })); } } catch (e) {}
      }, 500);
    }
    function call(j, mode) {
      note(j, mode);
      if (typeof j.chat.call === 'function') { j.chat.call(mode === 'voice' ? 'audio' : 'video'); return; }
      // Older widget builds have no public call method: open the panel and press its own call button.
      j.chat.open();
      window.setTimeout(function () { try { var r = shadow(), b = r && r.querySelector('.jw-call'); if (b) b.click(); } catch (e) {} }, 450);
    }
    function close() { if (dlg && dlg.open) dlg.close(); }
    function fallback(mode) {
      close();
      if (mode === 'chat') { window.open(state.wa || waLink('default'), '_blank', 'noopener'); return; }
      if (mode === 'voice') { location.href = deskOpen() ? TEL : BASE + '/book-demo#callback'; return; }
      location.href = BASE + '/book-demo#schedule';
    }
    function go(mode) {
      if (!WEBCHAT_ON) return fallback(mode);
      if (mode !== 'chat' && !deskOpen()) return fallback(mode);
      if (dlg) dlg.classList.add('is-busy');
      whenWidget(function (j) {
        if (dlg) dlg.classList.remove('is-busy');
        if (!j) return fallback(mode);
        close();
        if (mode === 'chat') { note(j, 'chat'); j.chat.open(); prefill(); } else call(j, mode);
      }, 3500);
    }
    function set(sel, text) { var el = dlg.querySelector(sel); if (el) el.textContent = text; }
    function open(opts) {
      opts = opts || {};
      state.wa = opts.wa || waLink('default'); state.ctx = opts.ctx || ''; state.msg = opts.msg || '';
      // "Book a demo" goes straight to video when a person can pick up.
      if (opts.mode === 'video' && opts.direct && WEBCHAT_ON && deskOpen()) return go('video');
      if (!dlg || typeof dlg.showModal !== 'function') return fallback(opts.mode || 'chat');
      var desk = deskOpen();
      set('[data-connect-title]', opts.mode === 'video' ? 'A demo on video' : opts.mode === 'voice' ? 'Call Jwero' : 'Talk to Jwero');
      set('[data-connect-sub]', opts.mode === 'video' ? 'Fifteen minutes, your scenario, a real person on camera.' : 'A real person and our AI, within minutes. Pick how.');
      set('[data-connect-note="chat"]', WEBCHAT_ON ? 'Opens right here' : 'Opens WhatsApp');
      set('[data-connect-note="voice"]', WEBCHAT_ON && desk ? 'From your browser, no app' : desk ? 'Dials +91 91699 59959' : 'We call you back');
      set('[data-connect-note="video"]', WEBCHAT_ON && desk ? 'See the product, face to face' : 'Pick a time for a video demo');
      set('[data-connect-hours]', desk ? 'The desk is open now · 10am–8pm IST' : 'The desk is closed right now (10am–8pm IST). Chat reaches us; calls become a callback.');
      var ctx = dlg.querySelector('[data-connect-ctx]');
      if (ctx) { ctx.hidden = !state.msg; ctx.textContent = state.msg ? '“' + state.msg + '”' : ''; }
      var alt = dlg.querySelector('[data-connect-alt="wa"]'); if (alt) alt.setAttribute('href', state.wa);
      Array.prototype.forEach.call(dlg.querySelectorAll('.connect-opt'), function (b) { b.classList.toggle('is-lead', b.getAttribute('data-connect-go') === (opts.mode || 'chat')); });
      if (!dlg.open) dlg.showModal();
    }
    if (dlg) {
      dlg.addEventListener('click', function (e) {
        var b = e.target.closest('[data-connect-go]');
        if (b) return go(b.getAttribute('data-connect-go'));
        if (e.target === dlg || e.target.closest('.connect-close')) close();
      });
    }
    // One listener for every door on the site: chat buttons, call links, demo links.
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
      var a = e.target.closest('a');
      if (!a || a.hasAttribute('data-direct') || a.hasAttribute('data-share') || a.closest('dialog.connect')) return;
      var href = unbase(a.getAttribute('href') || ''), mode = a.getAttribute('data-connect');
      var isWa = a.hasAttribute('data-wa') || href.indexOf('https://wa.me/' + WA_NUMBER) === 0;
      var isDemo = /^\/book-demo\/?$/.test(href), isTel = href.indexOf('tel:') === 0;
      if (!isWa && !isDemo && !isTel && mode === null) return;
      e.preventDefault();
      var msg = '';
      if (href.indexOf('https://wa.me/') === 0) { try { msg = decodeURIComponent((href.split('text=')[1] || '')).replace(/\s*\[ref:[^\]]*\]\s*$/, ''); } catch (x) {} }
      open({ mode: mode || (isDemo ? 'video' : isTel ? 'voice' : ''), direct: isDemo, wa: a.getAttribute('data-wa-extra') ? waLink(a.getAttribute('data-wa') || 'default', a.getAttribute('data-wa-extra')) : isWa && href.indexOf('https://') === 0 ? href : '', ctx: a.getAttribute('data-wa') || (isDemo ? 'book-demo' : isTel ? 'call' : ''), msg: isWa ? msg : '' });
    });
    return { open: open };
  })();

  // Share a page to someone else on WhatsApp (no number: the picker opens).
  document.querySelectorAll('[data-share]').forEach(function (a) {
    a.setAttribute('href', 'https://wa.me/?text=' + encodeURIComponent(a.getAttribute('data-share') + ' ' + location.origin + location.pathname));
    a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener');
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
  var body = document.body;
  var burger = document.querySelector('.nav-burger');
  var dds = Array.prototype.slice.call(document.querySelectorAll('details.nav-dd'));
  // Below this width the nav is the full-screen menu (matches the CSS breakpoint).
  var wideNav = window.matchMedia('(min-width: 1181px)');
  function closeMenus() { dds.forEach(function (d) { d.open = false; }); }
  function setMenu(open) {
    body.classList.toggle('nav-open', open);
    if (burger) {
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    if (!open) closeMenus();
  }
  if (burger) burger.addEventListener('click', function () { setMenu(!body.classList.contains('nav-open')); });
  wideNav.addEventListener('change', function () { setMenu(false); });
  // one dropdown open at a time; close on outside click or Escape
  dds.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) dds.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dd')) closeMenus();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeMenus();
    if (body.classList.contains('nav-open')) { setMenu(false); burger.focus(); }
  });
  // desktop: open on hover, not just click (closed <details> content can't be
  // reliably forced visible with a CSS display override, so toggle the real
  // `open` property on mouseenter/mouseleave instead)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    dds.forEach(function (d) {
      d.addEventListener('mouseenter', function () { if (wideNav.matches) d.open = true; });
      d.addEventListener('mouseleave', function () { if (wideNav.matches) d.open = false; });
      // Hover already controls open/close here, without this, clicking the
      // summary (which people do reflexively) fires the browser's native
      // toggle on top of the hover state and immediately closes the menu
      // that just opened, before a sub-link can be clicked.
      var summary = d.querySelector('summary');
      if (summary) summary.addEventListener('click', function (e) { if (wideNav.matches) e.preventDefault(); });
    });
  }

  // --- header scroll state -------------------------------------------
  // Scrolling down dissolves the bar to the mark plus one action; scrolling
  // back up (or reaching the top) brings the full nav back. While the mark
  // floats over a brand panel it flips to white so it stays legible.
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel, .syscount-one'));
  var lastY = window.scrollY, ticking = false;
  function overPanel() {
    for (var i = 0; i < panels.length; i++) {
      var r = panels[i].getBoundingClientRect();
      if (r.top < 36 && r.bottom > 36) return true;
    }
    return false;
  }
  function onScroll() {
    ticking = false;
    var y = window.scrollY;
    var menuOpen = dds.some(function (d) { return d.open; });
    if (y < 80) body.classList.remove('is-scrolled');
    else if (y > lastY + 4 && !menuOpen) body.classList.add('is-scrolled');
    else if (y < lastY - 4) body.classList.remove('is-scrolled');
    body.classList.toggle('on-panel', overPanel());
    lastY = y;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // --- misc --------------------------------------------------------
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // --- motion ----------------------------------------------------------
  // Progressive: with reduced motion (or no IntersectionObserver) nothing
  // below runs and the CSS shows every element in its final state.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canObserve = 'IntersectionObserver' in window;
  var docEl = document.documentElement;
  function onView(els, fn, opts) {
    if (!els.length) return;
    var o = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { o.unobserve(en.target); fn(en.target); } });
    }, opts || { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(els, function (el) { o.observe(el); });
  }
  // Runs `tick` only while the element is on screen and the tab is visible.
  function whileVisible(el, start, stop) {
    var on = false;
    function set(v) { if (v === on) return; on = v; (v ? start : stop)(); }
    var seen = false;
    new IntersectionObserver(function (e) { seen = e[0].isIntersecting; set(seen && !document.hidden); }, { rootMargin: '80px' }).observe(el);
    document.addEventListener('visibilitychange', function () { set(seen && !document.hidden); });
  }

  if (!reduceMotion && canObserve) {
    // Headlines arrive a word at a time.
    var headings = document.querySelectorAll('.hero h1, .section-head h2, .statement h2, .cta-band h2, .close-plan h2, .split-title');
    Array.prototype.forEach.call(headings, function (h) {
      var i = 0;
      (function walk(node) {
        Array.prototype.slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var parts = n.textContent.split(/(\s+)/), frag = document.createDocumentFragment();
            parts.forEach(function (part) {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
              var w = document.createElement('span'), inner = document.createElement('span');
              w.className = 'w'; inner.textContent = part; inner.style.setProperty('--i', i++);
              w.appendChild(inner); frag.appendChild(w);
            });
            node.replaceChild(frag, n);
          } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
        });
      })(h);
      h.setAttribute('data-words', '');
    });
    onView(headings, function (h) { h.classList.add('is-in'); }, { threshold: 0.3 });

    // Bordered groups bring their cells in one after another; single pieces rise whole.
    var groups = document.querySelectorAll(
      '.section .cells, .section .grid:not(.cells), .section .router-grid, .section .stats, .section .pillars, .section .impact-grid, ' +
      '.section .ladder, .section .tiers, .section .team-grid, .section .steps, .section .stack-grid, .section .jtbd, .section .verdict-box, ' +
      '.section .uc-grid, .section .pz-agents, .section .pz-groups, .section .pz-quotes, .section .pz-stories, .section .pz-levels, .section .pz-how, .section .pz-why5, .section .pz-none, .section .pz-trust, .section .pz-loop, ' +
      '.section .loop, .section .speeds, .section .speed-guards, .section .safe-items, .section .quick-check-items, .faq'
    );
    Array.prototype.forEach.call(groups, function (g) {
      if (g.closest('.reveal-group') || g.closest('.calc')) return;
      g.classList.add('reveal-group');
      Array.prototype.forEach.call(g.children, function (c, i) { c.style.setProperty('--i', Math.min(i, 9)); });
    });
    onView(document.querySelectorAll('.reveal-group'), function (g) { g.classList.add('is-visible'); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    var singles = document.querySelectorAll('.section .pz-two, .section .pz-out, .section .pz-daycmd, .section .pz-vs, .section .pz-teaser, .section .pz-jbaas, .section .pz-assess, .section .pz-run, .section .pz-struck, .section .pz-shift, .section .coexist, .section .split, .section .gem-stage, .section .gem-copy, .section .tbl-wrap, .section .calc, .section .stack-verdict, .section .gaps-block, main > .gaps-block, main > .one-system, .section .safe-strip, .section .form, .trust-bar .container, .logo-marquee');
    Array.prototype.forEach.call(singles, function (el) { if (!el.closest('.reveal-group')) el.classList.add('reveal'); });
    onView(document.querySelectorAll('.reveal'), function (el) { el.classList.add('is-visible'); });

    // The shift plays its three beats once it is on screen.
    onView(document.querySelectorAll('[data-shift]'), function (el) { el.classList.add('is-in'); }, { threshold: 0.3 });
    onView(document.querySelectorAll('.cta-band'), function (el) { el.classList.add('is-in'); }, { threshold: 0.25 });

    // Proof numbers count up once.
    onView(document.querySelectorAll('.stats .stat-n, .intel-big .stat-n'), function (el) {
      var m = /^(\d{1,4})(\+?)$/.exec(el.textContent.trim());
      if (!m) return;
      var end = Number(m[1]), t0 = null;
      el.style.fontVariantNumeric = 'tabular-nums';
      (function frame(t) {
        if (t0 === null) t0 = t;
        var p = Math.min(1, (t - t0) / 1100), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased) + m[2];
        if (p < 1) window.requestAnimationFrame(frame);
      })(window.performance.now());
    }, { threshold: 0.6 });

    // A few live dots on the gutter grid.
    var mainEl = document.querySelector('main');
    if (mainEl && window.innerWidth >= 1320 && document.body.hasAttribute('data-gutter-dots')) {
      var gutter = (window.innerWidth - 1200) / 2, mh = mainEl.offsetHeight, count = Math.min(40, Math.round(mh / 260));
      for (var gi = 0; gi < count; gi++) {
        var dot = document.createElement('i');
        var left = gi % 2 === 0;
        var gx = 60 + Math.floor(Math.random() * ((gutter - 84) / 12)) * 12;
        dot.className = 'gutter-dot';
        dot.style.top = (Math.floor(Math.random() * (mh / 12)) * 12) + 'px';
        dot.style[left ? 'left' : 'right'] = gx + 'px';
        dot.style.setProperty('--dx', (Math.random() < .5 ? 12 : 0) * (Math.random() < .5 ? -1 : 1) + 'px');
        dot.style.setProperty('--dy', (Math.random() < .5 ? 12 : 0) * (Math.random() < .5 ? -1 : 1) + 'px');
        dot.style.animationDelay = (-Math.random() * 2.4).toFixed(2) + 's';
        dot.style.animationDuration = (2 + Math.random() * 1.6).toFixed(2) + 's';
        mainEl.appendChild(dot);
      }
    }

    // Brand panels: the dot matrix becomes a slow field of light.
    Array.prototype.forEach.call(document.querySelectorAll('.hero-panel:not(.hero-home) .panel, .cta-band .panel, .panel:has(.close-plan)'), function (panel) {
      var cv = document.createElement('canvas'), ctx = cv.getContext('2d');
      if (!ctx) return;
      cv.className = 'panel-fx'; cv.setAttribute('aria-hidden', 'true');
      panel.insertBefore(cv, panel.firstChild);
      panel.classList.add('has-fx');
      var STEP = 8, w = 0, h = 0, raf = 0, last = 0;
      function size() { w = cv.width = panel.offsetWidth; h = cv.height = panel.offsetHeight; }
      function draw(now) {
        raf = window.requestAnimationFrame(draw);
        if (now - last < 50) return;
        last = now;
        var t = now / 1000, levels = [[], [], [], [], [], []];
        for (var y = 4; y < h; y += STEP) {
          var ny = y / h;
          for (var x = 4; x < w; x += STEP) {
            var nx = x / w;
            var v = Math.sin(nx * 9 + t * .55) * Math.cos(ny * 7 - t * .4) + Math.sin((nx + ny) * 5 - t * .7) * .6;
            var edge = Math.min(1, Math.min(nx, 1 - nx) * 7) * Math.min(1, Math.min(ny, 1 - ny) * 9);
            var a = (0.32 + v * 0.3) * (0.35 + edge * 0.65);
            var li = a <= 0.04 ? -1 : Math.min(5, Math.floor(a * 9));
            if (li >= 0) levels[li].push(x, y);
          }
        }
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = '#fff';
        for (var l = 0; l < 6; l++) {
          ctx.globalAlpha = 0.07 + l * 0.075;
          var arr = levels[l];
          for (var k = 0; k < arr.length; k += 2) ctx.fillRect(arr[k], arr[k + 1], 1.6, 1.6);
        }
      }
      size();
      window.addEventListener('resize', size);
      whileVisible(panel, function () { size(); raf = window.requestAnimationFrame(draw); }, function () { window.cancelAnimationFrame(raf); });
    });

    // The turning stone: a brilliant cut sampled into dots, lit from above.
    Array.prototype.forEach.call(document.querySelectorAll('[data-gem]'), function (stage) {
      var cv = stage.querySelector('canvas'), ctx = cv && cv.getContext('2d');
      if (!ctx) return;
      var pts = [], TAU = Math.PI * 2;
      function V(r, deg, y) { var a = deg * Math.PI / 180; return [Math.cos(a) * r, y, Math.sin(a) * r]; }
      function tri(a, b, c, n) {
        var ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
        var nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        nx /= len; ny /= len; nz /= len;
        // normals point away from the stone's axis
        var cx = (a[0] + b[0] + c[0]) / 3, cy = (a[1] + b[1] + c[1]) / 3 + .25, cz = (a[2] + b[2] + c[2]) / 3;
        if (nx * cx + ny * cy + nz * cz < 0) { nx = -nx; ny = -ny; nz = -nz; }
        for (var i = 0; i <= n; i++) for (var j = 0; j <= n - i; j++) {
          var s = i / n, t = j / n, r = 1 - s - t;
          pts.push([a[0] * r + b[0] * s + c[0] * t, a[1] * r + b[1] * s + c[1] * t, a[2] * r + b[2] * s + c[2] * t, nx, ny, nz, (i === 0 || j === 0 || i + j === n) ? 1 : 0]);
        }
      }
      var TOP = .46, GIRDLE = .14, C = [0, -1.02, 0], O = [0, TOP, 0];
      for (var i = 0; i < 8; i++) {
        var T0 = V(.54, i * 45 + 22.5, TOP), T1 = V(.54, i * 45 + 67.5, TOP);
        var G0 = V(1, i * 45, GIRDLE), G1 = V(1, i * 45 + 22.5, GIRDLE), G2 = V(1, i * 45 + 45, GIRDLE), G3 = V(1, i * 45 + 67.5, GIRDLE);
        tri(O, T0, T1, 6);
        tri(T0, G0, G1, 5); tri(T0, G1, G2, 5); tri(T0, T1, G2, 6);
        tri(C, G0, G1, 12); tri(C, G1, G2, 12);
        void G3;
      }
      var w = 0, h = 0, dpr = 1, raf = 0, ink = '#0013b7', faint = '#c9cdd8', amber = '#f6a723';
      function theme() {
        var cs = window.getComputedStyle(stage);
        ink = cs.getPropertyValue('--brand').trim() || ink;
        faint = cs.getPropertyValue('--line-2').trim() || faint;
      }
      function size() {
        dpr = Math.min(2, window.devicePixelRatio || 1);
        w = cv.clientWidth; h = cv.clientHeight;
        cv.width = w * dpr; cv.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      var nodes = Array.prototype.slice.call(stage.querySelectorAll('.gem-node'));
      function draw(now) {
        raf = window.requestAnimationFrame(draw);
        var t = now / 1000, ry = t * .22, rx = .2;
        var cy = Math.cos(ry), sy = Math.sin(ry), cxr = Math.cos(rx), sxr = Math.sin(rx);
        var S = Math.min(w * .3, h * .37), ox = w / 2, oy = h * .43;
        ctx.clearRect(0, 0, w, h);
        // wires from each module to the stone
        ctx.lineWidth = 1; ctx.strokeStyle = ink; ctx.globalAlpha = .45;
        ctx.setLineDash([3, 6]); ctx.lineDashOffset = -t * 14;
        nodes.forEach(function (n, k) {
          var nx = n.offsetLeft + n.offsetWidth / 2, ny = n.offsetTop + n.offsetHeight / 2;
          ctx.beginPath(); ctx.moveTo(nx, ny);
          ctx.quadraticCurveTo((nx + ox) / 2, ny + (k % 2 ? 50 : -50), ox + (nx < ox ? -S * .25 : S * .25), oy - S * .1);
          ctx.stroke();
        });
        ctx.setLineDash([]);
        for (var p = 0; p < pts.length; p++) {
          var q = pts[p];
          var x = q[0] * cy + q[2] * sy, z = -q[0] * sy + q[2] * cy, y = q[1];
          var y2 = y * cxr - z * sxr, z2 = y * sxr + z * cxr;
          var nxr = q[3] * cy + q[5] * sy, nzr = -q[3] * sy + q[5] * cy, nyr = q[4];
          var ny2 = nyr * cxr - nzr * sxr, nz2 = nyr * sxr + nzr * cxr;
          var px = ox + x * S, py = oy - y2 * S;
          if (nz2 < 0) { // far side: a faint ghost, which is what makes it read as glass
            if (!q[6]) continue;
            ctx.globalAlpha = .5; ctx.fillStyle = faint;
            ctx.fillRect(px - .6, py - .6, 1.2, 1.2);
            continue;
          }
          var light = Math.max(0, nxr * .35 + ny2 * .72 + nz2 * .6) + Math.max(0, -ny2 * .5 + nz2 * .45 - nxr * .2) * .7;
          var spark = light > .96 && ny2 > 0;
          ctx.fillStyle = spark ? amber : ink;
          ctx.globalAlpha = spark ? 1 : Math.min(1, .3 + light * .75 + (q[6] ? .2 : 0));
          var r = (q[6] ? 1.5 : 1.15) + z2 * .35 + (spark ? .5 : 0);
          ctx.beginPath(); ctx.arc(px, py, Math.max(.5, r), 0, TAU); ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
      theme(); size();
      window.addEventListener('resize', size);
      new MutationObserver(theme).observe(docEl, { attributes: true, attributeFilter: ['data-theme'] });
      whileVisible(stage, function () { size(); raf = window.requestAnimationFrame(draw); }, function () { window.cancelAnimationFrame(raf); });
    });

    // Hero conversation plays itself once: message, typing, reply.
    Array.prototype.forEach.call(document.querySelectorAll('.hero .mock'), function (mock) {
      var bubbles = Array.prototype.slice.call(mock.querySelectorAll('.bubble'));
      if (!bubbles.length) return;
      var foot = mock.querySelector('.mock-foot');
      var typing = document.createElement('span');
      typing.className = 'typing'; typing.setAttribute('aria-hidden', 'true');
      typing.innerHTML = '<i></i><i></i><i></i>';
      mock.appendChild(typing);
      mock.classList.add('is-play');
      onView([mock], function () {
        var at = 500;
        bubbles.forEach(function (b) {
          var out = b.classList.contains('out');
          if (out) {
            window.setTimeout(function () {
              typing.style.top = b.offsetTop + 'px';
              typing.style.right = '16px';
              typing.classList.add('is-on');
            }, at);
            at += 1300;
            window.setTimeout(function () { typing.classList.remove('is-on'); }, at - 150);
          }
          window.setTimeout(function () { b.classList.add('is-on'); }, at);
          at += out ? 1500 : 900;
        });
        window.setTimeout(function () { if (foot) foot.classList.add('is-on'); }, at);
      }, { threshold: 0.35 });
    });

    // Approval queue clears itself, then refills.
    Array.prototype.forEach.call(document.querySelectorAll('.mock'), function (mock) {
      var rows = Array.prototype.slice.call(mock.querySelectorAll('.mock-row'));
      if (!rows.length || !mock.querySelector('.chip-go')) return;
      var step = 0, timer = 0;
      function tick() {
        if (step < rows.length) {
          var go = rows[step].querySelector('.chip-go');
          rows[step].classList.add('is-done');
          if (go) { go.setAttribute('data-label', go.textContent); go.textContent = 'Approved ✓'; }
          step++;
        } else {
          rows.forEach(function (r) {
            var go = r.querySelector('.chip-go');
            r.classList.remove('is-done');
            if (go && go.getAttribute('data-label')) go.textContent = go.getAttribute('data-label');
          });
          step = 0;
        }
      }
      whileVisible(mock, function () { timer = window.setInterval(tick, 2400); }, function () { window.clearInterval(timer); });
    });

    // The agent loop steps through itself.
    Array.prototype.forEach.call(document.querySelectorAll('.loop'), function (loop) {
      var steps = loop.querySelectorAll('.loop-step'), i = -1, timer = 0;
      function tick() {
        if (i >= 0) steps[i].classList.remove('is-live');
        i = (i + 1) % steps.length;
        steps[i].classList.add('is-live');
      }
      whileVisible(loop, function () { tick(); timer = window.setInterval(tick, 1800); }, function () { window.clearInterval(timer); });
    });
  } else {
    docEl.classList.add('motion-failsafe');
  }

  // --- interactive graphics (run regardless of motion preference) --------
  // Count your own stack: each tap is one login, one bill, one vendor.
  Array.prototype.forEach.call(document.querySelectorAll('.split'), function (split) {
    var chips = Array.prototype.slice.call(split.querySelectorAll('.chaos-chip:not(.dup)'));
    var tally = split.querySelector('.split-tally'), n = split.querySelector('[data-n]');
    function update() {
      var c = chips.filter(function (b) { return b.getAttribute('aria-pressed') === 'true'; }).length;
      if (n) { n.textContent = c; n.classList.add('bump'); window.setTimeout(function () { n.classList.remove('bump'); }, 260); }
      if (tally) tally.innerHTML = c ? 'You run <b>' + c + '</b> system' + (c === 1 ? '' : 's') + ', <b>' + c + '</b> logins, <b>' + c + '</b> bills, <b>' + c + '</b> vendors, and your customer in pieces across all of them.' : '';
    }
    split.addEventListener('click', function (e) {
      var b = e.target.closest('.chaos-chip');
      if (!b) return;
      if (b.classList.contains('dup')) { b = chips[Array.prototype.indexOf.call(b.parentNode.children, b) % chips.length] || b; }
      split.classList.add('is-counting');
      b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      update();
    });
  });

  // Stack merge: tap the tools you run; each tap flies into the count, and
  // "merge" pulls every selected tool into the one platform.
  Array.prototype.forEach.call(document.querySelectorAll('[data-stackm]'), function (root) {
    var total = +root.getAttribute('data-total'), chips = Array.prototype.slice.call(root.querySelectorAll('.stackm-chip'));
    var nEl = root.querySelector('[data-stackm-n]'), tally = root.querySelector('[data-stackm-tally]'), label = root.querySelector('[data-stackm-label]');
    var panel = root.querySelector('[data-stackm-panel]'), go = root.querySelector('[data-stackm-go]');
    var depts = Array.prototype.slice.call(root.querySelectorAll('.stackm-dept'));
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var touched = false, merged = false, hintTimer = null, countTimer = null, shown = total;
    chips.forEach(function (c, i) { c.style.setProperty('--i', i); });
    function on(b) { return b.getAttribute('aria-pressed') === 'true'; }
    function picked() { return chips.filter(on); }
    function setNum(v) { shown = v; nEl.textContent = v; }
    function bump() { nEl.classList.add('bump'); window.setTimeout(function () { nEl.classList.remove('bump'); }, 260); }
    function hit() { panel.classList.remove('is-hit'); void panel.offsetWidth; panel.classList.add('is-hit'); }
    function update() {
      var c = picked().length;
      depts.forEach(function (d) {
        var n = chips.filter(function (x) { return x.getAttribute('data-g') === d.getAttribute('data-g') && on(x); }).length;
        d.classList.toggle('has', n > 0);
      });
      setNum(c || total); bump();
      label.textContent = c ? 'The ' + c + ' tool' + (c === 1 ? '' : 's') + ' you picked' : 'If you ran all ' + total + ' today';
      // What the selection costs today, row by row, and what each becomes.
      var nn = c || total, links = nn * (nn - 1) / 2, s = nn === 1 ? '' : 's';
      function row(n, what, to) { return '<li><b>' + n + '</b><span>' + what + '</span><i>' + to + '</i></li>'; }
      tally.innerHTML = '<span class="stackm-tally-short" data-stackm-short></span><ul class="stackm-rows">' +
        row(c || total, 'login' + s + ', bill' + s + ' and vendor' + s, '1') +
        row(links ? 'up to ' + links.toLocaleString('en-IN') : '0', 'integration' + (links === 1 ? '' : 's') + ' between them', '0') +
        row(c || total, 'place' + s + ' your data can leak', '1') + '</ul>';
      go.textContent = c ? 'Merge my ' + c + ' into one' : 'Merge them into one';
      calc();
    }
    // Money, hours and opportunity for the selection (or for every tool when
    // nothing is picked). Estimates from the published per-tool assumptions.
    var outEl = root.querySelector('[data-stackm-out]');
    function inr(n) { return '₹' + Math.round(n).toLocaleString('en-IN'); }
    function calc() {
      if (!outEl) return;
      var sel = picked(), c = sel.length, list = c ? sel : chips, n = list.length, tools = 0, hrs = 0;
      var plan = +outEl.getAttribute('data-plan'), locFee = +outEl.getAttribute('data-locfee'), base = +outEl.getAttribute('data-base'), share = +outEl.getAttribute('data-share'), match = +outEl.getAttribute('data-match'), week = +outEl.getAttribute('data-week');
      var v = {}; ['sal', 'enq', 'aov', 'rep', 'loc', 'team'].forEach(function (k) { v[k] = +root.querySelector('[data-stackm-in="' + k + '"]').value; });
      v.loc = Math.min(50, Math.max(1, Math.round(v.loc) || 1)); v.team = Math.min(500, Math.max(1, Math.round(v.team) || 1));
      // Per-outlet tools scale with showrooms, per-user tools with team size; the rest are flat.
      // Tools in the same overlap group are usually one product: charge the group once, at its highest price.
      var grp = {}, uf = v.team / base, ff = Math.min(2, Math.max(.5, Math.sqrt(uf)));
      list.forEach(function (x) {
        var s = x.getAttribute('data-s'), f = s === 'l' ? v.loc : s === 'u' ? uf : 1;
        var cst = (+x.getAttribute('data-c') || 0) * f, g = x.getAttribute('data-grp');
        hrs += (+x.getAttribute('data-h') || 0) * (s ? f : ff);
        if (g) grp[g] = Math.max(grp[g] || 0, cst); else tools += cst;
      });
      Object.keys(grp).forEach(function (g) { tools += grp[g]; });
      if (n > 1) hrs += n * match * (1 + .5 * (v.loc - 1));
      var cap = v.team * week * .6, capped = hrs > cap; if (capped) hrs = cap;
      var rate = v.sal / (week * 4.33), team = hrs * 4.33 * rate, left = team * (1 - share);
      var jw = plan + (v.loc - 1) * locFee;
      var today = tools + team, withJ = jw + left, saved = today - withJ, back = hrs * share;
      var opp = Math.max(0, v.enq * v.aov * (.95 - v.rep / 100) * (.15 - .03));
      function set(k, t) { var el = root.querySelector('[data-stackm-o="' + k + '"]'); if (el) el.textContent = t; }
      function tip(k, t) { var el = root.querySelector('[data-stackm-tip="' + k + '"]'); if (el) el.textContent = t; }
      set('today', inr(today)); set('with', inr(withJ)); set('hours', Math.round(back));
      set('people', (back / week).toFixed(1) + ' of ' + v.team);
      set('save-k', saved > 0 ? 'Saved a month' : 'Costs more a month'); set('save', inr(Math.abs(saved)));
      root.classList.toggle('is-neg', saved <= 0);
      root.querySelector('[data-stackm-opp]').textContent = inr(opp);
      var sized = v.loc + ' showroom' + (v.loc === 1 ? '' : 's') + ' and ' + v.team + ' team member' + (v.team === 1 ? '' : 's');
      tip('today', 'For ' + sized + ': subscriptions ' + inr(tools) + ' plus team time ' + inr(team) + ' (' + Math.round(hrs) + ' hours a week, about ' + (hrs / week).toFixed(1) + ' people running and matching these tools' + (capped ? '; capped at 60% of the team’s time' : '') + '). Average paid-plan prices; per-outlet tools counted per showroom, per-user tools by team size, and tools that are one product charged once.');
      tip('with', 'Jwero One ' + inr(plan) + (v.loc > 1 ? ' plus ' + inr((v.loc - 1) * locFee) + ' for ' + (v.loc - 1) + ' more showroom' + (v.loc === 2 ? '' : 's') : '') + ', with no charge per team member, plus the team time that remains, ' + inr(left) + ' (' + Math.round(hrs - back) + ' hours a week).' + (v.loc >= 6 ? ' From six showrooms, Enterprise terms apply and the real figure may differ.' : '') + ' The first month is ₹3,600 instead of ' + inr(plan) + '. Charges for messages, AI, calls and ads are left out on both sides.');
      tip('save', saved > 0 ? 'Today minus with Jwero. That is ' + inr(saved * 12) + ' a year.' : 'These tools cost less than Jwero One today. With this few, the gain is the time, not the money. Pick everything you really run.');
      tip('hours', 'Half of the ' + Math.round(hrs) + ' hours is counted as saved, because the work itself stays.');
      tip('people', 'Hours back divided by a ' + week + '-hour week: about ' + (back / week).toFixed(1) + ' of your ' + v.team + ' people could move to selling, service or the floor.');
      tip('opp', 'More sales you could reach by replying fast to every enquiry: ' + v.enq.toLocaleString('en-IN') + ' enquiries, ' + inr(v.aov) + ' average bill, ' + v.rep + '% answered within an hour today. Not added to the saving. Change these under Your numbers.');
      var short = root.querySelector('[data-stackm-short]'); if (short) short.textContent = saved > 0 ? 'Saves ' + inr(saved) + ' a month' : Math.round(back) + ' hours a week back';
      var li = root.querySelector('[data-stackm-in="loc"]'), ti = root.querySelector('[data-stackm-in="team"]'); if (document.activeElement !== li) li.value = v.loc; if (document.activeElement !== ti) ti.value = v.team;
      root.querySelector('[data-stackm-v="sal"]').textContent = inr(v.sal);
      root.querySelector('[data-stackm-v="enq"]').textContent = v.enq.toLocaleString('en-IN');
      root.querySelector('[data-stackm-v="aov"]').textContent = inr(v.aov);
      root.querySelector('[data-stackm-v="rep"]').textContent = v.rep + '%';
    }
    var enqTouched = false;
    function syncEnq() { if (enqTouched) return; var e = root.querySelector('[data-stackm-in="enq"]'), lo = Math.max(1, +root.querySelector('[data-stackm-in="loc"]').value || 1); e.value = Math.min(3000, 200 * lo); }
    if (outEl) {
      root.addEventListener('input', function (e) { var k = e.target.getAttribute && e.target.getAttribute('data-stackm-in'); if (k === 'enq') enqTouched = true; if (k === 'loc') syncEnq(); calc(); });
      calc();
    }
    function centre(el) { var r = el.getBoundingClientRect(), o = root.getBoundingClientRect(); return [r.left + r.width / 2 - o.left, r.top + r.height / 2 - o.top]; }
    function fly(chip) {
      if (calm || !root.animate) { hit(); return; }
      var a = centre(chip), b = centre(nEl), dot = document.createElement('i');
      dot.className = 'stackm-fly'; dot.style.left = a[0] + 'px'; dot.style.top = a[1] + 'px'; root.appendChild(dot);
      var anim = dot.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: 'translate(' + (b[0] - a[0]) * .5 + 'px,' + ((b[1] - a[1]) * .5 - 40) + 'px) scale(1.3)', opacity: 1, offset: .5 }, { transform: 'translate(' + (b[0] - a[0]) + 'px,' + (b[1] - a[1]) + 'px) scale(.4)', opacity: .2 }], { duration: 520, easing: 'cubic-bezier(.5,0,.3,1)' });
      anim.onfinish = function () { dot.remove(); hit(); };
    }
    function unmerge() {
      merged = false; window.clearInterval(countTimer); root.classList.remove('is-merged'); root.classList.remove('is-merging');
      chips.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      update();
    }
    function merge() {
      if (!picked().length) chips.forEach(function (x) { x.setAttribute('aria-pressed', 'true'); });
      update();
      var sel = picked(), b = centre(nEl), from = sel.length;
      sel.forEach(function (x, k) { var a = centre(x); x.style.setProperty('--dx', (b[0] - a[0]) + 'px'); x.style.setProperty('--dy', (b[1] - a[1]) + 'px'); x.style.setProperty('--m', k); });
      merged = true; root.classList.remove('is-filter'); root.classList.add('is-open');
      label.textContent = 'Merging';
      var steps = Math.min(from - 1, 24), k = 0;
      function done() { root.classList.add('is-merged'); label.textContent = 'What you run now'; tally.innerHTML = '<span class="stackm-tally-short" data-stackm-short></span><p class="stackm-merged"><b>' + from + '</b> tools, logins, bills and vendors are now <b>one</b>.</p>'; calc(); go.textContent = 'Start again'; }
      void root.offsetWidth; root.classList.add('is-merging');
      if (calm || steps < 1) { done(); return; }
      window.clearInterval(countTimer);
      countTimer = window.setInterval(function () {
        k += 1; setNum(Math.max(1, Math.round(from - (from - 1) * (k / steps)))); bump();
        if (k >= steps) { window.clearInterval(countTimer); done(); }
      }, 34);
    }
    root.addEventListener('click', function (e) {
      var b = e.target.closest('.stackm-chip'), d = e.target.closest('.stackm-dept');
      if (e.target.closest('[data-stackm-more]')) { root.classList.add('is-open'); return; }
      if (e.target.closest('[data-stackm-go]')) { touched = true; stopHint(); if (merged) unmerge(); else merge(); return; }
      var stp = e.target.closest('[data-stackm-step]');
      if (stp) { var inp = root.querySelector('[data-stackm-in="' + stp.getAttribute('data-stackm-step') + '"]'); inp.value = Math.min(+inp.max, Math.max(+inp.min, (Math.round(+inp.value) || 1) + (+stp.getAttribute('data-d')))); if (stp.getAttribute('data-stackm-step') === 'loc') syncEnq(); calc(); return; }
      if (e.target.closest('[data-stackm-open]')) { var dg = root.querySelector('[data-stackm-dlg="' + e.target.closest('[data-stackm-open]').getAttribute('data-stackm-open') + '"]'); if (dg && dg.showModal) dg.showModal(); return; }
      if (e.target.closest('[data-stackm-exp]')) { var eb = e.target.closest('[data-stackm-exp]'), ex = panel.classList.toggle('is-exp'); eb.setAttribute('aria-expanded', String(ex)); eb.textContent = ex ? 'Close' : 'Details'; return; }
      if (merged) return;
      if (b) { var was = on(b); b.setAttribute('aria-pressed', was ? 'false' : 'true'); if (!was) fly(b); }
      else if (d) {
        var g = d.getAttribute('data-g'), mine = chips.filter(function (x) { return x.getAttribute('data-g') === g; });
        var all = mine.every(on);
        mine.forEach(function (x) { x.setAttribute('aria-pressed', all ? 'false' : 'true'); });
        root.classList.add('is-open'); if (!all) hit();
      }
      else if (e.target.closest('[data-stackm-all]')) { chips.forEach(function (x) { x.setAttribute('aria-pressed', 'true'); }); root.classList.add('is-open'); hit(); }
      else if (e.target.closest('[data-stackm-clear]')) chips.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      else return;
      touched = true; stopHint(); update();
    });
    // Hovering a department lights its tools and dims the rest.
    depts.forEach(function (d) {
      function lit(yes) {
        if (merged) return;
        var g = d.getAttribute('data-g');
        root.classList.toggle('is-filter', yes); d.classList.toggle('is-on', yes);
        chips.forEach(function (x) { x.classList.toggle('is-lit', yes && x.getAttribute('data-g') === g); });
      }
      d.addEventListener('mouseenter', function () { lit(true); }); d.addEventListener('mouseleave', function () { lit(false); });
      d.addEventListener('focus', function () { lit(true); }); d.addEventListener('blur', function () { lit(false); });
    });
    // Until the first tap, one tool at a time glows as an invitation.
    function stopHint() { window.clearInterval(hintTimer); hintTimer = null; chips.forEach(function (x) { x.classList.remove('is-hint'); }); }
    function startHint() {
      if (touched || calm || hintTimer) return;
      hintTimer = window.setInterval(function () {
        chips.forEach(function (x) { x.classList.remove('is-hint'); });
        var vis = chips.filter(function (x) { return x.offsetParent && x.offsetTop < x.parentNode.clientHeight; });
        if (vis.length) vis[Math.floor(Math.random() * vis.length)].classList.add('is-hint');
      }, 1100);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (en.isIntersecting) { root.classList.add('is-in'); window.setTimeout(function () { root.classList.add('is-ready'); }, 1400); startHint(); }
          else if (hintTimer) { window.clearInterval(hintTimer); hintTimer = null; }
        });
      }, { threshold: .15 }).observe(root);
    } else { root.classList.add('is-in'); root.classList.add('is-ready'); }
  });

  // Ask the stone what a module reads and writes.
  Array.prototype.forEach.call(document.querySelectorAll('[data-gem]'), function (stage) {
    var nodes = Array.prototype.slice.call(stage.querySelectorAll('.gem-node'));
    function show(node, on) {
      var note = document.getElementById(node.getAttribute('aria-describedby'));
      nodes.forEach(function (o) { if (o !== node) { o.setAttribute('aria-expanded', 'false'); var x = document.getElementById(o.getAttribute('aria-describedby')); if (x) x.classList.remove('is-on'); } });
      node.setAttribute('aria-expanded', on ? 'true' : 'false');
      if (note) note.classList.toggle('is-on', on);
      stage.classList.toggle('has-note', on);
    }
    nodes.forEach(function (node) {
      node.addEventListener('click', function () { show(node, node.getAttribute('aria-expanded') !== 'true'); });
      node.addEventListener('mouseenter', function () { show(node, true); });
      node.addEventListener('focus', function () { show(node, true); });
      node.addEventListener('blur', function () { show(node, false); });
    });
    stage.addEventListener('mouseleave', function () { nodes.forEach(function (o) { show(o, false); }); });
  });

  // The stone as the customer record (home). A week plays through it; it breaks
  // into the tools the record lives in today; it turns under the finger; a facet
  // opens its module; writes run in blue, reads in amber; a rate change ripples
  // across every price at once. The module set follows the header's "I run a…".
  Array.prototype.forEach.call(document.querySelectorAll('[data-gem2]'), function (root) {
    var DATA; try { DATA = JSON.parse(root.querySelector('[data-gem2-json]').textContent); } catch (e) { return; }
    var key = root.getAttribute('data-set') || personaKey(); var set = DATA.sets[key] || DATA.sets.single;
    var fixedMetal = root.getAttribute('data-fixed-metal');
    var stage = root.querySelector('.gem2-stage'), cv = stage.querySelector('canvas'), ctx = cv.getContext && cv.getContext('2d');
    var nodesEl = root.querySelector('[data-gem2-nodes]'), shardsEl = root.querySelector('[data-gem2-shards]'), centreEl = root.querySelector('[data-gem2-centre]');
    var linesEl = root.querySelector('[data-gem2-lines]'), noteEl = root.querySelector('[data-gem2-note]'), eventsEl = root.querySelector('[data-gem2-events]');
    var capEl = root.querySelector('[data-gem2-caption]'), loop = root.hasAttribute('data-loop');
    var cardTitle = root.querySelector('[data-gem2-cardtitle]'), cardTag = root.querySelector('[data-gem2-cardtag]'), playBtn = root.querySelector('[data-gem2-play]');
    var esc2 = function (t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
    var FAMS = DATA.families || [], famBtns = Array.prototype.slice.call(root.querySelectorAll('.gem2-fam')), heardEl = root.querySelector('[data-gem2-heard]'), sigNote = root.querySelector('[data-gem2-signote]'), famOpen = -1;
    var N = set.modules.length, mode = 'os', active = -1, step = -1, timer = null;

    // ---- markup for this kind of business
    nodesEl.innerHTML = set.modules.map(function (m, k) { return '<button type="button" class="gem2-node" data-k="' + k + '">' + (DATA.icons[m[0]] || '') + '<span>' + esc2(m[1]) + '</span><em>Repriced</em><u class="gem2-n"></u></button>'; }).join('');
    shardsEl.innerHTML = set.tools.map(function (t, g) { return '<span class="gem2-shard" data-g="' + g + '">' + esc2(t) + '</span>'; }).join('');
    eventsEl.innerHTML = set.week.map(function (e, k) { return '<li><button type="button" data-ev="' + k + '"><b>' + esc2(e[0]) + '</b><span>' + esc2(e[1]) + '</span></button></li>'; }).join('');
    centreEl.innerHTML = (function (t) { var m = /^(.*?),?\s+(on one record|record)$/i.exec(t), e = function (x) { return x.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }; return m ? e(m[1]) + '<br>' + e(m[2]) : e(t); })(set.centre); cardTitle.textContent = set.centre;
    var nodeBtns = Array.prototype.slice.call(nodesEl.querySelectorAll('.gem2-node'));
    var shardEls = Array.prototype.slice.call(shardsEl.children), evBtns = Array.prototype.slice.call(eventsEl.querySelectorAll('button'));

    // ---- geometry: two shapes built from flat facets. Every facet knows which
    // quarter it breaks away with (grp) and which module's stretch it belongs to (mod).
    var TAU = Math.PI * 2, SHAPES = { diamond: [], bangle: [] };
    function V(r, deg, y) { var a = deg * Math.PI / 180; return [Math.cos(a) * r, y, Math.sin(a) * r]; }
    function facet(list, vs, o) {
      var a = vs[0], b = vs[1], c = vs[2], n = o.n;
      var cx = 0, cy = 0, cz = 0; vs.forEach(function (v) { cx += v[0]; cy += v[1]; cz += v[2]; }); cx /= vs.length; cy /= vs.length; cz /= vs.length;
      if (!n) {
        var ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
        var nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        nx /= len; ny /= len; nz /= len;
        if (nx * cx + ny * (cy + .25) + nz * cz < 0) { nx = -nx; ny = -ny; nz = -nz; }
        n = [nx, ny, nz];
      }
      list.push({ v: vs, n: n, c: [cx, cy, cz], grp: o.grp, mod: o.mod, kind: o.kind, e: o.e, ang: o.ang || 0 });
    }
    // brilliant cut: table, crown, pavilion
    (function () {
      var TOP = .44, GIRDLE = .12, CULET = [0, -1.04, 0], O = [0, TOP, 0];
      for (var i = 0; i < 8; i++) {
        var T0 = V(.56, i * 45, TOP), T1 = V(.56, i * 45 + 45, TOP);
        var G0 = V(1, i * 45, GIRDLE), Gm = V(1, i * 45 + 22.5, GIRDLE), G1 = V(1, i * 45 + 45, GIRDLE);
        var o = function (kind, e) { return { grp: i >> 1, mod: Math.min(N - 1, Math.floor(i * N / 8)), kind: kind, e: e }; };
        facet(SHAPES.diamond, [O, T0, T1], o(0, [0, 1, 0]));
        facet(SHAPES.diamond, [T0, Gm, T1], o(1, [1, 1, 0]));
        facet(SHAPES.diamond, [T0, G0, Gm], o(1, [1, 1, 1]));
        facet(SHAPES.diamond, [T1, Gm, G1], o(1, [1, 1, 1]));
        facet(SHAPES.diamond, [CULET, G0, Gm], o(2, [1, 1, 1]));
        facet(SHAPES.diamond, [CULET, Gm, G1], o(2, [1, 1, 1]));
      }
    })();
    // bangle: a band standing upright, facing the reader
    (function () {
      var M = 72, m = 12, R = .86, TR = .085, TZ = .22, QUAD = [1, 0, 2, 3];
      function P(u, v) { var a = u / M * TAU, b = v / m * TAU, rr = R + TR * Math.cos(b); return [rr * Math.cos(a), rr * Math.sin(a), TZ * Math.sin(b)]; }
      for (var u = 0; u < M; u++) for (var v = 0; v < m; v++) {
        var am = (u + .5) / M * TAU, bm = (v + .5) / m * TAU;
        var nx = Math.cos(bm) * Math.cos(am) / TR, ny = Math.cos(bm) * Math.sin(am) / TR, nz = Math.sin(bm) / TZ, len = Math.sqrt(nx * nx + ny * ny + nz * nz);
        // the stretch of band nearest each module: screen angle runs clockwise from the top
        var scr = ((90 - (u + .5) / M * 360) % 360 + 360) % 360;
        facet(SHAPES.bangle, [P(u, v), P(u + 1, v), P(u + 1, v + 1), P(u, v + 1)], { n: [nx / len, ny / len, nz / len], grp: QUAD[Math.floor(u / (M / 4))], mod: Math.min(N - 1, Math.floor(scr / (360 / N))), kind: 1, ang: (u + .5) / M });
      }
    })();
    var METALS = {
      gold: { shape: 'bangle', base: '#d4a21f', dark: '#8a6408', lite: '#fff1b8', word: 'gold' },
      silver: { shape: 'bangle', base: '#b9c0c8', dark: '#6b737c', lite: '#ffffff', word: 'silver' },
      platinum: { shape: 'bangle', base: '#9fa9b6', dark: '#4f5967', lite: '#f1f5fa', word: 'platinum' },
      diamond: { shape: 'diamond', word: 'gold' },
    };
    function hex(h) { h = h.replace('#', ''); if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]; return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
    function mix(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
    Object.keys(METALS).forEach(function (k) { var M0 = METALS[k]; if (M0.base) { M0.rgb = hex(M0.base); M0.lrgb = hex(M0.lite); M0.drgb = hex(M0.dark); } });
    var INK = [0, 19, 183], AMB = [246, 167, 35];
    var metal = fixedMetal || 'gold'; if (!fixedMetal) { try { metal = localStorage.getItem('jwero-metal') || 'gold'; } catch (e) {} }
    if (!fixedMetal && metal !== 'gold' && metal !== 'diamond') metal = 'gold';
    if (!METALS[metal]) metal = 'gold';
    var facets = SHAPES[METALS[metal].shape];

    // ---- state the frame loop reads
    var w = 0, h = 0, dpr = 1, raf = 0, ink = '#0013b7', faint = '#c9cdd8', amber = '#f6a723';
    var spin = 0, rotY = 0, rotX = .2, dragging = false, lastX = 0, lastY = 0, lastT = 0;
    var explode = 0, explodeTo = 0, glow = [], pulses = [], ripple = -1, ox = 0, oy = 0, S = 1, nodePos = [];
    var DIRS = [[-1, -.62], [1, -.62], [-1, .7], [1, .7]];
    for (var g0 = 0; g0 < N; g0++) glow.push(0);
    function theme() { var cs = window.getComputedStyle(root); ink = cs.getPropertyValue('--brand').trim() || ink; faint = cs.getPropertyValue('--line-2').trim() || faint; if (/^#[0-9a-f]{3,6}$/i.test(ink)) INK = hex(ink); }
    function layout() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = stage.clientWidth; h = stage.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr; if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var small = w < 520;
      S = Math.min(w * (small ? .2 : .22), h * .32); ox = w / 2; oy = h * .47;
      var rx = Math.min(w / 2 - (small ? 34 : 70), S * (small ? 2.05 : 2.5)), ry = Math.min(h / 2 - 46, S * 1.55);
      nodePos = [];
      nodeBtns.forEach(function (b, k) {
        var a = -Math.PI / 2 + (k + .5) * TAU / N, x = ox + Math.cos(a) * rx, y = oy + Math.sin(a) * ry;
        nodePos.push([x, y, a]); b.style.left = x + 'px'; b.style.top = y + 'px';
      });
      shardEls.forEach(function (el, g) { el.style.left = (ox + DIRS[g][0] * S * .78) + 'px'; el.style.top = (oy + DIRS[g][1] * S * .66 + (DIRS[g][1] < 0 ? -S * .1 : S * .1)) + 'px'; });
      centreEl.style.top = (METALS[metal].shape === 'bangle' && !small ? oy - 15 : oy + S * 1.22) + 'px';
    }
    function sectorOf(k) { return [Math.floor(k * 8 / N), Math.floor((k + 1) * 8 / N)]; }
    function wireEnd(k) {
      if (explode > .5) { var g = set.modules[k][5]; return [ox + DIRS[g][0] * S * .72 * explode, oy + DIRS[g][1] * S * .62 * explode]; }
      var p = nodePos[k], rr = METALS[metal].shape === 'bangle' ? [.98, .98] : [.55, .4]; return [ox + Math.cos(p[2]) * S * rr[0], oy + Math.sin(p[2]) * S * rr[1]];
    }
    function draw(now) {
      raf = window.requestAnimationFrame(draw);
      if (!ctx) return;
      var t = now / 1000, dt = lastT ? Math.min(.05, t - lastT) : 0; lastT = t;
      if (!dragging) spin += dt * (mode === 'today' ? .1 : .22);
      explode += (explodeTo - explode) * Math.min(1, dt * 5);
      var bangle = METALS[metal].shape === 'bangle';
      var ry = (bangle ? Math.sin(spin * 1.5) * (.62 - .4 * explode) : spin) + rotY, rxx = bangle ? rotX - .08 : rotX, cy = Math.cos(ry), sy = Math.sin(ry), cxr = Math.cos(rxx), sxr = Math.sin(rxx);
      ctx.clearRect(0, 0, w, h);
      // wires: module → the record (or, today, → the one tool that knows)
      ctx.lineWidth = 1; ctx.setLineDash([3, 6]); ctx.lineDashOffset = -t * 14;
      for (var k = 0; k < N; k++) {
        var p = nodePos[k], e = wireEnd(k);
        ctx.strokeStyle = k === active ? ink : faint; ctx.globalAlpha = k === active ? .9 : .8;
        ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(e[0], e[1]); ctx.stroke();
      }
      ctx.setLineDash([]);
      // the piece: a bangle in metal, or the stone in glass
      var MT = METALS[metal], isMetal = MT.shape === 'bangle';
      var front = ripple >= 0 ? (isMetal ? ripple : 1.1 - ripple * 2.4) : 9, k2 = 1 - .36 * explode, best = null;
      var sh = ctx.createRadialGradient(ox, oy + S * 1.12, 0, ox, oy + S * 1.12, S * .9), shc = isMetal ? '20, 16, 0' : '0, 19, 183';
      sh.addColorStop(0, 'rgba(' + shc + ', ' + (.1 * (1 - explode)) + ')'); sh.addColorStop(1, 'rgba(' + shc + ', 0)');
      ctx.globalAlpha = 1; ctx.fillStyle = sh; ctx.beginPath(); ctx.ellipse(ox, oy + S * 1.12, S * .9, S * .14, 0, 0, TAU); ctx.fill();
      var list = [];
      for (var f0 = 0; f0 < facets.length; f0++) {
        var F = facets[f0], n = F.n;
        var nxr = n[0] * cy + n[2] * sy, nzr = -n[0] * sy + n[2] * cy, ny2 = n[1] * cxr - nzr * sxr, nz2 = n[1] * sxr + nzr * cxr;
        if (isMetal && nz2 < 0) continue; // metal is opaque: the far side is simply hidden
        var grp = F.grp, dx = DIRS[grp][0] * S * .72 * explode, dy = DIRS[grp][1] * S * .62 * explode, P = [], zs = 0;
        for (var v0 = 0; v0 < F.v.length; v0++) {
          var q = F.v[v0], x = q[0] * cy + q[2] * sy, z = -q[0] * sy + q[2] * cy, y2 = q[1] * cxr - z * sxr;
          zs += q[1] * sxr + z * cxr;
          P.push(ox + x * S * k2 + dx, oy - y2 * S * k2 + dy);
        }
        var hot = 0;
        if (explode < .5) hot = glow[F.mod] > .02 ? glow[F.mod] : 0;
        else { for (var m2 = 0; m2 < N; m2++) if (glow[m2] > .02 && set.modules[m2][5] === grp) hot = Math.max(hot, glow[m2]); }
        var shine = isMetal ? (ripple >= 0 && Math.abs(((F.ang - front + 1.5) % 1) - .5) < .05 ? 1 : 0) : (Math.abs(F.c[1] - front) < .22 ? 1 : 0);
        var light = Math.max(0, nxr * .35 + ny2 * .72 + nz2 * .6) + Math.max(0, -ny2 * .5 + nz2 * .45 - nxr * .2) * .6;
        list.push({ P: P, z: zs / F.v.length, front: nz2 >= 0, light: Math.min(1, light), hot: hot, shine: shine, F: F });
      }
      list.sort(function (a3, b3) { return a3.z - b3.z; });
      ctx.lineJoin = 'round';
      for (var l0 = 0; l0 < list.length; l0++) {
        var it = list[l0], P2 = it.P, F2 = it.F, np = P2.length / 2;
        ctx.beginPath(); ctx.moveTo(P2[0], P2[1]); for (var p0 = 1; p0 < np; p0++) ctx.lineTo(P2[p0 * 2], P2[p0 * 2 + 1]); ctx.closePath();
        if (isMetal) {
          // solid metal: base colour, then light or shade laid over it, then the module's own tint
          // one blended colour per facet, filled and stroked alike, so the band reads as smooth metal
          var col = it.light > .5 ? mix(MT.rgb, MT.lrgb, Math.min(.9, (it.light - .5) * 1.7)) : mix(MT.rgb, MT.drgb, Math.min(.75, (.5 - it.light) * 1.6));
          if (it.shine) col = mix(col, [255, 255, 255], .85);
          else if (it.hot > .2) col = mix(col, explode > .5 ? AMB : INK, .3 + it.hot * .45);
          var css = 'rgb(' + (col[0] | 0) + ',' + (col[1] | 0) + ',' + (col[2] | 0) + ')';
          ctx.globalAlpha = 1; ctx.fillStyle = css; ctx.fill(); ctx.strokeStyle = css; ctx.lineWidth = 1; ctx.stroke();
          if (it.light > .97 && (!best || it.light > best.light)) best = it;
          continue;
        }
        var lit = it.hot > .2 || it.shine;
        if (!it.front) { ctx.globalAlpha = .28; ctx.strokeStyle = faint; ctx.lineWidth = .75; ctx.stroke(); continue; }
        ctx.fillStyle = lit ? amber : ink;
        ctx.globalAlpha = lit ? .18 + Math.max(it.hot, it.shine) * .5 : (F2.kind === 0 ? .05 + (1 - it.light) * .06 : .06 + (1 - it.light) * .26);
        ctx.fill();
        if (it.light > .93 && !lit) { ctx.fillStyle = '#fff'; ctx.globalAlpha = (it.light - .93) * 9; ctx.fill(); }
        ctx.strokeStyle = lit ? amber : ink; ctx.globalAlpha = .55 + it.light * .3; ctx.lineWidth = 1;
        for (var e0 = 0; e0 < np; e0++) {
          if (F2.e && !F2.e[e0]) continue;
          var j0 = e0 * 2, j1 = ((e0 + 1) % np) * 2;
          ctx.beginPath(); ctx.moveTo(P2[j0], P2[j0 + 1]); ctx.lineTo(P2[j1], P2[j1 + 1]); ctx.stroke();
        }
        if (it.light > .96 && F2.kind === 1 && !lit && (!best || it.light > best.light)) best = it;
      }
      if (best && explode < .5) {
        var B = best.P, gx = 0, gy = 0; for (var b0 = 0; b0 < B.length; b0 += 2) { gx += B[b0]; gy += B[b0 + 1]; } gx /= B.length / 2; gy /= B.length / 2;
        var gl = isMetal ? 7 : 4 + (best.light - .96) * 180;
        ctx.globalAlpha = .95; ctx.strokeStyle = isMetal ? '#fff' : amber; ctx.lineWidth = 1.5; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(gx - gl, gy); ctx.lineTo(gx + gl, gy); ctx.moveTo(gx, gy - gl); ctx.lineTo(gx, gy + gl); ctx.stroke();
      }
      ctx.lineWidth = 1;
      // pulses along the wires: blue in = write, amber out = read
      for (var i2 = pulses.length - 1; i2 >= 0; i2--) {
        var pu = pulses[i2], u = (t - pu.t0) / .7;
        if (u < 0) continue;
        if (u > 1) { pulses.splice(i2, 1); continue; }
        var a2 = nodePos[pu.k], b2 = wireEnd(pu.k), v = pu.read ? 1 - u : u;
        ctx.globalAlpha = 1 - Math.abs(u - .5) * .8; ctx.fillStyle = pu.read ? amber : ink;
        ctx.beginPath(); ctx.arc(a2[0] + (b2[0] - a2[0]) * v, a2[1] + (b2[1] - a2[1]) * v, 4.5, 0, TAU); ctx.fill();
      }
      for (var g1 = 0; g1 < N; g1++) glow[g1] *= Math.pow(.2, dt);
      if (ripple >= 0) { ripple += dt * .9; if (ripple > 1) ripple = -1; }
      ctx.globalAlpha = 1;
    }
    function pulse(k, read, delay) { pulses.push({ k: k, read: read, t0: window.performance.now() / 1000 + (delay || 0) }); }

    // ---- what the card says
    function line(k, isRate) {
      var ev = set.week[k];
      if (isRate) return '<li class="is-rate"><b>Rate</b><span>' + (mode === 'today' ? 'The rate moved. Each tool is repriced by hand, or isn’t.' : 'The rate moved. One rule repriced every channel at once.') + '</span></li>';
      var tool = set.tools[set.modules[ev[2]][5]];
      var chips = (ev[4] || []).map(function (g) { return '<i>' + esc2(g[1]) + '</i>'; }).join('');
      return '<li><b>' + esc2(ev[0]) + '</b><span>' + esc2(mode === 'today' ? ev[1] + ', known only to: ' + tool : ev[3]) + (chips ? '<span class="gem2-chips">' + chips + '</span>' : '') + '</span></li>';
    }
    var rated = false;
    // The signal board: 198 dots in ten families; the ones this week has fired are lit.
    function fired() {
      var per = FAMS.map(function () { return []; }), seen = {};
      function add(g) { var id = g[0] + '|' + g[1]; if (seen[id]) return; seen[id] = 1; if (per[g[0]]) per[g[0]].push(g[1]); }
      for (var k = 0; k <= step; k++) (set.week[k][4] || []).forEach(add);
      if (rated && METALS[metal].word === 'gold') add([4, 'Gold rate increased']);
      return per;
    }
    // One family at a time: the one the current event belongs to. An event that
    // fires in two families offers the second as a small switch.
    var shown = -1, lastStep = -2, lastRated = false;
    function renderSignals() {
      if (!famBtns.length) return;
      var per = fired(), total = 0, latest = step >= 0 ? (set.week[step][4] || []) : [];
      per.forEach(function (x) { total += x.length; });
      if (rated && !lastRated && METALS[metal].word === 'gold') shown = 4;
      else if (step !== lastStep) shown = latest.length ? latest[0][0] : -1;
      lastStep = step; lastRated = rated;
      var live = []; latest.forEach(function (g) { if (live.indexOf(g[0]) === -1) live.push(g[0]); });
      if (rated && METALS[metal].word === 'gold' && live.indexOf(4) === -1) live.push(4);
      famBtns.forEach(function (b, f) {
        var dots = b.querySelectorAll('.gem2-dots i'), n = per[f].length;
        for (var d = 0; d < dots.length; d++) {
          var on = d < n, was = dots[d].classList.contains('is-on');
          dots[d].classList.toggle('is-on', on); dots[d].title = on ? per[f][d] : '';
          if (on && (!was || f === shown && step !== -1 && latest.some(function (g) { return g[0] === f && g[1] === per[f][d]; }))) { dots[d].classList.remove('is-new'); void dots[d].offsetWidth; dots[d].classList.add('is-new'); }
        }
        b.classList.toggle('is-shown', f === shown);
      });
      root.querySelector('[data-gem2-signals]').classList.toggle('is-idle', shown < 0);
      if (heardEl) heardEl.textContent = total + ' of 198';
      if (shown < 0) { sigNote.innerHTML = 'Press play. Each event shows the family of signals it fires, one family at a time.'; return; }
      var F = FAMS[shown], on = per[shown], now = latest.filter(function (g) { return g[0] === shown; }).map(function (g) { return g[1]; });
      var also = live.filter(function (f) { return f !== shown; });
      sigNote.innerHTML =
        (on.length ? '<span class="gem2-heard">' + on.map(function (n) { return '<i' + (now.indexOf(n) !== -1 ? ' class="is-now"' : '') + '>' + esc2(n) + '</i>'; }).join('') + '</span>' : '') +
        '<span class="gem2-also">Also listens for ' + F[2].filter(function (n) { return on.indexOf(n) === -1; }).map(esc2).join(', ') + ' and ' + Math.max(0, F[1] - on.length - F[2].length) + ' more.</span>' +
        (also.length ? '<span class="gem2-switchfam">This event also fired in: ' + also.map(function (f) { return '<button type="button" data-showfam="' + f + '">' + esc2(FAMS[f][0]) + '</button>'; }).join(' ') + '</span>' : '');
    }
    function renderLines() {
      var html = '';
      for (var k = 0; k <= step; k++) html += line(k);
      if (rated) html += line(0, true);
      linesEl.classList.remove('is-fresh'); void linesEl.offsetWidth; linesEl.classList.add('is-fresh');
      linesEl.innerHTML = html || '<li class="gem2-empty">Press play. Watch one week land on ' + (mode === 'today' ? 'four different tools.' : 'one record.') + '</li>';
      renderSignals();
      linesEl.scrollTop = linesEl.scrollHeight;
      cardTag.textContent = mode === 'today' ? 'SCATTERED ACROSS YOUR TOOLS' : 'ON THE RECORD';
      cardTitle.textContent = mode === 'today' ? set.tools.length + ' tools, ' + set.tools.length + ' partial copies' : set.centre;
    }
    function select(k, quiet) {
      active = k;
      nodeBtns.forEach(function (b, j) { b.classList.toggle('is-on', j === k); });
      shardEls.forEach(function (el, g) { el.classList.toggle('is-on', k >= 0 && set.modules[k][5] === g); });
      if (k < 0) { noteEl.hidden = true; return; }
      var m = set.modules[k];
      glow[k] = 1;
      if (!quiet) { pulse(k, true, 0); pulse(k, false, .45); }
      noteEl.hidden = false;
      noteEl.innerHTML = '<strong>' + esc2(m[1]) + '</strong>' +
        (mode === 'today' ? '<span>Today this lives in <b>' + esc2(set.tools[m[5]]) + '</b>. Nothing else sees it.</span>'
          : '<span><i class="lg-r"></i>Reads ' + esc2(m[2]) + '.</span><span><i class="lg-w"></i>Writes ' + esc2(m[3]) + '.</span>') +
        '<a href="' + m[4] + '">Open ' + esc2(m[1]) + ' →</a>';
    }
    function go(k) {
      step = k;
      evBtns.forEach(function (b, j) { b.classList.toggle('is-on', j === k); b.classList.toggle('is-done', j < k); });
      if (k < 0) { renderLines(); select(-1); return; }
      var ev = set.week[k];
      select(ev[2], true); pulse(ev[2], false, 0); glow[ev[2]] = 1;
      if (capEl) capEl.innerHTML = '<b>' + esc2(ev[0]) + '</b>' + esc2(ev[1]) + '<span>' + esc2(ev[3]) + '</span>';
      renderLines();
      var on = evBtns[k]; if (on && eventsEl.scrollTo) eventsEl.scrollTo({ left: on.parentNode.offsetLeft - 16, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } playBtn.textContent = step >= set.week.length - 1 ? 'Replay the week' : 'Play the week'; playBtn.setAttribute('aria-pressed', 'false'); }
    function play() {
      if (timer) return stop();
      if (step >= set.week.length - 1) { rated = false; go(-1); }
      playBtn.textContent = 'Pause'; playBtn.setAttribute('aria-pressed', 'true');
      go(step + 1);
      timer = window.setInterval(function () { if (step >= set.week.length - 1) { if (loop) { rated = false; go(0); } else stop(); return; } go(step + 1); }, loop ? 3200 : 2600);
    }
    function setMode(mo) {
      if (dayOn && mo !== 'os') { dayExit(); }
      mode = mo; explodeTo = mo === 'today' ? 1 : 0;
      root.classList.toggle('is-today', mo === 'today');
      Array.prototype.forEach.call(root.querySelectorAll('[data-gem2-mode]'), function (b) { var on = b.getAttribute('data-gem2-mode') === mo; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
      renderLines(); if (active >= 0) select(active, true);
    }
    function rate() {
      rated = true; ripple = 0;
      var n = 0;
      set.modules.forEach(function (m, k) {
        if (!m[6]) return;
        var b = nodeBtns[k], d = n++ * (mode === 'today' ? 900 : 140);
        window.setTimeout(function () { b.classList.add('is-repriced'); glow[k] = 1; pulse(k, true, 0); window.setTimeout(function () { b.classList.remove('is-repriced'); }, 2400); }, 250 + d);
      });
      renderLines();
    }

    // ---- a full day: many small events across every department, counted by
    // who did them (the system, AI waiting for a yes, or your team).
    var dayBtn = root.querySelector('[data-gem2-day]'), dayOn = false, dayTimer = null, dayStep = -1, dayN = { all: 0, a: 0, q: 0, t: 0 }, modN = [], dayFeed = [];
    var KIND = { a: 'Done by the system', q: 'Waiting for your yes', t: 'Your team' };
    function dayPaint(summary) {
      ['all', 'a', 'q', 't'].forEach(function (k) { var el = root.querySelector('[data-gem2-dn="' + k + '"]'); if (el) el.textContent = dayN[k]; });
      nodeBtns.forEach(function (b, k) { var u = b.querySelector('.gem2-n'); if (u) { u.textContent = modN[k] || ''; u.classList.toggle('is-on', !!modN[k]); } });
      cardTag.textContent = 'ONE DAY, EVERY DEPARTMENT'; cardTitle.textContent = 'What ran today';
      linesEl.innerHTML = (summary || '') + dayFeed.slice(0, summary ? 4 : 6).map(function (e, i) {
        return '<li class="gem2-dl k-' + e[3] + (i === 0 && !summary ? ' is-new' : '') + '"><b>' + esc2(e[0]) + '</b><span>' + esc2(e[2]) + (e[4] > 1 ? ' <i class="gem2-x">×' + e[4] + '</i>' : '') + '<em>' + KIND[e[3]] + '</em></span></li>';
      }).join('');
      linesEl.scrollTop = 0;
    }
    function dayEnd() {
      window.clearInterval(dayTimer); dayTimer = null;
      if (dayBtn) { dayBtn.querySelector('span').textContent = 'Run the day again'; dayBtn.setAttribute('aria-pressed', 'false'); }
      var depts = modN.filter(function (n) { return n > 0; }).length;
      dayPaint('<li class="gem2-dl gem2-dsum"><span><strong>' + dayN.all + ' events across ' + depts + ' departments.</strong> ' + dayN.a + ' needed no one.' + (dayN.q ? ' ' + dayN.q + ' were drafted by AI and waited for a yes.' : '') + ' ' + dayN.t + ' were done by your team, on the same record. You can let any one kind of action run on its own, and take it back with one switch.</span></li>');
    }
    function dayTick() {
      dayStep += 1;
      if (dayStep >= set.day.length) { dayEnd(); return; }
      var e = set.day[dayStep], k = e[1], n = e[4] || 1;
      dayN.all += n; dayN[e[3]] += n; modN[k] = (modN[k] || 0) + n; dayFeed.unshift(e);
      glow[k] = 1;
      for (var i = 0; i < Math.min(n, 5); i++) pulse(k, e[3] === 'q' && i % 2 === 1, i * .09);
      var clock = root.querySelector('[data-gem2-clock]'); if (clock) clock.textContent = e[0];
      nodeBtns.forEach(function (b, x) { b.classList.toggle('is-on', x === k); });
      dayPaint();
    }
    function dayExit() {
      if (!dayOn) return;
      window.clearInterval(dayTimer); dayTimer = null; dayOn = false; root.classList.remove('is-day');
      nodeBtns.forEach(function (b) { var u = b.querySelector('.gem2-n'); if (u) { u.textContent = ''; u.classList.remove('is-on'); } });
      if (dayBtn) { dayBtn.querySelector('span').textContent = 'Run a full day'; dayBtn.setAttribute('aria-pressed', 'false'); }
    }
    function dayStart() {
      if (!set.day) return;
      if (dayTimer) { dayEnd(); return; }
      stop(); if (mode !== 'os') setMode('os');
      rated = false; step = -1; evBtns.forEach(function (b) { b.classList.remove('is-on'); b.classList.remove('is-done'); }); select(-1);
      dayOn = true; root.classList.add('is-day'); dayStep = -1; dayN = { all: 0, a: 0, q: 0, t: 0 }; modN = []; dayFeed = [];
      dayBtn.querySelector('span').textContent = 'Stop the day'; dayBtn.setAttribute('aria-pressed', 'true');
      dayTick(); dayTimer = window.setInterval(dayTick, reduceMotion ? 500 : 1100);
    }
    if (dayBtn) { if (set.day) dayBtn.addEventListener('click', dayStart); else dayBtn.hidden = true; }

    // ---- hands
    nodeBtns.forEach(function (b, k) { b.addEventListener('click', function () { if (dayOn) { dayExit(); renderLines(); } stop(); select(k); }); });
    evBtns.forEach(function (b, k) { b.addEventListener('click', function () { dayExit(); stop(); go(k); }); });
    playBtn.addEventListener('click', function () { dayExit(); play(); });
    sigNote.addEventListener('click', function (e) { var b = e.target.closest('[data-showfam]'); if (!b) return; shown = Number(b.getAttribute('data-showfam')); renderSignals(); });
    root.querySelector('[data-gem2-rate]').addEventListener('click', rate);
    Array.prototype.forEach.call(root.querySelectorAll('[data-gem2-mode]'), function (b) { b.addEventListener('click', function () { setMode(b.getAttribute('data-gem2-mode')); }); });
    var rateBtn = root.querySelector('[data-gem2-rate] span');
    function setMetal(mt) {
      if (!METALS[mt]) return;
      metal = mt; facets = SHAPES[METALS[mt].shape];
      if (!fixedMetal) { try { localStorage.setItem('jwero-metal', mt); } catch (e) {} }
      root.setAttribute('data-metal', mt);
      Array.prototype.forEach.call(root.querySelectorAll('[data-gem2-metal]'), function (b) { var on = b.getAttribute('data-gem2-metal') === mt; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
      if (rateBtn) rateBtn.textContent = 'The ' + METALS[mt].word + ' rate just moved';
      layout();
      if (reduceMotion && ctx) { lastT = 0; draw(0); window.cancelAnimationFrame(raf); }
    }
    Array.prototype.forEach.call(root.querySelectorAll('[data-gem2-metal]'), function (b) { b.addEventListener('click', function () { setMetal(b.getAttribute('data-gem2-metal')); }); });
    var moved = 0;
    cv.addEventListener('pointerdown', function (e) { dragging = true; moved = 0; lastX = e.clientX; lastY = e.clientY; try { cv.setPointerCapture(e.pointerId); } catch (x) {} });
    cv.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - lastX, dy = e.clientY - lastY; lastX = e.clientX; lastY = e.clientY; moved += Math.abs(dx) + Math.abs(dy);
      rotY += dx * .012; rotX = Math.max(-.5, Math.min(.95, rotX + dy * .008));
    });
    function release(e) {
      if (!dragging) return; dragging = false;
      if (moved < 6) { // a tap: open the module on the side of the stone that was touched
        var r = cv.getBoundingClientRect(), ang = Math.atan2(e.clientY - r.top - oy, e.clientX - r.left - ox), best = 0, bd = 9;
        nodePos.forEach(function (p, k) { var d = Math.abs(Math.atan2(Math.sin(p[2] - ang), Math.cos(p[2] - ang))); if (d < bd) { bd = d; best = k; } });
        stop(); select(best);
      }
    }
    cv.addEventListener('pointerup', release); cv.addEventListener('pointercancel', function () { dragging = false; });

    theme(); layout(); renderLines(); setMetal(metal);
    window.addEventListener('resize', layout);
    new MutationObserver(theme).observe(docEl, { attributes: true, attributeFilter: ['data-theme'] });
    if (reduceMotion || !canObserve) { layout(); if (ctx) { lastT = 0; draw(0); window.cancelAnimationFrame(raf); } return; }
    var started = false;
    whileVisible(root, function () { layout(); raf = window.requestAnimationFrame(draw); if (!started) { started = true; window.setTimeout(function () { if (step < 0 && !timer && !dayOn) play(); }, 900); } }, function () { window.cancelAnimationFrame(raf); lastT = 0; });
  });

  // Persona switch: pick the business you run; the page remembers and the
  // "Which jeweller are you?" grid moves your card first.
  Array.prototype.forEach.call(document.querySelectorAll('[data-persona]'), function (wrap) {
    var tabs = Array.prototype.slice.call(wrap.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(wrap.querySelectorAll('.persona-panel'));
    var routes = { single: '/solutions/single-store', chain: '/solutions/multi-store-chains', maker: '/solutions/manufacturers', b2b: '/solutions/b2b-jewellery', d2c: '/solutions/d2c-brands', franchise: '/solutions/franchise-networks' };
    function select(key, focus) {
      tabs.forEach(function (t) { var on = t.getAttribute('data-key') === key; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); if (on && focus && t.parentNode) t.parentNode.scrollLeft = Math.max(0, t.offsetLeft - (t.parentNode.clientWidth - t.offsetWidth) / 2); });
      panels.forEach(function (p) { var on = p.getAttribute('data-panel') === key; p.classList.toggle('is-active', on); p.hidden = !on; });
      var grid = document.querySelector('.router-grid');
      if (grid) {
        Array.prototype.forEach.call(grid.querySelectorAll('.router-card'), function (c) { c.classList.remove('is-you'); });
        var mine = grid.querySelector('.router-card[href="' + routes[key] + '"]');
        if (mine) { mine.classList.add('is-you'); grid.insertBefore(mine, grid.firstChild); }
      }
      try { localStorage.setItem('jwero-persona', key); } catch (e) {}
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t.getAttribute('data-key')); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        select(tabs[(i + d + tabs.length) % tabs.length].getAttribute('data-key'), true);
      });
    });
    var saved = null;
    try { saved = localStorage.getItem('jwero-persona'); } catch (e) {}
    if (saved && routes[saved]) select(saved);
  });

  // Site search: Cmd/Ctrl+K or the header button opens a dialog; /search is
  // the same index rendered on a page for the no-JS and shared-link cases.
  (function () {
    var dlg = document.querySelector('dialog.search'), pageBox = document.querySelector('[data-search-page]');
    if (!dlg && !pageBox) return;
    var index = null, loading = null;
    function load() {
      if (index) return Promise.resolve(index);
      if (!loading) loading = fetch(BASE + '/search-index.json').then(function (r) { return r.json(); }).then(function (d) { index = d; return d; });
      return loading;
    }
    function score(item, terms) {
      var t = item.t.toLowerCase(), d = (item.d || '').toLowerCase(), k = (item.k || '').toLowerCase(), s = 0;
      for (var i = 0; i < terms.length; i++) {
        var w = terms[i];
        if (t.indexOf(w) === 0) s += 8; else if (t.indexOf(w) !== -1) s += 5;
        if (d.indexOf(w) !== -1) s += 2;
        if (k.indexOf(w) !== -1) s += 1;
      }
      return s;
    }
    function esc(x) { return String(x).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function render(box, q, limit) {
      var terms = q.toLowerCase().split(/\s+/).filter(function (w) { return w.length > 1; });
      if (!terms.length) { box.innerHTML = ''; return; }
      load().then(function (items) {
        var hits = items.map(function (it) { return [score(it, terms), it]; }).filter(function (x) { return x[0] > 0; }).sort(function (a, b) { return b[0] - a[0]; }).slice(0, limit);
        box.innerHTML = hits.length
          ? hits.map(function (x, i) { var it = x[1]; return '<a href="' + esc(it.u) + '" role="option"' + (i === 0 ? ' aria-selected="true"' : '') + '><strong>' + esc(it.t) + '</strong><em>' + esc(it.s) + '</em><span>' + esc(it.d) + '</span></a>'; }).join('')
          : '<p class="search-empty">Nothing matched “' + esc(q) + '”. Try a product name, a role, or a question.</p>';
      });
    }
    if (dlg) {
      var input = dlg.querySelector('input'), results = dlg.querySelector('.search-results');
      function open() { if (typeof dlg.showModal !== 'function') { location.href = BASE + '/search'; return; } load(); dlg.showModal(); input.value = ''; results.innerHTML = ''; input.focus(); }
      Array.prototype.forEach.call(document.querySelectorAll('.search-open'), function (b) { b.addEventListener('click', open); });
      dlg.querySelector('.search-close').addEventListener('click', function () { dlg.close(); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
      document.addEventListener('keydown', function (e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); dlg.open ? dlg.close() : open(); }
      });
      var t = 0;
      input.addEventListener('input', function () { window.clearTimeout(t); t = window.setTimeout(function () { render(results, input.value, 8); }, 60); });
      input.addEventListener('keydown', function (e) {
        var opts = results.querySelectorAll('a'); if (!opts.length) return;
        var cur = Array.prototype.findIndex.call(opts, function (o) { return o.getAttribute('aria-selected') === 'true'; });
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          var next = (cur + (e.key === 'ArrowDown' ? 1 : -1) + opts.length) % opts.length;
          Array.prototype.forEach.call(opts, function (o, i) { o.setAttribute('aria-selected', i === next ? 'true' : 'false'); });
          opts[next].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter' && cur >= 0) { e.preventDefault(); location.href = based(opts[cur].getAttribute('href')); }
      });
    }
    if (pageBox) {
      var pInput = document.querySelector('.search-box-page input');
      var q = new URLSearchParams(location.search).get('q') || '';
      pInput.value = q; render(pageBox, q, 40);
      pInput.addEventListener('input', function () { render(pageBox, pInput.value, 40); history.replaceState(null, '', pInput.value ? '?q=' + encodeURIComponent(pInput.value) : location.pathname); });
    }
  })();

  // Today ↔ With Jwero: starts on the reader's day, flips itself once when
  // seen, then stays in the reader's hands.
  Array.prototype.forEach.call(document.querySelectorAll('[data-impact]'), function (wrap) {
    var btns = wrap.querySelectorAll('.impact-switch button'), touched = false;
    function set(state) {
      wrap.setAttribute('data-show', state);
      Array.prototype.forEach.call(btns, function (b) { var on = b.getAttribute('data-state') === state; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    }
    set('today');
    Array.prototype.forEach.call(btns, function (b) { b.addEventListener('click', function () { touched = true; set(b.getAttribute('data-state')); }); });
    if (!reduceMotion && canObserve) onView([wrap], function () { window.setTimeout(function () { if (!touched) set('jwero'); }, 1900); }, { threshold: 0.4 });
    else set('jwero');
  });

  // "You're probably asking" chips open the matching answer on the page.
  Array.prototype.forEach.call(document.querySelectorAll('[data-asking] .asking-chip'), function (chip) {
    chip.addEventListener('click', function () {
      var q = chip.textContent.trim().toLowerCase().replace(/\s+/g, ' ');
      var hit = Array.prototype.find.call(document.querySelectorAll('.faq-item'), function (d) { return d.querySelector('summary').textContent.trim().toLowerCase().replace(/\s+/g, ' ') === q; });
      if (!hit) { location.href = BASE + '/faq'; return; }
      Array.prototype.forEach.call(document.querySelectorAll('.faq-item.is-hit'), function (d) { d.classList.remove('is-hit'); });
      hit.open = true; hit.classList.add('is-hit');
      hit.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    });
  });

  // Calculator outputs as bars, scaled to the largest number on screen.
  Array.prototype.forEach.call(document.querySelectorAll('.calc-out'), function (out) {
    var stats = Array.prototype.slice.call(out.querySelectorAll('.stat'));
    stats.forEach(function (s) { var bar = document.createElement('span'); bar.className = 'calc-bar'; bar.innerHTML = '<i></i>'; s.appendChild(bar); });
    function paint() {
      var vals = stats.map(function (s) { return Number((s.querySelector('.stat-n').textContent || '').replace(/[^\d.]/g, '')) || 0; });
      var max = Math.max.apply(null, vals) || 1;
      stats.forEach(function (s, i) { s.querySelector('.calc-bar i').style.width = Math.max(2, Math.round(vals[i] / max * 100)) + '%'; });
    }
    new MutationObserver(paint).observe(out, { childList: true, characterData: true, subtree: true });
    paint();
  });

  // Pricing quick-check: tap your situation, the tier lights up.
  Array.prototype.forEach.call(document.querySelectorAll('.quick-check-items > div'), function (row) {
    row.addEventListener('click', function () {
      var name = (row.querySelector('span') || row).textContent.replace(/[^A-Za-z]/g, '').toLowerCase();
      var tier = Array.prototype.find.call(document.querySelectorAll('.tier'), function (t) { return t.querySelector('h3').textContent.trim().toLowerCase() === name; });
      if (!tier) return;
      Array.prototype.forEach.call(document.querySelectorAll('.tier.is-picked'), function (t) { t.classList.remove('is-picked'); });
      tier.classList.add('is-picked');
      tier.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    });
  });

  // How Jwero decides, the simulator. Illustrative weights and a simplified read-out.
  Array.prototype.forEach.call(document.querySelectorAll('[data-intel]'), function (wrap) {
    var total = wrap.querySelector('[data-total]');
    function arrive() {
      wrap.classList.add('is-in');
      if (!total || reduceMotion) return;
      var t0 = null;
      (function frame(t) {
        if (t0 === null) t0 = t;
        var p = Math.min(1, (t - t0) / 1600), eased = 1 - Math.pow(1 - p, 3);
        total.textContent = Math.round(6600 * eased).toLocaleString('en-IN');
        if (p < 1) window.requestAnimationFrame(frame);
      })(window.performance.now());
    }
    if (canObserve && !reduceMotion) onView([wrap], arrive, { threshold: 0.2 });
    else wrap.classList.add('is-in');
    var sigs = wrap.querySelectorAll('.intel-sig'), out = {};
    Array.prototype.forEach.call(wrap.querySelectorAll('[data-out]'), function (el) { out[el.getAttribute('data-out')] = el; });
    function gauge(k, v) {
      var bar = wrap.querySelector('[data-gauge="' + k + '"]'), n = wrap.querySelector('[data-gauge-n="' + k + '"]');
      if (bar) bar.style.width = v + '%';
      if (n) n.textContent = String(v);
    }
    function set(k, text) {
      var el = out[k]; if (!el || el.textContent === text) return;
      el.textContent = text; el.classList.add('is-changed');
      window.setTimeout(function () { el.classList.remove('is-changed'); }, 900);
    }
    function decide() {
      var d = [0, 0, 0, 0], on = {};
      Array.prototype.forEach.call(sigs, function (b) {
        if (b.getAttribute('aria-pressed') !== 'true') return;
        on[b.getAttribute('data-sig')] = true;
        b.getAttribute('data-d').split(',').forEach(function (x, i) { d[i] += Number(x); });
      });
      var intent = Math.min(100, d[0]), conv = Math.min(100, d[1]), conf = Math.min(100, d[2]), trust = Math.min(100, d[3]);
      gauge('intent', intent); gauge('conv', conv); gauge('conf', conf); gauge('trust', trust);
      var seg, play, when = 'WhatsApp · 18:00–20:00', draft, live = true;
      if (on.complaint) {
        seg = 'Suppression, risk & service'; play = 'Complaint trust recovery, promotions paused';
        when = 'Call · today, by a person'; draft = 'A service follow-up for the owner, not a sales message.';
      } else if (on.maturity) {
        seg = 'Savings scheme · maturing'; play = 'Scheme maturity reminder journey';
        draft = 'A maturity note with three pieces near her accumulated value.';
      } else if (trust >= 15 && intent < 40) {
        seg = 'Savings scheme & ledger · missed instalment'; play = 'Scheme payment due, gentle reminder';
        draft = 'A one-line reminder with a pay link. No promotion.';
      } else if (intent >= 60 && (conv >= 10 || on.price)) {
        seg = 'High-intent product enquiry'; play = on.tried || on.appt ? 'Hold the piece · confirm the visit' : 'Send priced options · offer a hold';
        when = 'WhatsApp · her best hour, 18:00–20:00'; draft = 'A priced reply from her record, held for your approval.';
      } else if (intent >= 30) {
        seg = 'Product viewers with no purchase'; play = 'Engage, matched catalogue share';
        draft = 'Three pieces in her taste and budget, with live prices.';
      } else if (intent > 0) {
        seg = 'New customer · warming'; play = 'Nurture, keep listening'; draft = 'Nothing yet. One more signal and a draft appears.'; live = false;
      } else {
        seg = 'New customer · listening'; play = 'Nurture, no send yet'; draft = 'Nothing. Jwero keeps listening.'; live = false;
      }
      if (on.missed && !on.complaint && intent >= 60) draft += ' The missed instalment is mentioned once, kindly.';
      set('segment', seg); set('play', play); set('when', when); set('draft', draft);
      if (out.draft) out.draft.classList.toggle('is-live', live);
    }
    Array.prototype.forEach.call(sigs, function (b) {
      b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); decide(); });
    });
    var reset = wrap.querySelector('[data-sig-reset]');
    if (reset) reset.addEventListener('click', function () { Array.prototype.forEach.call(sigs, function (b) { b.setAttribute('aria-pressed', 'false'); }); decide(); });
    decide();
  });

  // A day in your business: auto-plays through the moments; tap to jump; the rocket rides the track.
  Array.prototype.forEach.call(document.querySelectorAll('[data-day]'), function (day) {
    var nodes = day.querySelectorAll('.day-node'), cards = day.querySelectorAll('.day-card'), fill = day.querySelector('.day-fill');
    var rocket = day.querySelector('.day-rocket'), play = day.querySelector('[data-day-play]'), count = day.querySelector('[data-day-n]');
    var n = nodes.length, i = 0, timer = null, playing = !reduceMotion, bar = day.querySelector('.day-bar i');
    function show(k) {
      i = (k + n) % n;
      Array.prototype.forEach.call(nodes, function (b, j) { b.classList.toggle('is-on', j === i); b.classList.toggle('is-done', j < i); b.setAttribute('aria-pressed', String(j === i)); });
      Array.prototype.forEach.call(cards, function (c, j) { c.classList.toggle('is-on', j === i); });
      var x = n > 1 ? (i / (n - 1)) * 100 : 0;
      if (fill) fill.style.width = x + '%';
      if (rocket) rocket.style.left = x + '%';
      if (count) count.textContent = String(i + 1);
      if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
    }
    function tick() { if (playing) show(i + 1); }
    function start() { stop(); if (playing) timer = window.setInterval(tick, 6000); day.classList.toggle('is-playing', playing); day.classList.toggle('is-paused', !playing); if (play) { play.textContent = playing ? 'Pause' : 'Play'; play.setAttribute('aria-pressed', String(playing)); } }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
    Array.prototype.forEach.call(nodes, function (b, j) { b.addEventListener('click', function () { show(j); start(); }); });
    if (play) play.addEventListener('click', function () { playing = !playing; start(); });
    day.addEventListener('mouseenter', function () { day.classList.add('is-paused'); stop(); });
    day.addEventListener('mouseleave', function () { if (playing) { day.classList.remove('is-paused'); start(); } });
    show(0);
    if (canObserve && !reduceMotion) onView([day], function () { start(); }, { threshold: 0.4 });
    else { playing = false; start(); }
  });

  // Fit check: tap what is true; the verdict and the CTA follow.
  Array.prototype.forEach.call(document.querySelectorAll('[data-fit]'), function (fit) {
    var items = fit.querySelectorAll('.fit-item'), meter = fit.querySelector('.fit-meter i'), verdict = fit.querySelector('[data-fit-verdict]'), cta = fit.querySelector('[data-fit-cta]');
    var first = fit.getAttribute('data-fit-first'), second = fit.getAttribute('data-fit-second'), total = items.length;
    function update() {
      var on = Array.prototype.filter.call(items, function (b) { return b.getAttribute('aria-pressed') === 'true'; }).length;
      if (meter) meter.style.width = (on / total) * 100 + '%';
      var text, label;
      if (on === 0) { text = 'Tap what’s true for you. We’ll say honestly where Jwero fits, and where it doesn’t yet.'; label = 'Show me this, live'; }
      else if (on <= 2) { text = on + ' of ' + total + ', a real fit on those. Businesses like yours usually start with ' + first + ', and add ' + second + ' in the first month.'; label = 'Start with ' + first; }
      else { text = on + ' of ' + total + ', a strong fit. Start with ' + first + ' and ' + second + '; most of the rest follows in the first thirty days, on your own data.'; label = 'Show me ' + first + ' on my data'; }
      if (verdict) { verdict.textContent = text; verdict.classList.toggle('is-strong', on >= 3); }
      if (cta) cta.textContent = label;
    }
    Array.prototype.forEach.call(items, function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); update(); }); });
    update();
  });

  // Personalisation layer. Everything here is local to the browser: the reader's
  // kind of business (from the home switch, /start, a solution page or ?p=),
  // the pages they have seen, and whether they already created a workspace.
  (function () {
    var SOL = { 'solutions/single-store': 'single', 'solutions/gold-retail': 'single', 'solutions/silver-retail': 'single', 'solutions/diamond-retail': 'single', 'solutions/gemstone-retail': 'single', 'solutions/luxury-boutique': 'single', 'solutions/bridal': 'single',
      'solutions/multi-store-chains': 'chain', 'solutions/franchise-networks': 'franchise', 'solutions/jewellery-brands': 'd2c', 'solutions/d2c-brands': 'd2c', 'solutions/startups': 'd2c', 'solutions/lab-grown-diamond': 'd2c',
      'solutions/manufacturers': 'maker', 'solutions/oem-manufacturers': 'maker', 'solutions/casting-units': 'maker', 'solutions/cad-services': 'maker',
      'solutions/diamond-traders': 'trader', 'solutions/b2b-jewellery': 'b2b', 'solutions/gold-wholesale': 'b2b', 'solutions/diamond-wholesale': 'b2b', 'solutions/bullion-gold-traders': 'b2b', 'solutions/export-houses': 'b2b' };
    var PATH = {
      single: { label: 'a single store', sol: '/solutions/single-store', sim: '/products/pos#try-till', simLabel: 'Try the till', prod: '/products/whatsapp' },
      chain: { label: 'a multi-store chain', sol: '/solutions/multi-store-chains', sim: '/platform/ai-workforce#try-approve', simLabel: 'Try the approval queue', prod: '/products/multi-store' },
      maker: { label: 'a manufacturer', sol: '/solutions/manufacturers', sim: '/products/manufacturing#try-grams', simLabel: 'Try metal closure', prod: '/products/manufacturing' },
      b2b: { label: 'a wholesale business', sol: '/solutions/b2b-jewellery', sim: '/products/inventory#try-shelf', simLabel: 'Try the shelf', prod: '/products/digital-catalogues' },
      d2c: { label: 'a brand', sol: '/solutions/d2c-brands', sim: '/platform/customer-memory#try-memory', simLabel: 'Try customer memory', prod: '/products/instagram-facebook' },
      franchise: { label: 'a franchise network', sol: '/solutions/franchise-networks', sim: '/platform/ai-workforce#try-approve', simLabel: 'Try the approval queue', prod: '/products/multi-store' },
    };
    var slug = HERE.replace(/^\/|\/$/g, '');
    var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
    // learn
    var q = /[?&]p=(single|chain|maker|b2b|d2c|franchise|trader|staff)/.exec(location.search);
    if (q) { store.set('jwero-persona', q[1]); store.set('jwero-persona-picked', '1'); }
    else if (SOL[slug] && !store.get('jwero-persona')) store.set('jwero-persona', SOL[slug]);
    var seen = []; try { seen = JSON.parse(store.get('jwero-seen') || '[]'); } catch (e) {}
    var title = (document.querySelector('h1') || {}).textContent || document.title;
    seen = seen.filter(function (x) { return x.u !== HERE; });
    seen.unshift({ u: HERE, t: title.trim().slice(0, 60), at: Date.now() });
    store.set('jwero-seen', JSON.stringify(seen.slice(0, 8)));
    var visits = Number(store.get('jwero-visits') || 0);
    if (!sessionStorage.getItem('jwero-session')) { visits += 1; store.set('jwero-visits', String(visits)); try { sessionStorage.setItem('jwero-session', '1'); } catch (e) {} }
    var persona = store.get('jwero-persona'), path = PATH[persona], signed = store.get('jwero-signed-up');
    if (persona) docEl.setAttribute('data-persona', persona);
    if (visits > 1) docEl.classList.add('is-returning');
    // already has a workspace: the header sends them to it, not to /start
    if (signed) {
      docEl.classList.add('has-workspace');
      Array.prototype.forEach.call(document.querySelectorAll('[data-start-cta]'), function (a) { a.textContent = 'Open my workspace'; a.setAttribute('href', 'https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=header'); a.setAttribute('rel', 'noopener'); });
    }
    // Once the reader has said what they run, the header chip says who they are
    // and the phone bar points at their page. (The six-stage strip under the
    // header was removed: the chip already offers the change.)
    var ICP = {
      single: { label: 'Single store', sol: '/solutions/single-store', sim: 'memory', door: 'trial' },
      chain: { label: 'Multi-store chain', sol: '/solutions/multi-store-chains', sim: 'approve', door: 'demo' },
      franchise: { label: 'Franchise network', sol: '/solutions/franchise-networks', sim: 'approve', door: 'demo' },
      maker: { label: 'Workshop / manufacturer', sol: '/solutions/manufacturers', sim: 'grams', door: 'demo' },
      b2b: { label: 'Wholesale / trade', sol: '/solutions/b2b-jewellery', sim: 'shelf', door: 'trial' },
      trader: { label: 'Diamond trader', sol: '/solutions/diamond-traders', sim: 'memo', door: 'trial' },
      d2c: { label: 'Online brand', sol: '/solutions/d2c-brands', sim: 'memory', door: 'trial' },
      staff: { label: 'I work in one', sol: '/roles', door: 'brief' },
    };
    var TRIAL = 'https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=';
    var icp = ICP[persona], icpDlg = document.querySelector('dialog.icp-dialog');
    Array.prototype.forEach.call(document.querySelectorAll('[data-icp-label]'), function (el) { if (icp && store.get('jwero-persona-picked')) { el.textContent = icp.label; el.parentNode.classList.add('is-set'); } });
    Array.prototype.forEach.call(document.querySelectorAll('[data-icp="' + persona + '"]'), function (a) { a.classList.add('is-you'); });
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-icp-open]') && icpDlg && icpDlg.showModal) { e.preventDefault(); if (!icpDlg.open) icpDlg.showModal(); return; }
      if (icpDlg && (e.target === icpDlg || e.target.closest('[data-icp-close]'))) { icpDlg.close(); return; }
      var pick = e.target.closest('a[data-icp]');
      if (pick) { store.set('jwero-persona', pick.getAttribute('data-icp')); store.set('jwero-persona-picked', '1'); }
    });
    if (icp && slug !== 'start' && slug !== 'search') {
      // On the reader's own page a stage is an anchor; elsewhere it leads back to it.
      var own = SOL[slug] === persona || (slug === 'roles' && persona === 'staff');
      var base = own ? '' : icp.sol;
      var tryHref = signed ? 'https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=pipe' : icp.door === 'demo' ? '/book-demo' : TRIAL + 'pipe';
      var tryLabel = signed ? 'Open my workspace' : icp.door === 'demo' ? 'Video demo' : 'Start';
    }
    // A shared link opens already set to the sender's kind of business.
    Array.prototype.forEach.call(document.querySelectorAll('[data-share][data-share-p]'), function (a) {
      a.setAttribute('href', 'https://wa.me/?text=' + encodeURIComponent(a.getAttribute('data-share') + ' ' + location.origin + location.pathname + '?p=' + a.getAttribute('data-share-p')));
    });
  })();

  // Arriving at /book-demo#callback: pre-select "Call me" and focus the phone field.
  if (location.hash === '#callback') {
    var reachSel = document.getElementById('f-reach'), phoneIn = document.getElementById('f-phone') || document.querySelector('#demo-form [name="phone"]');
    if (reachSel) reachSel.value = 'Call me';
    if (phoneIn) window.setTimeout(function () { phoneIn.focus(); }, 300);
  }

  // Any trial door to the product marks this browser as having a workspace.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="https://os.jwero.ai"]');
    if (a && a.getAttribute('href').indexOf('/login') === -1) { try { localStorage.setItem('jwero-signed-up', String(Date.now())); } catch (x) {} }
  });

  // Print / save as PDF (the brief).
  Array.prototype.forEach.call(document.querySelectorAll('[data-print]'), function (a) { a.addEventListener('click', function (e) { e.preventDefault(); window.print(); }); });

  // Arrived from an AI answer engine: the short version, then the door.
  (function () {
    var ref = document.referrer || '';
    if (!/chatgpt\.com|openai\.com|perplexity\.ai|claude\.ai|gemini\.google|copilot\.microsoft|bing\.com\/(chat|copilot)|you\.com|phind\.com/i.test(ref)) return;
    if (sessionStorage.getItem('jwero-ai-short')) return;
    var hero = document.querySelector('main .hero'); if (!hero) return;
    var box = document.createElement('div');
    box.className = 'short-version';
    box.innerHTML = '<div class="container"><span class="short-tag">The short version</span><p>Jwero runs your whole jewellery business on one record: customers, counter, stock, workshop, team and books. AI drafts the work, and nothing sends without your yes.</p>' +
      '<a href="/why-an-os">What it is</a><a href="/pricing">What it costs</a><a href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=ai-referrer" rel="noopener">Start</a><a href="#" data-wa="default">Ask a person</a></div>';
    hero.insertAdjacentElement('afterend', box);
    var a = box.querySelector('[data-wa]'); a.setAttribute('href', waLink('default')); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener');
    try { sessionStorage.setItem('jwero-ai-short', '1'); } catch (e) {}
  })();

  // Pricing page: one gentle line after 45 seconds of stillness, once per session.
  (function () {
    if (HERE !== '/pricing' && HERE !== '/pricing/') return;
    try { if (sessionStorage.getItem('jwero-nudged')) return; } catch (e) {}
    var timer = null, shown = false;
    function arm() { if (shown) return; if (timer) window.clearTimeout(timer); timer = window.setTimeout(show, 45000); }
    function show() {
      shown = true;
      var n = document.createElement('div');
      n.className = 'nudge'; n.setAttribute('role', 'status');
      n.innerHTML = '<p>Still deciding? Ask one question, a real person and our AI reply within minutes.</p><a class="btn btn-primary btn-sm" href="#" data-wa="nudge">Ask us now</a><button type="button" class="nudge-x" aria-label="Dismiss">×</button>';
      document.body.appendChild(n);
      var a = n.querySelector('[data-wa]'); a.setAttribute('href', waLink('nudge')); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener');
      n.querySelector('.nudge-x').addEventListener('click', function () { n.remove(); });
      window.requestAnimationFrame(function () { n.classList.add('is-on'); });
      try { sessionStorage.setItem('jwero-nudged', '1'); } catch (e) {}
    }
    ['scroll', 'pointerdown', 'keydown', 'touchstart'].forEach(function (ev) { window.addEventListener(ev, arm, { passive: true }); });
    arm();
  })();

  // ERP → OS: the era slider.
  Array.prototype.forEach.call(document.querySelectorAll('[data-era]'), function (era) {
    var stops = era.querySelectorAll('.era-stop'), panels = era.querySelectorAll('.era-panel'), fill = era.querySelector('.era-fill');
    function show(i) {
      Array.prototype.forEach.call(stops, function (b, j) { b.classList.toggle('is-on', j === i); b.setAttribute('aria-pressed', String(j === i)); });
      Array.prototype.forEach.call(panels, function (p, j) { p.classList.toggle('is-on', j === i); });
      if (fill) fill.style.width = (i / (stops.length - 1)) * 100 + '%';
    }
    Array.prototype.forEach.call(stops, function (b, j) { b.addEventListener('click', function () { show(j); }); });
    show(1);
    if (canObserve && !reduceMotion) onView([era], function () { window.setTimeout(function () { show(2); }, 1800); }, { threshold: 0.5 });
  });

  // ERP → OS: move the centre.
  Array.prototype.forEach.call(document.querySelectorAll('[data-cswap]'), function (w) {
    var READ = {
      erp: 'In an ERP, the invoice is the truth. WhatsApp, Instagram and the customer’s history live outside it, on phones, in sheets, in heads. The ERP only learns about Meera when she pays.',
      os: 'In the OS, Meera’s record is the truth. Billing writes her purchase to it; stock, schemes, the workshop, WhatsApp and the counter read and write the same row, so the reply at 11pm knows what the counter knew at noon.',
    };
    var NOTES = {
      erp: ['writes the invoice', 'moves on sale', 'a separate register', 'on someone’s phone', 'greets a stranger', 'its own khata'],
      os: ['writes her purchase to the record', 'reads what she asked for', 'her balance, on the same row', 'drafts from her record', 'greets her by name and taste', 'her order, gram by gram'],
    };
    var out = w.querySelector('[data-cs-read]'), notes = w.querySelectorAll('.cs-node small');
    w.querySelectorAll('[data-cs]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-cs');
        w.querySelectorAll('[data-cs]').forEach(function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
        w.classList.toggle('is-os', k === 'os');
        if (out) out.textContent = READ[k];
        Array.prototype.forEach.call(notes, function (n, i) { n.textContent = NOTES[k][i]; });
      });
    });
  });

  // ERP → OS: the risk ledger.
  Array.prototype.forEach.call(document.querySelectorAll('[data-rl]'), function (rl) {
    var verdict = document.querySelector('[data-rl-verdict]');
    function tally(kind) {
      var items = rl.querySelectorAll('.rl-item[data-rl="' + kind + '"]'), open = 0;
      Array.prototype.forEach.call(items, function (b) { if (b.getAttribute('aria-expanded') === 'true') open += 1; });
      var n = rl.querySelector('[data-rl-n="' + kind + '"]'), l = rl.querySelector('[data-rl-l="' + kind + '"]');
      if (kind === 'switch') { if (n) n.textContent = String(items.length - open); if (l) l.textContent = items.length - open === 1 ? 'risk standing' : 'risks standing'; }
      else { if (n) n.textContent = String(items.length); }
      if (verdict && kind === 'switch' && items.length - open === 0) { verdict.textContent = 'Every risk on the left had an answer. The right column is still counting. That is the whole decision.'; verdict.classList.add('is-done'); }
    }
    rl.querySelectorAll('.rl-item').forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', String(on)); b.classList.toggle('is-open', on);
        tally(b.getAttribute('data-rl'));
      });
    });
  });

  // ERP → OS: the make-do stack.
  Array.prototype.forEach.call(document.querySelectorAll('[data-mds]'), function (m) {
    var GAPS = {}; try { GAPS = JSON.parse((m.querySelector('[data-mds-json]') || {}).textContent || '{}'); } catch (e) {}
    var tools = m.querySelectorAll('.mds-tool'), gaps = m.querySelector('[data-mds-gaps]'), read = m.querySelector('[data-mds-read]');
    var MEM = { heads: 1, wa: 1, paper: 1, excel: 1, erp: 1 };
    function n(k, v) { var el = m.querySelector('[data-mds-n="' + k + '"]'); if (el) el.textContent = String(v); }
    function update() {
      var on = Array.prototype.filter.call(tools, function (b) { return b.getAttribute('aria-pressed') === 'true'; }).map(function (b) { return b.getAttribute('data-tool'); });
      var pairs = on.length * (on.length - 1) / 2, mem = on.filter(function (k) { return MEM[k]; }).length;
      n('tools', on.length); n('handoffs', pairs); n('memory', mem);
      var found = [];
      for (var i = 0; i < on.length; i++) for (var j = i + 1; j < on.length; j++) { var g = GAPS[on[i] + '+' + on[j]] || GAPS[on[j] + '+' + on[i]]; if (g) found.push(g); }
      if (!on.length) { gaps.innerHTML = '<li class="mds-empty">Tap what you use today. The gaps appear between them.</li>'; read.textContent = ''; return; }
      gaps.innerHTML = found.length ? found.map(function (g) { return '<li>' + g + '</li>'; }).join('') : '<li class="mds-empty">One tool, no hand-offs yet. Add the next one you use.</li>';
      read.textContent = on.length < 2 ? '' : on.length + ' tools, ' + pairs + ' hand-off' + (pairs === 1 ? '' : 's') + ', ' + mem + ' place' + (mem === 1 ? '' : 's') + ' a customer is remembered, and none of them is the business. In Jwero it is one record, one hand-off: yours to approve.';
    }
    tools.forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); update(); }); });
    update();
  });

  // Make-do leakage calculator.
  var lk = document.getElementById('calc-leak');
  if (lk) {
    var rupee = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
    var lkEnq = bindRange('lk-enq', 'lk-enq-out'), lkFast = bindRange('lk-fast', 'lk-fast-out', '%'), lkTicket = bindRange('lk-ticket', 'lk-ticket-out'), lkClose = bindRange('lk-close', 'lk-close-out', '%');
    function lkCalc() {
      var enq = Number(lkEnq.value), fast = Number(lkFast.value) / 100, ticket = Number(lkTicket.value), close = Number(lkClose.value) / 100;
      var slowPerMonth = enq * (1 - fast) * 26;
      var month = slowPerMonth * ticket * (close - close / 3);
      document.getElementById('lk-slow').textContent = Math.round(slowPerMonth).toLocaleString('en-IN');
      document.getElementById('lk-month').textContent = rupee(month);
      document.getElementById('lk-year').textContent = rupee(month * 12);
      var wa = document.getElementById('lk-wa');
      if (wa) wa.setAttribute('href', waLink('leak', ' ' + enq + ' enquiries/day, ' + Math.round(fast * 100) + '% priced within an hour, ticket ' + rupee(ticket), 'value at risk ' + rupee(month) + '/month.'));
    }
    [lkEnq, lkFast, lkTicket, lkClose].forEach(function (el) { el.addEventListener('input', lkCalc); });
    lkCalc();
  }

  // Pricing: billing-term toggle on the plan card.
  Array.prototype.forEach.call(document.querySelectorAll('[data-plans]'), function (plans) {
    var btns = plans.querySelectorAll('[data-term]');
    function set(term) {
      Array.prototype.forEach.call(btns, function (b) { var on = b.getAttribute('data-term') === term; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
      Array.prototype.forEach.call(plans.querySelectorAll('[data-price], [data-term-note]'), function (el) { el.textContent = el.getAttribute('data-' + term); });
    }
    Array.prototype.forEach.call(btns, function (b) { b.addEventListener('click', function () { set(b.getAttribute('data-term')); }); });
  });

  // Pricing: rate-card families.
  Array.prototype.forEach.call(document.querySelectorAll('[data-rates]'), function (rates) {
    var tabs = rates.querySelectorAll('[data-rate-tab]');
    Array.prototype.forEach.call(tabs, function (t) {
      t.addEventListener('click', function () {
        var k = t.getAttribute('data-rate-tab');
        Array.prototype.forEach.call(tabs, function (x) { x.setAttribute('aria-selected', String(x === t)); });
        Array.prototype.forEach.call(rates.querySelectorAll('[data-rate-panel]'), function (p) { p.classList.toggle('is-on', p.getAttribute('data-rate-panel') === k); });
      });
    });
  });

  // Pricing: work out your own number. Plan and add-on prices mirror the pricing page.
  var pc = document.getElementById('calc-plan');
  if (pc) {
    var PRICE = { monthly: 18000, location: 2999, brand: 999, register: 499, camera: 799 };
    var pcTerm = 'monthly', money = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
    var pcLoc = bindRange('pc-loc', 'pc-loc-out'), pcBrand = bindRange('pc-brand', 'pc-brand-out'), pcReg = bindRange('pc-reg', 'pc-reg-out'), pcCam = bindRange('pc-cam', 'pc-cam-out');
    function pcCalc() {
      var loc = Number(pcLoc.value), brand = Number(pcBrand.value), reg = Number(pcReg.value), cam = Number(pcCam.value);
      var plan = PRICE[pcTerm];
      var add = (loc - 1) * PRICE.location + (brand - 1) * PRICE.brand + Math.max(0, reg - 2) * PRICE.register + cam * PRICE.camera;
      document.getElementById('pc-plan').textContent = money(plan);
      document.getElementById('pc-add').textContent = money(add);
      document.getElementById('pc-total').textContent = money(plan + add);
      var ent = document.getElementById('pc-ent'); if (ent) ent.hidden = loc < 6;
      var wa = document.getElementById('pc-wa');
      if (wa) wa.setAttribute('href', waLink('quote', ' Jwero One, ' + pcTerm + ' billing, ' + loc + ' location' + (loc > 1 ? 's' : '') + ', ' + brand + ' brand' + (brand > 1 ? 's' : '') + ', ' + reg + ' registers, ' + cam + ' cameras, about ' + money(plan + add) + '/month before GST and usage.'));
    }
    Array.prototype.forEach.call(pc.querySelectorAll('[data-pc-term]'), function (b) {
      b.addEventListener('click', function () {
        pcTerm = b.getAttribute('data-pc-term');
        Array.prototype.forEach.call(pc.querySelectorAll('[data-pc-term]'), function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
        pcCalc();
      });
    });
    [pcLoc, pcBrand, pcReg, pcCam].forEach(function (el) { el.addEventListener('input', pcCalc); });
    pcCalc();
  }

  // Diamond traders: the memo board. Mark a memo returned or sold; what is out, and what is late, follows.
  Array.prototype.forEach.call(document.querySelectorAll('[data-memoboard]'), function (board) {
    var rows = board.querySelectorAll('[data-memo]'), draft = board.querySelector('[data-memo-draft]');
    var money = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
    function n(k, v) { var el = board.querySelector('[data-memo-n="' + k + '"]'); if (el) el.textContent = v; }
    function tally() {
      var out = 0, value = 0, late = 0;
      Array.prototype.forEach.call(rows, function (r) { if (r.classList.contains('is-closed')) return; out += 1; value += Number(r.getAttribute('data-value')); late += Number(r.getAttribute('data-late')); });
      n('out', String(out)); n('value', money(value)); n('late', String(late));
      if (draft) draft.innerHTML = late ? '<b>Drafted for your tap:</b> a follow-up for each overdue memo, naming the stones and the return date agreed.' : out ? '<b>Nothing overdue.</b> Every memo still out is inside its return date.' : '<b>Everything is home or sold.</b> Stock and the party ledgers are already up to date.';
    }
    board.addEventListener('click', function (e) {
      var b = e.target.closest('[data-memo-do]'); if (!b) return;
      var row = b.closest('[data-memo]'), res = row.querySelector('.memo-result'), sold = b.getAttribute('data-memo-do') === 'sold';
      row.classList.add('is-closed'); row.classList.remove('is-late');
      res.hidden = false; res.textContent = sold ? 'Sold. Invoice raised from the memo; the party ledger and stock moved together.' : 'Returned. The stones are back in stock and can be shown to the next buyer.';
      tally();
    });
    tally();
  });

  // Diamond traders: a per-carat rate grid. Illustrative list rates; the buyer's discount and the carats are the reader's.
  var grid = document.getElementById('calc-grid');
  if (grid) {
    var gState = { shape: 'round', size: '1', q: '1' }, BASE = { '0.3': 90000, '0.5': 160000, '1': 420000 };
    var gDisc = bindRange('grid-disc', 'grid-disc-out', '%'), gCt = bindRange('grid-ct', 'grid-ct-out', ' ct');
    var rupees = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
    function gridCalc() {
      var list = BASE[gState.size] * Number(gState.q) * (gState.shape === 'fancy' ? .8 : 1), rate = list * (1 - Number(gDisc.value) / 100), total = rate * Number(gCt.value);
      document.getElementById('grid-list').textContent = rupees(list);
      document.getElementById('grid-rate').textContent = rupees(rate);
      document.getElementById('grid-total').textContent = rupees(total);
      var wa = document.getElementById('grid-wa');
      if (wa) wa.setAttribute('href', waLink('grid', ' ' + Number(gCt.value).toFixed(2) + ' ct, ' + gState.shape + ', list ' + rupees(list) + ' per carat, less ' + gDisc.value + '%.'));
    }
    [['shape', 'data-grid-shape'], ['size', 'data-grid-size'], ['q', 'data-grid-q']].forEach(function (pair) {
      Array.prototype.forEach.call(grid.querySelectorAll('[' + pair[1] + ']'), function (b) {
        b.addEventListener('click', function () {
          gState[pair[0]] = b.getAttribute(pair[1]);
          Array.prototype.forEach.call(grid.querySelectorAll('[' + pair[1] + ']'), function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
          gridCalc();
        });
      });
    });
    [gDisc, gCt].forEach(function (el) { el.addEventListener('input', gridCalc); });
    gridCalc();
  }

  // Motion only where the reader is looking: sections off screen pause their CSS animations.
  if (canObserve) {
    var offIo = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('is-off', !e.isIntersecting); }); }, { rootMargin: '120px' });
    Array.prototype.forEach.call(document.querySelectorAll('main > section, .site-footer'), function (sn) { offIo.observe(sn); });
  }

  // Back to top: the rocket lifts first, the page follows.
  (function () {
    var btn = document.querySelector('.to-top');
    if (!btn) return;
    var on = false;
    function check() {
      var want = window.scrollY > window.innerHeight * 1.2;
      if (want !== on) { on = want; btn.classList.toggle('is-on', on); }
    }
    window.addEventListener('scroll', check, { passive: true });
    check();
    btn.addEventListener('click', function () {
      btn.classList.add('is-flying');
      window.setTimeout(function () { btn.classList.remove('is-flying'); }, 700);
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  })();

  // /start funnel: three steps, the choices ride along to the product signup.
  Array.prototype.forEach.call(document.querySelectorAll('[data-start]'), function (wrap) {
    var pick = { persona: null, tier: null }, labels = {}, step = 1;
    var go = wrap.querySelector('[data-start-go]'), waBtn = wrap.querySelector('[data-start-wa]'), back = wrap.querySelector('[data-start-back]');
    var base = go.getAttribute('href');
    try { var from = (new URLSearchParams(location.search).get('from') || '').replace(/[^a-z0-9-]/gi, ''); if (from) { base = base.replace('utm_medium=start', 'utm_medium=start&utm_content=' + from); go.setAttribute('href', base); } } catch (e) {}
    function show(n, still) {
      step = n;
      wrap.querySelectorAll('.start-panel').forEach(function (p) { p.classList.toggle('is-on', Number(p.dataset.panel) === n); });
      wrap.querySelectorAll('.start-steps li').forEach(function (li) { var k = Number(li.dataset.step); li.classList.toggle('is-on', k === n); li.classList.toggle('is-done', k < n); });
      back.hidden = n === 1;
      if (n === 3) {
        wrap.querySelector('[data-sum="persona"]').textContent = labels.persona || '…';
        wrap.querySelector('[data-sum="tier"]').textContent = labels.tier || '…';
        go.setAttribute('href', base + '&business=' + encodeURIComponent(pick.persona || '') + '&tier=' + encodeURIComponent(pick.tier || ''));
        if (waBtn) waBtn.setAttribute('href', 'https://wa.me/919169959959?text=' + encodeURIComponent('Hi Jwero, I want to set up a workspace for my ' + (labels.persona || 'business').toLowerCase() + ' on the ' + (labels.tier || 'Assist') + ' tier. Help me start. [ref:start/wa]'));
      }
      if (!still) wrap.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
    wrap.addEventListener('click', function (e) {
      var o = e.target.closest('.start-opt'); if (!o) return;
      var key = o.dataset.persona ? 'persona' : 'tier';
      pick[key] = o.dataset.persona || o.dataset.tier; labels[key] = o.querySelector('b').textContent;
      o.parentNode.querySelectorAll('.start-opt').forEach(function (x) { x.classList.toggle('is-picked', x === o); });
      window.setTimeout(function () { show(step + 1); }, 260);
    });
    back.addEventListener('click', function () { show(Math.max(1, step - 1)); });
    // Lift-off on the final click: the rocket goes first, then the reader.
    go.addEventListener('click', function (e) {
      if (reduceMotion || !document.querySelector('.launch')) return;
      e.preventDefault();
      var href = go.getAttribute('href'), l = document.querySelector('.launch');
      docEl.classList.add('first-visit'); l.classList.add('is-liftoff');
      window.setTimeout(function () { location.href = href; }, 1500);
    });
    // Arriving from a page that already says what kind of business this is: pick it, move on to step two.
    try {
      var ref = document.referrer ? new URL(document.referrer) : null, rp = ref && ref.host === location.host ? ref.pathname : '';
      var guess = /manufactur|karigar|casting|cad|oem|gold-loss|production|export-houses/.test(rp) ? 'maker'
        : /franchise/.test(rp) ? 'franchise' : /multi-store|chain|enterprise|luxury/.test(rp) ? 'chain'
        : /diamond-traders/.test(rp) ? 'trader' : /b2b|wholesale|bullion|trade|quicksell/.test(rp) ? 'b2b' : /d2c|ecommerce|storefront|shopify|instagram|jewellery-brands|website/.test(rp) ? 'd2c'
        : /single-store|gold-retail|silver-retail|diamond-retail|bridal|cashier|sales-associate/.test(rp) ? 'single' : '';
      var gb = guess && wrap.querySelector('[data-persona="' + guess + '"]');
      if (gb) {
        pick.persona = guess; labels.persona = gb.querySelector('b').textContent;
        gb.parentNode.querySelectorAll('.start-opt').forEach(function (x) { x.classList.toggle('is-picked', x === gb); });
        show(2, true);
        var note = document.createElement('p'); note.className = 'start-guess';
        note.innerHTML = 'Set up for <b>' + labels.persona + '</b>, from the page you came from. <button type="button">Change</button>';
        note.querySelector('button').addEventListener('click', function () { show(1); note.remove(); });
        var p2 = wrap.querySelector('[data-panel="2"]'); p2.insertBefore(note, p2.firstChild);
      }
    } catch (e) {}
    try { var saved = localStorage.getItem('jwero-persona'); if (saved) { var b = wrap.querySelector('[data-persona="' + saved + '"]'); if (b) b.classList.add('is-picked'); } } catch (e) {}
    // Remember the picks so a return visit resumes at the summary, not step one.
    wrap.addEventListener('click', function (e) {
      var o = e.target.closest('.start-opt'); if (!o) return;
      try { if (o.dataset.persona) { localStorage.setItem('jwero-persona', o.dataset.persona); localStorage.setItem('jwero-persona-picked', '1'); } localStorage.setItem('jwero-start', JSON.stringify({ pick: pick, labels: labels })); } catch (x) {}
    });
    go.addEventListener('click', function () { try { localStorage.setItem('jwero-signed-up', String(Date.now())); } catch (x) {} });
    try {
      var st = JSON.parse(localStorage.getItem('jwero-start') || 'null');
      if (st && st.pick && st.pick.persona && st.pick.tier) {
        pick = st.pick; labels = st.labels || {};
        wrap.querySelectorAll('.start-opt').forEach(function (x) { x.classList.toggle('is-picked', x.dataset.persona === pick.persona || x.dataset.tier === pick.tier); });
        show(3);
      }
    } catch (x) {}
  });

  // Flip each line of the two-speed strip between running and asking.
  Array.prototype.forEach.call(document.querySelectorAll('.speeds'), function (speeds) {
    var strip = speeds.parentElement.closest('.container') || speeds.parentElement, runN = strip.querySelector('[data-run]'), askN = strip.querySelector('[data-ask]');
    function tally() {
      var items = strip.querySelectorAll('.speed li'), r = 0;
      Array.prototype.forEach.call(items, function (li) { if (li.getAttribute('data-mode') === 'run') r++; });
      if (runN) runN.textContent = r;
      if (askN) askN.textContent = items.length - r;
    }
    speeds.addEventListener('click', function (e) {
      var t = e.target.closest('.speed-toggle');
      if (!t) return;
      var li = t.closest('li'), run = li.getAttribute('data-mode') !== 'run';
      li.setAttribute('data-mode', run ? 'run' : 'ask');
      t.setAttribute('aria-pressed', run ? 'true' : 'false');
      tally();
    });
  });

  // Growth report sample tabs
  var report = document.querySelector('[data-report]');
  if (report) {
    var data = {
      week: { back: '14', appt: '9', rev: '₹38,400', msg: '212' },
      month: { back: '61', appt: '37', rev: '₹1,64,900', msg: '890' }
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

  // FAQ instant search, filters the 111-question hub down to a scannable few as you type,
  // since scrolling every category to find one answer is the opposite of instant clarity.
  var faqSearch = document.querySelector('[data-faq-search]');
  if (faqSearch) {
    var faqInput = faqSearch.querySelector('.faq-search-input');
    var faqCount = faqSearch.querySelector('[data-faq-count]');
    var faqChips = document.querySelector('[data-faq-chips]');
    var faqCats = Array.prototype.slice.call(document.querySelectorAll('[data-faq-cat]'));
    var faqItems = Array.prototype.slice.call(document.querySelectorAll('.faq-item'));
    faqInput.addEventListener('input', function () {
      var q = faqInput.value.trim().toLowerCase();
      if (!q) {
        faqItems.forEach(function (el) { el.style.display = ''; });
        faqCats.forEach(function (cat) { cat.closest('.section').style.display = ''; });
        if (faqChips) faqChips.style.display = '';
        faqCount.textContent = '';
        return;
      }
      if (faqChips) faqChips.style.display = 'none';
      var shown = 0;
      faqCats.forEach(function (cat) {
        var catShown = 0;
        cat.querySelectorAll('.faq-item').forEach(function (item) {
          var text = (item.querySelector('summary').textContent + ' ' + item.querySelector('.faq-a').textContent).toLowerCase();
          var match = text.indexOf(q) !== -1;
          item.style.display = match ? '' : 'none';
          if (match) { item.open = true; catShown++; }
        });
        cat.closest('.section').style.display = catShown ? '' : 'none';
        shown += catShown;
      });
      faqCount.textContent = shown + (shown === 1 ? ' question matches' : ' questions match') + ' “' + faqInput.value.trim() + '”';
    });
  }

  // Platform tabs (interactive category switcher, e.g. Remember/Sell/Run)
  document.querySelectorAll('[data-ptabs]').forEach(function (wrap) {
    var buttons = wrap.querySelectorAll('.ptabs-nav button');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-tab');
        buttons.forEach(function (b) { b.setAttribute('aria-selected', b === btn ? 'true' : 'false'); });
        wrap.querySelectorAll('.ptabs-panel').forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === key);
        });
      });
    });
  });

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

  // Demo form: hand the request to the same WhatsApp inbox everything else uses,
  // with the form details prefilled, no silent black hole, no separate backend.
  var form = document.getElementById('demo-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (name) { var el = form.querySelector('[name=' + name + ']'); return el && el.value ? el.value.trim() : ''; };
    var msg = 'Hi Jwero, I would like to book a demo.' +
      (v('name') ? ' Name: ' + v('name') + '.' : '') +
      (v('phone') ? ' WhatsApp: ' + v('phone') + '.' : '') +
      (v('business') ? ' Business: ' + v('business') + '.' : '') +
      (v('city') ? ' City: ' + v('city') + '.' : '') +
      (v('reach') === 'Call me' ? ' Please call me' + (v('time') ? ', ' + v('time') : '') + '.' : '');
    form.querySelector('.form-ok').style.display = 'block';
    form.querySelector('button[type=submit]').disabled = true;
    window.location.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg + ' [ref:book-demo/form]');
  });

  // Links written by script carry root paths. On a sub-path host, send them to the right place.
  if (BASE) {
    var fix = function (e) { var a = e.target.closest && e.target.closest('a[href^="/"]'); if (a) { var h = a.getAttribute('href'), b = based(h); if (b !== h) a.setAttribute('href', b); } };
    document.addEventListener('mouseover', fix, true); document.addEventListener('focusin', fix, true); document.addEventListener('touchstart', fix, { capture: true, passive: true }); document.addEventListener('mousedown', fix, true);
  }

  // ===== positioning: you focus on jewellery, we handle the chaos =====
  // The guarantee: draw the ring, count to 40 and shrink the bar when seen.
  Array.prototype.forEach.call(document.querySelectorAll('.pz-guar'), function (g) {
    var n = g.querySelector('[data-pz-count]'), to = n ? +n.getAttribute('data-pz-count') : 0;
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still || !('IntersectionObserver' in window)) { g.classList.add('is-in'); return; }
    if (n) n.textContent = '0';
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) {
      if (!en.isIntersecting) return; io.disconnect(); g.classList.add('is-in');
      var t0 = null; function step(t) { if (!t0) t0 = t; var k = Math.min(1, (t - t0) / 1200); n.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) window.requestAnimationFrame(step); }
      if (n) window.requestAnimationFrame(step);
    }); }, { threshold: .4 });
    io.observe(g);
  });

  // Count your team. Each role is an employee, a freelancer or agency, a gap,
  // or not counted. The customer base predicts the monthly volume of
  // conversations, comments, reviews and calls; each role has a count of work
  // (predicted, or a starting number the jeweller can change) and a capacity
  // per person, which gives the people it takes. Today's cost is those people
  // at the lowest going rate. Jwero is 50% of the cheaper way to do the work
  // when the jeweller focuses on the outcome, 60% when they approve every step.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-team]'), function (root) {
    var btns = Array.prototype.slice.call(root.querySelectorAll('.pz-team2-roles button')), modes = Array.prototype.slice.call(root.querySelectorAll('.pz-team2-mode button')), stores = 1, mode = 0;
    var RATE = .5, INVOLVED = .1, HRS_E = 1.5, HRS_A = 2.5, SCOPE_BASE = .4, REPLY_CAP = 1500;
    var NAMES = ['not counted', 'an employee', 'a freelancer or agency', 'nobody does it'], TAG = ['', 'Employee', 'Agency', 'Gap'];
    function q(s) { return root.querySelector(s); }
    function num(n) { return Math.round(n).toLocaleString('en-IN'); }
    function inr(n) { return '₹' + (Math.round(n / 500) * 500).toLocaleString('en-IN'); }
    function scopeOf(b) { return root.querySelector('[data-scope="' + b.getAttribute('data-role') + '"]'); }
    // slider 0..100 on a log scale from 500 to 2,00,000 customers, two figures kept
    function base() { var x = 500 * Math.pow(400, +q('[data-pz-team-vol]').value / 100), m = Math.pow(10, Math.floor(Math.log10(x)) - 1); return Math.round(x / m) * m; }
    function predict(B) {
      return { base: B, conv: B * .08 + 150 * stores, comments: B * .015 + 30 * stores, reviews: B * .004 + 10 * stores, 'in': B * .03 + 100 * stores, out: B * .06,
        quote: B * .01 + 40 * stores, visits: B * .012 + 60 * stores, loyal: B * .2, orders: B * .005 + 5 };
    }
    function start(b, P, sc) {
      var d = b.getAttribute('data-def'), k = d.slice(2);
      if (d === 'c') return sc.querySelector('div').querySelectorAll('.pz-team2-item[aria-pressed="true"]').length;
      if (d.charAt(0) === 'n') return +k;
      if (d.charAt(0) === 's') return +k * stores;
      var st = +b.getAttribute('data-step') || 1; return Math.max(st, Math.round(P[k] / st) * st);
    }
    function calc() {
      var B = base(), P = predict(B);
      q('[data-pz-team-base]').textContent = num(B);
      Array.prototype.forEach.call(root.querySelectorAll('[data-predict]'), function (el) { el.textContent = num(P[el.getAttribute('data-predict')]); });
      var now = 0, human = 0, ai = 0, gapJw = 0, people = 0, gaps = 0, hrs = 0, picked = [], tools = 0, toolN = 0;
      btns.forEach(function (b) {
        var s = +b.getAttribute('data-s'); if (!s) return;
        var name = b.querySelector('b').textContent, sc = scopeOf(b), all = sc.querySelectorAll('.pz-team2-item'), on = sc.querySelectorAll('.pz-team2-item[aria-pressed="true"]');
        var count = b.hasAttribute('data-count') ? +b.getAttribute('data-count') : start(b, P, sc), cap = +b.getAttribute('data-cap');
        var units = count / cap + (b.getAttribute('data-extra') ? P[b.getAttribute('data-extra')] / REPLY_CAP : 0), heads = Math.max(1, Math.ceil(units - .001));
        // owning the role costs something; the rest moves with what is ticked
        var part = SCOPE_BASE + (1 - SCOPE_BASE) * (all.length ? on.length / all.length : 1);
        var eCost = heads * +b.getAttribute('data-e') * part, aCost = Math.max(1, units) * +b.getAttribute('data-a') * part, low = Math.min(eCost, aCost);
        var share = +b.getAttribute('data-ai'), h = low * RATE * (1 - share) + (mode ? low * INVOLVED : 0), u = low * RATE * share;
        var out = sc.querySelector('[data-scope-count]'); if (out) out.textContent = num(count);
        var unit = sc.querySelector('[data-scope-unit]'); if (b.getAttribute('data-def') === 'c') unit.textContent = count + (count === 1 ? ' ad channel' : ' ad channels') + ' ticked below';
        sc.querySelector('[data-scope-takes]').textContent = 'takes ' + heads + (heads === 1 ? ' person' : ' people') + (b.getAttribute('data-extra') ? ', with ' + num(P.comments) + ' comments and DMs' : '');
        name += ' x' + num(count) + (on.length < all.length ? ' [' + Array.prototype.map.call(on, function (x) { return x.textContent; }).join(', ') + ']' : '');
        if (s === 3) { gaps++; gapJw += h + u; picked.push(name + ' (gap)'); return; }
        if (s === 1 && +b.getAttribute('data-tool')) { tools += +b.getAttribute('data-tool'); toolN++; }
        people += heads; now += s === 1 ? eCost : aCost; human += h; ai += u; hrs += (s === 1 ? HRS_E : HRS_A) * (s === 1 ? heads : 1);
        picked.push(name + (s === 1 ? ' (employee)' : ' (agency)'));
      });
      var ppl = now; now += tools;
      var jw = human + ai, save = now - jw, pct = now ? Math.round(save / now * 100) : 0, n = picked.length - gaps, after = mode ? Math.max(2, Math.round(n * .75)) : 1;
      q('[data-pz-team-n]').textContent = people; q('[data-pz-team-t]').textContent = toolN; q('[data-pz-team-pw]').textContent = people === 1 ? 'person' : 'people'; q('[data-pz-team-tw]').textContent = toolN === 1 ? 'tool' : 'tools';
      q('[data-pz-team-ppl]').textContent = inr(ppl); q('[data-pz-team-tools]').textContent = toolN ? inr(tools) + ' for ' + toolN + (toolN === 1 ? ' tool' : ' tools') : '₹0';
      q('[data-pz-team-now]').textContent = inr(now) + ' a month';
      q('[data-pz-team-jw]').textContent = inr(jw) + ' a month';
      q('[data-pz-team-human]').textContent = inr(human);
      q('[data-pz-team-ai]').textContent = inr(ai);
      q('[data-pz-team-save]').textContent = now ? inr(save) + ' (' + pct + '% less)' : '₹0';
      q('[data-pz-team-hrs]').textContent = n ? Math.round(hrs) + ' hours, down to about ' + Math.min(after, Math.max(1, Math.round(hrs))) : '0';
      q('[data-pz-team-gaps]').textContent = gaps ? gaps + (gaps === 1 ? ' role' : ' roles') + ', from ' + inr(gapJw) + ' a month' : picked.length ? 'None yet. Mark a role as “Nobody”' : 'None yet';
      q('[data-pz-team-b1]').style.width = now ? '100%' : '0';
      q('[data-pz-team-b3]').style.width = now ? human / now * 100 + '%' : '0'; q('[data-pz-team-b2]').style.width = now ? ai / now * 100 + '%' : '0';
      var sh = q('[data-pz-team-share]');
      if (sh) sh.setAttribute('href', 'https://wa.me/?text=' + encodeURIComponent('Have a look at what keeping up costs us today, and the same work with Jwero' + (now ? ' (' + inr(now) + ' against ' + inr(jw) + ' a month)' : '') + ': ' + location.origin + based('/count-your-team/') + '#v=' + q('[data-pz-team-vol]').value + '&s=' + stores));
      q('[data-pz-team-cta]').setAttribute('data-wa-extra', picked.length ? ' ' + stores + ' showroom(s), ' + num(B) + ' customers. ' + (mode ? 'I want to be involved in every decision.' : 'I want to focus on the outcome.') + ' Roles: ' + picked.join('; ') + '.' : '');
    }
    function setState(b, s) {
      var sc = scopeOf(b); sc.hidden = !s;
      b.setAttribute('data-s', s); b.querySelector('i').textContent = TAG[s];
      b.setAttribute('aria-label', b.querySelector('b').textContent + ': ' + NAMES[s]);
      Array.prototype.forEach.call(sc.querySelectorAll('.pz-team2-who button'), function (w) { w.setAttribute('aria-pressed', String(+w.getAttribute('data-who') === s)); });
    }
    root.addEventListener('click', function (e) {
      var t = e.target, st = t.closest('.pz-team2-scale .pz-team2-step button');
      if (st) { stores = Math.max(1, Math.min(99, stores + +st.getAttribute('data-d'))); q('[data-pz-team-stores]').textContent = stores; calc(); return; }
      var m = t.closest('.pz-team2-mode button');
      if (m) { mode = +m.getAttribute('data-m'); modes.forEach(function (x) { x.setAttribute('aria-pressed', String(x === m)); }); calc(); return; }
      var cb = t.closest('.pz-team2-count button');
      if (cb) {
        var sc = cb.closest('.pz-team2-scope'), b = root.querySelector('.pz-team2-roles button[data-role="' + sc.getAttribute('data-scope') + '"]'), step = +b.getAttribute('data-step') || 1;
        var cur = b.hasAttribute('data-count') ? +b.getAttribute('data-count') : start(b, predict(base()), sc);
        b.setAttribute('data-count', Math.max(step, cur + step * +cb.getAttribute('data-c'))); calc(); return;
      }
      var it = t.closest('.pz-team2-item');
      if (it) { it.setAttribute('aria-pressed', it.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); calc(); return; }
      var wb = t.closest('.pz-team2-who button');
      if (wb) { setState(root.querySelector('.pz-team2-roles button[data-role="' + wb.closest('.pz-team2-scope').getAttribute('data-scope') + '"]'), +wb.getAttribute('data-who')); calc(); return; }
      // a role is switched on (as an employee, the commonest case) or off; who does it is chosen in its panel
      var rb = t.closest('.pz-team2-roles button'); if (!rb) return;
      setState(rb, +rb.getAttribute('data-s') ? 0 : 1);
      calc();
    });
    q('[data-pz-team-vol]').addEventListener('input', calc);
    var carried = /[#&]v=(\d+)&s=(\d+)/.exec(window.location.hash || '');
    if (carried) { q('[data-pz-team-vol]').value = Math.min(100, +carried[1]); stores = Math.max(1, Math.min(99, +carried[2])); q('[data-pz-team-stores]').textContent = stores; }
    calc();
  });

  // Count your team, short version (home page). Same prediction formulas as
  // the full calculator above; keep the two in step.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-teaser]'), function (root) {
    var stores = 1, go = root.querySelector('[data-pz-teaser-go]'), href = go.getAttribute('href').split('#')[0];
    function q(s) { return root.querySelector(s); }
    function num(n) { return Math.round(n).toLocaleString('en-IN'); }
    function calc() {
      var v = +q('[data-pz-teaser-vol]').value, x = 500 * Math.pow(400, v / 100), m = Math.pow(10, Math.floor(Math.log10(x)) - 1), B = Math.round(x / m) * m;
      var P = { conv: B * .08 + 150 * stores, comments: B * .015 + 30 * stores, reviews: B * .004 + 10 * stores, 'in': B * .03 + 100 * stores, out: B * .06 };
      q('[data-pz-teaser-base]').textContent = num(B);
      Array.prototype.forEach.call(root.querySelectorAll('[data-predict]'), function (el) { el.textContent = num(P[el.getAttribute('data-predict')]); });
      q('[data-pz-teaser-n]').textContent = Math.ceil(P.conv / 1500) + Math.ceil(P.comments / 1500) + Math.ceil(P['in'] / 1200) + Math.ceil(P.out / 1800);
      go.setAttribute('href', href + '#v=' + v + '&s=' + stores);
    }
    root.addEventListener('click', function (e) { var st = e.target.closest('.pz-team2-step button'); if (!st) return; stores = Math.max(1, Math.min(99, stores + +st.getAttribute('data-d'))); q('[data-pz-teaser-stores]').textContent = stores; calc(); });
    q('[data-pz-teaser-vol]').addEventListener('input', calc);
    calc();
  });

  // Tabs: one list visible at a time (what Jwero does each month).
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-tabs]'), function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]')), panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[role="tab"]'); if (!b) return; var n = +b.getAttribute('data-i');
      tabs.forEach(function (t, i) { t.setAttribute('aria-selected', String(i === n)); });
      panels.forEach(function (p, i) { p.classList.toggle('is-on', i === n); });
    });
  });

  // A day with Jwero: the hours tick by; earlier ones are marked done.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-day]'), function (root) {
    var items = Array.prototype.slice.call(root.children), at = 0, timer = null, touched = false;
    function show(n) { at = n; items.forEach(function (li, i) { li.classList.toggle('is-on', i === n); li.classList.toggle('is-done', i < n); }); }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
    root.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; touched = true; stop(); show(+b.getAttribute('data-i')); });
    if ('IntersectionObserver' in window && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      new IntersectionObserver(function (es) { es.forEach(function (en) {
        if (en.isIntersecting && !touched && !timer) timer = window.setInterval(function () { show((at + 1) % items.length); }, 2200);
        else if (!en.isIntersecting) stop();
      }); }, { threshold: .3 }).observe(root);
    }
  });

  // The command centre: three open items become handled, one after another.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-cmd]'), function (root) {
    var go = root.querySelector('[data-pz-cmd-go]'), cta = root.querySelector('[data-pz-cmd-cta]'), rows = Array.prototype.slice.call(root.querySelectorAll('.pz-cmd-list li')), k = root.querySelector('.pz-cmd-k');
    if (!go) return;
    go.addEventListener('click', function () {
      go.disabled = true;
      rows.forEach(function (li, i) { window.setTimeout(function () { li.classList.add('is-done'); if (i === rows.length - 1) { if (k) k.textContent = 'Nothing needs your attention'; go.hidden = true; if (cta) cta.hidden = false; } }, 500 * (i + 1)); });
    });
  });

  // Who runs it: three modes, the work slides between the lanes.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-run]'), function (root) {
    var modes; try { modes = JSON.parse(root.querySelector('script').textContent); } catch (e) { return; }
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.pz-run-tabs button')), chips = Array.prototype.slice.call(root.querySelectorAll('.pz-run-track i[data-f]'));
    var heads = Array.prototype.slice.call(root.querySelectorAll('.pz-run-head b')), cur = -1, timer = null, touched = false;
    function q(s) { return root.querySelector(s); }
    function show(i) {
      cur = i; var m = modes[i];
      root.setAttribute('data-mode', m.key);
      tabs.forEach(function (t, k) { t.setAttribute('aria-selected', String(k === i)); });
      chips.forEach(function (c, k) { c.style.setProperty('--lane', m.lanes[k]); });
      heads.forEach(function (h, k) { h.classList.toggle('is-on', m.lanes.indexOf(k) !== -1 || k === 0); });
      chips.forEach(function (c, k) { c.setAttribute('data-l', m.lanes[k]); });
      q('[data-pz-run-title]').textContent = m.title; q('[data-pz-run-line]').textContent = m.line;
      q('[data-pz-run-you]').textContent = m.you; q('[data-pz-run-ai]').textContent = m.ai; q('[data-pz-run-jw]').textContent = m.jw;
      q('[data-pz-run-m="0"]').style.width = m.meters[0] + '%'; q('[data-pz-run-m="1"]').style.width = m.meters[1] + '%';
      q('[data-pz-run-cost]').textContent = m.cost;
      var cta = q('[data-pz-run-cta]'); cta.textContent = m.cta[0];
      if (m.cta[1].charAt(0) === '#') { cta.setAttribute('href', '#'); cta.setAttribute('data-wa', m.cta[1].slice(1)); } else { cta.setAttribute('href', based(m.cta[1])); cta.removeAttribute('data-wa'); }
    }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
    root.addEventListener('click', function (e) { var b = e.target.closest('.pz-run-tabs button'); if (!b) return; touched = true; stop(); show(+b.getAttribute('data-i')); });
    show(+root.getAttribute('data-run-start') || 0);
    // Until someone taps, walk through the three so the difference is seen.
    if ('IntersectionObserver' in window && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      new IntersectionObserver(function (es) { es.forEach(function (en) {
        if (en.isIntersecting && !touched && !timer) timer = window.setInterval(function () { show((cur + 1) % modes.length); }, 4200);
        else if (!en.isIntersecting) stop();
      }); }, { threshold: .35 }).observe(root);
    }
  });
  // What Jwero can take off your plate: tap the areas, the count and the message follow.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-plate]'), function (root) {
    var cells = Array.prototype.slice.call(root.querySelectorAll('.pz-plate-cell')), wrap = root.parentNode;
    var out = wrap.querySelector('[data-pz-plate-out]'), cta = wrap.querySelector('[data-pz-plate-cta]');
    function update() {
      var on = cells.filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; }).map(function (c) { return c.getAttribute('data-area'); });
      out.innerHTML = !on.length ? '<b>You choose how much you want us to handle.</b>' : on.length === cells.length ? '<b>Everything around the jewellery.</b> You focus on jewellery. Jwero handles the rest.' : '<b>' + on.length + ' of ' + cells.length + ' handed to Jwero:</b> ' + on.join(', ').toLowerCase() + '.';
      if (cta) { cta.setAttribute('data-wa-extra', on.length ? ' I would like Jwero to handle: ' + on.join(', ') + '.' : ''); }
    }
    root.addEventListener('click', function (e) { var c = e.target.closest('.pz-plate-cell'); if (!c) return; c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); update(); });
  });
  // Outcome first: pick what to improve, see what Jwero would do.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-out]'), function (root) {
    var data; try { data = JSON.parse(root.querySelector('script').textContent); } catch (e) { return; }
    var btns = Array.prototype.slice.call(root.querySelectorAll('.pz-out-btns button'));
    function q(s) { return root.querySelector(s); }
    function show(i) {
      var d = data[i];
      btns.forEach(function (b, k) { b.setAttribute('aria-pressed', String(k === i)); });
      q('[data-pz-out-t]').textContent = d.t; q('[data-pz-out-line]').textContent = d.line;
      q('[data-pz-out-does]').innerHTML = d.does.map(function (x) { return '<li>' + x + '</li>'; }).join('');
      q('[data-pz-out-who]').textContent = d.who.join(', '); q('[data-pz-out-lv]').textContent = d.lv;
      q('[data-pz-out-caps]').innerHTML = d.caps.map(function (c) { return '<a href="' + based(c[1]) + '">' + c[0] + '</a>'; }).join(' · ');
      q('[data-pz-out-cta]').setAttribute('data-wa-extra', ' ' + d.t + '.');
      var card = q('.pz-out-card'); card.classList.remove('is-in'); void card.offsetWidth; card.classList.add('is-in');
    }
    root.addEventListener('click', function (e) { var b = e.target.closest('.pz-out-btns button'); if (b) show(+b.getAttribute('data-i')); });
    show(0);
  });
  // The business assessment: four steps, then a plan built from the answers.
  Array.prototype.forEach.call(document.querySelectorAll('[data-pz-assess]'), function (root) {
    var steps = Array.prototype.slice.call(root.querySelectorAll('.pz-step')), dots = Array.prototype.slice.call(root.querySelectorAll('.pz-steps li'));
    var next = root.querySelector('[data-pz-next]'), back = root.querySelector('[data-pz-back]'), at = 0;
    function val(n) { var el = root.querySelector('[data-pz-f="' + n + '"]'); return el ? el.value : ''; }
    function picks(n) { return Array.prototype.filter.call(root.querySelectorAll('[data-pz-c="' + n + '"]'), function (c) { return c.checked; }).map(function (c) { return c.value; }); }
    function has(list, word) { return list.some(function (x) { return x.indexOf(word) !== -1; }); }
    function block(title, items) { return items.length ? '<div class="pz-plan-b"><p>' + title + '</p><ul>' + items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' : ''; }
    function plan() {
      var keep = ['Jewellery, design and craftsmanship', 'Customer relationships at the counter', 'Business decisions'], aug = [], hand = [], signs = 0;
      function put(list, x) { if (keep.indexOf(x) === -1 && aug.indexOf(x) === -1 && hand.indexOf(x) === -1) list.push(x); }
      var worries = picks('worry');
      worries.forEach(function (w) { put(hand, w); });
      [['wa', 'WhatsApp and customer conversations'], ['dm', 'Digital marketing'], ['ec', 'Online store and ecommerce']].forEach(function (p) {
        var v = val(p[0]);
        if (v.indexOf('dedicated') !== -1) put(keep, p[1]);
        else if (v.indexOf('staff') !== -1 || v.indexOf('myself') !== -1) { put(aug, p[1]); signs++; }
        else { put(hand, p[1]); signs++; }
      });
      var f = val('followup');
      if (f.indexOf('Most') === 0 || f.indexOf('Nearly') === 0) { signs++; if (!has(worries, 'Customer follow-up')) put(aug, 'Customer follow-up, with AI doing the routine'); }
      var a = val('agencies'); if (a !== 'None' && a !== '1') { put(hand, 'The work now spread across agencies, under one team'); signs++; }
      if (val('techtime').indexOf('day') !== -1) { put(hand, 'Technology and integrations'); signs++; }
      if (val('mkt').indexOf('Nobody') === 0) signs++;
      if (val('stores') !== '1') put(aug, 'One view across every store');
      var ch = val('challenge'); put(aug, 'Your biggest challenge: ' + ch.charAt(0).toLowerCase() + ch.slice(1));
      signs += Math.min(3, worries.length);
      var level = hand.length >= 4 ? 'Jwero runs it' : (hand.length || aug.length > 1) ? 'We run it together' : 'You run it';
      var read = signs >= 6 ? 'You are managing a lot of chaos.' : signs >= 3 ? 'You are managing a fair amount of chaos.' : 'Your chaos is under control.';
      root.querySelector('[data-pz-plan-title]').textContent = read;
      root.querySelector('[data-pz-plan]').innerHTML =
        block('Keep in-house', keep) +
        block('Augment with Jwero', aug.length ? aug : ['Nothing yet from these answers']) +
        block('Let Jwero handle', hand.length ? hand : ['Nothing yet. Start by running it yourself; hand a function over when you choose']) +
        block('Suggested way to start', [level + '. Start with one function. Give us more when you are ready.']);
      root.querySelector('[data-pz-plan-cta]').setAttribute('data-wa-extra', ' ' + val('stores') + ' store(s), customer base ' + val('customers') + '. Biggest challenge: ' + ch + '. Keep: ' + keep.slice(3).join('; ') + '. Augment: ' + aug.join('; ') + '. Hand to Jwero: ' + (hand.join('; ') || 'nothing yet') + '. Suggested: ' + level + '.');
    }
    function go(n) {
      at = Math.max(0, Math.min(steps.length - 1, n));
      steps.forEach(function (s, i) { s.classList.toggle('is-on', i === at); });
      dots.forEach(function (d, i) { d.classList.toggle('is-on', i === at); d.classList.toggle('is-done', i < at); });
      back.hidden = at === 0; next.hidden = at === steps.length - 1;
      next.textContent = at === steps.length - 2 ? 'Show my recommendation' : 'Next';
      if (at === steps.length - 1) plan();
    }
    next.addEventListener('click', function () { go(at + 1); root.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); });
    back.addEventListener('click', function () { go(at - 1); });
  });
})();

// Home hero: the dot field follows the pointer, and ripples where a finger taps.
(function () {
  var dots = document.querySelector('.hero-home .panel-dots'); if (!dots) return;
  var panel = dots.parentElement, off;
  function at(x, y) { var r = panel.getBoundingClientRect(); dots.style.setProperty('--mx', (x - r.left) + 'px'); dots.style.setProperty('--my', (y - r.top) + 'px'); }
  panel.addEventListener('pointermove', function (e) { if (e.pointerType !== 'mouse') return; at(e.clientX, e.clientY); dots.classList.add('is-on'); });
  panel.addEventListener('pointerleave', function () { dots.classList.remove('is-on'); });
  panel.addEventListener('pointerdown', function (e) { if (e.pointerType === 'mouse') return; at(e.clientX, e.clientY); dots.classList.remove('is-ripple'); void dots.offsetWidth; dots.classList.add('is-ripple'); clearTimeout(off); off = setTimeout(function () { dots.classList.remove('is-ripple'); }, 950); });
})();

// Count your tools: keep the pinned summary in step with the results card.
(function () {
  var mini = document.querySelector('[data-stackm-mini]'); if (!mini) return;
  var root = mini.closest('[data-stackm]'), n = mini.querySelector('[data-mini-n]'), sv = mini.querySelector('[data-mini-save]');
  function sync() {
    var k = root.querySelectorAll('.stackm-chip[aria-pressed="true"], .stackm-chip.is-on').length;
    var save = root.querySelector('[data-stackm-o="save"]');
    mini.hidden = !k; n.textContent = k;
    sv.textContent = save && save.textContent && save.textContent !== '\u20b90' ? 'saves ' + save.textContent + '/month' : '';
  }
  root.addEventListener('click', function () { setTimeout(sync, 60); });
  sync();
})();

// Business-type pages: tick the tools that kind of business usually runs.
(function () {
  var root = document.querySelector('[data-stackm-preset]'); if (!root) return;
  var want = (root.getAttribute('data-stackm-preset') || '').split('|').filter(Boolean); if (!want.length) return;
  var chips = root.querySelectorAll('.stackm-chip');
  Array.prototype.forEach.call(chips, function (c) { if (want.indexOf(c.textContent.trim()) !== -1 && c.getAttribute('aria-pressed') !== 'true') c.click(); });
})();

document.addEventListener('click', function (e) {
  var a = e.target.closest('[data-stackm-clear-link]'); if (!a) return; e.preventDefault();
  var b = document.querySelector('[data-stackm-clear]'); if (b) b.click();
});

// Gold price calculator in the pricing article.
(function () {
  var root = document.querySelector('[data-price-calc]'); if (!root) return;
  var v = function (k) { var el = root.querySelector('[data-pc="' + k + '"]'); return el ? el.value : ''; };
  var inr = function (n) { return '\u20b9' + Math.round(n).toLocaleString('en-IN'); };
  function run() {
    var rate = +v('rate') || 0, k = +v('purity') || 22, w = +v('weight') || 0, mt = v('mtype'), mv = +v('making') || 0, st = +v('stones') || 0;
    var metal = rate * k / 24 * w;
    var making = mt === 'pct' ? metal * mv / 100 : mt === 'gram' ? w * mv : mv;
    var gst = (metal + making + st) * 0.03;
    var out = { metal: metal, making: making, stones: st, gst: gst, total: metal + making + st + gst };
    Object.keys(out).forEach(function (key) { var el = root.querySelector('[data-pc-o="' + key + '"]'); if (el) el.textContent = inr(out[key]); });
  }
  root.addEventListener('input', run); root.addEventListener('change', run); run();
})();

// Count your tools: quick start by business type, one yes per area, exact tools on request,
// and the result sent on WhatsApp or taken to /start.
(function () {
  Array.prototype.forEach.call(document.querySelectorAll('[data-stackm]'), function (root) {
    var groups = Array.prototype.slice.call(root.querySelectorAll('.stackm-grp')); if (!groups.length) return;
    var chips = function () { return Array.prototype.slice.call(root.querySelectorAll('.stackm-chip')); };
    var on = function (c) { return c.getAttribute('aria-pressed') === 'true'; };
    var send = root.querySelector('[data-stackm-send]');
    function sync() {
      groups.forEach(function (gEl) {
        var n = Array.prototype.filter.call(gEl.querySelectorAll('.stackm-chip'), on).length;
        gEl.querySelector('[data-grp-n]').textContent = n;
        gEl.classList.toggle('has-some', n > 0);
        gEl.querySelector('[data-grp-all]').textContent = n === gEl.querySelectorAll('.stackm-chip').length ? 'Clear' : 'Tick all';
      });
      if (send) {
        var k = chips().filter(on).length, txt = function (sel) { var el = root.querySelector(sel); return el ? el.textContent.trim() : ''; };
        send.setAttribute('data-wa-extra', k ? 'I counted ' + k + ' tools I pay for. Your estimate: ' + txt('[data-stackm-o="today"]') + ' a month today, ' + txt('[data-stackm-o="with"]') + ' with Jwero, saving ' + txt('[data-stackm-o="save"]') + ' a month. Please send me this plan.' : 'Please help me count the tools I pay for and what Jwero would save.');
      }
    }
    root.addEventListener('click', function (e) {
      var all = e.target.closest('[data-grp-all]'), quick = e.target.closest('[data-stackm-quick]'), detail = e.target.closest('[data-stackm-detail]');
      if (all) {
        e.preventDefault(); e.stopPropagation();
        var g = all.closest('.stackm-grp'), list = Array.prototype.slice.call(g.querySelectorAll('.stackm-chip'));
        if (list.every(on)) list.forEach(function (c) { c.click(); });
        else if (all.getAttribute('data-mode') === 'all') list.filter(function (c) { return !on(c); }).forEach(function (c) { c.click(); });
        else { var want = (all.getAttribute('data-common') || '').split('|').filter(Boolean); list.filter(function (c) { return !want.length || want.indexOf(c.textContent.trim()) !== -1; }).forEach(function (c) { c.click(); }); }
      } else if (quick) {
        e.preventDefault(); e.stopPropagation();
        var tools = quick.getAttribute('data-tools').split('|');
        chips().forEach(function (c) { if (on(c) !== (tools.indexOf(c.textContent.trim()) !== -1)) c.click(); });
        Array.prototype.forEach.call(root.querySelectorAll('[data-stackm-quick]'), function (b) { b.classList.toggle('is-on', b === quick); });
      } else if (detail) {
        e.preventDefault(); e.stopPropagation();
        var open = root.classList.toggle('is-detail');
        detail.textContent = open ? 'Hide exact tools ↑' : 'Choose exact tools ↓';
      }
      setTimeout(sync, 40);
    }, true);
    setTimeout(function () {
      // Open on a typical business, so the numbers on screen match what is ticked.
      var row = root.querySelector('[data-default]');
      if (row && !chips().some(on)) { var b = row.querySelector('[data-stackm-quick="' + row.getAttribute('data-default') + '"]'); if (b) b.click(); }
      sync();
    }, 400);
  });
})();

// WhatsApp page: play the one-chat story when it scrolls into view.
(function () {
  var root = document.querySelector('[data-wa-story]'); if (!root) return;
  var msgs = root.querySelectorAll('.wa-msg'), steps = root.querySelectorAll('.wa-steps li'), n = msgs.length, i = -1, timer;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(k) { Array.prototype.forEach.call(msgs, function (m, j) { m.classList.toggle('is-on', j <= k); }); Array.prototype.forEach.call(steps, function (s, j) { s.classList.toggle('is-on', j === k); }); }
  if (reduce) { show(n - 1); return; }
  function tick() { i = (i + 1) % (n + 2); show(Math.min(i, n - 1)); if (i === n + 1) i = -1; }
  Array.prototype.forEach.call(steps, function (s, j) { s.addEventListener('click', function () { clearInterval(timer); i = j; show(j); }); });
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { clearInterval(timer); if (e.isIntersecting) { tick(); timer = setInterval(tick, 1700); } }); }, { threshold: .35 });
  io.observe(root);
})();

// AI calling page: play the call when it scrolls into view.
(function () {
  var root = document.querySelector('[data-call-demo]'); if (!root) return;
  var lines = root.querySelectorAll('.call-line'), time = root.querySelector('[data-call-time]'), k = -1, t0, timer, clock;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(n) { Array.prototype.forEach.call(lines, function (l, j) { l.classList.toggle('is-on', j <= n); }); root.classList.toggle('is-done', n >= lines.length - 1); }
  if (reduce) { root.classList.add('is-live'); show(lines.length - 1); return; }
  function step() { k++; if (k > lines.length + 1) { k = 0; t0 = Date.now(); } show(Math.min(k, lines.length - 1)); }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) {
    clearInterval(timer); clearInterval(clock);
    if (e.isIntersecting) { root.classList.add('is-live'); t0 = t0 || Date.now(); step(); timer = setInterval(step, 1800);
      clock = setInterval(function () { var s = Math.floor((Date.now() - t0) / 1000); time.textContent = ('0' + Math.floor(s / 60)).slice(-2) + ':' + ('0' + (s % 60)).slice(-2); }, 500); }
  }); }, { threshold: .35 });
  io.observe(root);
})();

// AI calling calculator: staff time on calls by hand vs ₹6 a call.
(function () {
  var root = document.querySelector('[data-callc]'); if (!root) return;
  var v = function (k) { return +(root.querySelector('[data-cc="' + k + '"]') || {}).value || 0; };
  var inr = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
  function run() {
    var calls = v('calls'), mins = v('talk') + v('people') * v('each'), perHour = v('salary') / (26 * 9);
    var hours = calls * mins / 60, manual = hours * perHour, ai = calls * 7;
    var set = function (k, t) { var el = root.querySelector('[data-cc-o="' + k + '"]'); if (el) el.textContent = t; };
    set('hours', Math.round(hours).toLocaleString('en-IN') + ' hours'); set('manual', inr(manual)); set('ai', inr(ai));
    set('save', manual > ai ? inr(manual - ai) : '₹0'); set('miss', Math.round(calls * v('missed') / 100).toLocaleString('en-IN') + ' calls');
  }
  root.addEventListener('input', run); run();
})();

// CRM page: the record fills in as the year plays out.
(function () {
  var root = document.querySelector('[data-crm-story]'); if (!root) return;
  var steps = root.querySelectorAll('.crm-tl li'), tags = root.querySelectorAll('.crm-rec-tags span'), i = -1, timer;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(k) { Array.prototype.forEach.call(steps, function (s, j) { s.classList.toggle('is-on', j === k); }); Array.prototype.forEach.call(tags, function (t, j) { t.classList.toggle('is-on', j <= k); }); }
  if (reduce) { root.classList.add('is-live'); show(steps.length - 1); return; }
  function tick() { i = (i + 1) % (steps.length + 1); show(Math.min(i, steps.length - 1)); }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { clearInterval(timer); if (e.isIntersecting) { root.classList.add('is-live'); tick(); timer = setInterval(tick, 1800); } }); }, { threshold: .35 });
  io.observe(root);
})();
// CRM page: what keeping more customers is worth.
(function () {
  var root = document.querySelector('[data-repeatc]'); if (!root) return;
  var v = function (k) { return +(root.querySelector('[data-rc="' + k + '"]') || {}).value || 0; };
  var inr = function (n) { return '\u20b9' + Math.round(n).toLocaleString('en-IN'); };
  function run() {
    var c = v('cust'), now = c * v('back') / 100, then = c * Math.min(100, v('back') + v('lift')) / 100;
    var sales = (then - now) * v('freq') * v('bill'), margin = sales * v('margin') / 100;
    var set = function (k, t) { var el = root.querySelector('[data-rc-o="' + k + '"]'); if (el) el.textContent = t; };
    set('now', Math.round(now).toLocaleString('en-IN')); set('then', Math.round(then).toLocaleString('en-IN'));
    set('sales', inr(sales)); set('margin', inr(margin));
    var lab = root.querySelectorAll('.callc-out p span')[1]; if (lab) lab.textContent = 'Returning with a ' + v('lift') + '-point lift';
  }
  root.addEventListener('input', run); run();
})();

// POS page: the bill builds line by line.
(function () {
  var root = document.querySelector('[data-bill-demo]'); if (!root) return;
  var lines = root.querySelectorAll('.bill-line'), steps = root.querySelectorAll('.wa-steps li'), n = lines.length, i = -1, timer;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(k) { Array.prototype.forEach.call(lines, function (l, j) { l.classList.toggle('is-on', j <= k); }); Array.prototype.forEach.call(steps, function (s, j) { s.classList.toggle('is-on', j === k); }); root.classList.toggle('is-done', k >= n - 1); }
  if (reduce) { show(n - 1); return; }
  function tick() { i = (i + 1) % (n + 2); show(Math.min(i, n - 1)); }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { clearInterval(timer); if (e.isIntersecting) { tick(); timer = setInterval(tick, 1500); } }); }, { threshold: .35 });
  io.observe(root);
})();
// POS page: time at the counter.
(function () {
  var root = document.querySelector('[data-tillc]'); if (!root) return;
  var v = function (k) { return +(root.querySelector('[data-tc="' + k + '"]') || {}).value || 0; };
  function run() {
    var hours = v('bills') * v('mins') * v('days') / 60, money = hours * v('salary') / (Math.max(v('days'), 1) * 9);
    var set = function (k, t) { var el = root.querySelector('[data-tc-o="' + k + '"]'); if (el) el.textContent = t; };
    set('hours', Math.round(hours).toLocaleString('en-IN') + ' hours'); set('money', '\u20b9' + Math.round(money).toLocaleString('en-IN')); set('bills', v('bills') + ' customers');
  }
  root.addEventListener('input', run); run();
})();

// Inventory page: one piece moves through its life.
(function () {
  var root = document.querySelector('[data-piece-story]'); if (!root) return;
  var steps = root.querySelectorAll('.wa-steps li'), where = root.querySelector('[data-pc-where]'), status = root.querySelector('[data-pc-status]'), age = root.querySelector('.pc-age'), n = steps.length, i = -1, timer;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(k) {
    Array.prototype.forEach.call(steps, function (s, j) { s.classList.toggle('is-on', j === k); });
    where.textContent = steps[k].getAttribute('data-where'); status.textContent = steps[k].querySelector('b').textContent;
    age.style.setProperty('--age', Math.round((k + 1) / n * 100) + '%');
    root.classList.toggle('is-old', k >= 6 && k < n - 1); root.classList.toggle('is-sold', k === n - 1);
  }
  if (reduce) { show(n - 1); return; }
  function tick() { i = (i + 1) % n; show(i); }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { clearInterval(timer); if (e.isIntersecting) { tick(); timer = setInterval(tick, 1600); } }); }, { threshold: .35 });
  io.observe(root);
})();

// Catalogue page: a photo fills in as a product.
(function () {
  var root = document.querySelector('[data-p2p]'); if (!root) return;
  var f = root.querySelectorAll('.p2p-f'), steps = root.querySelectorAll('.wa-steps li'), n = steps.length, i = -1, timer;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(k) { Array.prototype.forEach.call(f, function (x, j) { x.classList.toggle('is-on', j < k); }); Array.prototype.forEach.call(steps, function (s, j) { s.classList.toggle('is-on', j === k); }); }
  if (reduce) { show(n); return; }
  function tick() { i = (i + 1) % (n + 1); show(Math.min(i, n - 1) + (i >= n - 1 ? 1 : 0)); }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { clearInterval(timer); if (e.isIntersecting) { tick(); timer = setInterval(tick, 1400); } }); }, { threshold: .35 });
  io.observe(root);
})();
// Catalogue page: time to list.
(function () {
  var root = document.querySelector('[data-listc]'); if (!root) return;
  var v = function (k) { return +(root.querySelector('[data-lc="' + k + '"]') || {}).value || 0; };
  function run() {
    var hand = v('pieces') * v('mins') / 60, ai = v('pieces') * v('check') / 60, saved = Math.max(0, hand - ai), money = saved * v('salary') / (26 * 9);
    var set = function (k, t) { var el = root.querySelector('[data-lc-o="' + k + '"]'); if (el) el.textContent = t; };
    set('hand', Math.round(hand).toLocaleString('en-IN') + ' hours'); set('ai', Math.round(ai).toLocaleString('en-IN') + ' hours');
    set('saved', Math.round(saved).toLocaleString('en-IN') + ' hours'); set('money', '\u20b9' + Math.round(money).toLocaleString('en-IN'));
  }
  root.addEventListener('input', run); run();
})();

// WhatsApp marketing page: what one campaign can return.
(function () {
  var root = document.querySelector('[data-mktc]'); if (!root) return;
  var v = function (k) { return +(root.querySelector('[data-mc="' + k + '"]') || {}).value || 0; };
  var inr = function (n) { return '\u20b9' + Math.round(n).toLocaleString('en-IN'); };
  function run() {
    var cost = v('sent') * v('cost'), buyers = v('sent') * v('reply') / 100 * v('buy') / 100, sales = buyers * v('bill'), net = sales * v('margin') / 100 - cost;
    var set = function (k, t) { var el = root.querySelector('[data-mc-o="' + k + '"]'); if (el) el.textContent = t; };
    set('cost', inr(cost)); set('buyers', Math.round(buyers).toLocaleString('en-IN')); set('sales', inr(sales)); set('net', inr(net));
  }
  root.addEventListener('input', run); run();
})();
