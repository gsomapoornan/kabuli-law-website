const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
toggle.addEventListener('click',()=>{const opened=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!opened));nav.classList.toggle('is-open',!opened)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}));
const services={
'real-estate':{title:'Real estate',intro:'Buying, selling, or making changes to a property can bring important legal questions. Discuss your plans and timelines with the firm.',topics:['What legal work is needed for my purchase or sale?','Which agreements and property documents should I bring?','What deadlines, costs, or financing details should we discuss?']},
wills:{title:'Wills & estates',intro:'Planning ahead starts with understanding your wishes and the people who matter to you. Ask about the documents and arrangements relevant to your circumstances.',topics:['What should I consider when preparing or updating a will?','How can I plan for decisions about my property and personal care?','What information should I gather about assets and beneficiaries?']},
family:{title:'Family law',intro:'Changes in family circumstances often come with difficult decisions. A discussion of your circumstances can help identify the questions that need attention.',topics:['What options should I discuss when considering a separation?','Which family agreements or financial documents may be relevant?','What questions should I ask about parenting, support, or property?']},
business:{title:'Business law',intro:'A business decision often has legal implications. Explore the questions connected with starting, operating, or making changes to your business.',topics:['What legal structure and documents should I consider?','Which contracts or ownership arrangements need review?','What should I prepare before buying, selling, or changing a business?']}
};
const dialog=document.querySelector('dialog');
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{const s=services[button.dataset.service];document.querySelector('#dialog-title').textContent=s.title;document.querySelector('#dialog-intro').textContent=s.intro;const list=document.querySelector('#dialog-topics');list.replaceChildren(...s.topics.map(t=>{const li=document.createElement('li');li.textContent=t;return li}));dialog.showModal()}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
document.querySelector('#dialog-contact').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
