window.addEventListener('load', () => {
    const bsNavOffcanvas = bootstrap.Offcanvas.getOrCreateInstance('#navOffcanvas');
    document.querySelectorAll('.offcanvas-link').forEach((link) => {
        link.addEventListener('click', event => {
            event.preventDefault();
            bsNavOffcanvas.toggle();
            const href = event.currentTarget.href;
            setTimeout(() => {window.location=href;}, 400);
        });
    });
});