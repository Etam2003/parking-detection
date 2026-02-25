// ═══════════════════════════════════════════
//  Adatok betöltése data.json-ből
//  Szerkesztéshez: töltsd le a data.json-t,
//  módosítsd, majd töltsd vissza GitHubra.
// ═══════════════════════════════════════════

async function loadData() {
  const res = await fetch('data.json?nocache=' + Date.now());
  if (!res.ok) throw new Error('data.json betöltés sikertelen');
  return res.json();
}

// ── Navigáció aktív állapot ──
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page);
  });
}

// ── Toast üzenet ──
function showToast(msg, ok = true) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast ' + (ok ? 'toast-ok' : 'toast-err');
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 2800);
}