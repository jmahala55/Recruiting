// Philosophy Component - Core Foundation with Elite Examples
export default {
    render() {
        return `
            <section style="min-height: 100vh; padding: 4rem 2rem; background: white; display: flex; flex-direction: column; justify-content: center;">
                <div style="max-width: 1200px; margin: 0 auto; width: 100%;">
                    <!-- Section Header -->
                    <div style="text-align: center; margin-bottom: 4rem;">
                        <p style="font-size: 1.1rem; color: #86868b; font-weight: 400; margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase;">Core Philosophy</p>
                        <h2 style="font-size: 3.5rem; font-weight: 700; color: #1d1d1f; margin-bottom: 2rem; letter-spacing: -1px;">The Foundation</h2>
                        <h3 style="font-size: 2.2rem; margin-bottom: 2rem; color: #1d1d1f; font-weight: 300; max-width: 900px; margin-left: auto; margin-right: auto; line-height: 1.3;">
                            "Great pitching revolves around two things: <span style="color: #500000; font-weight: 600;">Stuff + Strikes</span>"
                        </h3>
                        <p style="font-size: 1.4rem; margin-bottom: 3rem; color: #86868b; font-weight: 300;">Throw nasty stuff in the zone</p>
                    </div>

                    <!-- Philosophy Spectrum -->
                    <div style="margin: 4rem 0;">
                        <div class="spectrum-container" style="background: linear-gradient(90deg, #ff4444 0%, #500000 50%, #0066ff 100%); height: 12px; border-radius: 6px; margin: 3rem auto; width: 80%; position: relative; box-shadow: 0 4px 20px rgba(80, 0, 0, 0.3);">
                            <div style="position: absolute; top: -40px; left: 0; color: #ff4444; font-size: 1rem; font-weight: 600;">Stuff Monsters</div>
                            <div style="position: absolute; top: -40px; right: 0; color: #0066ff; font-size: 1rem; font-weight: 600;">Strike Artists</div>
                            <div style="position: absolute; top: -40px; left: 50%; transform: translateX(-50%); color: #500000; font-weight: 700; font-size: 1.1rem;">Best of Both</div>
                            
                            <!-- Animated indicator -->
                            <div class="spectrum-indicator" style="position: absolute; top: -6px; left: 50%; transform: translateX(-50%); width: 24px; height: 24px; background: #500000; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(80, 0, 0, 0.5); transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);"></div>
                        </div>
                    </div>

                    <!-- Elite Examples Section -->
                    <div style="margin: 6rem 0;">
                        <div style="text-align: center; margin-bottom: 4rem;">
                            <p style="font-size: 1.2rem; color: #86868b; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Elite Examples</p>
                            <h3 style="font-size: 2rem; color: #1d1d1f; font-weight: 600;">The best combination of Stuff and Strikes</h3>
                        </div>

                        <!-- Video Examples Grid - Aroldis, Skubal, George Kirby -->
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin: 4rem 0;">
                            
                            <!-- Aroldis Chapman Card - LEFT -->
                            <div class="player-card" data-player="aroldis" data-position="stuff" style="background: #f5f5f7; border-radius: 20px; overflow: hidden; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                                <div style="position: relative; height: 250px; overflow: hidden;">
                                    <video 
                                        class="player-video" 
                                        style="width: 100%; height: 100%; object-fit: cover;" 
                                        muted 
                                        loop 
                                        preload="metadata"
                                    >
                                        <source src="aroldis.mp4" type="video/mp4">
                                    </video>
                                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(255, 68, 68, 0.3), rgba(0, 0, 0, 0.1)); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;" class="video-overlay">
                                        <div style="background: rgba(255, 255, 255, 0.9); padding: 1rem 2rem; border-radius: 25px; color: #1d1d1f; font-weight: 600;">Click to Play</div>
                                    </div>
                                </div>
                                <div style="padding: 2rem;">
                                    <h4 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 0.5rem;">Aroldis Chapman</h4>
                                    <p style="color: #ff4444; font-weight: 500; margin-bottom: 1rem;">Pure Stuff</p>
                                    <p style="color: #86868b; font-size: 0.9rem; line-height: 1.5;">Legendary velocity and stuff that dominates hitters when properly harnessed.</p>
                                </div>
                            </div>

                            <!-- Tarik Skubal Card - MIDDLE -->
                            <div class="player-card" data-player="skubal" data-position="center" style="background: #f5f5f7; border-radius: 20px; overflow: hidden; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                                <div style="position: relative; height: 250px; overflow: hidden;">
                                    <video 
                                        class="player-video" 
                                        style="width: 100%; height: 100%; object-fit: cover;" 
                                        muted 
                                        loop 
                                        preload="metadata"
                                    >
                                        <source src="skubal.mp4" type="video/mp4">
                                    </video>
                                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(80, 0, 0, 0.3), rgba(0, 0, 0, 0.1)); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;" class="video-overlay">
                                        <div style="background: rgba(255, 255, 255, 0.9); padding: 1rem 2rem; border-radius: 25px; color: #1d1d1f; font-weight: 600;">Click to Play</div>
                                    </div>
                                </div>
                                <div style="padding: 2rem;">
                                    <h4 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 0.5rem;">Tarik Skubal</h4>
                                    <p style="color: #500000; font-weight: 500; margin-bottom: 1rem;">Elite Stuff + Command</p>
                                    <p style="color: #86868b; font-size: 0.9rem; line-height: 1.5;">Perfect blend of swing-and-miss stuff with pinpoint strike-throwing ability.</p>
                                </div>
                            </div>

                            <!-- George Kirby Card - RIGHT -->
                            <div class="player-card" data-player="kirby" data-position="strikes" style="background: #f5f5f7; border-radius: 20px; overflow: hidden; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer;">
                                <div style="position: relative; height: 250px; overflow: hidden;">
                                    <video 
                                        class="player-video" 
                                        style="width: 100%; height: 100%; object-fit: cover;" 
                                        muted 
                                        loop 
                                        preload="metadata"
                                    >
                                        <source src="kirby.mp4" type="video/mp4">
                                    </video>
                                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0, 102, 255, 0.3), rgba(0, 0, 0, 0.1)); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease;" class="video-overlay">
                                        <div style="background: rgba(255, 255, 255, 0.9); padding: 1rem 2rem; border-radius: 25px; color: #1d1d1f; font-weight: 600;">Click to Play</div>
                                    </div>
                                </div>
                                <div style="padding: 2rem;">
                                    <h4 style="font-size: 1.5rem; font-weight: 600; color: #1d1d1f; margin-bottom: 0.5rem;">George Kirby</h4>
                                    <p style="color: #0066ff; font-weight: 500; margin-bottom: 1rem;">Strike Zone Command</p>
                                    <p style="color: #86868b; font-size: 0.9rem; line-height: 1.5;">Master of the strike zone with exceptional command and execution in any count.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Development Approach -->
                    <div style="text-align: center; margin-top: 6rem;">
                        <div style="background: #f5f5f7; padding: 4rem 3rem; border-radius: 25px; margin: 3rem 0;">
                            <h3 style="font-size: 1.8rem; font-weight: 600; color: #1d1d1f; margin-bottom: 2rem;">Our Development Approach</h3>
                            <p style="font-size: 1.2rem; color: #86868b; margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.6;">
                                You either have components of both Stuff and Strikes, or one of these with projectability to the other. 
                                Most guys are somewhere on the spectrum. The best of the best master both.
                            </p>
                            <p style="font-size: 1.1rem; color: #1d1d1f; font-weight: 500;">
                                How do we get you there? We start with our Player Development process.
                            </p>
                        </div>
                        
                        <a href="#development" class="cta-button" style="display: inline-block; background: #500000; color: white; padding: 1.2rem 3rem; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 1.1rem; transition: all 0.3s ease; box-shadow: 0 6px 20px rgba(80, 0, 0, 0.3); text-transform: uppercase; letter-spacing: 1px;">
                            Explore Our System
                        </a>
                    </div>
                </div>
            </section>
        `;
    },

    init(container) {
        this.setupVideoPlayers(container);
        this.setupCardAnimations(container);
        this.setupHoverEffects(container);
    },

    setupVideoPlayers(container) {
        const playerCards = container.querySelectorAll('.player-card');
        const spectrumIndicator = container.querySelector('.spectrum-indicator');
        
        playerCards.forEach(card => {
            const video = card.querySelector('.player-video');
            const overlay = card.querySelector('.video-overlay');
            const position = card.dataset.position;
            
            card.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0';
            });
            
            card.addEventListener('click', () => {
                if (video.paused) {
                    // Pause all other videos and reset them
                    container.querySelectorAll('.player-video').forEach(v => {
                        if (v !== video) {
                            v.pause();
                            v.currentTime = 0; // Reset to beginning
                            v.muted = true;
                        }
                    });
                    
                    // Start the clicked video with sound
                    video.muted = false; // Enable sound
                    video.currentTime = 0; // Reset to beginning
                    video.play();
                    overlay.style.opacity = '0';
                    
                    // Move spectrum indicator
                    this.moveSpectrumIndicator(spectrumIndicator, position);
                } else {
                    // Pause and reset the video
                    video.pause();
                    video.currentTime = 0; // Reset to beginning
                    video.muted = true; // Mute when paused
                    overlay.style.opacity = '1';
                    this.moveSpectrumIndicator(spectrumIndicator, 'center');
                }
            });
            
            video.addEventListener('ended', () => {
                overlay.style.opacity = '1';
                video.currentTime = 0; // Reset to beginning when ended
                video.muted = true; // Mute when ended
                this.moveSpectrumIndicator(spectrumIndicator, 'center');
            });
        });
    },

    moveSpectrumIndicator(indicator, position) {
        if (!indicator) return;
        
        let leftPosition, backgroundColor;
        
        switch (position) {
            case 'stuff':  // Aroldis - move left towards "Stuff Monsters"
                leftPosition = '15%';
                backgroundColor = '#ff4444';
                break;
            case 'strikes':  // George Kirby - move right towards "Strike Artists"
                leftPosition = '85%';
                backgroundColor = '#0066ff';
                break;
            case 'center':  // Skubal or default
            default:
                leftPosition = '50%';
                backgroundColor = '#500000';
                break;
        }
        
        indicator.style.left = leftPosition;
        indicator.style.backgroundColor = backgroundColor;
        indicator.style.transform = 'translateX(-50%) scale(1.3)';
        
        setTimeout(() => {
            indicator.style.transform = 'translateX(-50%) scale(1)';
        }, 300);
    },

    setupCardAnimations(container) {
        const cards = container.querySelectorAll('.player-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 + (index * 150));
        });
    },

    setupHoverEffects(container) {
        const cards = container.querySelectorAll('.player-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = 'none';
            });
        });

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
    }
};