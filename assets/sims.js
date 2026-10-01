/* Jwero, interactive simulations. Illustrative numbers, real mechanics.
   Each [data-sim] container builds its own UI; nothing here talks to a server. */
(function () {
  'use strict';
  var sims = document.querySelectorAll('[data-sim]');
  if (!sims.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var inr = function (n) { return '₹' + Math.round(n).toLocaleString('en-IN'); };
  var el = function (tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  var wa = function (ctx, extra) {
    var msg = 'Hi Jwero, I tried the ' + ctx + ' simulation on your site. ' + (extra || '') + ' Show me the real thing.';
    return 'https://wa.me/919169959959?text=' + encodeURIComponent(msg + ' [ref:' + location.pathname.replace(/\W+/g, '-') + '/sim-' + ctx.replace(/\s+/g, '-') + ']');
  };
  function score(host, label, value) { var s = host.querySelector('[data-score="' + label + '"]'); if (s) s.textContent = value; }

  var BUILD = {
    // ------------------------------------------------------------ live rate
    rate: function (host) {
      var pieces = [
        { n: 'Temple bangle', w: 18.4, k: 22, mc: 12 }, { n: 'Diamond studs', w: 4.2, k: 18, mc: 22, stone: 38000 }, { n: 'Chain, 22k', w: 9.6, k: 22, mc: 8 },
      ];
      var rate = 7200, base = 7200;
      host.innerHTML = '<div class="sim-bar"><label>Gold rate today (₹/g, 24k)<b data-rate></b></label><input type="range" min="6400" max="8200" step="10" value="7200" aria-label="Gold rate"></div>' +
        '<div class="sim-channels">' + ['WhatsApp quote', 'Counter bill', 'Storefront'].map(function (c, i) {
          return '<div class="sim-channel"><p class="sim-tag">' + c + '</p>' + pieces.map(function (p, j) { return '<div class="sim-row"><span>' + p.n + ' <em>' + p.w + 'g · ' + p.k + 'k</em></span><b data-price="' + i + '-' + j + '">, </b></div>'; }).join('') + '</div>';
        }).join('') + '</div>' +
        '<p class="sim-foot"><span data-score="moved">Rate unchanged.</span> Every channel reprices from one rule, nobody retypes a quote.</p>';
      var input = host.querySelector('input');
      function paint() {
        pieces.forEach(function (p, j) {
          var metal = rate * (p.k / 24) * p.w, price = metal * (1 + p.mc / 100) + (p.stone || 0);
          for (var i = 0; i < 3; i++) { var b = host.querySelector('[data-price="' + i + '-' + j + '"]'); b.textContent = inr(price); b.classList.remove('flash'); void b.offsetWidth; b.classList.add('flash'); }
        });
        host.querySelector('[data-rate]').textContent = inr(rate);
        var d = rate - base;
        score(host, 'moved', d === 0 ? 'Rate unchanged.' : 'Rate moved ' + (d > 0 ? '+' : '−') + inr(Math.abs(d)) + '/g, 9 prices on 3 channels repriced instantly.');
      }
      input.addEventListener('input', function () { rate = Number(input.value); paint(); });
      paint();
    },

    // ------------------------------------------------------------ approval queue
    approve: function (host) {
      var drafts = [
        ['Anniversary follow-up · Sofia M.', '“It has been a year since the emerald ring, we would love to see you both again.”', 'occasion'],
        ['Price question · 11:42 pm', '“Yes, two designs in 22k near 18 g. At today’s rate ₹1,32,400 with making. Shall I hold one?”', 'reply'],
        ['Instalment reminder · R. Shah', '“A gentle reminder: month 7 of 11 on your gold plan is due Friday.”', 'reminder'],
        ['Quiet quote · Priya K.', '“The bridal set you liked is still available, the rate has come down since we spoke.”', 'follow-up'],
        ['Festival invite · 220 customers', '“Dhanteras preview on the 27th, your name is on the list.”', 'campaign'],
        ['Win-back · Mehta family', '“It has been 14 months, the new temple collection has pieces in your taste.”', 'win-back'],
      ];
      var i = 0, handled = 0, auto = {}, killed = false, timer = 0;
      host.innerHTML = '<div class="sim-queue"><div class="sim-queue-list" aria-live="polite"></div>' +
        '<div class="sim-side"><p class="sim-tag">Your morning</p><div class="sim-stat"><b data-score="handled">0</b><span>customers handled</span></div><div class="sim-stat"><b data-score="auto">0</b><span>action types set to run alone</span></div>' +
        '<button type="button" class="btn btn-ghost sim-kill">Kill switch, stop everything</button><p class="sim-small">Approve, edit, or let that action type run alone from now on. Nothing sends until you say so.</p></div></div>' +
        '<p class="sim-foot"><span data-score="msg">Drafts arrive as customers do.</span></p>';
      var list = host.querySelector('.sim-queue-list');
      function push() {
        if (killed || i >= drafts.length) { if (i >= drafts.length) score(host, 'msg', 'Queue clear. ' + handled + ' customers handled before the shop opened.'); return; }
        var d = drafts[i++], kind = d[2];
        var card = el('div', 'sim-draft', '<p class="sim-draft-title">' + d[0] + ' <em>' + kind + '</em></p><p>' + d[1] + '</p><div class="sim-actions"><button type="button" class="chip chip-go" data-act="approve">Approve</button><button type="button" class="chip" data-act="edit">Edit</button><button type="button" class="chip" data-act="auto">Let “' + kind + '” run alone</button></div>');
        if (auto[kind]) { card.classList.add('is-auto'); card.querySelector('.sim-actions').innerHTML = '<span class="sim-auto">Sent on its own, “' + kind + '” is trusted · caps and quiet hours apply</span>'; handled++; score(host, 'handled', handled); }
        list.insertBefore(card, list.firstChild);
        if (list.children.length > 4) list.removeChild(list.lastChild);
        timer = window.setTimeout(push, auto[kind] ? 1400 : 4200);
      }
      list.addEventListener('click', function (e) {
        var b = e.target.closest('[data-act]'); if (!b) return;
        var card = b.closest('.sim-draft'), kind = card.querySelector('em').textContent;
        if (b.dataset.act === 'auto') { auto[kind] = true; score(host, 'auto', Object.keys(auto).length); }
        card.classList.add('is-done'); card.querySelector('.sim-actions').innerHTML = '<span class="sim-auto">' + (b.dataset.act === 'edit' ? 'Edited and sent' : b.dataset.act === 'auto' ? 'Approved, and “' + kind + '” will run alone from now on' : 'Approved and sent') + '</span>';
        handled++; score(host, 'handled', handled);
        window.clearTimeout(timer); timer = window.setTimeout(push, 700);
      });
      host.querySelector('.sim-kill').addEventListener('click', function () {
        killed = !killed; host.classList.toggle('is-killed', killed);
        this.textContent = killed ? 'Resume' : 'Kill switch, stop everything';
        score(host, 'msg', killed ? 'Everything stopped, one tap, every agent, every channel.' : 'Resumed. Drafts arrive as customers do.');
        if (!killed) push();
      });
      push();
    },

    // ------------------------------------------------------------ customer memory
    memory: function (host) {
      var people = {
        'Meera K.': { fields: [['Gold plan', '7 of 11 months paid'], ['Daughter’s wedding', 'November'], ['Prefers', 'Temple work · 22k · yellow'], ['Last purchase', 'Emerald ring · 14 months ago'], ['Best time', 'Weekday evenings · WhatsApp'], ['Churn risk', 'Low, scheme active'], ['Lifetime value', 'Top 5% · RFM 5-4-5']], draft: 'Namaste Meera ji, with November coming up, we have set aside three temple-work bridal sets in 22k that match what you loved last time. Your gold plan balance can go toward any of them. Shall I hold a Saturday evening for you both?' },
        'Rahul S.': { fields: [['Gold plan', 'Month 3 of 11 · instalment due Friday'], ['Occasion', 'Anniversary · 12 Oct'], ['Prefers', 'Minimal · 18k · rose'], ['Last enquiry', 'Diamond studs · 6 days ago · no reply'], ['Best time', 'Sunday morning · call'], ['Churn risk', 'Medium, enquiry went quiet'], ['Lifetime value', 'Growing · RFM 4-2-3']], draft: 'Hi Rahul, the 18k rose-gold studs you asked about are still available, and the rate has eased since. With the 12th coming up, shall I send two options with today’s price?' },
      };
      var names = Object.keys(people);
      host.innerHTML = '<div class="sim-memory"><div class="sim-memory-pick"><p class="sim-tag">A customer messages</p>' + names.map(function (n, i) { return '<button type="button" class="chip' + (i === 0 ? ' chip-go' : '') + '" data-who="' + n + '">' + n + '</button>'; }).join('') +
        '<div class="sim-dots" aria-hidden="true">' + new Array(96).join('<i></i>') + '</div><p class="sim-small"><b data-score="count">0</b> of 90+ fields on her record</p></div>' +
        '<div class="sim-memory-record"><p class="sim-tag">What the record already knows</p><div class="sim-fields"></div><p class="sim-tag" style="margin-top:18px">Reply drafted, waiting for your approval</p><p class="sim-draft-text"></p></div></div>' +
        '<p class="sim-foot">The salesperson who replies has never met her. The record has.</p>';
      var fieldsBox = host.querySelector('.sim-fields'), draftBox = host.querySelector('.sim-draft-text'), dots = host.querySelectorAll('.sim-dots i');
      var timers = [];
      function show(who) {
        timers.forEach(clearTimeout); timers = [];
        var p = people[who]; fieldsBox.innerHTML = ''; draftBox.textContent = ''; Array.prototype.forEach.call(dots, function (d) { d.classList.remove('on'); });
        host.querySelectorAll('[data-who]').forEach(function (b) { b.classList.toggle('chip-go', b.dataset.who === who); });
        p.fields.forEach(function (f, i) {
          timers.push(window.setTimeout(function () {
            fieldsBox.appendChild(el('div', 'sim-row', '<span>' + f[0] + '</span><b>' + f[1] + '</b>'));
            for (var k = i * 13; k < Math.min(95, i * 13 + 13); k++) dots[k].classList.add('on');
            score(host, 'count', Math.min(90, (i + 1) * 13) + (i === p.fields.length - 1 ? '+' : ''));
          }, reduce ? 0 : 260 * i));
        });
        timers.push(window.setTimeout(function () {
          var t = p.draft, n = 0;
          (function type() { draftBox.textContent = t.slice(0, n); n += reduce ? t.length : 2; if (n <= t.length + 2) timers.push(window.setTimeout(type, 18)); })();
        }, reduce ? 0 : 260 * p.fields.length + 300));
      }
      host.addEventListener('click', function (e) { var b = e.target.closest('[data-who]'); if (b) show(b.dataset.who); });
      show(names[0]);
    },

    // ------------------------------------------------------------ ageing shelf
    shelf: function (host) {
      var N = 72, seed = 7, ages = [];
      for (var i = 0; i < N; i++) { seed = (seed * 9301 + 49297) % 233280; ages.push(Math.floor((seed / 233280) * 420)); }
      host.innerHTML = '<div class="sim-bar"><label>Months from today<b data-months>0</b></label><input type="range" min="0" max="12" step="1" value="0" aria-label="Months ahead"></div>' +
        '<div class="sim-shelf" aria-hidden="true">' + ages.map(function () { return '<i></i>'; }).join('') + '</div>' +
        '<div class="sim-legend"><span class="a0">0–90 days</span><span class="a1">91–180</span><span class="a2">180+ · dead stock</span></div>' +
        '<div class="sim-stats"><div class="sim-stat"><b data-score="dead">0</b><span>pieces past 180 days</span></div><div class="sim-stat"><b data-score="capital">₹0</b><span>capital asleep, at ₹85,000 avg per piece</span></div><div class="sim-stat"><b data-score="carry">₹0</b><span>a year of interest on it, at 12%</span></div></div>' +
        '<p class="sim-foot">Jwero shows this shelf every day, not at the annual stocktake, and matches each sleeping piece to a customer whose taste fits it.</p>';
      var dotsEl = host.querySelectorAll('.sim-shelf i'), input = host.querySelector('input');
      function paint() {
        var m = Number(input.value), dead = 0;
        ages.forEach(function (a, i) { var d = a + m * 30; var c = d > 180 ? 'a2' : d > 90 ? 'a1' : 'a0'; dotsEl[i].className = c; if (d > 180) dead++; });
        host.querySelector('[data-months]').textContent = m === 0 ? 'today' : '+' + m;
        score(host, 'dead', dead); score(host, 'capital', inr(dead * 85000)); score(host, 'carry', inr(dead * 85000 * 0.12));
      }
      input.addEventListener('input', paint); paint();
    },

    // ------------------------------------------------------------ till
    till: function (host) {
      var catalog = [{ n: 'Temple bangle', w: 18.4, k: 22 }, { n: 'Chain, 22k', w: 9.6, k: 22 }, { n: 'Diamond studs', w: 4.2, k: 18, stone: 38000 }, { n: 'Kada, 22k', w: 32.1, k: 22 }];
      var rate = 7200, cart = [], oldGold = 0, cash = 0, expected = 0, closed = false;
      host.innerHTML = '<div class="sim-till"><div class="sim-till-shelf"><p class="sim-tag">Scan a piece</p>' + catalog.map(function (p, i) { return '<button type="button" class="sim-piece" data-i="' + i + '"><b>' + p.n + '</b><span>' + p.w + 'g · ' + p.k + 'k</span></button>'; }).join('') +
        '<p class="sim-tag" style="margin-top:16px">Old gold in exchange (grams, 22k)</p><input type="range" min="0" max="20" step="0.5" value="0" aria-label="Old gold grams"><p class="sim-small"><b data-og>0 g</b> → credit <b data-ogv>₹0</b> after 4% deduction</p></div>' +
        '<div class="sim-till-bill"><p class="sim-tag">Invoice · rate ' + inr(rate) + '/g</p><div class="sim-lines"></div><div class="sim-row sim-total"><span>Metal + making</span><b data-sub>₹0</b></div><div class="sim-row"><span>GST 3%</span><b data-gst>₹0</b></div><div class="sim-row"><span>Exchange credit</span><b data-cr>−₹0</b></div><div class="sim-row sim-grand"><span>To pay</span><b data-total>₹0</b></div>' +
        '<div class="sim-actions"><button type="button" class="btn btn-primary sim-pay">Take payment</button><button type="button" class="btn btn-ghost sim-close">Close shift</button></div><p class="sim-small" data-score="msg">Shift open · 0 bills · expected cash ₹0</p></div></div>' +
        '<p class="sim-foot">Every line priced by the rule, every rupee expected at close. In the product the customer, the piece and the ledger all update with this one bill.</p>';
      var lines = host.querySelector('.sim-lines'), og = host.querySelector('input'), bills = 0;
      function total() {
        var sub = 0; cart.forEach(function (p) { sub += rate * (p.k / 24) * p.w * 1.12 + (p.stone || 0); });
        var gst = sub * 0.03, cr = oldGold * rate * (22 / 24) * 0.96, t = Math.max(0, sub + gst - cr);
        host.querySelector('[data-sub]').textContent = inr(sub); host.querySelector('[data-gst]').textContent = inr(gst); host.querySelector('[data-cr]').textContent = '−' + inr(cr); host.querySelector('[data-total]').textContent = inr(t);
        host.querySelector('[data-og]').textContent = oldGold + ' g'; host.querySelector('[data-ogv]').textContent = inr(cr);
        return t;
      }
      host.addEventListener('click', function (e) {
        var b = e.target.closest('.sim-piece'); if (!b || closed) return;
        var p = catalog[Number(b.dataset.i)]; cart.push(p);
        var row = el('div', 'sim-row flash', '<span>' + p.n + ' <em>' + p.w + 'g · ' + p.k + 'k</em></span><b>' + inr(rate * (p.k / 24) * p.w * 1.12 + (p.stone || 0)) + '</b>');
        lines.appendChild(row); total();
      });
      og.addEventListener('input', function () { oldGold = Number(og.value); total(); });
      host.querySelector('.sim-pay').addEventListener('click', function () {
        if (!cart.length || closed) return;
        var t = total(); expected += t; cash += t + (bills === 1 ? -500 : 0); bills++; cart = []; lines.innerHTML = ''; oldGold = 0; og.value = 0; total();
        score(host, 'msg', 'Shift open · ' + bills + ' bill' + (bills === 1 ? '' : 's') + ' · expected cash ' + inr(expected));
      });
      host.querySelector('.sim-close').addEventListener('click', function () {
        if (closed || !bills) return; closed = true;
        var v = cash - expected;
        score(host, 'msg', 'Shift closed · declared ' + inr(cash) + ' · expected ' + inr(expected) + ' · variance ' + (v < 0 ? '−' : '+') + inr(Math.abs(v)) + (v ? ', flagged tonight, not next week.' : ', clean.'));
        host.classList.add('is-closed');
      });
      total();
    },

    // ------------------------------------------------------------ gram flow
    grams: function (host) {
      var stages = [['Casting', 1.2], ['Filing', 0.8], ['Setting', 0.4], ['Polishing', 0.6]];
      var issued = 100;
      host.innerHTML = '<div class="sim-flow"><div class="sim-flow-in"><b>' + issued + '.000 g</b><span>issued to the bench</span></div><div class="sim-stages">' + stages.map(function (s, i) {
        return '<div class="sim-stage"><p class="sim-tag">' + s[0] + ' · norm ' + s[1] + '%</p><input type="range" min="0" max="3" step="0.1" value="' + s[1] + '" data-i="' + i + '" aria-label="' + s[0] + ' loss"><p class="sim-small">loss <b data-loss="' + i + '"></b></p></div>';
      }).join('') + '</div><div class="sim-flow-out"><b data-score="out"></b><span>received back</span><em data-score="verdict"></em></div></div>' +
        '<p class="sim-foot">The order cannot close until issued = received + loss within norm. Move a slider past its norm and watch the closure block.</p>';
      var inputs = host.querySelectorAll('input');
      function paint() {
        var left = issued, over = [];
        Array.prototype.forEach.call(inputs, function (inp, i) { var pct = Number(inp.value), g = left * pct / 100; left -= g; host.querySelector('[data-loss="' + i + '"]').textContent = g.toFixed(3) + ' g (' + pct.toFixed(1) + '%)'; inp.closest('.sim-stage').classList.toggle('is-over', pct > stages[i][1]); if (pct > stages[i][1]) over.push(stages[i][0]); });
        score(host, 'out', left.toFixed(3) + ' g');
        score(host, 'verdict', over.length ? 'Closure blocked, ' + over.join(', ') + ' beyond norm. Explain or the karigar khata carries it.' : 'Metal balances. Order can close; settlement posts to the books.');
        host.classList.toggle('is-over', over.length > 0);
      }
      Array.prototype.forEach.call(inputs, function (inp) { inp.addEventListener('input', paint); });
      paint();
    },
  };

  Array.prototype.forEach.call(sims, function (host) {
    var kind = host.getAttribute('data-sim');
    if (!BUILD[kind]) return;
    try { BUILD[kind](host); } catch (e) { host.innerHTML = '<p class="sim-foot">This simulation could not load. <a href="' + wa(kind) + '">Ask for the real thing on WhatsApp</a>.</p>'; }
    var cta = host.parentNode.querySelector('[data-sim-wa]');
    if (cta) cta.setAttribute('href', wa(host.getAttribute('data-sim-name') || kind));
  });
})();
