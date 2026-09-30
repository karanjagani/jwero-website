/* Jwero marketing site — shared behaviour. No frameworks, ~4 KB. */
(function () {
  'use strict';

  // --- CONFIG ---
  var WA_NUMBER = '919169959959'; // WhatsApp Business number, digits only
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
    pricingengine: 'Hi Jwero — show me how a price is actually calculated, on my own catalogue.',
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
    showroom: 'Hi Jwero — show me the showroom / in-store visit intelligence.',
    loyalty: 'Hi Jwero — show me the loyalty and referral program.',
    hrpayroll: 'Hi Jwero — show me the HR and payroll suite.',
    repairsservice: 'Hi Jwero — show me repairs and after-sales service tracking.',
    purchasevendors: 'Hi Jwero — show me purchase orders and vendor management.',
    storefront: 'Hi Jwero — show me the ecommerce website builder.',
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
    pos: 'Hi Jwero — show me the counter POS: exchange, returns and day-close.',
    girvi: 'Hi Jwero — show me a girvi pledge from intake to release.',
    meetings: 'Hi Jwero — send me a video counter link the way a customer would get one.',
    optimize: 'Hi Jwero — show me the Optimize suite: heatmaps, A/B tests, popups and webchat for my website.',
    'blog-tally': 'Hi Jwero — I read the Tally guide, tell me exactly what moves and what stays in Tally.',
    'blog-goldloss': 'Hi Jwero — I read the gold-loss guide, show me the wastage ledger and recovery desk.',
    'blog-repair': 'Hi Jwero — I read the repair custody-chain guide, show me how it works for my business.',
    'blog-huid': 'Hi Jwero — I read the HUID/hallmarking guide, show me compliance tracking.',
    'blog-catalog': 'Hi Jwero — I read the digital catalogue guide, show me a live-price catalogue.',
    'blog-crmerp': 'Hi Jwero — I read the CRM vs ERP guide, show me how one record covers both.',
    'blog-checklist': 'Hi Jwero — I read the buyer’s checklist, ask me the questions and I’ll answer honestly.',
    'blog-wedding': 'Hi Jwero — I read the wedding season guide, help me plan the timing for my business.',
    'blog-cost': 'Hi Jwero — I read the software cost guide, give me a straight number for my business.',
    'blog-bestsoftware': 'Hi Jwero — I read the how-to-compare guide, ask me these questions directly.',
    'blog-goldrate': 'Hi Jwero — I read the live gold rate guide, show me a price resolve live.',
    'blog-startonline': 'Hi Jwero — I read the starting-online guide, help me plan my first steps.',
    'blog-wapricing': 'Hi Jwero — I read the WhatsApp API pricing guide, help me understand my own conversation mix.',
    'blog-schemeslegal': 'Hi Jwero — I read the gold scheme legal guide, show me the compliance controls.',
    segmentation: 'Hi Jwero — show me live customer segmentation for my business.',
    journeys: 'Hi Jwero — show me a customer journey with the approval gate live.',
    campaigns: 'Hi Jwero — show me a campaign and broadcast, with attribution.',
    adsmanager: 'Hi Jwero — show me Ads Manager for Meta, Google and Pinterest.',
    socialmedia: 'Hi Jwero — show me the social media inbox and scheduler.'
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
      // Hover already controls open/close here — without this, clicking the
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
      '.section .loop, .section .speeds, .section .speed-guards, .section .safe-items, .section .quick-check-items, .faq'
    );
    Array.prototype.forEach.call(groups, function (g) {
      if (g.closest('.reveal-group') || g.closest('.calc')) return;
      g.classList.add('reveal-group');
      Array.prototype.forEach.call(g.children, function (c, i) { c.style.setProperty('--i', Math.min(i, 9)); });
    });
    onView(document.querySelectorAll('.reveal-group'), function (g) { g.classList.add('is-visible'); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    var singles = document.querySelectorAll('.section .coexist, .section .split, .section .gem-stage, .section .gem-copy, .section .tbl-wrap, .section .calc, .section .stack-verdict, .section .gaps-block, main > .gaps-block, main > .one-system, .section .safe-strip, .section .form, .trust-bar .container, .logo-marquee');
    Array.prototype.forEach.call(singles, function (el) { if (!el.closest('.reveal-group')) el.classList.add('reveal'); });
    onView(document.querySelectorAll('.reveal'), function (el) { el.classList.add('is-visible'); });

    // The shift plays its three beats once it is on screen.
    onView(document.querySelectorAll('[data-shift]'), function (el) { el.classList.add('is-in'); }, { threshold: 0.3 });

    // Proof numbers count up once.
    onView(document.querySelectorAll('.stats .stat-n'), function (el) {
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
    if (mainEl && window.innerWidth >= 1320) {
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
    Array.prototype.forEach.call(document.querySelectorAll('.hero-panel .panel, .cta-band .panel, .panel:has(.close-plan)'), function (panel) {
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
      if (tally) tally.innerHTML = c ? 'You run <b>' + c + '</b> system' + (c === 1 ? '' : 's') + ' — <b>' + c + '</b> logins, <b>' + c + '</b> bills, <b>' + c + '</b> vendors, and your customer in pieces across all of them.' : '';
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

  // Persona switch: pick the business you run; the page remembers and the
  // "Which jeweller are you?" grid moves your card first.
  Array.prototype.forEach.call(document.querySelectorAll('[data-persona]'), function (wrap) {
    var tabs = Array.prototype.slice.call(wrap.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(wrap.querySelectorAll('.persona-panel'));
    var routes = { single: '/solutions/single-store', chain: '/solutions/multi-store-chains', maker: '/solutions/manufacturers', b2b: '/solutions/b2b-jewellery', d2c: '/solutions/d2c-brands', franchise: '/solutions/franchise-networks' };
    function select(key, focus) {
      tabs.forEach(function (t) { var on = t.getAttribute('data-key') === key; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); if (on && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'center' }); });
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
      if (!loading) loading = fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (d) { index = d; return d; });
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
      function open() { if (typeof dlg.showModal !== 'function') { location.href = '/search'; return; } load(); dlg.showModal(); input.value = ''; results.innerHTML = ''; input.focus(); }
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
        } else if (e.key === 'Enter' && cur >= 0) { e.preventDefault(); location.href = opts[cur].getAttribute('href'); }
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
      if (!hit) { location.href = '/faq'; return; }
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

  // /start funnel: three steps, the choices ride along to the product signup.
  Array.prototype.forEach.call(document.querySelectorAll('[data-start]'), function (wrap) {
    var pick = { persona: null, tier: null }, labels = {}, step = 1;
    var go = wrap.querySelector('[data-start-go]'), waBtn = wrap.querySelector('[data-start-wa]'), back = wrap.querySelector('[data-start-back]');
    var base = go.getAttribute('href');
    function show(n) {
      step = n;
      wrap.querySelectorAll('.start-panel').forEach(function (p) { p.classList.toggle('is-on', Number(p.dataset.panel) === n); });
      wrap.querySelectorAll('.start-steps li').forEach(function (li) { var k = Number(li.dataset.step); li.classList.toggle('is-on', k === n); li.classList.toggle('is-done', k < n); });
      back.hidden = n === 1;
      if (n === 3) {
        wrap.querySelector('[data-sum="persona"]').textContent = labels.persona || '—';
        wrap.querySelector('[data-sum="tier"]').textContent = labels.tier || '—';
        go.setAttribute('href', base + '&business=' + encodeURIComponent(pick.persona || '') + '&tier=' + encodeURIComponent(pick.tier || ''));
        if (waBtn) waBtn.setAttribute('href', 'https://wa.me/919169959959?text=' + encodeURIComponent('Hi Jwero — I want to set up a workspace for my ' + (labels.persona || 'business').toLowerCase() + ' on the ' + (labels.tier || 'Assist') + ' tier. Help me start. [ref:start/wa]'));
      }
      wrap.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
    wrap.addEventListener('click', function (e) {
      var o = e.target.closest('.start-opt'); if (!o) return;
      var key = o.dataset.persona ? 'persona' : 'tier';
      pick[key] = o.dataset.persona || o.dataset.tier; labels[key] = o.querySelector('b').textContent;
      o.parentNode.querySelectorAll('.start-opt').forEach(function (x) { x.classList.toggle('is-picked', x === o); });
      window.setTimeout(function () { show(step + 1); }, 260);
    });
    back.addEventListener('click', function () { show(Math.max(1, step - 1)); });
    try { var saved = localStorage.getItem('jwero-persona'); if (saved) { var b = wrap.querySelector('[data-persona="' + saved + '"]'); if (b) b.classList.add('is-picked'); } } catch (e) {}
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

  // FAQ instant search — filters the 111-question hub down to a scannable few as you type,
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
  // with the form details prefilled — no silent black hole, no separate backend.
  var form = document.getElementById('demo-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (name) { var el = form.querySelector('[name=' + name + ']'); return el && el.value ? el.value.trim() : ''; };
    var msg = 'Hi Jwero — I would like to book a demo.' +
      (v('name') ? ' Name: ' + v('name') + '.' : '') +
      (v('phone') ? ' WhatsApp: ' + v('phone') + '.' : '') +
      (v('business') ? ' Business: ' + v('business') + '.' : '') +
      (v('city') ? ' City: ' + v('city') + '.' : '') +
      (v('reach') === 'Call me' ? ' Please call me' + (v('time') ? ' — ' + v('time') : '') + '.' : '');
    form.querySelector('.form-ok').style.display = 'block';
    form.querySelector('button[type=submit]').disabled = true;
    window.location.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg + ' [ref:book-demo/form]');
  });
})();
