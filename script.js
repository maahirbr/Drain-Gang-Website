
// Small interactive bits: cursor star, active nav, and theme toggler
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(a=>{
  if(a.href === location.href) a.classList.add('active');
});

// Floating cursor sparkle
document.addEventListener('mousemove', e=>{
  const s=document.createElement('div');
  s.style.position='fixed';
  s.style.left=e.clientX+'px';
  s.style.top=e.clientY+'px';
  s.style.width='6px'; s.style.height='6px'; s.style.borderRadius='50%';
  s.style.pointerEvents='none';
  s.style.background='radial-gradient(circle, rgba(112,230,255,1), rgba(112,230,255,0))';
  s.style.filter='blur(1px)'; s.style.opacity='0.9';
  document.body.appendChild(s);
  setTimeout(()=>{ s.style.transition='300ms'; s.style.transform='translateY(-10px)'; s.style.opacity='0'; }, 10);
  setTimeout(()=> s.remove(), 340);
});
