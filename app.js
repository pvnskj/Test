const app=document.getElementById('app');
const route=()=>location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);
const escapeHtml=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const proofLabel=p=>p.metrics[0];

function home(){
  return `<div class="home-view">
    <section class="hero shell reveal">
      <div class="hero-grid">
        <div>
          <p class="eyebrow">Senior Technical Product Owner · Systems portfolio</p>
          <h1>I turn complex systems into <span class="dim">clear product decisions.</span></h1>
          <p class="hero-copy">Enterprise platforms, AI, operations, and financial systems. I connect the business outcome to the architecture, backlog, delivery sequence, and evidence behind it.</p>
          <div class="hero-actions"><a class="btn" href="#work">Explore the work <span>↓</span></a><a class="btn secondary" href="#approach">How I operate <span>↗</span></a></div>
        </div>
        <aside class="signal-card" aria-label="Technical product ownership signals">
          <div class="signal-head"><span>STPO operating surface</span><span class="live"><i></i>live</span></div>
          <div class="signal-stack">${signals.map(([k,t,d])=>`<div class="signal-row"><span class="signal-key">SIGNAL-${k}</span><b>${t}</b><span>${d}</span></div>`).join('')}</div>
        </aside>
      </div>
      <div class="proof-strip">${[['6','flagship initiatives'],['19+','teams coordinated'],['11GB+','AI knowledge corpus'],['$23.7M/mo','financial scale governed']].map(([v,l])=>`<div><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>
    </section>

    <section class="section shell" id="work">
      <div class="section-head reveal"><div><p class="eyebrow">Selected product work</p><h2>The decision board.</h2></div><p>Every card leads with the decision and proof—not a wall of context. The board borrows the familiarity of Jira without pretending a portfolio is a sprint tracker.</p></div>
      <div class="board-shell reveal">
        <div class="board-toolbar"><div class="board-title"><span class="jira-glyph">◆</span><span>Portfolio board</span></div><div class="filters" role="group" aria-label="Filter projects">${['All','Platforms','AI','Operations','Finance'].map((f,i)=>`<button class="filter" data-filter="${f}" aria-pressed="${i===0}">${f}</button>`).join('')}</div></div>
        <div class="board" id="portfolio-board">${['Platforms','AI','Operations','Finance'].map(group=>lane(group)).join('')}</div>
      </div>
    </section>

    <section class="section shell" id="approach">
      <div class="section-head reveal"><div><p class="eyebrow">How I operate</p><h2>From ambiguity to evidence.</h2></div><p>The portfolio should make the role legible in seconds: I am not only managing ceremonies or writing stories—I am shaping technical product decisions and making them executable.</p></div>
      <div class="operating-model reveal">${[
        ['01','Outcome','Define the product goal, user/business value, and evidence that would count.'],['02','System','Understand architecture, data, dependencies, constraints, and failure modes.'],['03','Priority','Order epics and enablers by value, risk, confidence, and effort.'],['04','Delivery','Turn strategy into ready work, resolve dependencies, and keep teams aligned.'],['05','Evidence','Separate measured, observed, estimated, and projected outcomes.']
      ].map(([n,t,p])=>`<article class="op-card" data-step="${n}"><small>Stage ${n}</small><h3>${t}</h3><p>${p}</p></article>`).join('')}</div>
    </section>
  </div>`;
}
function lane(group){
  const items=projects.filter(p=>p.group===group);
  return `<section class="lane" data-lane="${group}"><div class="lane-head"><span>${group}</span><span>${items.length}</span></div><div class="lane-stack">${items.map(card).join('')}</div></section>`;
}
function card(p){const [type,val,label]=proofLabel(p);return `<article class="epic-card" data-group="${p.group}" data-slug="${p.slug}" style="--card-accent:${p.accent}" tabindex="0" role="link" aria-label="Open ${escapeHtml(p.title)}"><div class="card-meta"><span class="issue">EPIC-${p.index}</span><span>Shipped / scaled</span></div><h3 class="card-title" style="view-transition-name:title-${p.slug}">${p.title}</h3><p class="card-decision">${p.decision}</p><div class="card-proof"><strong>${val}</strong><span>${type}<br>${label}</span></div></article>`}
function frameworkVisual(f){if(f.type==='bars')return `<div class="mini-bars">${f.bars.map(([l,v])=>`<div class="bar"><span>${l}</span><span class="bar-track"><span class="bar-fill" style="display:block;width:${v}%"></span></span><span>${v}</span></div>`).join('')}</div>`;return `<div class="mini-matrix">${f.cells.map(([a,b])=>`<div class="matrix-cell"><b>${a}</b><span>${b}</span></div>`).join('')}</div>`}
function projectPage(p){const next=projects[(projects.indexOf(p)+1)%projects.length];return `<div class="project shell" style="--project-accent:${p.accent}">
  <div class="project-nav"><button data-home>← All projects</button><span class="mono">EPIC-${p.index} · ${p.group} · ${p.role}</span><button data-next="${next.slug}">Next project →</button></div>
  <section class="project-hero reveal">
    <div><div class="project-code">EPIC-${p.index} / ${p.group}</div><h1 style="view-transition-name:title-${p.slug}">${p.title}</h1><p class="before-after">${p.before} <span>→</span> <b>${p.after}</b></p><p class="contribution"><b>My contribution.</b> ${p.contribution}</p></div>
    <aside class="primary-proof"><span class="proof-type">${p.metrics[0][0]}</span><strong>${p.metrics[0][1]}</strong><span>${p.metrics[0][2]}</span><p>Headline proof is intentionally labeled by evidence type so measured results are not mixed with estimates or projections.</p></aside>
  </section>
  <section class="evidence-grid reveal">${p.metrics.map(([t,v,l])=>`<article class="evidence-card"><span class="proof-type">${t}</span><strong>${v}</strong><span>${l}</span></article>`).join('')}</section>

  <section class="section" style="padding-top:26px">
    <div class="section-head reveal"><div><p class="eyebrow">Project at a glance</p><h2>Context → decision → delivery → evidence.</h2></div><p>Four lanes compress the entire case study into one scan. The deeper sections only add information the board cannot.</p></div>
    <div class="decision-board-wrap reveal"><div class="decision-board-head"><b>Decision board</b><span>4 lanes · 1 product story</span></div><div class="decision-board">
      <div class="decision-lane"><h3>Context</h3><div class="issue-card"><span class="tag">Problem</span><h4>What was breaking?</h4><p>${p.problem}</p></div></div>
      <div class="decision-lane"><h3>Decision</h3><div class="issue-card"><span class="tag">Product call</span><h4>What did I change?</h4><p>${p.decision}</p></div><div class="issue-card"><span class="tag">Trade-off</span><h4>What did I accept?</h4><p>${p.tradeoff}</p></div></div>
      <div class="decision-lane"><h3>Delivery</h3><div class="issue-card"><span class="tag">Sequence</span><h4>How did it become buildable?</h4><p>${p.releases[0][0]} → ${p.releases[1][0]} → ${p.releases[2][0]} → ${p.releases[3][0]}.</p></div></div>
      <div class="decision-lane"><h3>Evidence</h3><div class="issue-card"><span class="tag">Outcome</span><h4>What changed?</h4><p>${p.outcome}</p></div></div>
    </div></div>

    <div class="story-grid">
      <section class="panel reveal"><div class="panel-head"><h2>System flow</h2><span>Explain architecture without a paragraph</span></div><div class="flow">${p.flow.map((f,i)=>`<div class="flow-node"><span class="node-dot">0${i+1}</span><b>${f}</b><small>${i===0?'input':i===p.flow.length-1?'outcome':'decision state'}</small></div>`).join('')}</div></section>
      <section class="panel reveal"><div class="panel-head"><h2>How I made the call</h2><span>Frameworks, not framework theater</span></div><div class="frameworks">${p.frameworks.map(f=>`<article class="framework"><div class="framework-top"><h3>${f.name}</h3><span class="label">Decision tool</span></div><p>${f.question}</p>${frameworkVisual(f)}</article>`).join('')}</div></section>
    </div>

    <section class="panel reveal" style="margin-top:14px"><div class="panel-head"><h2>Delivery & learning</h2><span>Horizontal release train · drag / scroll</span></div><div class="release-train">${p.releases.map((r,i)=>`<article class="release-card"><span class="release-index">INCREMENT-${String(i+1).padStart(2,'0')}</span><h3>${r[0]}</h3><p>${r[1]}</p><p class="question"><b>Question to resolve:</b> ${r[2]}</p></article>`).join('')}</div></section>

    <section class="panel reveal" style="margin-top:14px"><div class="panel-head"><h2>Decision log</h2><span>Decision · rationale · trade-off</span></div><div style="overflow-x:auto"><table class="decision-log"><thead><tr><th>Decision</th><th>Why</th><th>Trade-off</th></tr></thead><tbody>${p.log.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div></section>

    <section class="panel reveal" style="margin-top:14px"><div class="panel-head"><h2>My ownership</h2><span>Make the STPO boundary explicit</span></div><div class="ownership">${p.ownership.map(x=>`<span>${x}</span>`).join('')}</div></section>

    <article class="next-project reveal" data-next="${next.slug}"><div><small>Next project / EPIC-${next.index}</small><strong>${next.title}</strong></div><b>→</b></article>
  </section>
</div>`}

function render(animate=true){
  const parts=route(); const p=parts[0]==='work'?projects.find(x=>x.slug===parts[1]):null;
  const draw=()=>{app.innerHTML=p?projectPage(p):home();bind();requestAnimationFrame(()=>document.querySelectorAll('.reveal').forEach(el=>observer.observe(el)));window.scrollTo({top:0,behavior:'instant'})};
  if(animate && document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(draw); else draw();
}
function go(hash){if(location.hash===hash){render()}else location.hash=hash}
function bind(){
  document.querySelectorAll('[data-route]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();go('#/')}));
  document.querySelectorAll('.epic-card').forEach(el=>{const open=()=>go(`#/work/${el.dataset.slug}`);el.addEventListener('click',open);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})});
  document.querySelectorAll('[data-home]').forEach(b=>b.addEventListener('click',()=>go('#/')));
  document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>go(`#/work/${b.dataset.next}`)));
  document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>filterBoard(b.dataset.filter,b)));
  const approach=document.getElementById('approach-link'); if(approach) approach.onclick=e=>{if(route()[0]==='work'){e.preventDefault();go('#/');setTimeout(()=>document.getElementById('approach')?.scrollIntoView(),330)}};
}
function filterBoard(group,btn){document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));document.querySelectorAll('.lane').forEach(l=>l.hidden=group!=='All'&&l.dataset.lane!==group)}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.08});
window.addEventListener('hashchange',()=>render());window.addEventListener('scroll',()=>document.getElementById('topbar').classList.toggle('scrolled',scrollY>8),{passive:true});

(function systemField(){
  const canvas=document.getElementById('system-canvas'),ctx=canvas.getContext('2d'); const reduce=matchMedia('(prefers-reduced-motion: reduce)'); let w,h,dpr,nodes=[],raf;
  function resize(){dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const count=w<700?26:52;nodes=Array.from({length:count},(_,i)=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,r:i%7===0?2.2:1.2}))}
  function draw(){ctx.clearRect(0,0,w,h);for(let i=0;i<nodes.length;i++){const a=nodes[i];if(!reduce.matches){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1}for(let j=i+1;j<nodes.length;j++){const b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);if(d<145){ctx.strokeStyle=`rgba(114,230,255,${(1-d/145)*.065})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}ctx.fillStyle=a.r>2?'rgba(167,139,250,.34)':'rgba(114,230,255,.22)';ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fill()}if(!reduce.matches)raf=requestAnimationFrame(draw)}
  resize();draw();addEventListener('resize',()=>{cancelAnimationFrame(raf);resize();draw()},{passive:true});reduce.addEventListener?.('change',()=>{cancelAnimationFrame(raf);draw()});
})();

if(!location.hash)history.replaceState(null,'','#/');render(false);