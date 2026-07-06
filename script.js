document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            
            // 1. Remove active state from all nav selections
            navItems.forEach(nav => nav.classList.remove('active'));
            // 2. Add active state to clicked item
            item.classList.add('active');

            // 3. Deactivate all viewport sections
            sections.forEach(section => section.classList.remove('active'));
            // 4. Activate target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Window Scroll Helper for mobile viewports
            if (window.innerWidth <= 900) {
                window.scrollTo({
                    top: document.querySelector('.content-viewport').offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Programmatic route execution for specific button actions
function navigateTo(targetPageId) {
    const targetTab = document.querySelector(`[data-target="${targetPageId}"]`);
    if (targetTab) {
        targetTab.click();
    }
}
