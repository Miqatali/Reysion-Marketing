// js for navbar button
 document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

window.addEventListener('orientationchange', () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    const orientation = (innerWidth > innerHeight) ? 'Landscape' : 'Portrait';
 
    alert(
        `Orientation Changed!\n\n` +
        `Device Orientation: ${orientation}\n` +
        `Screen Size: ${screenWidth} x ${screenHeight}\n` +
        `Viewport Size: ${innerWidth} x ${innerHeight}`
    );
});