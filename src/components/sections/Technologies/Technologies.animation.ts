//src/app/components/sections/Technologies/Technologies.animation.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CanvasParticle {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    vx: number;
    vy: number;
    depth: number;
}

export function initTechnologiesAnimations(container: HTMLElement) {
    gsap.registerPlugin(ScrollTrigger);

    const cleanups: Array<() => void> = [];
    let isViewportActive = false;
    let entranceComplete = false;

    const ctx = gsap.context(() => {
        // SELECTORS
        const canvasParticles = container.querySelector<HTMLCanvasElement>("canvas[data-particles]");
        const svgConnections = container.querySelector<SVGSVGElement>("svg[data-svg-connections]");
        const core = container.querySelector<HTMLElement>("[data-core]");
        const corePulse = container.querySelector<HTMLElement>("[data-core-pulse]");
        const coreRing = container.querySelector<HTMLElement>("[data-core-ring='1']");
        const coreRingTwo = container.querySelector<HTMLElement>("[data-core-ring='2']");
        const glow = container.querySelector<HTMLElement>("[data-glow]");
        const nodes = gsap.utils.toArray<HTMLElement>("[data-tech-node]");
        const hudConsole = container.querySelector<HTMLElement>("[data-hud-console]");

        const orbitLine1 = container.querySelector<SVGCircleElement>("[data-orbit='1']");
        const orbitLine2 = container.querySelector<SVGCircleElement>("[data-orbit='2']");
        const orbitDot1 = container.querySelector<SVGCircleElement>("[data-orbit-dot='1']");
        const orbitDot2 = container.querySelector<SVGCircleElement>("[data-orbit-dot='2']");
        const orbitDot3 = container.querySelector<SVGCircleElement>("[data-orbit-dot='3']");
        const orbitDot4 = container.querySelector<SVGCircleElement>("[data-orbit-dot='4']");

        if (!canvasParticles || !svgConnections || !core || !nodes.length) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // DYNAMIC SVG CONNECTION PATHS CALCULATION
        const updatePaths = () => {
            if (window.innerWidth < 1024) return;

            const svgRect = svgConnections.getBoundingClientRect();
            const coreRect = core.getBoundingClientRect();

            const coreX = coreRect.left + coreRect.width / 2 - svgRect.left;
            const coreY = coreRect.top + coreRect.height / 2 - svgRect.top;

            // Center orbit lines
            if (orbitLine1) {
                orbitLine1.setAttribute("cx", coreX.toString());
                orbitLine1.setAttribute("cy", coreY.toString());
                orbitLine1.setAttribute("r", "130");
            }
            if (orbitLine2) {
                orbitLine2.setAttribute("cx", coreX.toString());
                orbitLine2.setAttribute("cy", coreY.toString());
                orbitLine2.setAttribute("r", "180");
            }

            nodes.forEach((node) => {
                const id = node.dataset.id;
                const side = node.dataset.side;
                if (!id) return;

                const nodeRect = node.getBoundingClientRect();
                const nodeY = nodeRect.top + nodeRect.height / 2 - svgRect.top;
                let nodeX = 0;

                if (side === "left") {
                    nodeX = nodeRect.right - svgRect.left;
                } else {
                    nodeX = nodeRect.left - svgRect.left;
                }

                // Cubic Bezier curve paths
                const startX = coreX;
                const startY = coreY;
                const endX = nodeX;
                const endY = nodeY;

                // Symmetric control points for horizontal S-curve
                const cp1X = startX + (endX - startX) * 0.45;
                const cp1Y = startY;
                const cp2X = startX + (endX - startX) * 0.45;
                const cp2Y = endY;

                const pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} ${endY}`;

                // Set coordinates for physical track
                const trackPath = svgConnections.querySelector<SVGPathElement>(`[data-track-path='${id}']`);
                if (trackPath) trackPath.setAttribute("d", pathD);

                // Set coordinates for active connection path
                const activePath = svgConnections.querySelector<SVGPathElement>(`[data-path='${id}']`);
                if (activePath) {
                    activePath.setAttribute("d", pathD);
                    if (node.getAttribute("data-hovered") !== "true") {
                        activePath.style.stroke = "var(--tech-node-name-color)"; // Themed idle color
                    }
                    if (!prefersReducedMotion && !entranceComplete) {
                        const len = activePath.getTotalLength();
                        activePath.style.strokeDasharray = len.toString();
                        activePath.style.strokeDashoffset = len.toString();
                    } else {
                        activePath.style.strokeDasharray = "none";
                        activePath.style.strokeDashoffset = "none";
                        activePath.style.stroke = "var(--tech-node-name-color)";
                    }
                }

                // Set coordinates for rapid energy flow pulse path
                const pulsePath = svgConnections.querySelector<SVGPathElement>(`[data-pulse-path='${id}']`);
                if (pulsePath) {
                    pulsePath.setAttribute("d", pathD);
                    if (node.getAttribute("data-hovered") !== "true") {
                        pulsePath.style.stroke = "var(--tech-node-name-color)"; // Themed idle pulse
                    }
                    const len = pulsePath.getTotalLength();
                    pulsePath.style.strokeDasharray = `30 ${len - 30}`;
                }
            });
        };

        // ──────────────────────────────────────────────────────────────────────────
        // ACCESSIBILITY: REDUCED MOTION SAFE PATH
        // ──────────────────────────────────────────────────────────────────────────
        if (prefersReducedMotion) {
            gsap.set(nodes, { opacity: 1, y: 0, scale: 1 });
            gsap.set(core, { scale: 1, opacity: 1 });
            gsap.set(svgConnections, { opacity: 1 });
            if (hudConsole) gsap.set(hudConsole, { opacity: 1, y: 0 });
            if (glow) gsap.set(glow, { opacity: 0.6 });

            updatePaths();

            const canvasResize = new ResizeObserver(() => {
                updatePaths();
            });
            const canvasContainer = container.querySelector<HTMLElement>("[data-canvas-grid]");
            if (canvasContainer) {
                canvasResize.observe(canvasContainer);
                cleanups.push(() => canvasResize.disconnect());
            }

            // Non-animated Hover Handler
            nodes.forEach((node) => {
                const id = node.dataset.id;
                const color = node.dataset.color || "#D4AF37";
                const activePath = svgConnections.querySelector<SVGPathElement>(`[data-path='${id}']`);

                const handleMouseEnter = () => {
                    node.setAttribute("data-hovered", "true");
                    if (activePath) {
                        activePath.style.stroke = color;
                        activePath.style.strokeWidth = "2.5px";
                        activePath.style.opacity = "0.65";
                    }
                };

                const handleMouseLeave = () => {
                    node.removeAttribute("data-hovered");
                    if (activePath) {
                        activePath.style.stroke = "#cbd5e1";
                        activePath.style.strokeWidth = "1.5px";
                        activePath.style.opacity = "0.15";
                    }
                };

                node.addEventListener("mouseenter", handleMouseEnter);
                node.addEventListener("mouseleave", handleMouseLeave);
                cleanups.push(() => {
                    node.removeEventListener("mouseenter", handleMouseEnter);
                    node.removeEventListener("mouseleave", handleMouseLeave);
                });
            });

            return;
        }

        // Initialize paths at starting state
        updatePaths();

        // 2. ENTRANCE TIMELINE (SCROLL TRIGGER)
        const entranceTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 72%",
                toggleActions: "play none none none",
                onEnter: () => {
                    isViewportActive = true;
                }
            },
            defaults: {
                ease: "power3.out",
            },
            onComplete: () => {
                entranceComplete = true;
                // Transition main lines to solid track curves for responsive safety
                nodes.forEach((node) => {
                    const id = node.dataset.id;
                    if (!id) return;
                    const activePath = svgConnections.querySelector<SVGPathElement>(`[data-path='${id}']`);
                    if (activePath) {
                        activePath.style.strokeDasharray = "none";
                        activePath.style.strokeDashoffset = "none";
                        activePath.style.stroke = "var(--tech-node-name-color)";
                    }
                });

                // Trigger idle floating animations
                nodes.forEach((node, index) => {
                    gsap.to(node, {
                        y: index % 2 === 0 ? -6 : 6,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        duration: 3.2 + index * 0.22,
                        delay: index * 0.05,
                    });
                });
            }
        });

        // INITIAL ANIMATED STATE SETUP
        gsap.set(nodes, { opacity: 0, y: 35, scale: 0.9 });
        gsap.set(core, { scale: 0, opacity: 0 });
        gsap.set(svgConnections, { opacity: 0 });
        if (hudConsole) gsap.set(hudConsole, { opacity: 0, y: 20 });
        if (glow) gsap.set(glow, { opacity: 0 });

        if (glow) {
            entranceTimeline.fromTo(glow, { opacity: 0 }, { opacity: 1, duration: 1.4 });
        }
        
        entranceTimeline
            // SVG connections and grid coordinates reveal
            .to(svgConnections, { opacity: 1, duration: 0.8 }, "-=1.0")
            // Core shield scales in
            .fromTo(core, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.75)" }, "-=0.6");
        
        if (hudConsole) {
            entranceTimeline.to(hudConsole, { opacity: 1, y: 0, duration: 0.8 }, "-=0.8");
        }

        // Animate dynamic drawing of connection lines
        nodes.forEach((node, index) => {
            const id = node.dataset.id;
            const activePath = svgConnections.querySelector<SVGPathElement>(`[data-path='${id}']`);
            if (activePath) {
                entranceTimeline.to(activePath, {
                    strokeDashoffset: 0,
                    opacity: 0.15,
                    duration: 1.1,
                    ease: "power2.out",
                }, `-=${1.1 - index * 0.04}`);
            }
        });

        // Column nodes slide/fade in staggered by side
        const leftNodes = nodes.filter(n => n.dataset.side === "left");
        const rightNodes = nodes.filter(n => n.dataset.side === "right");

        entranceTimeline
            .to(leftNodes, {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.08,
                duration: 0.7,
            }, "-=0.8")
            .to(rightNodes, {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.08,
                duration: 0.7,
            }, "-=0.7");

        // 3. CORE ROTATIONS (CONTINUOUS LOOPS)
        if (coreRing) {
            gsap.to(coreRing, {
                rotation: 360,
                repeat: -1,
                ease: "none",
                duration: 22,
            });
        }

        if (coreRingTwo) {
            gsap.to(coreRingTwo, {
                rotation: -360,
                repeat: -1,
                ease: "none",
                duration: 32,
            });
        }

        // 4. PARALLAX MATH & SMOOTH MOUSE TRACING
        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;

        const handlePointerMove = (event: PointerEvent) => {
            if (window.innerWidth < 1024) return;
            const rect = container.getBoundingClientRect();
            targetMouseX = (event.clientX - rect.left) / rect.width - 0.5;
            targetMouseY = (event.clientY - rect.top) / rect.height - 0.5;
        };

        container.addEventListener("pointermove", handlePointerMove);
        cleanups.push(() => container.removeEventListener("pointermove", handlePointerMove));

        // 5. HTML5 CANVAS BACKGROUND PARTICLE FIELD
        const canvasCtx = canvasParticles.getContext("2d");
        let particles: CanvasParticle[] = [];

        const initParticles = () => {
            const width = canvasParticles.width = canvasParticles.clientWidth;
            const height = canvasParticles.height = canvasParticles.clientHeight;
            particles = [];
            const count = Math.min(45, Math.floor(width / 30));

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: 0.6 + Math.random() * 1.6,
                    alpha: 0.15 + Math.random() * 0.45,
                    vx: (Math.random() - 0.5) * 0.25,
                    vy: -0.15 - Math.random() * 0.35, // floating up
                    depth: 0.3 + Math.random() * 1.5,
                });
            }
        };

        initParticles();

        // 6. DYNAMIC TICKER LOOP FOR FLOW, ORBITS & PARTICLES
        let pulseOffset = 0;

        const tickerLoop = () => {
            if (!isViewportActive) return;

            const time = Date.now();

            // Perform smooth mouse position lerp
            mouseX += (targetMouseX - mouseX) * 0.08;
            mouseY += (targetMouseY - mouseY) * 0.08;

            // Update SVG lines position live (captures floating and parallax coordinates)
            updatePaths();

            // Center core coordinates relative to SVG connections box
            const svgRect = svgConnections.getBoundingClientRect();
            const coreRect = core.getBoundingClientRect();
            const coreX = coreRect.left + coreRect.width / 2 - svgRect.left;
            const coreY = coreRect.top + coreRect.height / 2 - svgRect.top;

            // Dynamic orbit twinkling nodes motion (Gold & Silver stars)
            const orbits = [
                { el: orbitDot1, r: 130, speed: 0.0006, offset: 0, color: "#D4AF37" },      // Gold
                { el: orbitDot2, r: 130, speed: -0.00045, offset: Math.PI, color: "#cbd5e1" }, // Silver
                { el: orbitDot3, r: 180, speed: 0.0003, offset: Math.PI / 2, color: "#D4AF37" },  // Gold
                { el: orbitDot4, r: 180, speed: -0.0002, offset: -Math.PI / 2, color: "#cbd5e1" },// Silver
            ];

            orbits.forEach((orb) => {
                if (!orb.el) return;
                const theta = time * orb.speed + orb.offset;
                const cx = coreX + orb.r * Math.cos(theta);
                const cy = coreY + orb.r * Math.sin(theta);
                orb.el.setAttribute("cx", cx.toString());
                orb.el.setAttribute("cy", cy.toString());
                orb.el.setAttribute("fill", orb.color);

                // Random twinkling opacity wave
                const twinkleAlpha = 0.3 + 0.5 * Math.sin(time * 0.0025 + orb.offset);
                orb.el.setAttribute("opacity", twinkleAlpha.toString());
                // Mild size breathing
                const breatheRadius = 2.2 + 0.8 * Math.sin(time * 0.004 + orb.offset);
                orb.el.setAttribute("r", breatheRadius.toString());
            });

            // Parallax on GMATTS logo core
            gsap.set(core, {
                x: mouseX * 20,
                y: mouseY * 20,
            });

            // Parallax on ambient backdrop glow
            if (glow) {
                gsap.set(glow, {
                    x: mouseX * 42,
                    y: mouseY * 42,
                });
            }

            // Parallax on standard nodes
            nodes.forEach((node, index) => {
                if (node.getAttribute("data-hovered") === "true") return;

                const sideFactor = node.dataset.side === "left" ? 1 : -1;
                const px = mouseX * (8 + (index % 3) * 4) * sideFactor;
                const py = mouseY * (6 + (index % 2) * 4);

                gsap.set(node, {
                    x: px,
                    y: py,
                });
            });

            // Energy connection flows (manipulates stroke offset)
            pulseOffset -= 1.6;
            nodes.forEach((node) => {
                const id = node.dataset.id;
                const pulsePath = svgConnections.querySelector<SVGPathElement>(`[data-pulse-path='${id}']`);
                if (pulsePath) {
                    pulsePath.style.strokeDashoffset = pulseOffset.toString();
                }
            });

            // Render Canvas Background Particles
            if (canvasCtx) {
                const width = canvasParticles.width;
                const height = canvasParticles.height;
                canvasCtx.clearRect(0, 0, width, height);

                particles.forEach((p) => {
                    // Particle position update
                    p.x += p.vx;
                    p.y += p.vy;

                    // Wrappers
                    if (p.y < -5) {
                        p.y = height + 5;
                        p.x = Math.random() * width;
                    }
                    if (p.x < -5) p.x = width + 5;
                    if (p.x > width + 5) p.x = -5;

                    // Mouse parallax layer shift
                    const px = p.x + mouseX * p.depth * 35;
                    const py = p.y + mouseY * p.depth * 35;

                    // Draw
                    canvasCtx.beginPath();
                    canvasCtx.arc(px, py, p.radius, 0, Math.PI * 2);
                    
                    // Depth Shaded Particles (Gold closer foreground, Silver further background)
                    canvasCtx.fillStyle = p.depth > 1.0
                        ? `rgba(212, 175, 55, ${p.alpha * 0.3})`  // Muted Gold
                        : `rgba(203, 213, 225, ${p.alpha * 0.45})`; // Muted Silver
                    
                    canvasCtx.fill();
                });
            }
        };

        gsap.ticker.add(tickerLoop);
        cleanups.push(() => gsap.ticker.remove(tickerLoop));

        // 7. MAGNETIC HOVER INTERACTIVE ACTIONS
        nodes.forEach((node) => {
            const id = node.dataset.id;
            const color = node.dataset.color || "#D4AF37"; // Defaults to Gold
            const activePath = svgConnections.querySelector<SVGPathElement>(`[data-path='${id}']`);
            const pulsePath = svgConnections.querySelector<SVGPathElement>(`[data-pulse-path='${id}']`);

            const handleMouseEnter = () => {
                node.setAttribute("data-hovered", "true");

                // Elevated card pop
                gsap.to(node, {
                    scale: 1.06,
                    borderColor: "rgba(212, 175, 55, 0.25)",
                    duration: 0.3,
                    overwrite: "auto",
                });

                // Custom glowing style (Gold or Silver glow)
                const nodeGlow = node.querySelector<HTMLElement>(`.nodeGlow`);
                if (nodeGlow) {
                    gsap.to(nodeGlow, {
                        opacity: 1,
                        background: `radial-gradient(circle, ${color}33, transparent 70%)`,
                        duration: 0.3,
                    });
                }

                // Propagate color & brighten base path
                if (activePath) {
                    gsap.to(activePath, {
                        stroke: color,
                        opacity: 0.65,
                        strokeWidth: 2.5,
                        duration: 0.35,
                        overwrite: "auto",
                    });
                }

                // Brighten and speed up connection pulse
                if (pulsePath) {
                    gsap.to(pulsePath, {
                        stroke: color,
                        opacity: 0.8,
                        strokeWidth: 2.5,
                        duration: 0.35,
                        overwrite: "auto",
                    });
                }
            };

            const handleMouseMove = (event: MouseEvent) => {
                const rect = node.getBoundingClientRect();
                const nodeCenterX = rect.left + rect.width / 2;
                const nodeCenterY = rect.top + rect.height / 2;

                const dx = event.clientX - nodeCenterX;
                const dy = event.clientY - nodeCenterY;

                // Tilt angle
                const tiltAngle = Math.min(10, Math.max(-10, dx * 0.08));

                // 3D Magnetic pull offset
                gsap.to(node, {
                    x: dx * 0.16,
                    y: dy * 0.16,
                    rotation: tiltAngle,
                    duration: 0.25,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            };

            const handleMouseLeave = () => {
                node.removeAttribute("data-hovered");

                // Restores standard positioning
                gsap.to(node, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    borderColor: "rgba(255, 255, 255, 0.02)",
                    duration: 0.45,
                    ease: "power3.out",
                    overwrite: "auto",
                });

                const nodeGlow = node.querySelector<HTMLElement>(`.nodeGlow`);
                if (nodeGlow) {
                    gsap.to(nodeGlow, {
                        opacity: 0,
                        duration: 0.4,
                    });
                }

                // Revert paths color & opacity
                if (activePath) {
                    gsap.to(activePath, {
                        stroke: "var(--tech-node-name-color)", // Revert to themed color
                        opacity: 0.15,
                        strokeWidth: 1.5,
                        duration: 0.45,
                        overwrite: "auto",
                    });
                }

                if (pulsePath) {
                    gsap.to(pulsePath, {
                        stroke: "var(--tech-node-name-color)", // Revert to themed color
                        opacity: 0.2,
                        strokeWidth: 2,
                        duration: 0.45,
                        overwrite: "auto",
                    });
                }
            };

            node.addEventListener("mouseenter", handleMouseEnter);
            node.addEventListener("mousemove", handleMouseMove);
            node.addEventListener("mouseleave", handleMouseLeave);

            cleanups.push(() => {
                node.removeEventListener("mouseenter", handleMouseEnter);
                node.removeEventListener("mousemove", handleMouseMove);
                node.removeEventListener("mouseleave", handleMouseLeave);
            });
        });

        // 8. LAYOUT RESIZE OBSERVER
        const canvasResize = new ResizeObserver(() => {
            initParticles();
            updatePaths();
        });
        const canvasContainer = container.querySelector<HTMLElement>("[data-canvas-grid]");
        if (canvasContainer) {
            canvasResize.observe(canvasContainer);
            cleanups.push(() => canvasResize.disconnect());
        }

        // 9. SCROLL INTERSECTION OBSERVER (CPU SAVINGS)
        const observerOptions = {
            root: null,
            threshold: 0.05,
        };

        const viewObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                isViewportActive = entry.isIntersecting;
            });
        }, observerOptions);

        viewObserver.observe(container);
        cleanups.push(() => viewObserver.disconnect());

        // 10. BROWSER TAB VISIBILITY OBSERVER
        const handleVisibilityChange = () => {
            if (document.hidden) {
                isViewportActive = false;
            } else {
                // Re-evaluate based on container viewport intersection
                const rect = container.getBoundingClientRect();
                isViewportActive = rect.top < window.innerHeight && rect.bottom > 0;
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        cleanups.push(() => document.removeEventListener("visibilitychange", handleVisibilityChange));

    }, container);

    // Return full disposal callback
    return () => {
        cleanups.forEach(c => c());
        ctx.revert();
    };
}
