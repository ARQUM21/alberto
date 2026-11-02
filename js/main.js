/* Alberto Watch Company - SPA logic (jQuery) */
$(function () {
  'use strict';

  var currentLine = 'vintage';
  var FADE_OUT = 200, FADE_IN = 350;

  /* ---------------------------------------------------------------
     SVG watch generator (no external images needed)
  ---------------------------------------------------------------- */
  function watchSVG(p) {
    var cx = 100, cy = 120, i, ticks = '', nums = '';
    var light = isLight(p.dial);
    var fg = light ? '#2a2a2a' : '#f5e6b8';

    if (p.line === 'smart') {
      return '<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(p.name) + '">' +
        '<rect x="70" y="0" width="60" height="240" rx="14" fill="' + p.band + '"/>' +
        '<rect x="42" y="52" width="116" height="136" rx="30" fill="' + p.metal + '"/>' +
        '<rect x="50" y="60" width="100" height="120" rx="24" fill="' + p.dial + '"/>' +
        '<text x="100" y="112" text-anchor="middle" font-family="Poppins,Arial" font-size="30" fill="#f5e6b8">10:09</text>' +
        '<text x="100" y="136" text-anchor="middle" font-family="Poppins,Arial" font-size="11" fill="#9fd8bf">&#9829; 72 bpm</text>' +
        '<rect x="66" y="150" width="68" height="6" rx="3" fill="#333"/><rect x="66" y="150" width="44" height="6" rx="3" fill="#c9a24b"/>' +
        '<rect x="158" y="100" width="7" height="22" rx="3" fill="' + p.metal + '"/></svg>';
    }

    if (p.line === 'clocks') {
      for (i = 1; i <= 12; i++) {
        var a = i * 30 * Math.PI / 180;
        nums += '<text x="' + (cx + 62 * Math.sin(a)).toFixed(1) + '" y="' + (cy - 62 * Math.cos(a) + 5).toFixed(1) + '" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="' + fg + '">' + i + '</text>';
      }
      return '<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(p.name) + '">' +
        '<rect x="30" y="200" width="140" height="22" rx="6" fill="' + p.band + '"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="88" fill="' + p.metal + '"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="78" fill="' + p.dial + '"/>' + nums +
        hands(cx, cy, fg, '#c0392b') +
        '<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="' + fg + '"/></svg>';
    }

    // round watch (vintage, luxury, sports)
    for (i = 0; i < 60; i++) {
      var ang = i * 6 * Math.PI / 180, big = i % 5 === 0;
      var r1 = big ? 66 : 72, r2 = 78;
      ticks += '<line x1="' + (cx + r1 * Math.sin(ang)).toFixed(1) + '" y1="' + (cy - r1 * Math.cos(ang)).toFixed(1) +
        '" x2="' + (cx + r2 * Math.sin(ang)).toFixed(1) + '" y2="' + (cy - r2 * Math.cos(ang)).toFixed(1) +
        '" stroke="' + fg + '" stroke-width="' + (big ? 2.5 : 1) + '"/>';
    }
    var extras = '';
    if (p.line === 'sports') {
      extras = '<circle cx="78" cy="120" r="14" fill="none" stroke="' + fg + '" stroke-width="1"/>' +
               '<circle cx="122" cy="120" r="14" fill="none" stroke="' + fg + '" stroke-width="1"/>' +
               '<circle cx="100" cy="146" r="14" fill="none" stroke="' + fg + '" stroke-width="1"/>';
    }
    if (p.line === 'luxury') {
      extras = '<rect x="118" y="113" width="20" height="14" fill="#fff" stroke="' + p.metal + '"/>' +
               '<text x="128" y="124" text-anchor="middle" font-family="Poppins,Arial" font-size="10" fill="#111">24</text>';
    }
    if (p.line === 'vintage') {
      for (i = 1; i <= 12; i += 3) {
        var an = i * 30 * Math.PI / 180;
        extras += '<text x="' + (cx + 52 * Math.sin(an)).toFixed(1) + '" y="' + (cy - 52 * Math.cos(an) + 6).toFixed(1) + '" text-anchor="middle" font-family="Georgia,serif" font-size="17" fill="' + fg + '">' + i + '</text>';
      }
    }
    return '<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(p.name) + '">' +
      '<rect x="72" y="0" width="56" height="240" rx="12" fill="' + p.band + '"/>' +
      '<rect x="96" y="108" width="0" height="0"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="94" fill="' + p.metal + '"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="86" fill="' + shade(p.metal, -30) + '"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="82" fill="' + p.dial + '"/>' +
      ticks + extras + hands(cx, cy, fg, '#c9a24b') +
      '<circle cx="' + cx + '" cy="' + cy + '" r="4.5" fill="' + fg + '"/>' +
      '<rect x="192" y="112" width="8" height="16" rx="2" fill="' + p.metal + '"/></svg>';
  }

  function hands(cx, cy, color, accent) {
    return '<line x1="' + cx + '" y1="' + cy + '" x2="' + cx + '" y2="' + (cy - 50) + '" stroke="' + color + '" stroke-width="4" stroke-linecap="round" transform="rotate(300 ' + cx + ' ' + cy + ')"/>' +
           '<line x1="' + cx + '" y1="' + cy + '" x2="' + cx + '" y2="' + (cy - 68) + '" stroke="' + color + '" stroke-width="2.6" stroke-linecap="round" transform="rotate(54 ' + cx + ' ' + cy + ')"/>' +
           '<line x1="' + cx + '" y1="' + (cy + 14) + '" x2="' + cx + '" y2="' + (cy - 72) + '" stroke="' + accent + '" stroke-width="1.2" transform="rotate(150 ' + cx + ' ' + cy + ')"/>';
  }

  function isLight(hex) {
    var c = hex.replace('#', '');
    var r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 140;
  }
  function shade(hex, amt) {
    var c = hex.replace('#', '');
    var out = '#';
    for (var i = 0; i < 6; i += 2) {
      var v = Math.max(0, Math.min(255, parseInt(c.substr(i, 2), 16) + amt));
      out += (v < 16 ? '0' : '') + v.toString(16);
    }
    return out;
  }
  function esc(s) { return $('<div>').text(s).html(); }
  function money(n) { return '$' + n.toLocaleString('en-US'); }
  function lineName(key) { for (var i = 0; i < LINEUPS.length; i++) { if (LINEUPS[i].key === key) { return LINEUPS[i].name; } } return key; }
  function byId(id) { for (var i = 0; i < PRODUCTS.length; i++) { if (PRODUCTS[i].id === id) { return PRODUCTS[i]; } } return null; }
  function firstOfLine(key) { for (var i = 0; i < PRODUCTS.length; i++) { if (PRODUCTS[i].line === key) { return PRODUCTS[i]; } } return PRODUCTS[0]; }

  /* ---------------------------------------------------------------
     Page rendering
  ---------------------------------------------------------------- */
  function renderHome() {
    $('#heroWatch').html(watchSVG(byId(8)));
    var html = '';
    $.each(LINEUPS, function (_, l) {
      html += '<div class="col-sm-6 col-lg-4"><div class="lineup-card" data-line="' + l.key + '" tabindex="0" role="button">' +
        watchSVG(firstOfLine(l.key)) + '<h5>' + l.name + '</h5><p>' + l.tagline + '</p></div></div>';
    });
    $('#homeLineups').html(html);
  }

  function renderTabs() {
    var tabs = '', map = '';
    $.each(LINEUPS, function (_, l) {
      tabs += '<li class="nav-item"><a href="#products" class="nav-link" data-line="' + l.key + '">' + l.name + '</a></li>';
      map += '<li><a href="#products" data-page="products" data-line="' + l.key + '">' + l.name + '</a></li>';
    });
    $('#lineupTabs').html(tabs);
    $('#sitemapLineups').html(map);
  }

  function renderProducts(key) {
    currentLine = key;
    var line = $.grep(LINEUPS, function (l) { return l.key === key; })[0];
    $('#lineupTabs .nav-link').removeClass('active').filter('[data-line="' + key + '"]').addClass('active');
    $('#lineupTagline').text(line.tagline);
    var html = '';
    $.each($.grep(PRODUCTS, function (p) { return p.line === key; }), function (_, p) {
      html += '<div class="col-sm-6 col-lg-3"><div class="product-card">' + watchSVG(p) +
        '<div class="brand-tag">' + esc(p.brand) + '</div><h6>' + esc(p.name) + '</h6>' +
        '<div class="price">' + money(p.price) + '</div>' +
        '<button type="button" class="btn btn-gold btn-sm view-details" data-id="' + p.id + '">View Details</button></div></div>';
    });
    $('#productGrid').hide().html(html).fadeIn(FADE_IN);
  }

  function renderPriceList() {
    var opts = '<option value="all">All line-ups</option>';
    $.each(LINEUPS, function (_, l) { opts += '<option value="' + l.key + '">' + l.name + '</option>'; });
    $('#priceFilter').html(opts);
    var rows = '';
    $.each(PRODUCTS, function (_, p) {
      rows += '<tr data-line="' + p.line + '" data-text="' + esc((p.brand + ' ' + p.name).toLowerCase()) + '">' +
        '<td>' + p.id + '</td><td>' + esc(p.brand) + '</td><td>' + esc(p.name) + '</td><td>' + lineName(p.line) + '</td>' +
        '<td class="text-end fw-semibold">' + money(p.price) + '</td>' +
        '<td class="text-end"><button type="button" class="btn btn-gold btn-sm view-details" data-id="' + p.id + '">Details</button></td></tr>';
    });
    $('#priceBody').html(rows);
  }

  function filterPrices() {
    var q = $('#priceSearch').val().trim().toLowerCase(), line = $('#priceFilter').val(), shown = 0;
    $('#priceBody tr').each(function () {
      var $r = $(this);
      var ok = (line === 'all' || $r.data('line') === line) && ($r.attr('data-text').indexOf(q) !== -1);
      $r.toggle(ok);
      if (ok) { shown++; }
    });
    $('#priceEmpty').toggleClass('d-none', shown > 0);
  }

  function renderTech() {
    var html = '';
    $.each(TECHNOLOGY, function (_, t) {
      html += '<div class="col-md-6 col-lg-4"><div class="tech-card"><div class="tech-icon">' + t.icon + '</div><h5>' + t.title + '</h5><p>' + t.text + '</p></div></div>';
    });
    $('#techGrid').html(html);
  }

  function renderStores() {
    var cities = {}, opts = '<option value="all">All cities</option>';
    $.each(STORES, function (_, s) {
      if (!cities[s.city]) { cities[s.city] = true; opts += '<option>' + s.city + '</option>'; }
    });
    $('#storeCity').html(opts);
    drawStores('all');
  }
  function drawStores(city) {
    var html = '';
    $.each(STORES, function (_, s) {
      if (city === 'all' || s.city === city) {
        html += '<div class="col-md-6 col-lg-4"><div class="store-card"><h5>' + s.name + '</h5>' +
          '<p class="mb-1">' + s.address + '</p><p class="mb-1"><strong>Phone:</strong> ' + s.phone + '</p>' +
          '<p class="mb-0"><strong>Hours:</strong> ' + s.hours + '</p></div></div>';
      }
    });
    $('#storeGrid').hide().html(html).fadeIn(FADE_IN);
  }

  function renderFaq() {
    var html = '';
    $.each(SUPPORT_FAQ, function (i, f) {
      html += '<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button' + (i ? ' collapsed' : '') + '" type="button" data-bs-toggle="collapse" data-bs-target="#faq' + i + '">' + f.q + '</button></h2>' +
        '<div id="faq' + i + '" class="accordion-collapse collapse' + (i ? '' : ' show') + '" data-bs-parent="#faqAccordion"><div class="accordion-body">' + f.a + '</div></div></div>';
    });
    $('#faqAccordion').html(html);
  }

  function renderGallery() {
    var html = '';
    $.each(PRODUCTS, function (_, p) {
      html += '<div class="col-6 col-md-4 col-lg-3"><div class="gallery-item" data-id="' + p.id + '" tabindex="0" role="button">' +
        watchSVG(p) + '<span>' + esc(p.brand + ' ' + p.name) + '</span></div></div>';
    });
    $('#galleryGrid').html(html);
  }

  /* ---------------------------------------------------------------
     Popups
  ---------------------------------------------------------------- */
  function openProduct(id) {
    var p = byId(id);
    if (!p) { return; }
    $('#pmTitle').text(p.brand + ' ' + p.name);
    $('#pmImage').html(watchSVG(p));
    $('#pmLine').text(lineName(p.line));
    $('#pmDesc').text(p.desc);
    var specs = [['Brand', p.brand], ['Movement', p.movement], ['Size', p.caseSize], ['Strap / Finish', p.strap], ['Water resistance', p.water]];
    var rows = '';
    $.each(specs, function (_, s) { rows += '<tr><th>' + s[0] + '</th><td>' + esc(s[1]) + '</td></tr>'; });
    $('#pmSpecs').html(rows);
    $('#pmPrice').text(money(p.price));
    bootstrap.Modal.getOrCreateInstance(document.getElementById('productModal')).show();
  }

  function openGallery(id) {
    var p = byId(id);
    $('#gmTitle').text(p.brand + ' ' + p.name);
    $('#gmBody').html(watchSVG(p));
    bootstrap.Modal.getOrCreateInstance(document.getElementById('galleryModal')).show();
  }

  /* ---------------------------------------------------------------
     SPA navigation with fade in / fade out
  ---------------------------------------------------------------- */
  var VALID = ['home', 'products', 'pricelist', 'technology', 'stores', 'support', 'gallery', 'about', 'contact', 'sitemap'];
  var activePage = null;

  function showPage(name, instant) {
    if ($.inArray(name, VALID) === -1) { name = 'home'; }
    $('.main-nav .nav-link').removeClass('active').filter('[data-page="' + name + '"]').addClass('active');
    var menu = bootstrap.Collapse.getInstance(document.getElementById('mainMenu'));
    if (menu) { menu.hide(); }

    var $next = $('#page-' + name);
    if (name === activePage) { return; }
    var $cur = activePage ? $('#page-' + activePage) : $();
    activePage = name;
    document.title = (name === 'home' ? '' : name.charAt(0).toUpperCase() + name.slice(1) + ' | ') + 'Alberto Watch Company';

    function reveal() { window.scrollTo(0, 0); $next.stop(true, true).fadeIn(instant ? 0 : FADE_IN); }
    if ($cur.length && !instant) { $cur.stop(true, true).fadeOut(FADE_OUT, reveal); } else { $cur.hide(); reveal(); }
  }

  function route() {
    var name = (location.hash || '#home').replace('#', '');
    showPage(name);
  }

  /* ---------------------------------------------------------------
     Events
  ---------------------------------------------------------------- */
  $(document).on('click', 'a[data-page]', function (e) {
    e.preventDefault();
    var page = $(this).data('page'), line = $(this).data('line');
    if (line) { renderProducts(line); }
    if (location.hash === '#' + page) { showPage(page); } else { location.hash = page; }
  });

  $(document).on('click keypress', '.lineup-card', function (e) {
    if (e.type === 'keypress' && e.which !== 13) { return; }
    renderProducts($(this).data('line'));
    location.hash = 'products';
  });

  $(document).on('click', '#lineupTabs .nav-link', function (e) {
    e.preventDefault();
    renderProducts($(this).data('line'));
  });

  $(document).on('click', '.view-details', function () { openProduct(parseInt($(this).data('id'), 10)); });
  $(document).on('click keypress', '.gallery-item', function (e) {
    if (e.type === 'keypress' && e.which !== 13) { return; }
    openGallery(parseInt($(this).data('id'), 10));
  });

  $('#priceSearch').on('input', filterPrices);
  $('#priceFilter').on('change', filterPrices);
  $('#storeCity').on('change', function () { drawStores($(this).val()); });

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var ok = true;
    var name = $('#cName').val().trim(), email = $('#cEmail').val().trim(), msg = $('#cMsg').val().trim();
    $('#cName').toggleClass('is-invalid', !name); if (!name) { ok = false; }
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    $('#cEmail').toggleClass('is-invalid', !emailOk); if (!emailOk) { ok = false; }
    $('#cMsg').toggleClass('is-invalid', msg.length < 10); if (msg.length < 10) { ok = false; }
    if (ok) {
      this.reset();
      $('#contactOk').removeClass('d-none').hide().fadeIn(300).delay(6000).fadeOut(400);
    }
  });

  $(window).on('hashchange', route);

  /* ---------------------------------------------------------------
     Visitor counter (stored in this browser)
  ---------------------------------------------------------------- */
  function visitorCounter() {
    var KEY = 'albertoVisitors', n = 1000;
    try {
      n = parseInt(localStorage.getItem(KEY), 10) || 1000;
      if (!sessionStorage.getItem('albertoCounted')) {
        n += 1;
        localStorage.setItem(KEY, n);
        sessionStorage.setItem('albertoCounted', '1');
      }
    } catch (err) { n = 1001; }
    $('#visitorCount').text(n.toLocaleString('en-US'));
  }

  /* ---------------------------------------------------------------
     Ticker: date, time and location (HTML5 Geolocation)
  ---------------------------------------------------------------- */
  var locText = 'Detecting location...';
  function tick() {
    var now = new Date();
    var date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    var time = now.toLocaleTimeString('en-US');
    $('#tickerText').text('★ Welcome to Alberto Watch Company   |   Date: ' + date + '   |   Time: ' + time + '   |   Location: ' + locText + '   ★');
  }
  function locate() {
    if (!navigator.geolocation) { locText = 'Geolocation not supported by this browser'; return; }
    navigator.geolocation.getCurrentPosition(function (pos) {
      locText = 'Lat ' + pos.coords.latitude.toFixed(4) + ', Long ' + pos.coords.longitude.toFixed(4);
    }, function (err) {
      locText = err.code === 1 ? 'Location access denied' : 'Location unavailable';
    }, { timeout: 10000, maximumAge: 600000 });
  }

  /* ---------------------------------------------------------------
     Init
  ---------------------------------------------------------------- */
  renderHome();
  renderTabs();
  renderProducts(currentLine);
  renderPriceList();
  renderTech();
  renderStores();
  renderFaq();
  renderGallery();
  visitorCounter();
  locate();
  tick();
  setInterval(tick, 1000);
  $('#year').text(new Date().getFullYear());
  showPage((location.hash || '#home').replace('#', ''), true);
});
