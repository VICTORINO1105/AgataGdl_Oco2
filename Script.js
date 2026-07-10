// ============================================
// ESPERAR A QUE EL DOM ESTÉ COMPLETAMENTE CARGADO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MENÚ MÓVIL - FUNCIONALIDAD DE ABRIR/CERRAR
    // ============================================
    const btnMenuMovil = document.getElementById('btn-menu-movil');
    const menuNavegacion = document.querySelector('.menu');
    
    // Verificar que los elementos existen
    if (btnMenuMovil && menuNavegacion) {
        btnMenuMovil.addEventListener('click', function() {
            menuNavegacion.classList.toggle('activo');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const enlacesMenu = menuNavegacion.querySelectorAll('a');
        enlacesMenu.forEach(enlace => {
            enlace.addEventListener('click', () => {
                menuNavegacion.classList.remove('activo');
            });
        });
    }
    
    // ============================================
    // FORMULARIO DE CONTACTO - VALIDACIÓN Y ENVÍO
    // ============================================
    const formulario = document.getElementById('formulario-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');
    
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            // Prevenir el envío real del formulario
            evento.preventDefault();
            
            // Obtener valores de los campos
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const asunto = document.getElementById('asunto').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            
            // Validar campos obligatorios
            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }
            
            // Simular envío (aquí iría la lógica real de envío)
            console.log('Formulario enviado:', {
                nombre: nombre,
                email: email,
                asunto: asunto,
                mensaje: mensaje
            });
            
            // Mostrar mensaje de éxito
            mensajeExito.classList.remove('oculto');
            
            // Limpiar formulario
            formulario.reset();
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                mensajeExito.classList.add('oculto');
            }, 5000);
        });
    }
    
    // ============================================
    // NAVEGACIÓN SUAVE - SCROLL A SECCIONES
    // ============================================
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');
    
    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();
            
            const idSeccion = this.getAttribute('href');
            const seccion = document.querySelector(idSeccion);
            
            if (seccion) {
                seccion.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // DETECTAR SECCIÓN ACTIVA EN EL SCROLL
    // ============================================
    window.addEventListener('scroll', function() {
        const secciones = document.querySelectorAll('section[id]');
        const enlacesMenu = document.querySelectorAll('.menu a');
        
        let scrollActual = window.scrollY + 100;
        
        secciones.forEach(seccion => {
            const topSeccion = seccion.offsetTop;
            const alturaSeccion = seccion.offsetHeight;
            const idSeccion = seccion.getAttribute('id');
            
            if (scrollActual >= topSeccion && scrollActual < topSeccion + alturaSeccion) {
                enlacesMenu.forEach(enlace => {
                    enlace.classList.remove('activo');
                    if (enlace.getAttribute('href') === '#' + idSeccion) {
                        enlace.classList.add('activo');
                    }
                });
            }
        });
    });
    
});
