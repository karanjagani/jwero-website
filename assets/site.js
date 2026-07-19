/* Jwero marketing site — shared behaviour. No frameworks, ~4 KB. */
(function () {
  'use strict';

  // --- CONFIG (TODO: replace with production values before launch) ---
  var WA_NUMBER = '910000000000'; // WhatsApp Business number, digits only
  var WA_MESSAGES = {
    default: 'Hi Jwero — I would like to see a quick demo.',
    announce: 'Hi Jwero — saw the site, show me the live WhatsApp demo.',
    header: 'Hi Jwero — I would like to see a quick demo.',
    sticky: 'Hi Jwero — I would like to see a quick demo.',
    home: 'Hi Jwero — show me how the AI staff works, with approvals.',
    whatsapp: 'Hi Jwero — show me WhatsApp commerce for my store.',
    schemes: 'Hi Jwero — I want to see gold savings schemes running digitally.',
    deadstock: 'Hi Jwero — I ran the dead stock calculator. Here are my numbers: ',
    scheme_calc: 'Hi Jwero — I ran the gold scheme calculator. Here are my numbers: '
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
  var CUR = { INR: '₹', USD: '$', GBP: '£', AED: 'AED ' };
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

  // Demo form (static build: show confirmation; wire to CRM API in production)
  var form = document.getElementById('demo-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-ok').style.display = 'block';
    form.querySelector('button[type=submit]').disabled = true;
  });
})();
