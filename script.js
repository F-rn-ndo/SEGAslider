  // Funcionalidad para el modal de inicio de sesión
        const loginLink = document.getElementById('login-link');
        const loginModal = document.getElementById('login-modal');
        const closeModal = document.getElementById('close-modal');

        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });

        // Funcionalidad para navegación suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });