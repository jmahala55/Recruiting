// Texas A&M Pitching - Main Application Controller
class PitchingApp {
    constructor() {
        this.loadedSections = new Set();
        this.components = {};
        this.init();
    }

    async init() {
        console.log('Texas A&M Pitching App - Initializing...');
        
        // Load component modules
        await this.loadComponents();
        
        // Setup core functionality
        this.setupIntersectionObserver();
        this.setupScrollIndicator();
        this.setupSmoothScrolling();
        
        console.log('App initialized successfully');
    }

    async loadComponents() {
        // Dynamic import of component modules
        const componentList = [
            'achievements',
            'philosophy', 
            'development',
            'hp',
            'throwing',
            'models',
            'pitch-design',
            'closing'
        ];

        for (const component of componentList) {
            try {
                // Try to load as JS module first, fallback to HTML
                this.components[component] = await this.loadComponent(component);
            } catch (error) {
                console.warn(`Could not load component ${component}:`, error);
                // Set fallback component
                this.components[component] = this.createFallbackComponent(component);
            }
        }
    }

    async loadComponent(name) {
        // Try loading JS component first
        try {
            const module = await import(`./components/${name}.js`);
            return module.default || module;
        } catch (jsError) {
            // Fallback to HTML component
            try {
                const response = await fetch(`components/${name}.html`);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const html = await response.text();
                return { render: () => html };
            } catch (htmlError) {
                throw new Error(`Both JS and HTML loading failed for ${name}`);
            }
        }
    }

