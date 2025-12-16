export function fade(node, { delay = 0, duration = 600, y = 20 } = {}) {
    const o = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.classList.add('visible');
                o.unobserve(node);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
    });

    node.classList.add('fade-in-section');
    node.style.setProperty('--delay', `${delay}ms`);
    node.style.setProperty('--duration', `${duration}ms`);
    node.style.setProperty('--y', `${y}px`);

    o.observe(node);

    return {
        destroy() {
            o.disconnect();
        }
    };
}
