const projects = [
  {
    index:'01',slug:'enterprise-order-management',title:'Enterprise Order Management',group:'Platforms',accent:'#72e6ff',role:'Product strategy & orchestration',
    before:'Manually modeled paths',after:'Dependency-driven execution',
    contribution:'I led the shift to dependency-driven orchestration and a shared order contract across 19+ teams.',
    problem:'Each new service combination meant more workflow modeling, deployment work, and regression risk.',
    decision:'Let capabilities declare dependencies so the platform assembles the execution path.',
    tradeoff:'Invest in orchestration foundations first, while preserving existing behavior during migration.',
    outcome:'20% faster logic mapping, with 18 service intents retained as migration scope.',
    flow:['Product intent','Dependency graph','Readiness gate','Fulfillment'],
    metrics:[['Measured','20%','Faster logic mapping'],['Projected','75K/day','Target order capacity'],['Actual scope','19+','Teams coordinated'],['Actual scope','18','Service intents']],
    frameworks:[
      {name:'MoSCoW decision lens',question:'What could not break during migration?',type:'matrix',cells:[['MUST','Behavior parity · deterministic execution'],['SHOULD','Shared context · visibility'],['COULD','More policy via configuration'],['NOT YET','Broader modernization']]},
      {name:'Dependency mapping',question:'Where can work safely run in parallel?',type:'bars',bars:[['Critical path',94],['Shared context',82],['Parallelism',76],['Policy config',58]]}
    ],
    releases:[['Orchestration foundation','Capability registration, dependency graph, parallel execution','Can dependency declarations replace manually modeled paths without losing deterministic behavior?'],['Product decomposition','Commercial intent to technical work','Can customer intent become executable work without static-path sprawl?'],['Governed order context','Assessment, enrichment, readiness synchronization','Can parallel capabilities share state without premature execution?'],['Scale & observability','Events, visibility, configuration-driven policy','Can the platform stay understandable as combinations and volume increase?']],
    log:[['Replace static flows','Topology should emerge from declared dependencies.','More upfront platform design; less repeated workflow modeling.'],['Separate assessment from execution','Downstream work should never consume partially enriched state.','A hard synchronization gate adds structure but reduces ambiguity.'],['Standardize order context','Capabilities need one governed representation of the order.','Stricter contracts in exchange for fewer divergent models.']],
    ownership:['Product direction','Dependency strategy','Cross-team migration','Shared data contract','Evidence integrity']
  },
  {
    index:'02',slug:'rag-analysis-agent',title:'Enterprise RAG Analysis Agent',group:'AI',accent:'#a78bfa',role:'Builder · product & engineering',
    before:'Manual investigation',after:'Grounded analysis',
    contribution:'I built the analysis agent and made citations, permission-aware retrieval, and evaluation gates central to the product.',
    problem:'Investigations took days of searching fragmented engineering knowledge across code, work items, documentation, logs, and configuration.',
    decision:'Ground every material answer in current source evidence and abstain when the evidence is insufficient.',
    tradeoff:'Accept some latency from reranking and verification in exchange for answers engineers can trust.',
    outcome:'Complex investigation cycles fell from roughly six days to about two hours.',
    flow:['Engineering sources','Hybrid retrieval','Grounding gate','Cited answer'],
    metrics:[['Measured','~6d → ~2h','Analysis cycle'],['Observed','11GB+','Knowledge corpus'],['Observed','558+','Projects searchable'],['Evaluation','100% / 90%+','Groundedness / recall']],
    frameworks:[
      {name:'RICE-style prioritization',question:'What had to earn a place in the pilot?',type:'bars',bars:[['Grounding',100],['Live source access',94],['Citations',91],['UI polish',48]]},
      {name:'Evaluation gate',question:'What makes an AI change releasable?',type:'matrix',cells:[['GROUND','Every claim traceable'],['RECALL','≥90% on golden cases'],['FRESH','Current authorized sources'],['ABSTAIN','No evidence → no answer']]}
    ],
    releases:[['POC','Large technical artifacts + local retrieval','Can the system reason over artifacts that defeat manual search?'],['Pilot','Five analysts, citations, grounding behavior','Do grounded answers reduce investigation time without sacrificing trust?'],['Production integration','Live connectors, token pass-through, freshness','Can the agent stay current and permission-aware under concurrent use?'],['Evaluation loop','Golden failures, source-gap review, retrieval tuning','Can every miss improve both retrieval and the knowledge ecosystem?']],
    log:[['Accuracy over conversational speed','Technical troubleshooting needs evidence, not plausibility.','Reranking and verification add latency.'],['Live context over static uploads','Deployed reality changes faster than uploaded snapshots.','Freshness and authorization become architecture concerns.'],['Evaluation as release gate','AI quality needs a regression contract.','Iteration is slower, but quality changes become measurable.']],
    ownership:['Product framing','Hands-on prototype','Retrieval strategy','Evaluation design','Production integration']
  },
  {
    index:'03',slug:'build-plus',title:'Build Plus',group:'Operations',accent:'#5ee2a0',role:'Product ownership · supply chain',
    before:'Disconnected workflows',after:'One asset lifecycle',
    contribution:'I established the trusted part-data foundation and sequenced planning, fulfillment, and asset recovery around it.',
    problem:'Part data, demand, shipments, custody, and recovery lived in disconnected workflows; more than half of targeted MRO fulfillment was spreadsheet-managed.',
    decision:'Give every process a governed part identity before scaling downstream automation.',
    tradeoff:'Sequence foundational master-data work ahead of visible workflow automation.',
    outcome:'An 18-month demand horizon and governed lifecycle replaced disconnected planning and handoffs.',
    flow:['Part identity','Demand planning','Validated fulfillment','Recovery'],
    metrics:[['Measured baseline','50%+','MRO in spreadsheets'],['Implemented','18 mo','Rolling demand horizon'],['Projected','10,040','Hours returned / year'],['Actual scope','19','Manual handoffs addressed']],
    frameworks:[
      {name:'Benefit × LOE',question:'Which integrations deserved priority?',type:'matrix',cells:[['HIGH / LOW','Do first'],['HIGH / HIGH','Plan deliberately'],['LOW / LOW','Opportunistic'],['LOW / HIGH','Avoid / defer']]},
      {name:'RACI',question:'Who owns each lifecycle handoff?',type:'bars',bars:[['Accountability',96],['Data ownership',90],['Fulfillment',84],['Recovery',78]]}
    ],
    releases:[['Master data foundation','Taxonomy, codification, governance, synchronization','Can downstream work start from one trusted part definition?'],['Predictive planning','Consumption signals + 18-month forecast','Can procurement respond to projected need rather than intuition?'],['Systemized fulfillment','Validation, visibility, routing','Can an engineering requirement become a validated shipment without spreadsheet orchestration?'],['Lifecycle closure','Serialization, fault reporting, reverse logistics','Can identity and custody survive through recovery or retirement?']],
    log:[['Establish the data anchor first','Planning and fulfillment depend on trusted identity.','Foundation work delays visible automation but prevents downstream rework.'],['Forecast from evidence','Consumption and rollout signals are stronger than spreadsheet estimates.','Requires cleaner source data and model governance.'],['Validate before shipment','Configuration errors are cheaper to stop before physical movement.','Adds an explicit gate before fulfillment.']],
    ownership:['Program sequencing','Master-data strategy','Prioritization','Fulfillment experience','Cross-team RACI']
  },
  {
    index:'04',slug:'rfds',title:'RFDS Automation',group:'Operations',accent:'#67d4ff',role:'Product ownership · engineering automation',
    before:'Manual drafting',after:'Validated design generation',
    contribution:'I turned engineering judgment into testable rules, with source validation and a controlled path for urgent designs.',
    problem:'Manual drafting created version drift, stale configurations, equipment mismatches, and field rework.',
    decision:'Make the design document an output of governed engineering data and reusable rules.',
    tradeoff:'Use stricter validation and approved lookups, even when that reduces free-form user flexibility.',
    outcome:'Generation fell from 2–4 hours to under 30 seconds and design-to-field exceptions fell below 5%.',
    flow:['Source data','Engineering rules','Validation gate','Design output'],
    metrics:[['Measured','$1.2M','Annual cost avoidance'],['Measured','2–4h → <30s','Generation time'],['Measured','35–45% → <5%','Exception rate'],['Observed','1,000+','Designs per month']],
    frameworks:[
      {name:'Risk × impact',question:'Where should the product add hard controls?',type:'matrix',cells:[['HIGH RISK','Block generation'],['MEDIUM','Warn + verify'],['LOW','Automate'],['URGENT','Controlled exception path']]},
      {name:'Exception analysis',question:'Which failure sources created the most rework?',type:'bars',bars:[['Stale source data',92],['Equipment mismatch',84],['Rule inconsistency',76],['Drafting effort',68]]}
    ],
    releases:[['Trusted source model','Planning, procurement attributes, site + sector data','Can we trust the inputs before automating decisions?'],['Rules & governance','Equipment, placement, frequency, cable logic','Can expert judgment become repeatable logic without silent risk?'],['Automated output','RFDS, diagrams, comments, version history','Does automation remove drafting effort while preserving evidence?'],['Operational alignment','Approved configuration + inventory alignment','Can engineering intent remain intact through execution?']],
    log:[['Model engineering knowledge as data','Repeatable decisions require explicit rules and attributes.','Domain knowledge must be codified and maintained.'],['Validate at source','Bad inputs should fail before document generation.','More friction at entry; less rework downstream.'],['Govern flexibility','Urgent work still needs a path without bypassing integrity.','A controlled exception path replaces free-form entry.']],
    ownership:['Product model','Rule translation','Validation strategy','Exception design','Operational alignment']
  },
  {
    index:'05',slug:'gl-coding',title:'Dynamic GL Coding',group:'Finance',accent:'#f8cc6b',role:'Product ownership · financial systems',
    before:'Policy embedded in code',after:'Configurable financial routing',
    contribution:'I backed a four-month foundational redesign and aligned project identity across operations, warehouse, and ERP.',
    problem:'Each new portfolio risked another engineering change to hard-coded accounting logic and months of enablement work.',
    decision:'Move accounting policy into governed configuration and validate financial codes before posting.',
    tradeoff:'Accept a longer foundational redesign to avoid compounding project-specific logic.',
    outcome:'40% faster month-end close with a reusable model adopted across 4+ portfolio types.',
    flow:['Project identity','Policy lookup','Validation','ERP posting'],
    metrics:[['Measured','40%','Faster month-end close'],['Observed','4+','Portfolio adoption'],['Actual scope','3','Enterprise systems aligned'],['Estimated','2–3mo → <1wk','Enablement comparison']],
    frameworks:[
      {name:'Build vs extend matrix',question:'Patch the model or redesign the capability?',type:'matrix',cells:[['EXTEND','Fast now · debt grows'],['REDESIGN','Slower now · reusable'],['RISK','Reconciliation errors'],['VALUE','Future onboarding speed']]},
      {name:'Control-point mapping',question:'Where should errors be stopped?',type:'bars',bars:[['Before posting',100],['Policy lookup',86],['Context handoff',81],['Month-end review',42]]}
    ],
    releases:[['Common identity','Project identifier + context propagation','Can every system describe the same business activity consistently?'],['Policy configuration','Lookup structures + GL components','Can Finance evolve supported policy without code releases?'],['Routing & validation','Assembly, source checks, exceptions','Can incorrect treatment be stopped before the ledger?'],['Reconciliation & evidence','Posting, reason codes, lineage','Can every result be traced to the context and policy that produced it?']],
    log:[['Decouple policy from code','Financial rules change more often than core architecture should.','Requires governed configuration and stronger validation.'],['Create common project identity','Context should survive system handoffs without reinterpretation.','Participating systems must agree on ownership and contract.'],['Invest in scalability','Another conditional branch solves today and worsens tomorrow.','Four-month redesign before faster future onboarding.']],
    ownership:['Target capability','Financial requirements','Architecture trade-off','Cross-system identity','Outcome validation']
  },
  {
    index:'06',slug:'lease-vendor-management',title:'Lease & Vendor Management',group:'Finance',accent:'#ff7c93',role:'Product ownership · lease-to-pay',
    before:'Payment workarounds',after:'Eligibility-gated payments',
    contribution:'I defined payment eligibility controls and replaced the three-address vendor limit with a scalable model.',
    problem:'Fragmented lease data and vendor restrictions created recurring payment workarounds at a $23.7M monthly rent-roll scale.',
    decision:'Check vendor, address, and financial identifiers before a payment reaches Finance.',
    tradeoff:'Add deliberate submission controls instead of optimizing for one-click speed.',
    outcome:'A governed lease-to-pay process with scalable vendor addresses and upstream payment controls.',
    flow:['Lease obligation','Vendor eligibility','Payment approval','Reconciliation'],
    metrics:[['Actual scale','$23.7M/mo','Rent roll governed'],['Implemented','3 → scalable','Vendor address model'],['Estimated','~2x','Business-case ROI'],['Actual scope','~150','Stories delivered']],
    frameworks:[
      {name:'RACI',question:'Who owns each lease-to-pay decision?',type:'bars',bars:[['Lease lifecycle',92],['Vendor data',88],['Payment approval',95],['Finance execution',84]]},
      {name:'Control / risk matrix',question:'Which failures should be impossible to submit?',type:'matrix',cells:[['BLOCK','Inactive vendor'],['BLOCK','Missing ERP ID'],['VERIFY','Rent address'],['TRACE','GL / CIP evidence']]}
    ],
    releases:[['Lease lifecycle foundation','Execution, commencement, schedules, status','Can every obligation have a clear lifecycle and accountable state?'],['Vendor scalability','Dynamic addresses + vendor integration','Can the platform represent real landlord structures without workarounds?'],['Payment controls','Eligibility, IDs, approval gating','Can invalid instructions be stopped before Finance sees them?'],['Financial integrity','GL/CIP, ERP execution, audit evidence','Can the process remain traceable at rent-roll scale?']],
    log:[['Validate eligibility at source','Finance should not be the first place bad payment data is detected.','More up-front validation; less downstream rework.'],['Remove structural address limit','The system must model real vendor structures.','Broader data model and integration work.'],['Treat lease data as control data','Recurring obligations need lifecycle and financial evidence together.','More governance than a simple document repository.']],
    ownership:['Lifecycle product design','Vendor integration','Payment controls','Financial governance','Delivery scope']
  }
];

const signals=[['01','Outcome framing','Business goal → measurable proof'],['02','Architecture fluency','APIs · data · events · dependencies'],['03','Backlog judgment','Epics · sequencing · acceptance'],['04','Delivery leadership','Teams · risks · trade-offs'],['05','Evidence loop','Measured · observed · projected']];