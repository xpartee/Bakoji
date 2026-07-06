document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            
            // 1. Reset standard Navigation State links
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // 2. Structural Layer views toggle
            sections.forEach(section => section.classList.remove('active'));
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Smooth viewport layout adjustment resetting back to the top of standard headers
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});

// Dynamic redirection utility linking internal workflow buttons
function navigateTo(targetPageId) {
    const targetTab = document.querySelector(`[data-target="${targetPageId}"]`);
    if (targetTab) {
        targetTab.click();
    }
}
