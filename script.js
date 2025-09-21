(function typing(){
  const el = document.querySelector('.topnav .brand') || document.querySelector('.name');
  const text = "Siva Durshika";
  if(!el) return;
  let i=0;
  el.textContent = "";
  const t = setInterval(()=>{
    el.textContent += text.charAt(i);
    i++;
    if(i >= text.length) clearInterval(t);
  }, 80);
})();

function revealOnScroll(){
  const items = document.querySelectorAll('.reveal');
  const windowH = window.innerHeight;
  items.forEach(item=>{
    const rect = item.getBoundingClientRect();
    if(rect.top < windowH - 120) item.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.addEventListener('DOMContentLoaded',()=>{

  document.querySelectorAll('.skill-fill').forEach(el=>{

    const inline = el.getAttribute('style') || '';
    const matched = inline.match(/width\s*:\s*(\d+)%/i);
    let percent = 70;
    if(matched) percent = matched[1];
    el.style.setProperty('--w', percent + '%');
    
    el.style.width = percent + '%'; 
  });
});

const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 500) backBtn.style.display = 'block';
  else backBtn.style.display = 'none';
});
backBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

const printBtn = document.getElementById('printBtn');
if(printBtn){
  printBtn.addEventListener('click', ()=> {
    
    window.print(); 
  });
}

const downloadBtn = document.getElementById('downloadPdf');
if(downloadBtn){
  downloadBtn.addEventListener('click', ()=> {
    
    const link = document.createElement('a');
    link.href = 'resume-sample.pdf';
    link.download = 'Siva_Durshika_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
const pages = document.querySelectorAll('.paper');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');

pages.forEach(page=>{
  page.addEventListener('click', ()=>{
    const clone = page.cloneNode(true);
    clone.style.transform = 'none';
    clone.style.boxShadow = '0 0 30px rgba(25,166,255,0.6)';
    lightboxContent.innerHTML = '';
    lightboxContent.appendChild(clone);
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', ()=>{
  lightbox.classList.remove('active');
  lightboxContent.innerHTML = '';
});
}
