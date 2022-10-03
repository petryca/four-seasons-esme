(() => {

    
    const observerOptions = {
        rootMargin: '1000px 0px 0px 0px',
        threshold: 0.7
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, observerOptions);

    document.querySelectorAll('article').forEach(el => obs.observe(el));



})();