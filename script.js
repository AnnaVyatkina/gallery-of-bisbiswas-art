const hero = document.querySelector('.hero');

function activate(e) {
  if (e.target.matches('.hero') || !e.target.matches('img')) return;
  [hero.src, e.target.src] = [e.target.src, hero.src];
}

window.addEventListener('click',activate,false);