    createFallbackComponent(name) {
        const fallbacks = {
            philosophy: {
                render: () => `
                    <section style="min-height: 100vh; padding: 4rem 2rem; background: white; display: flex; flex-direction: column; justify-content: center;">
                        <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
                            <p style="font-size: 1.1rem; color: #86868b; font-weight: 400; margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase;">Core Philosophy</p>
                            <h2 style="font-size: 3.5rem; font-weight: 700; color: #1d1d1f; margin-bottom: 2rem; letter-spacing: -1px;">The Foundation</h2>
                            <h3 style="font-size: 2.2rem; margin-bottom: 2rem; color: #1d1d1f; font-weight: 300;">
                                "Great pitching revolves around two things: <span style="color: #500000; font-weight: 600;">Stuff + Strikes</span>"
                            </h3>
                            <p style="font-size: 1.4rem; margin-bottom: 3rem; color: #86868b; font-weight: 300;">Throw nasty stuff in the zone</p>
                            
                            <div style="background: linear-gradient(90deg, #ff4444 0%, #500000 50%, #0066ff 100%); height: 8px; border-radius: 4px; margin: 3rem auto; width: 70%; position: relative;">
                                <div style="position: absolute; top: -35px; left: 0; color: #ff4444; font-size: 0.9rem; font-weight: 500;">Stuff Monsters</div>
                                <div style="position: absolute; top: -35px; right: 0; color: #0066ff; font-size: 0.9rem; font-weight: 500;">Strike Artists</div>
                                <div style="position: absolute; top: -35px; left: 50%; transform: translateX(-50%); color: #500000; font-weight: 600;">Best of Both</div>
                            </div>
                            
                            <div style="margin-top: 4rem;">
                                <p style="font-size: 1.2rem; color: #86868b; margin-bottom: 1rem;">Elite Examples</p>
                                <p style="font-size: 1.4rem; color: #1d1d1f; font-weight: 400;">Sale • Skenes • Skubal</p>
                            </div>
                        </div>
                    </section>
                `
            },
            development: {
                render: () => `
                    <section style="min-height: 100vh; padding: 4rem 2rem; background: #f5f5f7; display: flex; flex-direction: column; justify-content: center;">
                        <div style="max-width: 1200px; margin: 0 auto;">
                            <div style="text-align: center; margin-bottom: 4rem;">
                                <p style="font-size: 1.1rem; color: #86868b; font-weight: 400; margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase;">Development System</p>
                                <h2 style="font-size: 3.5rem; font-weight: 700; color: #1d1d1f; margin-bottom: 1.5rem; letter-spacing: -1px;">Four Pillars of Excellence</h2>
                            </div>
                            
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                                <div class="pillar">
                                    <h3>High Performance</h3>
                                    <p>Force production, strength, durability, movement patterns</p>
                                    <a href="#hp" style="color: #500000; text-decoration: none; font-weight: 500;">→ Explore HP Program</a>
                                </div>
                                <div class="pillar">
                                    <h3>Model Creation</h3>
                                    <p>Biomechanical analysis and predictive modeling for optimal development pathways</p>
                                    <a href="#models" style="color: #500000; text-decoration: none; font-weight: 500;">→ See Our Models</a>
                                </div>
                                <div class="pillar">
                                    <h3>Pitch Design</h3>
                                    <p>Model-informed pitch development and arsenal optimization</p>
                                    <a href="#pitch-design" style="color: #500000; text-decoration: none; font-weight: 500;">→ Design Process</a>
                                </div>
                                <div class="pillar">
                                    <h3>Throwing Programs</h3>
                                    <p>Volume and intent management for sustainable development</p>
                                    <a href="#throwing" style="color: #500000; text-decoration: none; font-weight: 500;">→ Full Program</a>
                                </div>
                            </div>
                        </div>
                    </section>
                `
            },
            contact: {
                render: () => `
                    <section style="min-height: 100vh; padding: 4rem 2rem; background: white; display: flex; flex-direction: column; justify-content: center;">
                        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                            <p style="font-size: 1.1rem; color: #86868b; font-weight: 400; margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase;">Ready to Join</p>
                            <h2 style="font-size: 3.5rem; font-weight: 700; color: #1d1d1f; margin-bottom: 2rem; letter-spacing: -1px;">The Aggie Standard</h2>
                            <h3 style="font-size: 1.8rem; color: #500000; font-weight: 600; margin-bottom: 2rem;">"Group effort across many departments"</h3>
                            <p style="font-size: 1.4rem; margin-bottom: 3rem; color: #86868b; font-weight: 300;">Collaboration + Culture = Champions</p>
                            
                            <div style="background: #f5f5f7; padding: 3rem; border-radius: 20px; margin: 3rem 0;">
                                <h4 style="font-size: 1.5rem; margin-bottom: 2rem; color: #1d1d1f; font-weight: 600;">Ready to Own the Zone?</h4>
                                <p style="margin-bottom: 2rem; color: #86868b;">Join the elite development system producing the next generation of dominant pitchers.</p>
                                <div style="font-size: 2rem; font-weight: 700; color: #500000;">"Own the Zone"</div>
                            </div>
                        </div>
                    </section>
                `
            }
        };

        return fallbacks[name] || {
            render: () => `
                <div style="text-align: center; padding: 4rem 2rem; background: white;">
                    <h3 style="color: #86868b; font-weight: 300;">Section coming soon...</h3>
                </div>
            `
        };
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (!this.loadedSections.has(sectionId) && this.components[sectionId]) {
                        this.renderSection(sectionId);
                    }
                    entry.target.classList.add('visible');
                    this.animateStatBoxes(entry.target);
                }
            });
        }, observerOptions);

        // Observe all section containers
        document.querySelectorAll('.section-container').forEach(section => {
            this.observer.observe(section);
        });
    }

    renderSection(sectionId) {
        if (this.loadedSections.has(sectionId)) return;
        
        this.loadedSections.add(sectionId);
        const container = document.getElementById(sectionId);
        const component = this.components[sectionId];
        
        try {
            const content = component.render ? component.render() : component;
            container.innerHTML = content;
            
            // Initialize component-specific functionality
            if (component.init) {
                component.init(container);
            }
        } catch (error) {
            console.error(`Error rendering section ${sectionId}:`, error);
            container.innerHTML = `<div style="text-align: center; color: #666; padding: 2rem;">Error loading section</div>`;
        }
    }

    animateStatBoxes(container) {
        const statBoxes = container.querySelectorAll('.stat-box');
        statBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('animate');
            }, index * 100);
        });
    }

    setupScrollIndicator() {
        const indicator = document.querySelector('.scroll-indicator');
        const sections = document.querySelectorAll('[id]');
        
        sections.forEach((section, index) => {
            const dot = document.createElement('div');
            dot.className = 'scroll-dot';
            dot.addEventListener('click', () => {
                section.scrollIntoView({ behavior: 'smooth' });
            });
            indicator.appendChild(dot);
        });
        
        window.addEventListener('scroll', this.updateScrollIndicator.bind(this));
    }

    updateScrollIndicator() {
        const sections = document.querySelectorAll('[id]');
        const dots = document.querySelectorAll('.scroll-dot');
        const scrollPos = window.scrollY + window.innerHeight / 2;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
            }
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.pitchingApp = new PitchingApp();
});