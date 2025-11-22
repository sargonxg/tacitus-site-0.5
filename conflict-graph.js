// ===============================================================
//  TACITUS Conflict Graph Visualizer
//  Modern D3 Force Layout for Geopolitical / Org / Family Conflicts
// ===============================================================

document.addEventListener("DOMContentLoaded", () => {
    const svg = d3.select("#conflict-graph");
    if (svg.empty()) return;

    const width = svg.node().clientWidth;
    const height = svg.node().clientHeight;

    const nodeDetails = document.getElementById("node-details");

    // === DATASETS ================================================

    const CASES = {
        geo: {
            nodes: [
                { id: "Saudi Arabia", type: "State", interests: "Regional security; Yemen de-escalation", constraints: "U.S. alignment; internal reforms" },
                { id: "Iran", type: "State", interests: "Sanctions relief; regional legitimacy", constraints: "Economic fragility; IRGC factions" },
                { id: "China", type: "Mediator", interests: "Energy stability", constraints: "Non-alignment doctrine" }
            ],
            links: [
                { source: "Saudi Arabia", target: "Iran", relation: "tension" },
                { source: "Iran", target: "Saudi Arabia", relation: "tension" },
                { source: "China", target: "Saudi Arabia", relation: "mediation" },
                { source: "China", target: "Iran", relation: "mediation" }
            ]
        },

        board: {
            nodes: [
                { id: "CEO (Altman)", type: "Exec", interests: "Product acceleration", constraints: "Board oversight" },
                { id: "Board", type: "Governance", interests: "Safety; risk posture", constraints: "Public scrutiny; investor pressure" },
                { id: "Microsoft", type: "Partner", interests: "Stability + compute ROI", constraints: "Reputational risk" },
            ],
            links: [
                { source: "Board", target: "CEO (Altman)", relation: "tension" },
                { source: "Microsoft", target: "CEO (Altman)", relation: "cooperation" },
                { source: "Microsoft", target: "Board", relation: "cooperation" }
            ]
        },

        family: {
            nodes: [
                { id: "Eldest Sibling", type: "Sibling", interests: "Fair distribution", constraints: "Debt + caregiving history" },
                { id: "Younger Sibling", type: "Sibling", interests: "Stability + recognition", constraints: "Income volatility" },
                { id: "Parent", type: "Parent", interests: "Harmony", constraints: "Estate complexity" }
            ],
            links: [
                { source: "Eldest Sibling", target: "Younger Sibling", relation: "tension" },
                { source: "Parent", target: "Eldest Sibling", relation: "mediation" },
                { source: "Parent", target: "Younger Sibling", relation: "mediation" }
            ]
        }
    };

    // === BUILD FORCE SIM ==========================================

    let simulation, link, node;

    function render(caseKey) {
        svg.selectAll("*").remove();

        const data = CASES[caseKey];

        simulation = d3.forceSimulation(data.nodes)
            .force("link", d3.forceLink(data.links).id(d => d.id).distance(140))
            .force("charge", d3.forceManyBody().strength(-320))
            .force("center", d3.forceCenter(width / 2, height / 2));

        link = svg.append("g")
            .selectAll("line")
            .data(data.links)
            .enter()
            .append("line")
            .attr("class", d => "link " + d.relation);

        node = svg.append("g")
            .selectAll("g")
            .data(data.nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(drag(simulation));

        node.append("circle")
            .attr("r", 24)
            .attr("fill", d => nodeColor(d))
            .attr("stroke", d => strokeColor(d));

        node.append("text")
            .attr("dy", 4)
            .attr("text-anchor", "middle")
            .text(d => d.id);

        node.on("mouseover", (e, d) => {
            nodeDetails.innerHTML = `
                <strong>${d.id}</strong><br>
                Type: ${d.type}<br>
                Interests: ${d.interests}<br>
                Constraints: ${d.constraints}
            `;
        });

        node.on("mouseout", () => {
            nodeDetails.innerHTML = `Hover a node to see its Interests, Constraints, and Role.`;
        });

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node.attr("transform", d => `translate(${d.x},${d.y})`);
        });
    }

    // Color Logic
    function nodeColor(d) {
        if (d.type === "Mediator") return "rgba(255,209,102,0.35)";
        if (d.type === "Exec" || d.type === "Parent") return "rgba(0,255,200,0.28)";
        if (d.type === "Governance") return "rgba(255,100,140,0.28)";
        return "rgba(80,160,255,0.25)";
    }

    function strokeColor(d) {
        if (d.type === "Mediator") return "#ffd166";
        if (d.type === "Exec" || d.type === "Parent") return "#00ffaa";
        if (d.type === "Governance") return "#ff6b8a";
        return "#4ab3ff";
    }

    // Drag Behavior
    function drag(sim) {
        return d3.drag()
            .on("start", event => {
                if (!event.active) sim.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            })
            .on("drag", event => {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            })
            .on("end", event => {
                if (!event.active) sim.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            });
    }

    // Case switching
    document.querySelectorAll(".conflict-case-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".conflict-case-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            render(btn.dataset.case);
        });
    });

    // First load
    render("geo");
});
