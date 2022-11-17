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
    document.querySelectorAll('.video-unactivated').forEach((link) => {
        link.addEventListener('click', event => {
            if (event.target.href == null) {
                event.preventDefault();
                console.log(event);
                link.classList.remove('video-unactivated');
                link.innerHTML = '<iframe width="560" height="315" src="' + link.dataset.video + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            }
        });
    });
});
