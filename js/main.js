/**
 * Project Modal Functionality
 * Handles opening/closing of project detail modals
 */

// Project data for modal content
const projectData = {
    'submarine': {
        title: 'Underwater Autonomous Submarine',
        image: 'assets/image/zihan_submarine.gif',
        content: `
            <p>Developed with Team <a href="http://www.facebook.com/iubbongomarine" target="_blank">IUB Bongomarine</a> for the <strong>Singapore Autonomous Vehicle Challenge 2024</strong>, achieving remarkable success on the global stage.</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Key Achievements</h4>
            <ul>
                <li><strong>Top 6</strong> in the Qualifier Round</li>
                <li><strong>Top 20</strong> at the World Finals</li>
            </ul>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Technical Highlights</h4>
            <ul>
                <li>Autonomous navigation and obstacle avoidance systems</li>
                <li>Real-time sensor integration and data processing</li>
                <li>Advanced propulsion and buoyancy control</li>
            </ul>
            <div style="margin-top: 1rem;">
                <span class="modal-highlight">SAVC 2024</span>
                <span class="modal-highlight">Autonomous Systems</span>
                <span class="modal-highlight">Robotics</span>
            </div>
        `
    },
    'iot-thesis': {
        title: 'IoT-Based Air Quality Monitoring System with CFD Integration',
        image: 'assets/image/cfd_class.jpg',
        content: `
            <p>As poor ventilation in classrooms can impact concentration, comfort, and overall well-being, I developed an IoT & Cloud-Based Air Quality Monitoring system with a proper ventilation solution using CFD simulation to optimize holistic classroom Indoor Air Quality (IAQ).</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Research Focus</h4>
            <ul>
                <li>Real-time monitoring of indoor air quality parameters</li>
                <li>CFD simulation for ventilation optimization</li>
                <li>Cloud-based data analytics and visualization</li>
                <li>Predictive maintenance for HVAC systems</li>
            </ul>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Technologies Used</h4>
            <ul>
                <li>IoT sensors for air quality measurement</li>
                <li>Cloud computing for data storage and analysis</li>
                <li>Computational Fluid Dynamics (CFD) simulation</li>
            </ul>
            <div style="margin-top: 1rem;">
                <span class="modal-highlight">Thesis Project</span>
                <span class="modal-highlight">IoT</span>
                <span class="modal-highlight">CFD Simulation</span>
            </div>
        `
    },
    'shuttle': {
        title: 'IUB Smart Shuttle System',
        image: 'assets/image/bus_shuttle.gif',
        content: `
            <p>A GPS-enabled shuttle tracking and management system designed to streamline campus transportation and improve student commute experience.</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Key Features</h4>
            <ul>
                <li>Real-time GPS tracking of shuttle locations</li>
                <li>User-friendly mobile application interface</li>
                <li>Route optimization and scheduling</li>
                <li>Notification system for shuttle arrivals</li>
            </ul>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Recognition & Awards</h4>
            <ul>
                <li><strong>Best Project Display</strong> at IUB TechFest 2024 (System Analysis Category)</li>
                <li><strong>Vice Chancellor's Startup Fund</strong> awarded in 2024</li>
            </ul>
            <div style="margin-top: 1rem;">
                <span class="modal-highlight">GPS Tracking</span>
                <span class="modal-highlight">Mobile App</span>
                <span class="modal-highlight">Award Winner</span>
            </div>
        `
    },
    'cansat': {
        title: "American Astronautical Society's CanSat Missions",
        image: 'assets/image/image.jpg',
        content: `
            <p>Participated in projects simulating planetary exploration missions using CanSat platforms, gaining valuable experience in space mission simulations and engineering challenges.</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">2023 Mission: Planetary Probe Landing</h4>
            <ul>
                <li>Simulated descent and safe landing of a probe</li>
                <li>Designed to collect surface data in extreme environments</li>
                <li>Developed deployment mechanisms</li>
                <li>Ensured sensor data integrity upon landing</li>
            </ul>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">2024 Mission: Planetary Probe Instrument Delivery</h4>
            <ul>
                <li>Designed system for delivering scientific instruments to target zones</li>
                <li>High precision payload delivery mechanisms</li>
                <li>Resource optimization strategies</li>
                <li>Real-time telemetry during descent phase</li>
            </ul>
            <div style="margin-top: 1rem;">
                <span class="modal-highlight">AAS Competition</span>
                <span class="modal-highlight">Space Systems</span>
                <span class="modal-highlight">Telemetry</span>
            </div>
        `
    },
    'aquaculture': {
        title: 'Recirculating Aquaculture Monitoring System',
        image: 'assets/image/RAS.gif',
        content: `
            <p>As the <strong>System Engineer</strong>, contributed to the development of a real-time monitoring system for recirculating aquaculture setups. This project was a collaboration between <strong>IUB FabLab</strong> and the <strong>SAU Aquaculture Department</strong>.</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Project Objectives</h4>
            <ul>
                <li>Continuous monitoring of water quality parameters (oxygen levels, temperature, pH, salinity)</li>
                <li>Integration of IoT sensors with cloud analytics</li>
                <li>Predictive maintenance for optimal aquatic conditions</li>
                <li>User-friendly dashboard for data-driven decisions</li>
            </ul>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Impact</h4>
            <ul>
                <li>Promotes sustainable aquaculture practices</li>
                <li>Boosts efficiency in aquaculture industries</li>
                <li>Enables proactive management of water quality</li>
            </ul>
            <div style="margin-top: 1rem;">
                <span class="modal-highlight">IoT Sensors</span>
                <span class="modal-highlight">Cloud Analytics</span>
                <span class="modal-highlight">Sustainability</span>
            </div>
        `
    },
    'other': {
        title: 'Other Notable Projects',
        image: 'assets/image/devimg.jpeg',
        content: `
            <p>A collection of impactful projects demonstrating diverse technical skills and problem-solving abilities.</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">IneedBlood.com</h4>
            <p>A platform connecting blood donors and seekers, facilitating critical health support for those in need. The system enables real-time matching between donors and recipients based on blood type and location.</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">MAX Water Management</h4>
            <p>A project demonstrating algorithmic excellence in multiple national Science Fests. Focuses on efficient water resource management through smart monitoring and distribution systems.</p>
            <h4 style="color: #1a1f3c; margin: 1rem 0 0.5rem; font-size: 1rem;">Maze Solver Robot</h4>
            <p>An autonomous four-wheeler robot equipped with three ultrasonic sensors and featuring a PID controller for precision navigation through complex maze environments.</p>
            <div style="margin-top: 1rem;">
                <span class="modal-highlight">Web Development</span>
                <span class="modal-highlight">Robotics</span>
                <span class="modal-highlight">Algorithms</span>
            </div>
        `
    }
};

