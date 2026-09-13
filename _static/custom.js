document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a.reference.internal');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href && (href.includes('#exercise') || href.includes('#solution'))) {
            
            if (link._tippy) {
                link._tippy.destroy();
            }
            
            link.classList.remove('tippy');
            link.removeAttribute('data-tippy-html');
            link.removeAttribute('data-tippy-content');
        }
    });
});