(()=>{
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
btn&&btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav&&nav.addEventListener('click',e=>{if(e.target.tagName==='A')nav.classList.remove('open')});
const lb=document.querySelector('.lb'),lbImg=lb&&lb.querySelector('img');let list=[],i=0;
const show=n=>{i=(n+list.length)%list.length;lbImg.src=list[i].src;lbImg.alt=list[i].alt};
document.querySelectorAll('.gallery').forEach(g=>g.addEventListener('click',e=>{const img=e.target.closest('figure')?.querySelector('img');if(!img)return;
list=[...g.querySelectorAll('figure:not([hidden]) img')];show(list.indexOf(img));lb.classList.add('open')}));
if(lb){lb.querySelector('.x').onclick=()=>lb.classList.remove('open');lb.querySelector('.prev').onclick=()=>show(i-1);lb.querySelector('.next').onclick=()=>show(i+1);
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)})}
document.querySelectorAll('.filters').forEach(f=>f.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
f.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));const v=b.dataset.f;
f.nextElementSibling.querySelectorAll('figure').forEach(fig=>fig.hidden=!(v==='all'||fig.dataset.cat===v))}));
})();
