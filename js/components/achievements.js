// Achievements Component - Professional Performance Data
export default {
    render() {
        return `
            <section style="min-height: 100vh; padding: 4rem 2rem; background: #f5f5f7; display: flex; flex-direction: column; justify-content: center;">
                <div style="max-width: 1200px; margin: 0 auto; width: 100%;">
                    <!-- Section Header -->
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <p style="font-size: 1.1rem; color: #86868b; font-weight: 400; margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase;">Performance Analytics</p>
                        <h2 style="font-size: 3.5rem; font-weight: 700; color: #1d1d1f; margin-bottom: 1.5rem; letter-spacing: -1px;">Proof of Performance</h2>
                        <p style="font-size: 1.4rem; color: #86868b; font-weight: 300; max-width: 700px; margin: 0 auto; line-height: 1.5;">
                            Elite statistics that demonstrate our commitment to developing dominant pitchers at the highest level of collegiate baseball.
                        </p>
                    </div>

                    <!-- Season Cards Container -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 3rem; margin: 4rem 0;">
                        
                        <!-- 2024 Season Card -->
                        <div class="season-card" data-year="2024" style="background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                            <!-- Card Header with Image -->
                            <div style="position: relative; height: 700px; background: url('strikeouts.jpeg') center/cover no-repeat; overflow: hidden;">
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(80, 0, 0, 0.7), rgba(0, 0, 0, 0.3));"></div>
                                <div style="position: absolute; top: 2rem; left: 2rem; color: white;">
                                    <div style="font-size: 0.9rem; font-weight: 500; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Season Highlight</div>
                                    <div style="font-size: 2.5rem; font-weight: 700; margin-top: 0.5rem; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">2024</div>
                                </div>
                                <div style="position: absolute; bottom: 2rem; left: 2rem; color: white;">
                                    <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">National Championship</div>
                                    <div style="font-size: 0.9rem; opacity: 0.9;">Runner-up</div>
                                </div>
                                <!-- Record Badge -->
                                <div style="position: absolute; top: 2rem; right: 2rem; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 0.8rem 1.2rem; border-radius: 12px; text-align: center;">
                                    <div style="font-size: 1.5rem; font-weight: 700; color: #500000; line-height: 1;">715</div>
                                    <div style="font-size: 0.7rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 0.2rem;">School Record</div>
                                </div>
                            </div>
                            
                            <!-- Card Content -->
                            <div style="padding: 2.5rem;">
                                <h3 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 2rem;">Dominant Statistics</h3>
                                
                                <!-- Stats Grid -->
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#1</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">SEC ERA</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">3.86 (#4 Country)</div>
                                    </div>
                                    
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#1</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">SEC Strike%</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">64.9% (#8 Country)</div>
                                    </div>
                                    
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#2</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">SEC K/BB</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">3.26 (#4 Country)</div>
                                    </div>
                                    
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#2</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">SEC WHIP</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">1.26 (#7 Country)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 2025 Season Card -->
                        <div class="season-card" data-year="2025" style="background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                            <!-- Card Header with Image -->
                            <div style="position: relative; height: 700px; background: url('IMG_5324.JPG') center/cover no-repeat; overflow: hidden;">
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(80, 0, 0, 0.7), rgba(0, 0, 0, 0.3));"></div>
                                <div style="position: absolute; top: 2rem; left: 2rem; color: white;">
                                    <div style="font-size: 0.9rem; font-weight: 500; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Current Season</div>
                                    <div style="font-size: 2.5rem; font-weight: 700; margin-top: 0.5rem; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);">2025</div>
                                </div>
                                <div style="position: absolute; bottom: 2rem; left: 2rem; color: white;">
                                    <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">Continued Excellence</div>
                                    <div style="font-size: 0.9rem; opacity: 0.9;">Elite Performance</div>
                                </div>
                                <!-- National Ranking Badge -->
                                <div style="position: absolute; top: 2rem; right: 2rem; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: 0.8rem 1.2rem; border-radius: 12px; text-align: center;">
                                    <div style="font-size: 1.5rem; font-weight: 700; color: #500000; line-height: 1;">#1</div>
                                    <div style="font-size: 0.7rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 0.2rem;">National Strike%</div>
                                </div>
                            </div>
                            
                            <!-- Card Content -->
                            <div style="padding: 2.5rem;">
                                <h3 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 2rem;">Championship Level</h3>
                                
                                <!-- Stats Grid -->
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#1</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">Strike%</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">66.6% (#1 Country)</div>
                                    </div>
                                    
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#1</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">SEC BB/9</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">2.89 (#2 Country)</div>
                                    </div>
                                    
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#2</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">SEC K/BB</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">3.31 (#3 Country)</div>
                                    </div>
                                    
                                    <div class="stat-item">
                                        <div style="font-size: 2rem; font-weight: 700; color: #500000; line-height: 1;">#4</div>
                                        <div style="font-size: 0.8rem; color: #86868b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0.3rem 0;">SEC WHIP</div>
                                        <div style="font-size: 0.9rem; color: #1d1d1f; font-weight: 400;">1.27 (#11 Country)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom CTA -->
                    <div style="text-align: center; margin-top: 4rem;">
                        <p style="font-size: 1.1rem; color: #86868b; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                            These results speak to our systematic approach to player development and our commitment to excellence at every level.
                        </p>
                        <a href="#development" class="cta-button" style="display: inline-block; background: #500000; color: white; padding: 1rem 2.5rem; border-radius: 25px; text-decoration: none; font-weight: 500; font-size: 1rem; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(80, 0, 0, 0.3);">
                            Discover Our Methods
                        </a>
                    </div>
                </div>
            </section>
        `;
    },

    init(container) {
        // Tesla/Apple-style smooth animations
        this.setupCardAnimations(container);
        this.animateStatsOnScroll(container);
        this.setupHoverEffects(container);
    },

    setupCardAnimations(container) {
        const cards = container.querySelectorAll('.season-card');
        
        // Staggered reveal animation
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

    animateStatsOnScroll(container) {
        const statItems = container.querySelectorAll('.stat-item');
        
        // Counter animation for stats - starts from 100
        statItems.forEach((item, index) => {
            const numberElement = item.querySelector('div:first-child');
            const originalText = numberElement.textContent;
            
            setTimeout(() => {
                // Only animate if it contains a number
                if (originalText.includes('#') || !isNaN(parseFloat(originalText))) {
                    this.animateNumberFrom100(numberElement, originalText);
                }
            }, 800 + (index * 100));
        });
    },

    animateNumberFrom100(element, finalText) {
        // Extract number from text (handles #1, #2, etc.)
        const match = finalText.match(/[\d.]+/);
        if (!match) return;
        
        const finalNumber = parseFloat(match[0]);
        const startNumber = 100;
        const duration = 2000; // Slightly longer for more dramatic effect
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Smooth easing function for natural movement
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            // Calculate current number (from 100 to target)
            const currentNumber = startNumber + (finalNumber - startNumber) * easeOut;
            
            // Format the number based on original text format
            let displayNumber;
            if (finalText.includes('.')) {
                displayNumber = currentNumber.toFixed(2);
            } else {
                displayNumber = Math.round(currentNumber).toString();
            }
            
            // Replace number in original text while preserving format
            const currentText = finalText.replace(/[\d.]+/, displayNumber);
            element.textContent = currentText;
            
            // Add visual emphasis during animation
            element.style.transform = `scale(${1 + (Math.sin(progress * Math.PI) * 0.1)})`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final value is exact and reset scale
                element.textContent = finalText;
                element.style.transform = 'scale(1)';
            }
        };
        
        requestAnimationFrame(animate);
    },

    setupHoverEffects(container) {
        const cards = container.querySelectorAll('.season-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-12px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
            });

            // Click effect
            card.addEventListener('click', () => {
                card.style.transform = 'translateY(-8px) scale(0.98)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-12px) scale(1.02)';
                }, 150);
            });
        });

        // CTA button hover effect
        const ctaButton = container.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('mouseenter', () => {
                ctaButton.style.background = '#600000';
                ctaButton.style.transform = 'translateY(-2px)';
                ctaButton.style.boxShadow = '0 8px 25px rgba(80, 0, 0, 0.4)';
            });
            
            ctaButton.addEventListener('mouseleave', () => {
                ctaButton.style.background = '#500000';
                ctaButton.style.transform = 'translateY(0)';
                ctaButton.style.boxShadow = '0 4px 15px rgba(80, 0, 0, 0.3)';
            });
        }
    }
};