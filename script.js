(function () {
  var P = {
    home: 'M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6',
    sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z',
    drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
    box: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',
    star: 'M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.3l1.1-6.2L3 9.7l6.2-.9z',
    truck: 'M2 6h12v10H2zM14 9h4l3 3v4h-7M6.5 18a1.8 1.8 0 1 0 .01 0M17.5 18a1.8 1.8 0 1 0 .01 0',
    heart: 'M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z',
    eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z',
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5',
    user: 'M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM4 21c0-4 4-6 8-6s8 2 8 6',
    phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
    mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
    spray: 'M8 10h6v11H8zM9 10V7h4l3-2M18 4v.01M20 7v.01M18 9v.01',
    check: 'M5 12.5l4.5 4.5L19 7.5',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    facebook: 'M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z',
    menu: 'M4 7h16M4 12h16M4 17h16',
    sun: 'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5'
  };
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">';
  for (var k in P) sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24"><path d="' + P[k] + '"/></symbol>';
  document.body.insertAdjacentHTML('afterbegin', sprite + '</svg>');

  // <i data-i="name"></i> -> svg icon
  function icons(root) {
    root.querySelectorAll('i[data-i]').forEach(function (el) {
      el.outerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-' + el.dataset.i + '"/></svg>';
    });
  }

  var page = document.body.dataset.page;
  var links = [['index.html', 'Home', 'home'], ['about.html', 'About', 'about'], ['services.html', 'Services', 'services'], ['contact.html', 'Contact', 'contact']];
  var logo = '<a class="logo" href="index.html" aria-label="Personal Touch Essential Cleaning – home"><span class="logo-mark"><i data-i="sparkle"></i></span><span class="logo-text"><b>Personal Touch</b><small>Essential Cleaning</small></span></a>';

  var header = '<header class="site-header"><div class="wrap nav">' + logo +
    '<button class="menu-btn" aria-label="Toggle menu" aria-expanded="false"><i data-i="menu"></i></button>' +
    '<ul class="nav-links">' + links.map(function (l) {
      return '<li><a href="' + l[0] + '"' + (l[2] === page ? ' class="active"' : '') + '>' + l[1] + '</a></li>';
    }).join('') + '<li><a class="btn btn-primary btn-sm" href="contact.html">Get a Quote</a></li></ul></div></header>';

  var footer = '<footer class="footer"><div class="wrap"><div class="foot-grid">' +
    '<div>' + logo + '<p>Professional cleaning services delivered with care, attention to detail, and a personal touch for homes and spaces that deserve it.</p>' +
    '<div class="social"><a href="#" aria-label="Facebook"><i data-i="facebook"></i></a></div></div>' +
    '<div><h4>Explore</h4><ul>' + links.map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
    '<div><h4>Get in Touch</h4><ul class="foot-contact"><li><i data-i="user"></i>Ms. Charlene Stratford</li>' +
    '<li><i data-i="phone"></i><a href="tel:+15188787124">(518) 878-7124</a></li>' +
    '<li><i data-i="mail"></i><a href="mailto:wilsaubi04@yahoo.com">wilsaubi04@yahoo.com</a></li></ul></div></div></div>' +
    '<div class="copy">© ' + new Date().getFullYear() + ' Personal Touch Essential Cleaning. All rights reserved.</div></footer>';

  document.getElementById('site-header').outerHTML = header;
  document.getElementById('site-footer').outerHTML = footer;
  icons(document);

  var hdr = document.querySelector('.site-header');
  var onScroll = function () { hdr.classList.toggle('scrolled', window.scrollY > 30); };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  var btn = document.querySelector('.menu-btn'), nav = document.querySelector('.nav-links');
  btn.addEventListener('click', function () {
    var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o);
  });

  // Reveal on scroll
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });

  // Gentle mouse parallax on orb clusters
  if (window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('[data-parallax]').forEach(function (box) {
      var items = box.querySelectorAll('.orb,.deco-icon');
      box.addEventListener('mousemove', function (e) {
        var r = box.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        items.forEach(function (el, i) { var d = (i + 1) * 6; el.style.translate = (-x * d) + 'px ' + (-y * d) + 'px'; });
      });
      box.addEventListener('mouseleave', function () { items.forEach(function (el) { el.style.translate = ''; }); });
    });
  }

  // Contact form (no backend: opens the visitor's email app addressed to the business)
  var form = document.getElementById('quote-form');
  if (form) {
    var sel = form.elements.service, q = new URLSearchParams(location.search).get('service');
    if (q) for (var i = 0; i < sel.options.length; i++) if (sel.options[i].text === q) sel.selectedIndex = i;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var body = 'Name: ' + f.name.value + '\nPhone: ' + f.phone.value + '\nEmail: ' + f.email.value +
        '\nService needed: ' + f.service.value + '\n\n' + f.message.value;
      location.href = 'mailto:wilsaubi04@yahoo.com?subject=' + encodeURIComponent('Cleaning request from ' + f.name.value) + '&body=' + encodeURIComponent(body);
      document.getElementById('form-status').textContent = 'Thank you! Your email app should open with your message ready to send.';
    });
  }
})();

// Page-wide rising water bubbles
(function () {
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var field = document.createElement('div');
  field.className = 'bubble-field'; field.setAttribute('aria-hidden', 'true');
  var n = window.innerWidth < 760 ? 12 : 26;
  for (var i = 0; i < n; i++) {
    var size = 14 + Math.pow(Math.random(), 1.8) * 68;
    var b = document.createElement('div'); b.className = 'rise';
    var dur = 16 + Math.random() * 20 + (size < 30 ? 0 : 6);
    b.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (Math.random() * 96) + '%;animation-duration:' + dur +
      's;animation-delay:-' + (Math.random() * dur) + 's;opacity:' + (0.55 + Math.random() * 0.45);
    var s = document.createElement('i');
    s.style.animationDuration = (3 + Math.random() * 4) + 's';
    s.style.animationDelay = '-' + (Math.random() * 5) + 's';
    b.appendChild(s); field.appendChild(b);
  }
  document.body.appendChild(field);
})();