// DOM Elements
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const projectCards = document.querySelectorAll('.project-card');

// Open modal with project data
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    modalDescription.innerHTML = project.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openModal(projectId);
    });
});

// Close on button click
modalClose.addEventListener('click', closeModal);

// Close on overlay click
modalOverlay.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevent modal content click from closing
document.querySelector('.modal-container').addEventListener('click', (e) => {
    e.stopPropagation();
});

/**
 * Achievements Infinite Carousel
 * Auto-sliding carousel with navigation buttons
 */
(function() {
    const carousel = document.getElementById('achievementsCarousel');
    const prevBtn = document.querySelector('.carousel-nav-prev');
    const nextBtn = document.querySelector('.carousel-nav-next');
    const wrapper = document.querySelector('.achievements-carousel-wrapper');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    const cards = carousel.querySelectorAll('.achievement-card');
    if (cards.length === 0) return;
    
    // Configuration
    const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds
    const PAUSE_ON_HOVER = true;
    
    let autoSlideTimer = null;
    let isPaused = false;
    
    // Get card width including gap
    function getCardWidth() {
        const card = cards[0];
        const style = getComputedStyle(carousel);
        const gap = parseFloat(style.gap) || 0;
        return card.offsetWidth + gap;
    }
    
    // Scroll by one card with smooth animation
    function scrollByCard(direction) {
        const cardWidth = getCardWidth();
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const currentScroll = carousel.scrollLeft;
        
        // Check if we need to loop
        if (direction > 0 && currentScroll >= maxScroll - 5) {
            // At the end, jump to start
            carousel.scrollTo({ left: 0, behavior: 'auto' });
        } else if (direction < 0 && currentScroll <= 5) {
            // At the start, jump to end
            carousel.scrollTo({ left: maxScroll, behavior: 'auto' });
        } else {
            carousel.scrollBy({
                left: cardWidth * direction,
                behavior: 'smooth'
            });
        }
    }
    
    // Auto-slide function
    function startAutoSlide() {
        if (autoSlideTimer) clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(() => {
            if (!isPaused) {
                scrollByCard(1);
            }
        }, AUTO_SLIDE_INTERVAL);
    }
    
    function stopAutoSlide() {
        if (autoSlideTimer) {
            clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    }
    
    function pauseAutoSlide() {
        isPaused = true;
    }
    
    function resumeAutoSlide() {
        isPaused = false;
    }
    
    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        scrollByCard(-1);
        // Reset timer on manual navigation
        stopAutoSlide();
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        scrollByCard(1);
        // Reset timer on manual navigation
        stopAutoSlide();
        startAutoSlide();
    });
    
    // Pause on hover
    if (PAUSE_ON_HOVER && wrapper) {
        wrapper.addEventListener('mouseenter', pauseAutoSlide);
        wrapper.addEventListener('mouseleave', resumeAutoSlide);
        wrapper.addEventListener('touchstart', pauseAutoSlide, { passive: true });
        wrapper.addEventListener('touchend', resumeAutoSlide, { passive: true });
    }
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pauseAutoSlide();
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        
        // Swipe threshold
        if (Math.abs(diff) > 50) {
            scrollByCard(diff > 0 ? 1 : -1);
        }
        resumeAutoSlide();
    }, { passive: true });
    
    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            scrollByCard(-1);
            stopAutoSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            scrollByCard(1);
            stopAutoSlide();
            startAutoSlide();
        }
    });
    
    // Start auto-slide on page load
    startAutoSlide();
    
    // Pause when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAutoSlide();
        } else {
            resumeAutoSlide();
        }
    });
})();
