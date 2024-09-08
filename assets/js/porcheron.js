window.addEventListener('load', () => {
	document.getElementById('siteTitle').addEventListener('click', event => {
		if (window.innerWidth >= 768) {
			event.stopPropagation();
      window.location=document.getElementById('siteTitle').dataset.homepage;
		}
	});
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const bsNav = bootstrap.Collapse.getInstance('#nav');
      if (bsNav != undefined) {
				bsNav.toggle();
      }
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
        link.innerHTML = '<iframe class="d-block rounded-top-3" width="560" height="315" src="' + link.dataset.video + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      }            
    });
  });
});
