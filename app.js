(function(){
  "use strict";

  var projects = [
    {
      id:"enterprise-order-management", index:"01", title:"Enterprise Order Management", domain:"Platforms", tone:"#6ea8ff",
      role:"Product strategy & orchestration",
      before:"Manually modeled paths", after:"Dependency-driven execution",
      contribution:"I led the shift to dependency-driven execution and a shared order contract across 19+ teams.",
      problem:"Each new service combination meant more workflow modeling, deployment work and regression risk.",
      decision:"Let capabilities declare dependencies so the platform assembles the execution path instead of teams redrawing it.",
      outcome:"Faster logic mapping while preserving existing service behavior as a migration requirement.",
      flow:["Product intent","Dependency graph","Readiness gate","Event execution","Provisioning"],
      flowNote:"The product changes orchestration from imperative path modeling to declared capabilities, dependencies and governed shared context.",
      skills:["Product goal","Architecture","Dependencies","Multi-team delivery","Migration","Measurement"],
      primary:{type:"Measured",value:"20%",label:"Faster logic mapping",detail:"Proof-of-concept comparison of dependency-driven assembly versus manual workflow modeling."},
      metrics:[
        {type:"Measured",value:"20%",label:"Logic-mapping improvement",detail:"POC comparison."},
        {type:"Projected",value:"75K/day",label:"Target order capacity",detail:"Architecture capacity target, not claimed production throughput."},
        {type:"Actual scope",value:"19+",label:"Teams coordinated",detail:"Cross-team migration complexity."},
        {type:"Actual scope",value:"18",label:"Service intents",detail:"Legacy behavior preserved through migration."}
      ],
      lanes:{
        context:[
          ["GOAL","Make service changes without remodeling every fulfillment path.","Product goal"],
          ["CONSTRAINT","Preserve deterministic execution and existing service behavior.","Non-negotiable"]
        ],
        decision:[
          ["DEC-01","Replace static workflows with declared capability dependencies.","Architecture"],
          ["DEC-02","Separate assessment from execution with a readiness boundary.","Risk control"],
          ["DEC-03","Standardize a versioned shared order context.","Data contract"]
        ],
        delivery:[
          ["INC-01","Orchestration foundation: capability registry + dependency graph.","Foundation"],
          ["INC-02","Product decomposition + governed order context.","Increment"],
          ["INC-03","Scale, observability and policy configuration.","Scale"]
        ],
        evidence:[
          ["PROOF","20% faster mapping in POC comparison.","Measured"],
          ["SCALE","19+ teams / 18 intents coordinated.","Actual scope"]
        ]
      },
      framework:{
        label:"DEPENDENCY + SCOPE",
        name:"Sequence by dependency, protect parity first",
        note:"This is shown as the actual decision logic: architectural dependency and migration risk. I would not label it RICE unless a historical scoring artifact exists.",
        x:"Implementation effort →", y:"Business / migration value →",
        dots:[["Parity gate",82,82],["Shared context",72,67],["Observability",48,42],["Policy config",38,28]],
        rules:[["Must protect","Existing service behavior and deterministic execution."],["Sequence first","Dependency graph and shared context before broader configurability."],["Defer","Nice-to-have policy flexibility until the execution foundation is stable."]]
      }
    },
    {
      id:"rag-analysis-agent", index:"02", title:"Enterprise RAG Analysis Agent", domain:"AI", tone:"#a78bfa",
      role:"Builder · product & engineering",
      before:"Manual investigation", after:"Grounded technical analysis",
      contribution:"I built the analysis agent and made citations, permission-aware retrieval and evaluation gates central to the product.",
      problem:"Complex failures took days of searching across fragmented engineering knowledge and reconstructing relationships by hand.",
      decision:"Ground every material answer in current source evidence and abstain when the evidence cannot support the claim.",
      outcome:"Shorter investigations with traceable answers and a repeatable quality gate for retrieval and response changes.",
      flow:["Live sources","Hybrid retrieval","Metadata filter","Rerank","Grounding gate","Cited answer"],
      flowNote:"The value is not the chat surface; it is current authorized evidence, retrieval quality, grounding verification and a designed refusal path.",
      skills:["AI product","POC → pilot","Evaluation","Permissions","Architecture","Outcome metrics"],
      primary:{type:"Measured",value:"~6 days → ~2 hrs",label:"Investigation cycle",detail:"Historical troubleshooting compared with pilot use."},
      metrics:[
        {type:"Measured",value:"~6d → ~2h",label:"Analysis cycle",detail:"End-to-end complex investigation comparison."},
        {type:"Observed",value:"11GB+",label:"Knowledge corpus",detail:"Structured and unstructured engineering evidence."},
        {type:"Observed",value:"558+",label:"Projects searchable",detail:"Cross-project analysis scope."},
        {type:"Evaluation",value:"100% / 90%+",label:"Groundedness / recall",detail:"25+ case golden evaluation set."}
      ],
      lanes:{
        context:[
          ["GOAL","Reduce investigation time without trading away trust.","Product goal"],
          ["RISK","A plausible unsupported answer is worse than no answer.","Product risk"]
        ],
        decision:[
          ["DEC-01","Prioritize live enterprise context over broader UI polish.","Priority"],
          ["DEC-02","Add citation and grounding gates, even at added latency.","Trade-off"],
          ["DEC-03","Make the golden dataset a release gate.","Quality"]
        ],
        delivery:[
          ["POC","Prove retrieval over difficult engineering artifacts.","Discovery"],
          ["PILOT","Five analysts, citations and grounding behavior.","Validate"],
          ["PROD","Permission-aware connectors, freshness and async service.","Scale"]
        ],
        evidence:[
          ["PROOF","Investigation cycle moved from ~6 days to ~2 hours.","Measured"],
          ["QUALITY","Golden set gates groundedness and recall.","Evaluation"]
        ]
      },
      framework:{
        label:"RISK × EVIDENCE",
        name:"Prioritize trust before conversational polish",
        note:"For an AI product, the useful prioritization lens is evidence quality and failure risk. This is more defensible than inventing a RICE score after the fact.",
        x:"Implementation effort →", y:"Trust / user value →",
        dots:[["Grounding gate",78,88],["Live connectors",67,80],["Golden set",54,74],["UI polish",35,35]],
        rules:[["Prioritize","Capabilities that make answers current, permission-aware and attributable."],["Gate release","Retrieval/prompt changes must pass the golden evaluation set."],["Accept trade-off","Slightly slower response is acceptable when it materially improves evidence quality."]]
      }
    },
    {
      id:"build-plus", index:"03", title:"Build Plus", domain:"Operations", tone:"#54d6d6",
      role:"Product ownership · supply chain",
      before:"Disconnected handoffs", after:"One governed asset lifecycle",
      contribution:"I established the part-data foundation and sequenced planning, fulfillment and recovery around a trusted item identity.",
      problem:"Master data, demand, fulfillment and reverse logistics operated in fragmented systems and spreadsheets.",
      decision:"Create the governed item identity first, then prioritize the integrations and workflows that return the most operational value for the effort.",
      outcome:"A connected lifecycle from part definition and demand planning through validated fulfillment, custody and recovery.",
      flow:["Item master","18-month demand","Procurement","Validation","Fulfillment","Serialized custody","Recovery"],
      flowNote:"The shared item identity is the anchor that lets planning, fulfillment, finance and reverse logistics behave as one product ecosystem.",
      skills:["Portfolio sequencing","LOB / LOE","RACI","Data governance","Supply chain","300+ requirements"],
      primary:{type:"Implemented",value:"18 mo",label:"Rolling demand horizon",detail:"Consumption and regression-based planning capability."},
      metrics:[
        {type:"Measured baseline",value:"50%+",label:"MRO spreadsheet-managed",detail:"Baseline before systemization."},
        {type:"Implemented",value:"18 mo",label:"Demand horizon",detail:"Rolling demand planning capability."},
        {type:"Projected",value:"10,040",label:"Hours returned / year",detail:"Program-level LOB Level 7 benefit."},
        {type:"Actual scope",value:"19",label:"Manual handoffs addressed",detail:"Reverse-logistics complexity moved into governed workflow."}
      ],
      lanes:{
        context:[
          ["GOAL","Connect part definition, demand, fulfillment, custody and recovery.","Product goal"],
          ["CONSTRAINT","Automation is unreliable if part identity is not governed first.","Dependency"]
        ],
        decision:[
          ["DEC-01","Establish Item Master and taxonomy as the data anchor.","Foundation"],
          ["DEC-02","Use LOB / LOE to prioritize high-benefit, lower-effort integrations.","Prioritization"],
          ["DEC-03","Use RACI to clarify reverse-logistics ownership.","Operating model"]
        ],
        delivery:[
          ["INC-01","Master-data foundation and system synchronization.","Foundation"],
          ["INC-02","Predictive planning and demand signals.","Increment"],
          ["INC-03","Validated fulfillment + lifecycle closure.","Scale"]
        ],
        evidence:[
          ["PROOF","18-month demand planning implemented.","Capability"],
          ["VALUE","10,040 projected annual hours returned at program level.","Projected"]
        ]
      },
      framework:{
        label:"LOB × LOE",
        name:"Benefit / effort prioritization",
        note:"This one is source-backed: Build Plus explicitly used Level of Benefit and Level of Effort to sequence integrations, with RACI used for lifecycle ownership.",
        x:"Level of effort →", y:"Level of benefit →",
        dots:[["Item master",76,92],["Demand planning",63,78],["BOM validation",58,74],["Lifecycle closure",42,61]],
        rules:[["Prioritize","High-benefit / lower-effort integrations that unlock downstream capabilities."],["Dependency rule","Foundational data work can outrank an isolated quick win when it enables multiple later increments."],["Ownership","Use RACI where value depends on handoffs across teams rather than a single system."]]
      }
    },
    {
      id:"rfds", index:"04", title:"RFDS Automation", domain:"Operations", tone:"#70d7ff",
      role:"Product ownership · engineering automation",
      before:"Manual drafting", after:"Validated design generation",
      contribution:"I turned engineering judgment into testable rules, with source validation and a controlled path for urgent designs.",
      problem:"Manual drafting created stale configurations, equipment mismatches, version drift and field rework at national rollout scale.",
      decision:"Treat the RFDS as an output of governed engineering data and rules, then block invalid source combinations before generation.",
      outcome:"Generation dropped from hours to seconds and design-to-field exceptions fell below 5% at production scale.",
      flow:["Planning data","Catalog data","Governed model","Rules","Validation gate","RFDS + diagrams","Field execution"],
      flowNote:"The durable product is the governed data-and-rules pipeline. The document is simply one generated output.",
      skills:["Rules engine","Validation gates","Process redesign","Engineering UX","Operational scale","Measurement"],
      primary:{type:"Measured",value:"2–4 hrs → <30 sec",label:"Design generation",detail:"Observed automated generation workflow."},
      metrics:[
        {type:"Measured",value:"$1.2M",label:"Annual cost avoidance",detail:"Labor avoided at production rollout volume."},
        {type:"Measured",value:"2–4h → <30s",label:"Generation time",detail:"Observed automated workflow."},
        {type:"Measured",value:"35–45% → <5%",label:"Exception rate",detail:"Design-to-field rework reduction."},
        {type:"Observed",value:"1,000+",label:"Designs / month",detail:"Production operating scale."}
      ],
      lanes:{
        context:[
          ["GOAL","Generate a field-ready design from trusted data in seconds.","Product goal"],
          ["RISK","Free-form flexibility can create invalid engineering configurations.","Quality risk"]
        ],
        decision:[
          ["DEC-01","Model engineering knowledge as governed data and rules.","Product model"],
          ["DEC-02","Validate required attributes and approved equipment upstream.","Control"],
          ["DEC-03","Keep a controlled urgent path rather than unrestricted overrides.","Trade-off"]
        ],
        delivery:[
          ["INC-01","Trusted source model.","Foundation"],
          ["INC-02","Rules, mappings and validation controls.","Increment"],
          ["INC-03","Automated designs, diagrams and operational alignment.","Scale"]
        ],
        evidence:[
          ["PROOF","Generation reduced to under 30 seconds.","Measured"],
          ["QUALITY","Exception rate reduced below 5%.","Measured"]
        ]
      },
      framework:{
        label:"CONTROL MATRIX",
        name:"Risk before convenience",
        note:"The prioritization is driven by where an invalid configuration creates the most downstream rework. Validation controls are placed upstream, before generation and fulfillment.",
        x:"Implementation effort →", y:"Failure impact →",
        dots:[["Source validation",74,90],["Approved parts",64,82],["Dynamic diagrams",50,55],["Cosmetic output",28,25]],
        rules:[["Block","Critical mismatches in source data or approved equipment."],["Govern","Legitimate urgent work through a controlled manual path."],["Automate next","Outputs that remove repetitive drafting after integrity is protected."]]
      }
    },
    {
      id:"gl-coding", index:"05", title:"Dynamic GL Coding", domain:"Finance", tone:"#f4c66a",
      role:"Product ownership · financial systems",
      before:"Policy embedded in code", after:"Configurable financial routing",
      contribution:"I backed a foundational redesign and aligned project identity across operations, warehouse and ERP systems.",
      problem:"Every new portfolio risked months of engineering change because financial policy was embedded in project-specific conditional logic.",
      decision:"Invest in a reusable metadata-driven routing capability rather than adding another fast branch of hard-coded logic.",
      outcome:"Faster month-end close and a reusable model adopted across 4+ strategic portfolios.",
      flow:["Project context","Common ID","Policy lookup","Code assembly","Validation","ERP posting","Audit evidence"],
      flowNote:"Application architecture stays stable while approved financial policy evolves through governed configuration.",
      skills:["Build vs extend","Platform thinking","Financial controls","Cross-system identity","Trade-offs","Value realization"],
      primary:{type:"Measured",value:"40%",label:"Faster month-end close",detail:"Post-implementation scenario analysis and reduced reconciliation effort."},
      metrics:[
        {type:"Measured",value:"40%",label:"Faster close",detail:"Validated post implementation."},
        {type:"Observed",value:"4+",label:"Portfolio adoption",detail:"Strategic portfolio types using the model."},
        {type:"Actual scope",value:"3",label:"Enterprise systems aligned",detail:"Operations, warehouse and ERP."},
        {type:"Estimated",value:"2–3 mo → <1 wk",label:"Enablement comparison",detail:"Supported-scenario estimate, not a production SLA."}
      ],
      lanes:{
        context:[
          ["GOAL","Let accounting policy change without recurring application redesign.","Product goal"],
          ["TENSION","Four-month foundation versus a faster one-off extension.","Investment"]
        ],
        decision:[
          ["DEC-01","Choose foundational redesign over another conditional branch.","Trade-off"],
          ["DEC-02","Carry a common project identity across system boundaries.","Architecture"],
          ["DEC-03","Validate treatment before ledger posting.","Control"]
        ],
        delivery:[
          ["INC-01","Common identity and ownership.","Foundation"],
          ["INC-02","Configurable policy and GL assembly.","Increment"],
          ["INC-03","Validation, reconciliation and evidence.","Scale"]
        ],
        evidence:[
          ["PROOF","40% faster month-end close.","Measured"],
          ["ADOPTION","4+ strategic portfolios onboarded.","Observed"]
        ]
      },
      framework:{
        label:"BUILD vs EXTEND",
        name:"Optimize for repeatability, not the next request",
        note:"The critical senior-level trade-off was investment horizon: a four-month foundational redesign versus continuing to ship faster project-specific branches.",
        x:"Initial investment →", y:"Long-term leverage →",
        dots:[["Reusable model",78,92],["Common identity",62,80],["One-off extension",28,38],["Manual workaround",15,18]],
        rules:[["Choose foundation","When the same class of change is recurring across portfolios."],["Protect auditability","Shared identity and validation are not optional shortcuts."],["Measure later","Separate measured close improvement from estimated future enablement speed."]]
      }
    },
    {
      id:"lease-vendor-management", index:"06", title:"Lease & Vendor Management", domain:"Finance", tone:"#ff8ba7",
      role:"Product ownership · lease-to-pay",
      before:"Payment workarounds", after:"Eligibility-gated lease-to-pay",
      contribution:"I defined payment eligibility controls and replaced the three-address vendor limit with a scalable model.",
      problem:"Fragmented lease data and vendor constraints allowed invalid or incomplete payment instructions to surface only when Finance tried to execute them.",
      decision:"Move eligibility checks upstream and redesign the vendor-address model instead of extending recurring manual workarounds.",
      outcome:"A governed lease-to-pay lifecycle with scalable addresses, earlier validation and traceable financial controls.",
      flow:["Lease execution","Milestones","Vendor data","Eligibility gate","Payment schedule","GL / CIP","ERP","Reconciliation"],
      flowNote:"The product shifts error detection from downstream finance review to the point where lease and vendor data become eligible for payment.",
      skills:["RACI / ownership","Financial controls","Lifecycle product","Integration","Compliance","Scale"],
      primary:{type:"Actual scale",value:"$23.7M/mo",label:"Rent roll governed",detail:"Recurring financial scale managed through the lease process."},
      metrics:[
        {type:"Actual scale",value:"$23.7M/mo",label:"Rent roll",detail:"Recurring financial scale governed."},
        {type:"Implemented",value:"3 → scalable",label:"Address model",detail:"Removed hard-coded three-address constraint."},
        {type:"Estimated",value:"~2x",label:"Business-case ROI",detail:"Estimated operational return versus delivery investment."},
        {type:"Actual scope",value:"~150",label:"Stories delivered",detail:"Lease, vendor, integration and controls scope."}
      ],
      lanes:{
        context:[
          ["GOAL","Govern lease obligations from execution through payment and closeout.","Product goal"],
          ["RISK","Invalid vendor or address state can become recurring financial rework.","Control risk"]
        ],
        decision:[
          ["DEC-01","Validate vendor, address and identifiers before approval.","Control"],
          ["DEC-02","Replace the three-address limit with a scalable model.","Platform"],
          ["DEC-03","Treat lease data as financial-control data, not document tracking.","Product model"]
        ],
        delivery:[
          ["INC-01","Lease lifecycle foundation.","Foundation"],
          ["INC-02","Vendor scalability + payment controls.","Increment"],
          ["INC-03","GL/CIP treatment, ERP execution and evidence.","Scale"]
        ],
        evidence:[
          ["SCALE","$23.7M monthly rent roll governed.","Actual"],
          ["SCOPE","~150 stories delivered across the capability.","Actual"]
        ]
      },
      framework:{
        label:"CONTROL + RACI",
        name:"Put accountability where the risk enters",
        note:"For a lease-to-pay product, ownership and control placement matter more than a generic feature score. RACI-style clarity belongs around handoffs; eligibility gates belong before finance execution.",
        x:"Implementation effort →", y:"Financial / compliance risk →",
        dots:[["Eligibility gate",72,91],["Vendor model",62,80],["GL/CIP control",58,76],["UI convenience",25,28]],
        rules:[["Prevent upstream","Validate vendor status, address and identifiers before payment approval."],["Clarify ownership","Use explicit accountability at lease, vendor, finance and ERP handoffs."],["Scale the model","Remove structural constraints instead of institutionalizing workarounds."]]
      }
    }
  ];

  var state = {current:0, filter:"All"};

  function esc(s){
    return String(s).replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"})[c];});
  }

  function projectCard(p){
    return '<article class="portfolio-card" data-domain="'+esc(p.domain)+'" style="--tone:'+p.tone+'">'+
      '<div class="card-top"><span>EPIC-'+p.index+'</span><span><i></i>'+esc(p.domain)+'</span></div>'+
      '<h3>'+esc(p.title)+'</h3>'+
      '<p class="card-decision">'+esc(p.decision)+'</p>'+
      '<div class="card-bottom"><div class="metric-mini"><span>'+esc(p.primary.type)+'</span><strong>'+esc(p.primary.value)+'</strong></div>'+
      '<button class="open-case" type="button" data-open-project="'+esc(p.id)+'" aria-label="Open '+esc(p.title)+'">↗</button></div></article>';
  }

  function renderBoard(){
    var board=document.getElementById("portfolio-board");
    var visible=projects.filter(function(p){return state.filter==="All"||p.domain===state.filter;});
    board.innerHTML=visible.map(projectCard).join("");
    document.getElementById("project-count").textContent=visible.length+" "+(visible.length===1?"initiative":"initiatives");
    bindProjectButtons(board);
  }

  function renderCarousel(){
    var el=document.getElementById("project-carousel");
    el.innerHTML=projects.map(function(p){
      return '<article class="carousel-card" style="--tone:'+p.tone+'">'+
        '<div><span class="mono">EPIC-'+p.index+' / '+esc(p.domain)+'</span><div class="big-metric">'+esc(p.primary.value)+'</div><small>'+esc(p.primary.label)+'</small>'+
        '<h3>'+esc(p.title)+'</h3><p>'+esc(p.outcome)+'</p><button class="text-action" type="button" data-open-project="'+esc(p.id)+'">Open case study →</button></div>'+
        '<div class="mini-flow">'+p.flow.slice(0,4).map(function(x,i){return '<span>0'+(i+1)+' · '+esc(x)+'</span>';}).join("")+'</div></article>';
    }).join("");
    bindProjectButtons(el);
  }

  function bindProjectButtons(root){
    root.querySelectorAll("[data-open-project]").forEach(function(btn){
      btn.addEventListener("click",function(){openProject(btn.getAttribute("data-open-project"));});
    });
  }

  function laneHtml(name,items,p){
    return '<div class="board-lane"><div class="lane-head"><span>'+name+'</span><b>'+items.length+'</b></div>'+
      items.map(function(item){
        return '<article class="board-item" style="--tone:'+p.tone+'"><span class="item-key">'+esc(item[0])+'</span><h3>'+esc(item[1])+'</h3><span class="tag">'+esc(item[2])+'</span></article>';
      }).join("")+'</div>';
  }

  function renderFramework(p){
    var f=p.framework;
    var dots=f.dots.map(function(d){
      return '<span class="matrix-dot" style="left:'+d[1]+'%;bottom:'+d[2]+'%">'+esc(d[0])+'</span>';
    }).join("");
    document.getElementById("framework-visual").innerHTML='<div class="matrix"><div class="matrix-y">'+esc(f.y)+'</div><div class="matrix-grid">'+dots+'</div><div class="matrix-x">'+esc(f.x)+'</div></div>';
    document.getElementById("framework-copy").innerHTML='<span class="framework-name">'+esc(f.label)+'</span><h3>'+esc(f.name)+'</h3><p>'+esc(f.note)+'</p><div class="framework-rules">'+
      f.rules.map(function(r){return '<div><span>'+esc(r[0])+'</span><p>'+esc(r[1])+'</p></div>';}).join("")+'</div>';
    document.getElementById("framework-note").textContent="A framework is shown only where the underlying work supports it; otherwise the portfolio exposes the decision logic directly.";
  }

  function populateProject(p){
    document.documentElement.style.setProperty("--project-tone",p.tone);
    document.getElementById("project-key").textContent="EPIC-"+p.index;
    document.getElementById("project-domain").textContent=p.domain;
    document.getElementById("project-role").textContent=p.role;
    document.getElementById("project-title").textContent=p.title;
    document.getElementById("project-before").textContent=p.before;
    document.getElementById("project-after").textContent=p.after;
    document.getElementById("project-contribution").textContent=p.contribution;
    document.getElementById("skill-signals").innerHTML=p.skills.map(function(s){return "<span>"+esc(s)+"</span>";}).join("");
    document.getElementById("hero-proof").innerHTML='<span class="proof-type">'+esc(p.primary.type)+'</span><strong>'+esc(p.primary.value)+'</strong><h3>'+esc(p.primary.label)+'</h3><p>'+esc(p.primary.detail)+'</p>';
    document.getElementById("story-problem").textContent=p.problem;
    document.getElementById("story-decision").textContent=p.decision;
    document.getElementById("story-outcome").textContent=p.outcome;
    document.getElementById("flow-note").textContent=p.flowNote;
    document.getElementById("flow-track").innerHTML=p.flow.map(function(step,i){return '<div class="flow-step"><span>0'+(i+1)+'</span><strong>'+esc(step)+'</strong></div>';}).join("");
    document.getElementById("decision-board").innerHTML=
      laneHtml("Context",p.lanes.context,p)+laneHtml("Decision",p.lanes.decision,p)+laneHtml("Delivery",p.lanes.delivery,p)+laneHtml("Evidence",p.lanes.evidence,p);
    renderFramework(p);
    document.getElementById("evidence-grid").innerHTML=p.metrics.map(function(m){
      return '<article class="evidence-card"><span class="type">'+esc(m.type)+'</span><strong>'+esc(m.value)+'</strong><h3>'+esc(m.label)+'</h3><p>'+esc(m.detail)+'</p></article>';
    }).join("");
    var next=projects[(state.current+1)%projects.length];
    document.getElementById("next-project-name").textContent=next.title;
  }

  function runTransition(fn){
    if(document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      document.startViewTransition(fn);
    }else{fn();}
  }

  function openProject(id){
    var idx=projects.findIndex(function(p){return p.id===id;});
    if(idx<0)return;
    state.current=idx;
    populateProject(projects[idx]);
    runTransition(function(){
      var home=document.getElementById("home-view");
      var detail=document.getElementById("project-view");
      home.classList.remove("is-active");
      detail.hidden=false;
      detail.classList.add("is-active");
    });
    history.replaceState(null,"","#case/"+id);
    window.scrollTo({top:0,behavior:"instant"});
  }

  function closeProject(){
    runTransition(function(){
      var home=document.getElementById("home-view");
      var detail=document.getElementById("project-view");
      detail.classList.remove("is-active");
      detail.hidden=true;
      home.classList.add("is-active");
    });
    history.replaceState(null,"",location.pathname+location.search+"#work");
    setTimeout(function(){document.getElementById("work").scrollIntoView({block:"start"});},30);
  }

  function moveProject(delta){
    state.current=(state.current+delta+projects.length)%projects.length;
    populateProject(projects[state.current]);
    runTransition(function(){});
    history.replaceState(null,"","#case/"+projects[state.current].id);
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function setupFilters(){
    document.querySelectorAll("[data-filter]").forEach(function(btn){
      btn.addEventListener("click",function(){
        document.querySelectorAll("[data-filter]").forEach(function(b){b.classList.remove("is-active");});
        btn.classList.add("is-active");
        state.filter=btn.getAttribute("data-filter");
        renderBoard();
      });
    });
  }

  function setupCarousel(){
    var car=document.getElementById("project-carousel");
    function move(dir){
      var card=car.querySelector(".carousel-card");
      if(!card)return;
      car.scrollBy({left:dir*(card.getBoundingClientRect().width+14),behavior:"smooth"});
    }
    document.querySelector("[data-carousel-prev]").addEventListener("click",function(){move(-1);});
    document.querySelector("[data-carousel-next]").addEventListener("click",function(){move(1);});
  }

  function setupCommand(){
    var dialog=document.getElementById("command-dialog");
    var input=document.getElementById("command-input");
    var results=document.getElementById("command-results");
    function paint(q){
      var term=(q||"").toLowerCase();
      var list=projects.filter(function(p){return !term||p.title.toLowerCase().includes(term)||p.domain.toLowerCase().includes(term)||p.role.toLowerCase().includes(term);});
      results.innerHTML=list.map(function(p){return '<button class="command-result" type="button" data-command-project="'+p.id+'"><span>'+esc(p.title)+'</span><small>'+esc(p.domain)+'</small></button>';}).join("");
      results.querySelectorAll("[data-command-project]").forEach(function(b){b.addEventListener("click",function(){dialog.close();openProject(b.getAttribute("data-command-project"));});});
    }
    document.querySelector("[data-command]").addEventListener("click",function(){paint("");dialog.showModal();setTimeout(function(){input.focus();},20);});
    document.querySelector("[data-close-command]").addEventListener("click",function(){dialog.close();});
    input.addEventListener("input",function(){paint(input.value);});
    window.addEventListener("keydown",function(e){
      if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();paint("");dialog.showModal();setTimeout(function(){input.focus();},20);}
    });
  }

  function initThree(){
    if(!window.THREE || window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    var host=document.getElementById("hero-canvas");
    if(!host)return;
    var scene=new THREE.Scene();
    var camera=new THREE.PerspectiveCamera(52,host.clientWidth/host.clientHeight,.1,100);
    camera.position.z=11;
    var renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));
    renderer.setSize(host.clientWidth,host.clientHeight);
    renderer.setClearColor(0x000000,0);
    host.appendChild(renderer.domElement);

    var group=new THREE.Group();
    scene.add(group);
    var points=[];
    var nodeGeo=new THREE.SphereGeometry(.15,18,18);
    var colors=[0x6ea8ff,0xa78bfa,0x54d6d6,0x70d7ff,0xf4c66a,0xff8ba7];
    for(var i=0;i<6;i++){
      var a=(Math.PI*2*i/6)-Math.PI/2;
      var r=i%2===0?3.5:4.15;
      var x=Math.cos(a)*r,y=Math.sin(a)*r*.72,z=(i%3-1)*.45;
      points.push(new THREE.Vector3(x,y,z));
      var mesh=new THREE.Mesh(nodeGeo,new THREE.MeshBasicMaterial({color:colors[i]}));
      mesh.position.set(x,y,z);group.add(mesh);
      var ring=new THREE.Mesh(new THREE.RingGeometry(.28,.30,32),new THREE.MeshBasicMaterial({color:colors[i],transparent:true,opacity:.28,side:THREE.DoubleSide}));
      ring.position.copy(mesh.position);group.add(ring);
    }
    var linePoints=[];
    for(var j=0;j<points.length;j++){linePoints.push(points[j],points[(j+1)%points.length]);linePoints.push(points[j],new THREE.Vector3(0,0,0));}
    var lineGeo=new THREE.BufferGeometry().setFromPoints(linePoints);
    group.add(new THREE.LineSegments(lineGeo,new THREE.LineBasicMaterial({color:0x6f7c92,transparent:true,opacity:.28})));

    var count=620,pos=new Float32Array(count*3);
    for(var k=0;k<count;k++){pos[k*3]=(Math.random()-.5)*13;pos[k*3+1]=(Math.random()-.5)*10;pos[k*3+2]=(Math.random()-.5)*7-1;}
    var pGeo=new THREE.BufferGeometry();pGeo.setAttribute("position",new THREE.BufferAttribute(pos,3));
    var particles=new THREE.Points(pGeo,new THREE.PointsMaterial({color:0x91a6c7,size:.025,transparent:true,opacity:.55}));
    scene.add(particles);

    var mouse={x:0,y:0};
    host.addEventListener("pointermove",function(e){var rct=host.getBoundingClientRect();mouse.x=(e.clientX-rct.left)/rct.width-.5;mouse.y=(e.clientY-rct.top)/rct.height-.5;});
    host.addEventListener("pointerleave",function(){mouse.x=0;mouse.y=0;});
    var clock=new THREE.Clock();
    function animate(){
      var t=clock.getElapsedTime();
      group.rotation.z=Math.sin(t*.22)*.05;
      group.rotation.y+=(mouse.x*.18-group.rotation.y)*.03;
      group.rotation.x+=(-mouse.y*.12-group.rotation.x)*.03;
      particles.rotation.z=t*.006;
      renderer.render(scene,camera);
      requestAnimationFrame(animate);
    }
    animate();
    var ro=new ResizeObserver(function(){
      var w=host.clientWidth,h=host.clientHeight;
      camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);
    });
    ro.observe(host);
  }

  renderBoard();
  renderCarousel();
  setupFilters();
  setupCarousel();
  setupCommand();
  document.querySelector("[data-back]").addEventListener("click",closeProject);
  document.querySelectorAll("[data-next-project]").forEach(function(b){b.addEventListener("click",function(){moveProject(1);});});
  document.querySelector("[data-prev-project]").addEventListener("click",function(){moveProject(-1);});
  document.querySelector("[data-open-first]").addEventListener("click",function(){openProject(projects[0].id);});
  document.querySelectorAll("[data-home]").forEach(function(a){a.addEventListener("click",function(e){if(!document.getElementById("project-view").hidden){e.preventDefault();closeProject();}});});
  window.addEventListener("load",initThree);

  if(location.hash.indexOf("#case/")===0){
    var slug=location.hash.replace("#case/","");
    setTimeout(function(){openProject(slug);},0);
  }
})();