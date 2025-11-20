/**
 * TACITUS ENGINE v0.5
 * Particle Background, Mobile Nav, and Interactive Simulation
 */

// --- 1. MOBILE NAVIGATION ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// --- 2. INTERACTIVE SIMULATION (Conflict Nodes) ---
const nodeData = {
    1: {
        id: "EMAIL_THREAD_049",
        text: "\"I cannot believe Marketing is delaying the launch again. This is incompetence.\"",
        interest: "FEAR: Missed quarterly targets will impact bonus structure.",
        strategy: "Reframing: Focus on shared timeline risks rather than blame."
    },
    2: {
        id: "SLACK_DM_112",
        text: "\"We need to strictly follow the new compliance protocols, no exceptions.\"",
        interest: "SAFETY: Legal liability protection is prioritized over speed.",
        strategy: "Validation: Acknowledge risk, propose 'fast-track' approval workflow."
    },
    3: {
        id: "MEMO_RE_MERGER",
        text: "\"The new org chart doesn't make sense for my team's workflow.\"",
        interest: "STATUS: Loss of autonomy and direct report access.",
        strategy: "Inquiry: Ask 'What specific workflow breaks?' to ground the status anxiety."
    }
};

function showNodeDetails(id) {
    const data = nodeData[id];
    if (!data) return;

    const idEl = document.getElementById('sp-id');
    const textEl = document.getElementById('sp-text');
    const interestEl = document.getElementById('sp-interest');
    const strategyEl = document.getElementById('sp-strategy');
    const panel = document.getElementById('sim-panel');

    if (!idEl || !textEl || !interestEl || !strategyEl || !panel) return;

    idEl.innerText = data.id;
    textEl.innerText = data.text;
    interestEl.innerText = data.interest;
    strategyEl.innerText = data.strategy;

    // Flash effect
    panel.style.borderColor = '#ffffff';
    setTimeout(() => {
        panel.style.borderColor = 'var(--neon-cyan)';
    }, 180);
}

// Expose function to global scope for inline onclick handlers
window.showNodeDetails = showNodeDetails;

// --- 3. CANVAS BACKGROUND (Particle System) ---
const canvas = document.getElementById('neural-canvas');

if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const PARTICLE_COUNT = 80; // reduced for perf

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 1.8 + 0.4;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.reset();
            }
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 243, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        // Lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 - dist / 1100})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Nodes
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        requestAnimationFrame(render);
    }

    render();

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });
}
