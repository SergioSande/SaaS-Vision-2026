// Lógica de Partículas Interactivas (Fondo Futurista)
function initParticles() {
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    particlesScript.onload = () => {
        const particlesDiv = document.createElement('div');
        particlesDiv.id = 'particles-js';
        Object.assign(particlesDiv.style, {
            position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
            zIndex: '-2', pointerEvents: 'none'
        });
        document.body.prepend(particlesDiv);

        particlesJS('particles-js', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: "#00f0ff" },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#00f0ff", opacity: 0.15, width: 1 },
                move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "window",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    resize: true
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 0.4 } }
                }
            },
            retina_detect: true
        });
    };
    document.head.appendChild(particlesScript);
}

// Efecto de cristal en el Header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.glass-header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.9)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.7)';
        header.style.boxShadow = 'none';
    }
});

// Animaciones simples al hacer scroll
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Función para cargar Google Analytics respetando el RGPD
function loadGoogleAnalytics() {
    if (window.gtag) return; // Evitar cargar dos veces
    
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-0RHCNTL9YB';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0RHCNTL9YB');
    `;
    document.head.appendChild(script2);
}

document.addEventListener('DOMContentLoaded', () => {
    // Iniciar partículas
    initParticles();

    // Inicializar animaciones de scroll
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .zoom-in');
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top > window.innerHeight * 0.9) {
             el.style.animationPlayState = 'paused';
             observer.observe(el);
        } else {
             el.style.animationPlayState = 'running';
        }
    });

    // Lógica del Banner de Cookies y Google Analytics
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Si ya aceptó las cookies en una visita anterior, cargamos Analytics directamente
    if (localStorage.getItem('cookiesAccepted')) {
        loadGoogleAnalytics();
    } else if (cookieBanner && acceptBtn) {
        // Mostrar banner con un pequeño retraso si es usuario nuevo
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');
            loadGoogleAnalytics(); // Cargar Analytics justo en el momento de aceptar
        });
    }

    // Efecto dinámico del resplandor de fondo (ambient-glow) siguiendo el ratón
    const ambientGlow = document.querySelector('.ambient-glow');
    if (ambientGlow) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            // Actualizamos la posición del círculo principal (azul) hacia el ratón
            // y movemos ligeramente el segundo círculo (morado) de forma inversa
            ambientGlow.style.background = `
                radial-gradient(circle at ${x}% ${y}%, rgba(0, 240, 255, 0.1) 0%, transparent 40%), 
                radial-gradient(circle at ${100 - x * 0.5}% ${100 - y * 0.5}%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
            `;
        });
    }

    // Lógica para el botón de "Volver arriba" y "Barra de Progreso"
    const backToTopBtn = document.getElementById('back-to-top');
    const progressBar = document.getElementById('reading-progress');
    
    window.addEventListener('scroll', () => {
        // Mostrar/ocultar botón volver arriba
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        // Actualizar barra de progreso
        if (progressBar) {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = progress + '%';
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll suave para enlaces internos (ej: botón del Hero)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Sistema de Filtros y Búsqueda (Página principal)
    const searchInput = document.getElementById('searchInput');
    const postCards = document.querySelectorAll('.post-card');

    if (searchInput && postCards.length > 0) {
        const normalizeString = (str) => {
            return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        };

        const filterPosts = () => {
            const searchTerm = normalizeString(searchInput.value);

            postCards.forEach(card => {
                const title = normalizeString(card.querySelector('h3').textContent);
                const matchesSearch = title.includes(searchTerm);

                // Cancelar cualquier transición pendiente para evitar bugs visuales al escribir rápido
                if (card.hideTimeout) clearTimeout(card.hideTimeout);
                if (card.showTimeout) clearTimeout(card.showTimeout);

                if (matchesSearch) {
                    card.style.display = 'flex';
                    card.showTimeout = setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    card.hideTimeout = setTimeout(() => card.style.display = 'none', 300);
                }
            });
        };

        searchInput.addEventListener('input', filterPosts);
    }

    // Generador Automático de Índice de Contenidos (Artículos)
    // Solo generar en páginas que tengan .article-meta y que no sean la página "sobre-mi"
    const articleContent = document.querySelector('.article-content');
    const isPost = document.querySelector('.article-meta') !== null && !window.location.pathname.includes('sobre-mi');
    
    if (articleContent && isPost) {
        const headings = articleContent.querySelectorAll('h2, h3');
        if (headings.length > 0) {
            const tocContainer = document.createElement('div');
            tocContainer.className = 'toc-container';
            tocContainer.innerHTML = '<h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg> Contenido del Artículo</h3>';
            
            const tocList = document.createElement('ul');
            tocList.className = 'toc-list';

            headings.forEach((heading, index) => {
                // Asignar ID si no tiene
                if (!heading.id) {
                    heading.id = 'heading-' + index;
                }

                const li = document.createElement('li');
                if (heading.tagName.toLowerCase() === 'h3') {
                    li.classList.add('toc-h3');
                }

                const a = document.createElement('a');
                a.href = '#' + heading.id;
                a.textContent = heading.textContent;
                
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.getElementById(heading.id);
                    // Ajuste de margen para la cabecera fija
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                });

                li.appendChild(a);
                tocList.appendChild(li);
            });

            tocContainer.appendChild(tocList);
            
            // Insertar justo antes del primer H2, para que la imagen y la intro queden por encima
            const firstH2 = articleContent.querySelector('h2');
            if (firstH2) {
                articleContent.insertBefore(tocContainer, firstH2);
            } else {
                articleContent.insertBefore(tocContainer, articleContent.firstChild);
            }
        }
    }
});
