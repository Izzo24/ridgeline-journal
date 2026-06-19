// 稜線誌 RIDGELINE — 互動
(function () {
  // 行動選單
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // 聯絡表單（前端示範，不送出）
  var form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.querySelector('#formNote');
      if (note) {
        note.hidden = false;
        note.textContent = '謝謝你的來信，我們已收到，將於三個工作天內回覆。（此為展示表單，不會實際寄出。）';
      }
      form.reset();
    });
  }

  // 進場淡入（不阻擋內容顯示：唯有 JS 正常時才隱藏後淡入；無 JS 一律可見）
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('reveal-ready');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('in'); });
  }
})();
