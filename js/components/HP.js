// High Performance Component - Why We Measure & How We Develop
export default {
    render() {
        return `
            <section style="min-height: 100vh; padding: 4rem 2rem; background: #f5f5f7; display: flex; flex-direction: column; justify-content: center;">
                <div style="max-width: 1200px; margin: 0 auto; width: 100%;">
                    <!-- Section Header -->
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <p style="font-size: 1.1rem; color: #86868b; font-weight: 400; margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase;">Athletic Foundation</p>
                        <h2 style="font-size: 3.5rem; font-weight: 700; color: #1d1d1f; margin-bottom: 1.5rem; letter-spacing: -1px;">High Performance</h2>
                        <p style="font-size: 1.4rem; color: #86868b; font-weight: 300; max-width: 700px; margin: 0 auto; line-height: 1.5;">
                            Building elite pitchers from the ground up through force production, strength development, and movement optimization.
                        </p>
                    </div>

                    <!-- Core Metrics Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 3rem; margin: 4rem 0;">
                        
                        <!-- Force Production Card -->
                        <div class="hp-card" data-metric="force" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
                            <!-- Visual Header -->
                            <div style="position: relative; height: 200px; background: linear-gradient(135deg, #500000 0%, #8b0000 100%); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <!-- Power Gauge -->
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                    <path d="M20 60 A 30 30 0 0 1 80 60" stroke="white" stroke-width="4" fill="none"/>
                                    <path d="M25 55 A 25 25 0 0 1 75 55" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/>
                                    <!-- Gauge Markers -->
                                    <path d="M20 60 L25 55" stroke="white" stroke-width="2"/>
                                    <path d="M35 35 L37 40" stroke="white" stroke-width="2"/>
                                    <path d="M50 30 L50 35" stroke="white" stroke-width="2"/>
                                    <path d="M65 35 L63 40" stroke="white" stroke-width="2"/>
                                    <path d="M80 60 L75 55" stroke="white" stroke-width="2"/>
                                    <!-- Needle -->
                                    <path d="M50 60 L63 42" stroke="#ff4444" stroke-width="3"/>
                                    <circle cx="50" cy="60" r="4" fill="white"/>
                                    <!-- Labels -->
                                    <text x="20" y="75" fill="white" font-size="8">LOW</text>
                                    <text x="70" y="75" fill="white" font-size="8">PEAK</text>
                                </svg>
                            </div>
                            
                            <div style="padding: 2.5rem;">
                                <h3 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Force Production</h3>
                                <div style="background: #f5f5f7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
                                    <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">Why We Measure:</div>
                                    <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">
                                        Force into the ground creates velocity. We track how much force you can produce and how quickly you can produce it.
                                    </div>
                                    <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">How We Develop:</div>
                                    <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.5;">
                                        Olympic lifts, plyometrics, and jump training to build explosive power from the ground up.
                                    </div>
                                </div>
                                <div style="color: #86868b; font-size: 0.9rem; line-height: 1.6;">
                                    • Maximum ground reaction forces<br>
                                    • Rate of force development<br>
                                    • Directional force vectors<br>
                                    • Power transfer efficiency
                                </div>
                            </div>
                        </div>

                        <!-- Strength & Power Card -->
                        <div class="hp-card" data-metric="strength" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
                            <!-- Visual Header -->
                            <div style="position: relative; height: 200px; background: linear-gradient(135deg, #500000 0%, #8b0000 100%); display: flex; align-items: center; justify-content: center;">
                                <!-- Strength Progression -->
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                    <!-- Progress Bars -->
                                    <rect x="20" y="20" width="8" height="60" fill="rgba(255,255,255,0.3)" rx="4"/>
                                    <rect x="35" y="20" width="8" height="60" fill="rgba(255,255,255,0.5)" rx="4"/>
                                    <rect x="50" y="20" width="8" height="60" fill="rgba(255,255,255,0.7)" rx="4"/>
                                    <rect x="65" y="20" width="8" height="60" fill="white" rx="4"/>
                                    
                                    <!-- Progress Fill -->
                                    <rect x="20" y="60" width="8" height="20" fill="#ff4444" rx="4"/>
                                    <rect x="35" y="50" width="8" height="30" fill="#ff4444" rx="4"/>
                                    <rect x="50" y="35" width="8" height="45" fill="#ff4444" rx="4"/>
                                    <rect x="65" y="25" width="8" height="55" fill="#ff4444" rx="4"/>
                                    
                                    <!-- Trend Arrow -->
                                    <path d="M25 15 L75 15 M70 10 L75 15 L70 20" stroke="white" stroke-width="2"/>
                                </svg>
                            </div>
                            
                            <div style="padding: 2.5rem;">
                                <h3 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Strength & Power</h3>
                                <div style="background: #f5f5f7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
                                    <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">Why We Measure:</div>
                                    <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">
                                        Stronger athletes produce more force. We compare your strength levels to elite athlete benchmarks.
                                    </div>
                                    <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">How We Develop:</div>
                                    <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.5;">
                                        Progressive overload through squats, deadlifts, and rotational power exercises.
                                    </div>
                                </div>
                                <div style="color: #86868b; font-size: 0.9rem; line-height: 1.6;">
                                    • Lower body explosive power<br>
                                    • Rotational strength development<br>
                                    • Functional mass optimization<br>
                                    • Olympic lifting progressions
                                </div>
                            </div>
                        </div>

                        <!-- Movement Quality Card -->
                        <div class="hp-card" data-metric="movement" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
                            <!-- Visual Header -->
                            <div style="position: relative; height: 200px; background: linear-gradient(135deg, #500000 0%, #8b0000 100%); display: flex; align-items: center; justify-content: center;">
                                <!-- Proper Squat Form -->
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="18" r="6" fill="white"/>
                                    <!-- Body -->
                                    <path d="M50 24 L50 42" stroke="white" stroke-width="4"/>
                                    <!-- Arms extended forward -->
                                    <path d="M50 30 L35 32 M50 30 L65 32" stroke="white" stroke-width="3"/>
                                    <!-- Thighs parallel to ground -->
                                    <path d="M50 42 L35 45 M50 42 L65 45" stroke="white" stroke-width="4"/>
                                    <!-- Shins vertical -->
                                    <path d="M35 45 L35 60 M65 45 L65 60" stroke="white" stroke-width="4"/>
                                    <!-- Feet -->
                                    <path d="M30 60 L40 60 M60 60 L70 60" stroke="white" stroke-width="4"/>
                                    
                                    <!-- Form indicators -->
                                    <path d="M25 42 L75 42" stroke="#ff4444" stroke-width="2" stroke-dasharray="3,2"/>
                                    <text x="20" y="40" fill="#ff4444" font-size="6">PARALLEL</text>
                                    
                                    <!-- Spine alignment -->
                                    <path d="M50 24 L50 42" stroke="#ff4444" stroke-width="1" opacity="0.8"/>
                                    <circle cx="50" cy="33" r="1" fill="#ff4444"/>
                                </svg>
                            </div>
                            
                            <div style="padding: 2.5rem;">
                                <h3 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Movement Quality</h3>
                                <div style="background: #f5f5f7; padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">
                                    <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">Why We Measure:</div>
                                    <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">
                                        Poor movement patterns leak energy and increase injury risk. We screen for limitations before they become problems.
                                    </div>
                                    <div style="font-weight: 600; color: #500000; margin-bottom: 0.5rem;">How We Develop:</div>
                                    <div style="color: #1d1d1f; font-size: 0.9rem; line-height: 1.5;">
                                        Mobility work, corrective exercises, and movement pattern training until quality is automatic.
                                    </div>
                                </div>
                                <div style="color: #86868b; font-size: 0.9rem; line-height: 1.6;">
                                    • Squat and hinge pattern quality<br>
                                    • Mobility & stability balance<br>
                                    • Injury prevention protocols<br>
                                    • Movement competency scoring
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Advanced Metrics Section -->
                    <div style="background: white; padding: 3rem; border-radius: 25px; margin: 4rem 0; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
                        <h3 style="font-size: 1.8rem; font-weight: 600; color: #1d1d1f; margin-bottom: 3rem; text-align: center;">Performance Testing</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                            
                            <div class="metric-card" style="text-align: center; padding: 2rem; background: #f5f5f7; border-radius: 15px; transition: all 0.3s ease; cursor: pointer;">
                                <div style="font-size: 1.2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">RSI Testing</div>
                                <div style="font-size: 1rem; color: #500000; margin-bottom: 1rem; font-weight: 500;">Reactive Strength Index</div>
                                <div style="font-size: 0.9rem; color: #86868b; line-height: 1.5;">
                                    Jump testing to measure how quickly you can produce force. Higher RSI = more explosive power for pitching.
                                </div>
                            </div>
                            
                            <div class="metric-card" style="text-align: center; padding: 2rem; background: #f5f5f7; border-radius: 15px; transition: all 0.3s ease; cursor: pointer;">
                                <div style="font-size: 1.2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Force Plates</div>
                                <div style="font-size: 1rem; color: #500000; margin-bottom: 1rem; font-weight: 500;">Ground Force Analysis</div>
                                <div style="font-size: 0.9rem; color: #86868b; line-height: 1.5;">
                                    Measures exact force production and identifies imbalances between legs that could limit performance.
                                </div>
                            </div>
                            
                            <div class="metric-card" style="text-align: center; padding: 2rem; background: #f5f5f7; border-radius: 15px; transition: all 0.3s ease; cursor: pointer;">
                                <div style="font-size: 1.2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Movement Screen</div>
                                <div style="font-size: 1rem; color: #500000; margin-bottom: 1rem; font-weight: 500;">FMS Assessment</div>
                                <div style="font-size: 0.9rem; color: #86868b; line-height: 1.5;">
                                    Functional movement screen to identify mobility restrictions and stability weaknesses.
                                </div>
                            </div>
                            
                            <div class="metric-card" style="text-align: center; padding: 2rem; background: #f5f5f7; border-radius: 15px; transition: all 0.3s ease; cursor: pointer;">
                                <div style="font-size: 1.2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 1rem;">Power Testing</div>
                                <div style="font-size: 1rem; color: #500000; margin-bottom: 1rem; font-weight: 500;">Concentric & Eccentric</div>
                                <div style="font-size: 0.9rem; color: #86868b; line-height: 1.5;">
                                    Measures both explosive power output and shock absorption capacity during jumping movements.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Development Philosophy -->
                    <div style="background: #f5f5f7; padding: 4rem 3rem; border-radius: 25px; margin: 4rem 0;">
                        <h3 style="font-size: 2rem; font-weight: 600; color: #1d1d1f; margin-bottom: 3rem; text-align: center;">Our Development Approach</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
                            
                            <div style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
                                <h4 style="font-size: 1.3rem; font-weight: 600; color: #500000; margin-bottom: 1rem;">Test → Train → Retest</h4>
                                <p style="color: #86868b; font-size: 0.9rem; line-height: 1.6;">
                                    We establish baselines, design specific training interventions, then track progress with follow-up testing to ensure our methods are working.
                                </p>
                            </div>
                            
                            <div style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
                                <h4 style="font-size: 1.3rem; font-weight: 600; color: #500000; margin-bottom: 1rem;">Individual Programming</h4>
                                <p style="color: #86868b; font-size: 0.9rem; line-height: 1.6;">
                                    Every athlete gets a customized program based on their specific test results, addressing their unique strengths and weaknesses.
                                </p>
                            </div>
                            
                            <div style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
                                <h4 style="font-size: 1.3rem; font-weight: 600; color: #500000; margin-bottom: 1rem;">Progressive Overload</h4>
                                <p style="color: #86868b; font-size: 0.9rem; line-height: 1.6;">
                                    Systematic increases in training stress over time, allowing the body to adapt and improve while minimizing injury risk.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Philosophy Statement -->
                    <div style="text-align: center; margin-top: 4rem;">
                        <p style="font-size: 1.2rem; color: #86868b; font-style: italic; max-width: 600px; margin: 0 auto; line-height: 1.6;">
                            "Everything starts from the ground up. Elite velocity and command are built on a foundation of explosive power, optimal movement patterns, and unwavering durability."
                        </p>
                        <a href="#throwing" class="cta-button" style="display: inline-block; background: #500000; color: white; padding: 1.2rem 3rem; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 1.1rem; transition: all 0.3s ease; box-shadow: 0 6px 20px rgba(80, 0, 0, 0.3); margin-top: 2rem;">
                            See Training Methods
                        </a>
                    </div>
                </div>
            </section>
        `;
    },

    init(container) {
        this.setupCardAnimations(container);
        this.setupHoverEffects(container);
        this.setupVisualAnimations(container);
    },

    setupCardAnimations(container) {
        const cards = container.querySelectorAll('.hp-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(60px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    },

    setupHoverEffects(container) {
        const cards = container.querySelectorAll('.hp-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
            });
        });

        // Metric cards
        const metricCards = container.querySelectorAll('.metric-card');
        metricCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = 'none';
            });
        });

        // CTA button hover
        const ctaButton = container.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', () => {
                ctaButton.style.background = '#600000';
                ctaButton.style.transform = 'translateY(-3px)';
                ctaButton.style.boxShadow = '0 10px 30px rgba(80, 0, 0, 0.4)';
            });
            
            ctaButton.addEventListener('mouseleave', () => {
                ctaButton.style.background = '#500000';
                ctaButton.style.transform = 'translateY(0)';
                ctaButton.style.boxShadow = '0 6px 20px rgba(80, 0, 0, 0.3)';
            });
        }
    },

    setupVisualAnimations(container) {
        // Animate SVG elements periodically
        const svgs = container.querySelectorAll('svg');
        svgs.forEach((svg, index) => {
            setInterval(() => {
                svg.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    svg.style.transform = 'scale(1)';
                }, 300);
            }, 4000 + (index * 800));
        });
    }
};