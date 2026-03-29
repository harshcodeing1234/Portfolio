// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Typing effect for subtitle
const typingTexts = ['Data Science', 'Data Analysis', 'Machine Learning', 'Data Visualization'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

function typeEffect() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
setTimeout(typeEffect, 1000);

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Project Modal Data
const projectData = {
    nexa: {
        title: 'Nexa AI Assistant',
        problem: 'Businesses and individuals need intelligent automation for repetitive tasks and quick information retrieval.',
        solution: 'Built an AI-powered assistant using OpenAI API that understands natural language and provides intelligent responses.',
        features: ['Natural language processing', 'Context-aware responses', 'Task automation', 'Multi-language support'],
        tech: ['Python', 'OpenAI API', 'NLP', 'Flask'],
        github: 'https://github.com/harshcodeing1234/Nexa-AI-Assistant',
        live: null
    },
    diary: {
        title: 'Digital Diary with Lock',
        problem: 'Users need a secure way to store personal notes and thoughts without privacy concerns.',
        solution: 'Created an encrypted digital diary application with password protection and database storage.',
        features: ['Password encryption', 'Secure data storage', 'User authentication', 'Entry management'],
        tech: ['C++', 'Oracle Database', 'Node.js', 'Encryption'],
        github: 'https://github.com/harshcodeing1234/Digital-diary.git',
        live: null
    },
    task: {
        title: 'Group Task Claimer',
        problem: 'Group projects suffer from task distribution confusion and lack of accountability.',
        solution: 'Built a task management system where team members can claim and track tasks in real-time.',
        features: ['Real-time task claiming', 'Progress tracking', 'Team collaboration', 'Deadline management'],
        tech: ['Node.js', 'JavaScript', 'SQL', 'Express'],
        github: 'https://github.com/harshcodeing1234/glitch-1.0---circutBreakers-.git',
        live: null
    },
    blog: {
        title: 'HarshWrites Blog Platform',
        problem: 'Need for a platform to share technical knowledge and insights with the community.',
        solution: 'Developed a full-featured blogging platform with content management and user engagement.',
        features: ['Content management', 'User comments', 'Category system', 'Search functionality'],
        tech: ['Node.js', 'SQL', 'JavaScript', 'Express'],
        github: 'https://github.com/harshcodeing1234/Harshwrites',
        live: null
    },
    ml: {
        title: 'Automated ML Pipeline',
        problem: 'Manual machine learning workflows are time-consuming and error-prone.',
        solution: 'Created an automated pipeline that handles data preprocessing, model training, and predictions.',
        features: ['Automated data cleaning', 'Feature engineering', 'Model selection', 'Performance metrics'],
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
        github: null,
        live: 'https://ml-regressionn.streamlit.app/'
    }
};

// Open Project Modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        
        <div class="modal-section">
            <h3>🎯 Problem</h3>
            <p>${project.problem}</p>
        </div>
        
        <div class="modal-section">
            <h3>💡 Solution</h3>
            <p>${project.solution}</p>
        </div>
        
        <div class="modal-section">
            <h3>✨ Key Features</h3>
            <ul class="feature-list">
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>🛠️ Technologies Used</h3>
            <div class="tech-tags">
                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-links">
            ${project.github ? `<a href="${project.github}" target="_blank" class="modal-btn github-btn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
            </a>` : ''}
            ${project.live ? `<a href="${project.live}" target="_blank" class="modal-btn live-btn">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                View Live Demo
            </a>` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Project Modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeProjectModal();
    }
}

// Enhanced navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = body.getAttribute('data-theme') === 'dark' 
            ? 'rgba(45, 45, 45, 0.95)' 
            : 'rgba(248, 249, 250, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--secondary-color)';
        navbar.style.backdropFilter = 'none';
    }
});


// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .contact-item, .capability-card, .capability-item, .stat-item, .timeline-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-greeting, .hero-name, .hero-tagline, .hero-subtitle, .hero-description, .hero-stats, .hero-buttons');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
});
