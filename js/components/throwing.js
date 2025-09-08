// Throwing Programs Component - Volume + Intent Management
export default {
    render() {
        return `
            <section style="min-height: 100vh; padding: 4rem 2rem; background: white; display: flex; flex-direction: column; justify-content: center;">
                <div style="max-width: 1200px; margin: 0 auto; width: 100%;">
                    <!-- Section Header -->
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <p style="font-size: 1.1rem; color: #86868b; font-weight: 400; margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase;">Training Foundation</p>
                        <h2 style="font-size: 3.5rem; font-weight: 700; color: #1d1d1f; margin-bottom: 1.5rem; letter-spacing: -1px;">Throwing Programs</h2>
                        <h3 style="font-size: 1.8rem; color: #500000; font-weight: 600; margin-bottom: 2rem;">Volume + Intent Management</h3>
                        <p style="font-size: 1.4rem; color: #86868b; font-weight: 300; max-width: 700px; margin: 0 auto; line-height: 1.5;">
                            Long ramp up → Highest output + Healthiest arms
                        </p>
                    </div>

                    <!-- High-Low Model Section -->
                    <div style="background: #f5f5f7; padding: 4rem 3rem; border-radius: 25px; margin: 4rem 0;">
                        <h3 style="font-size: 2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 3rem; text-align: center;">The High-Low Model</h3>
                        <p style="font-size: 1.2rem; color: #86868b; text-align: center; margin-bottom: 3rem;">Smart Load Management - Monitor the load on your arm while maximizing development</p>
                        
                        <!-- Development Ramp Visualization -->
                        <div class="ramp-visual" style="background: white; padding: 3rem; border-radius: 20px; margin: 3rem 0; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
                            <h4 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 2rem; text-align: center;">Development Ramp</h4>
                            <div class="ramp-chart" style="display: flex; align-items: end; justify-content: space-between; height: 250px; margin: 2rem 0; padding: 0 2rem;">
                                <div class="ramp-bar" data-week="1-2" style="background: linear-gradient(180deg, #500000 0%, #800000 100%); width: 60px; height: 60px; border-radius: 8px 8px 0 0; position: relative; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">
                                    Week 1-2
                                    <div class="ramp-tooltip" style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #1d1d1f; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8rem; opacity: 0; transition: opacity 0.3s ease; margin-bottom: 0.5rem; white-space: nowrap;">Foundation Phase</div>
                                </div>
                                <div class="ramp-bar" data-week="3-4" style="background: linear-gradient(180deg, #500000 0%, #800000 100%); width: 60px; height: 90px; border-radius: 8px 8px 0 0; position: relative; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">
                                    Week 3-4
                                    <div class="ramp-tooltip" style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #1d1d1f; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8rem; opacity: 0; transition: opacity 0.3s ease; margin-bottom: 0.5rem; white-space: nowrap;">Building Phase</div>
                                </div>
                                <div class="ramp-bar" data-week="5-6" style="background: linear-gradient(180deg, #500000 0%, #800000 100%); width: 60px; height: 120px; border-radius: 8px 8px 0 0; position: relative; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">
                                    Week 5-6
                                    <div class="ramp-tooltip" style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #1d1d1f; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8rem; opacity: 0; transition: opacity 0.3s ease; margin-bottom: 0.5rem; white-space: nowrap;">Progressive Load</div>
                                </div>
                                <div class="ramp-bar" data-week="7-10" style="background: linear-gradient(180deg, #500000 0%, #800000 100%); width: 60px; height: 180px; border-radius: 8px 8px 0 0; position: relative; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">
                                    Week 7-10
                                    <div class="ramp-tooltip" style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #1d1d1f; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8rem; opacity: 0; transition: opacity 0.3s ease; margin-bottom: 0.5rem; white-space: nowrap;">Peak Building</div>
                                </div>
                                <div class="ramp-bar" data-week="peak" style="background: linear-gradient(180deg, #ff4444 0%, #500000 100%); width: 60px; height: 220px; border-radius: 8px 8px 0 0; position: relative; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">
                                    Peak
                                    <div class="ramp-tooltip" style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #1d1d1f; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8rem; opacity: 0; transition: opacity 0.3s ease; margin-bottom: 0.5rem; white-space: nowrap;">Maximum Output</div>
                                </div>
                                <div class="ramp-bar" data-week="maintain" style="background: linear-gradient(180deg, #500000 0%, #800000 100%); width: 60px; height: 150px; border-radius: 8px 8px 0 0; position: relative; transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.8rem;">
                                    Maintain
                                    <div class="ramp-tooltip" style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #1d1d1f; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.8rem; opacity: 0; transition: opacity 0.3s ease; margin-bottom: 0.5rem; white-space: nowrap;">In-Season</div>
                                </div>
                            </div>
                            <p style="text-align: center; color: #86868b; font-size: 1.1rem; margin-top: 2rem;">Gradual load increase = Maximum output capacity</p>
                        </div>
                    </div>

                    <!-- Training Phases -->
                    <div style="margin: 6rem 0;">
                        <h3 style="font-size: 2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 3rem; text-align: center;">Training Phases</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                            
                            <div class="phase-card" data-phase="foundation" style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); border-left: 4px solid #500000; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                                <h4 style="font-size: 1.3rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Phase 1: Foundation (Weeks 1-4)</h4>
                                <div style="margin-bottom: 1rem;">
                                    <span style="background: #f5f5f7; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #500000; font-weight: 500; margin-right: 1rem;">Volume: Low</span>
                                    <span style="background: #f5f5f7; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #500000; font-weight: 500;">Intent: 60-70%</span>
                                </div>
                                <p style="color: #86868b; margin-bottom: 1.5rem; line-height: 1.6;">Build base capacity, movement patterns, tissue adaptation</p>
                                <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.8;">
                                    → Form focus<br>
                                    → Gradual volume increase<br>
                                    → Movement quality emphasis
                                </div>
                            </div>

                            <div class="phase-card" data-phase="build" style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); border-left: 4px solid #500000; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                                <h4 style="font-size: 1.3rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Phase 2: Build (Weeks 5-8)</h4>
                                <div style="margin-bottom: 1rem;">
                                    <span style="background: #f5f5f7; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #500000; font-weight: 500; margin-right: 1rem;">Volume: Medium</span>
                                    <span style="background: #f5f5f7; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #500000; font-weight: 500;">Intent: 75-85%</span>
                                </div>
                                <p style="color: #86868b; margin-bottom: 1.5rem; line-height: 1.6;">Increase workload while maintaining quality</p>
                                <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.8;">
                                    → Volume progression<br>
                                    → Intent introduction<br>
                                    → Skill development
                                </div>
                            </div>

                            <div class="phase-card" data-phase="peak" style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); border-left: 4px solid #ff4444; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                                <h4 style="font-size: 1.3rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Phase 3: Peak (Weeks 9-12)</h4>
                                <div style="margin-bottom: 1rem;">
                                    <span style="background: #fff0f0; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #ff4444; font-weight: 500; margin-right: 1rem;">Volume: High</span>
                                    <span style="background: #fff0f0; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #ff4444; font-weight: 500;">Intent: 90-100%</span>
                                </div>
                                <p style="color: #86868b; margin-bottom: 1.5rem; line-height: 1.6;">Maximum output with game-like intent</p>
                                <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.8;">
                                    → Peak capacity<br>
                                    → Competition simulation<br>
                                    → Performance focus
                                </div>
                            </div>

                            <div class="phase-card" data-phase="compete" style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); border-left: 4px solid #500000; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                                <h4 style="font-size: 1.3rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Phase 4: Compete (Season)</h4>
                                <div style="margin-bottom: 1rem;">
                                    <span style="background: #f5f5f7; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #500000; font-weight: 500; margin-right: 1rem;">Volume: Managed</span>
                                    <span style="background: #f5f5f7; padding: 0.3rem 0.8rem; border-radius: 12px; font-size: 0.8rem; color: #500000; font-weight: 500;">Intent: Game-specific</span>
                                </div>
                                <p style="color: #86868b; margin-bottom: 1.5rem; line-height: 1.6;">Maintain capacity through competition</p>
                                <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.8;">
                                    → In-season maintenance<br>
                                    → Recovery emphasis<br>
                                    → Performance delivery
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Athletic Catch Play Section -->
                    <div style="background: #f5f5f7; padding: 4rem 3rem; border-radius: 25px; margin: 6rem 0;">
                        <h3 style="font-size: 2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 2rem; text-align: center;">Athletic Catch Play</h3>
                        <h4 style="font-size: 1.5rem; color: #500000; font-weight: 600; text-align: center; margin-bottom: 1rem;">Throwing Like a Kid Again</h4>
                        <p style="font-size: 1.2rem; color: #86868b; text-align: center; margin-bottom: 3rem;">Different implements, on the run, motor skill acquisition</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0;">
                            <div class="catch-category" style="background: white; padding: 2rem; border-radius: 15px; text-align: center; transition: all 0.3s ease; cursor: pointer;">
                                <h5 style="font-size: 1.2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1.5rem;">Implements</h5>
                                <div style="text-align: left; margin: 1rem 0; color: #86868b; line-height: 1.8;">
                                    → Standard baseballs<br>
                                    → Weighted balls<br>
                                    → Light flight balls<br>
                                    → Medicine balls<br>
                                    → Football spirals
                                </div>
                            </div>
                            
                            <div class="catch-category" style="background: white; padding: 2rem; border-radius: 15px; text-align: center; transition: all 0.3s ease; cursor: pointer;">
                                <h5 style="font-size: 1.2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1.5rem;">Movement Patterns</h5>
                                <div style="text-align: left; margin: 1rem 0; color: #86868b; line-height: 1.8;">
                                    → Walking throws<br>
                                    → Jogging throws<br>
                                    → Shuffle throws<br>
                                    → Crow hop throws<br>
                                    → Run-through throws
                                </div>
                            </div>
                            
                            <div class="catch-category" style="background: white; padding: 2rem; border-radius: 15px; text-align: center; transition: all 0.3s ease; cursor: pointer;">
                                <h5 style="font-size: 1.2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1.5rem;">Distances</h5>
                                <div style="text-align: left; margin: 1rem 0; color: #86868b; line-height: 1.8;">
                                    → 30-45 feet<br>
                                    → 60-90 feet<br>
                                    → 120+ feet<br>
                                    → Pull-down phase<br>
                                    → Compression back
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Variability & Challenge Principles -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; margin: 6rem 0;">
                        
                        <!-- Variability Principle -->
                        <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
                            <h3 style="font-size: 1.8rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Learning Through Variability</h3>
                            <p style="font-size: 1.2rem; color: #500000; font-weight: 600; margin-bottom: 2rem; font-style: italic;">"Learning thrives on variability, not scripted repetition"</p>
                            
                            <div style="background: #f5f5f7; padding: 2rem; border-radius: 15px; margin: 2rem 0;">
                                <h4 style="font-size: 1.1rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1.5rem;">Why Variability Matters</h4>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
                                    <div style="text-align: center;">
                                        <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">Motor Learning</div>
                                        <div style="font-size: 0.8rem; color: #86868b; line-height: 1.4;">
                                            Adaptation<br>
                                            Problem solving<br>
                                            Transfer to game
                                        </div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">Skill Acquisition</div>
                                        <div style="font-size: 0.8rem; color: #86868b; line-height: 1.4;">
                                            Multiple solutions<br>
                                            Robust patterns<br>
                                            Creative movement
                                        </div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">Injury Prevention</div>
                                        <div style="font-size: 0.8rem; color: #86868b; line-height: 1.4;">
                                            Load distribution<br>
                                            Tissue adaptation<br>
                                            Movement options
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Challenge Principle -->
                        <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
                            <h3 style="font-size: 1.8rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">The Challenge Principle</h3>
                            <p style="font-size: 1.2rem; color: #86868b; margin-bottom: 2rem;">Making Practice Harder Than the Game</p>
                            
                            <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin: 2rem 0;">
                                <div style="background: #f5f5f7; padding: 1.5rem; border-radius: 12px;">
                                    <h4 style="color: #500000; font-weight: 600; margin-bottom: 0.5rem;">Failure Rate Check</h4>
                                    <p style="color: #86868b; font-size: 0.9rem; margin-bottom: 1rem;">"What's the failure rate?"</p>
                                    <div style="color: #1d1d1f; font-size: 0.8rem; line-height: 1.6;">
                                        → No failure = No learning<br>
                                        → Too much failure = Frustration<br>
                                        → Sweet spot = 20-30% failure rate<br>
                                        → Constant adjustment needed
                                    </div>
                                </div>
                                
                                <div style="background: #f5f5f7; padding: 1.5rem; border-radius: 12px;">
                                    <h4 style="color: #500000; font-weight: 600; margin-bottom: 0.5rem;">Competition & Consequence</h4>
                                    <p style="color: #86868b; font-size: 0.9rem; margin-bottom: 1rem;">"Pressure changes behavior"</p>
                                    <div style="color: #1d1d1f; font-size: 0.8rem; line-height: 1.6;">
                                        → Competitive throwing games<br>
                                        → Accuracy challenges<br>
                                        → Partner competitions<br>
                                        → Chipotle consequences
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init(container) {
        this.setupRampAnimations(container);
        this.setupPhaseCardAnimations(container);
        this.setupHoverEffects(container);
        this.setupInteractiveElements(container);
    },

    setupRampAnimations(container) {
        const rampBars = container.querySelectorAll('.ramp-bar');
        
        // Animate bars on load with staggered timing
        rampBars.forEach((bar, index) => {
            bar.style.transform = 'scaleY(0)';
            bar.style.transformOrigin = 'bottom';
            
            setTimeout(() => {
                bar.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                bar.style.transform = 'scaleY(1)';
            }, index * 150);
        });

        // Add hover tooltips
        rampBars.forEach(bar => {
            const tooltip = bar.querySelector('.ramp-tooltip');
            
            bar.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
                bar.style.transform = 'scaleY(1.1)';
                bar.style.filter = 'brightness(1.1)';
            });
            
            bar.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                bar.style.transform = 'scaleY(1)';
                bar.style.filter = 'brightness(1)';
            });
        });
    },

    setupPhaseCardAnimations(container) {
        const phaseCards = container.querySelectorAll('.phase-card');
        
        phaseCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300 + (index * 100));
        });
    },

    setupHoverEffects(container) {
        // Phase cards
        const phaseCards = container.querySelectorAll('.phase-card');
        phaseCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
            });
        });

        // Catch categories
        const catchCategories = container.querySelectorAll('.catch-category');
        catchCategories.forEach(category => {
            category.addEventListener('mouseenter', () => {
                category.style.transform = 'translateY(-5px)';
                category.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            });
            
            category.addEventListener('mouseleave', () => {
                category.style.transform = 'translateY(0)';
                category.style.boxShadow = 'none';
            });
        });
    },

    setupInteractiveElements(container) {
        // Phase card click interactions
        const phaseCards = container.querySelectorAll('.phase-card');
        phaseCards.forEach(card => {
            card.addEventListener('click', () => {
                // Remove active class from all cards
                phaseCards.forEach(c => c.classList.remove('active-phase'));
                
                // Add active class to clicked card
                card.classList.add('active-phase');
                
                // Add visual feedback
                card.style.borderLeft = '4px solid #ff4444';
                
                setTimeout(() => {
                    card.style.borderLeft = card.dataset.phase === 'peak' ? '4px solid #ff4444' : '4px solid #500000';
                }, 2000);
            });
        });

        // Ramp bar progressive highlighting
        const rampBars = container.querySelectorAll('.ramp-bar');
        rampBars.forEach((bar, index) => {
            bar.addEventListener('click', () => {
                // Highlight all bars up to this one
                rampBars.forEach((b, i) => {
                    if (i <= index) {
                        b.style.filter = 'brightness(1.2)';
                        b.style.boxShadow = '0 4px 15px rgba(80, 0, 0, 0.3)';
                    } else {
                        b.style.filter = 'brightness(0.7)';
                        b.style.boxShadow = 'none';
                    }
                });
                
                // Reset after 3 seconds
                setTimeout(() => {
                    rampBars.forEach(b => {
                        b.style.filter = 'brightness(1)';
                        b.style.boxShadow = 'none';
                    });
                }, 3000);
            });
        });
    }
};