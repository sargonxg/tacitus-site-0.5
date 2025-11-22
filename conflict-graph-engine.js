<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tacitus | Conflict Graph Engine</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
</head>

<body>
<canvas id="neural-canvas"></canvas>

<!-- NAV -->
<nav class="glass-panel">
    <div class="logo">TACITUS<span class="logo-mark">◳</span><span class="highlight">_</span></div>
    <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
    <div class="nav-links" id="nav-links">
        <a href="index.html">Home</a>
        <a href="analysis.html">Deep Analysis</a>
        <a href="conflict-graph.html" class="active-highlight">Conflict Graph</a>
        <a href="mailto:deploy@tacitus.me" class="btn-glow">Initialize</a>
    </div>
</nav>

<main>

    <!-- HERO -->
    <section class="hero analysis-hero">
        <div class="content-wrapper">
            <div class="badge">TACTICAL VISUALIZATION // ENGINE CORE</div>
            <h1 class="glitch-text" data-text="CONFLICT GRAPH ENGINE">CONFLICT GRAPH ENGINE</h1>
            <p class="subtitle">
                Tacitus does not see “issues”. It sees <span class="accent">graphs</span>:
                actors, incentives, constraints, alliances, vetoes, and hidden corridors of common ground,
                all rendered as a single, explorable topology.
            </p>
        </div>
    </section>

    <!-- 01. GRAPH INTELLIGENCE -->
    <section class="content-section">
        <div class="section-label">01. GRAPH INTELLIGENCE</div>
        <div class="glass-card wide analysis-card">
            <div class="analysis-header">
                <h3>FROM MESSAGES TO A STRUCTURED CONFLICT GRAPH</h3>
                <span class="status-tag ok">ONTOLOGY-DRIVEN</span>
            </div>

            <p>
                The Tacitus Ontology Agent converts emails, minutes, legal notes, and press lines into a
                <strong>property graph</strong>. Each actor, interest, constraint, and relationship becomes a node or edge,
                annotated with role, mandate, power, and risk. The graph below is a stylized but realistic snapshot of a
                national infrastructure crisis, built on that ontology.
            </p>

            <div class="grid-3" style="margin-top: 1.5rem;">
                <div class="stat-block">
                    <span class="stat-label">Actors</span>
                    <span class="stat-val cyan">NODES</span>
                    <p class="stat-desc">
                        Ministries, unions, contractors, mayors, oversight bodies, opposition, funding offices.
                    </p>
                </div>
                <div class="stat-block">
                    <span class="stat-label">Relationships</span>
                    <span class="stat-val purple">EDGES</span>
                    <p class="stat-desc">
                        Dependency, veto, alliance, rivalry, oversight, funding, pressure, trust, narrative ties.
                    </p>
                </div>
                <div class="stat-block">
                    <span class="stat-label">Constraints</span>
                    <span class="stat-val amber">LIMITERS</span>
                    <p class="stat-desc">
                        Budgets, calendars, coalition math, audit risk, corruption exposure, labor law, elections.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- 02. COMPLEX SCENARIO DESCRIPTION -->
    <section class="content-section">
        <div class="section-label">02. SCENARIO // NATIONAL INFRASTRUCTURE CRISIS</div>
        <div class="glass-card wide analysis-card">
            <div class="analysis-header">
                <h3>NATIONAL RAIL UPGRADE AS A SYSTEMIC CONFLICT</h3>
                <span class="status-tag warning">HIGH COMPLEXITY</span>
            </div>

            <p>
                Tacitus ingests the full communication ecosystem around a contentious national rail upgrade.
                What follows is a hyper-dense but legible reconstruction of that conflict:
                60+ actors and sub-actors, hundreds of edges, and a single graph that shows where resolution is structurally possible.
            </p>

            <h4 class="hud-title" style="margin-top: 1.5rem;">>> CORE ACTOR CLUSTERS</h4>
            <div class="grid-2" style="margin-top: 1rem;">
                <div>
                    <ul class="terminal-list">
                        <li>> Ministry of Transport</li>
                        <li>> National Rail Union</li>
                        <li>> Finance Ministry</li>
                        <li>> Contractor Consortium</li>
                    </ul>
                </div>
                <div>
                    <ul class="terminal-list">
                        <li>> Local Mayors Cluster</li>
                        <li>> Anti-Corruption Unit</li>
                        <li>> External Funding Office</li>
                        <li>> Opposition Bloc</li>
                    </ul>
                </div>
            </div>

            <h4 class="hud-title" style="margin-top: 1.8rem;">>> PSYCHOLOGY, ECONOMICS, AND NARRATIVE</h4>
            <p class="stat-desc">
                The graph embeds not just <em>who talks to whom</em>, but why they move as they do:
                loss aversion in Treasury, identity and dignity in the Union, legitimacy anxiety in the Mayors,
                blame-avoidance in Ministers, and scandal-sensitivity in the Anti-Corruption Unit.
            </p>
        </div>
    </section>

    <!-- 03. LEGEND -->
    <section class="content-section">
        <div class="section-label">03. VISUAL LEGEND</div>
        <div class="glass-card wide analysis-card">
            <div class="analysis-header">
                <h3>HOW TO READ THE GRAPH</h3>
                <span class="status-tag ok">DETERMINISTIC ONTOLOGY</span>
            </div>

            <div class="grid-2" style="margin-top: 1.5rem;">
                <div>
                    <h4 class="hud-title">>> NODE COLORS</h4>
                    <ul class="terminal-list">
                        <li><span class="legend-swatch legend-ministry"></span> Ministries</li>
                        <li><span class="legend-swatch legend-union"></span> Unions</li>
                        <li><span class="legend-swatch legend-contractor"></span> Contractors</li>
                        <li><span class="legend-swatch legend-mayor"></span> Mayors</li>
                        <li><span class="legend-swatch legend-oversight"></span> Oversight</li>
                        <li><span class="legend-swatch legend-external"></span> External Funders</li>
                        <li><span class="legend-swatch legend-political"></span> Opposition</li>
                    </ul>
                </div>

                <div>
                    <h4 class="hud-title">>> EDGE COLORS</h4>
                    <ul class="terminal-list">
                        <li><span class="legend-line legend-dependency"></span> Dependency</li>
                        <li><span class="legend-line legend-veto"></span> Veto</li>
                        <li><span class="legend-line legend-funding"></span> Funding</li>
                        <li><span class="legend-line legend-alliance"></span> Alliance</li>
                        <li><span class="legend-line legend-rivalry"></span> Rivalry</li>
                        <li><span class="legend-line legend-pressure"></span> Pressure</li>
                        <li><span class="legend-line legend-oversight"></span> Oversight</li>
                        <li><span class="legend-line legend-trust"></span> Trust</li>
                        <li><span class="legend-line legend-narrative"></span> Narrative</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- 04. INTERACTIVE GRAPH -->
    <section class="content-section">
        <div class="section-label">04. LIVE CONFLICT TOPOLOGY</div>
        <div class="glass-card wide analysis-card">
            <div class="analysis-header">
                <h3>EXPLORE THE CONFLICT GRAPH</h3>
                <span class="status-tag ok">INTERACTIVE</span>
            </div>

            <p>
                Drag nodes, zoom, click actors or edges.  
                The narrative panel shows each actor’s ontology profile.
            </p>

            <button id="conflict-graph-reset" class="btn-accent" style="margin: 1rem 0;">Reset View</button>

            <div style="display: flex; gap: 1.5rem;">
                <div id="conflict-graph-container" style="flex: 2; height: 520px;">
                    <svg id="conflict-graph" width="100%" height="520"></svg>
                </div>

                <aside id="graph-narrative" class="glass-card analysis-card" style="flex: 1;">
                    <h4 class="hud-title">>> NARRATIVE PANEL</h4>
                    <p class="stat-desc" id="graph-narrative-intro">
                        Hover or click on nodes & edges for details.
                    </p>
                    <div id="graph-narrative-body" class="stat-desc" style="white-space: pre-line;"></div>
                </aside>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="content-section" style="text-align: center;">
        <h2 class="section-heading">>> Run Your Conflict Through Tacitus</h2>
        <p style="color: var(--text-muted); max-width: 600px; margin: 1rem auto;">
            We build a real conflict graph for your organization — and extract your resolution path.
        </p>
        <a href="mailto:deploy@tacitus.me" class="btn-accent">Start Pilot</a>
    </section>

</main>

<script src="script.js"></script>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="conflict-graph-engine.js"></script>

</body>
</html>

