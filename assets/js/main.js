const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)})}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const cat=btn.textContent.trim();document.querySelectorAll('.archive-item').forEach(item=>{item.style.display=cat==='All'||item.dataset.cat===cat?'block':'none'})}));
