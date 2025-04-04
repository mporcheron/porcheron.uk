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

  document.querySelectorAll('h2[data-bs-toggle="collapse"]').forEach(elem => {
    const parent = elem.closest('section');
    parent.addEventListener('show.bs.collapse', event => {
      parent.classList.remove('collapsible');
      elem.scrollIntoView();
    })
    parent.addEventListener('hide.bs.collapse', event => {
      parent.classList.add('collapsible')
    })
  })

  if (window.location.hash) {
    const elem = document.querySelector(window.location.hash);
    if (elem) {
      var bssibling = (new bootstrap.Collapse(elem.nextElementSibling, {
        toggle: true
      }));
    }
  }

  var youtubeVideosEnabled = false;
  document.querySelectorAll('.video-unactivated').forEach((link) => {
    link.addEventListener('click', event => {
      if (youtubeVideosEnabled == false) {
        document.querySelector('#acceptYoutubeImplications').dataset.parent = '#' + link.id;
        (new bootstrap.Modal('#youtubeModal')).show();
      } else {
        event.preventDefault();
        link.classList.remove('video-unactivated');
        link.closest('.video-outer-container').classList.add('flex-column');
        const container = link.closest('.video-container');
        container.classList.remove('ms-3');
        container.classList.remove('w-25');
        link.innerHTML = '<iframe class="d-block rounded-3" width="560" height="315" src="' + link.dataset.video + '&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      }
    });
  });

  document.querySelector('#acceptYoutubeImplications').addEventListener('click', event => {
    youtubeVideosEnabled = true;
    document.querySelector(document.querySelector('#acceptYoutubeImplications').dataset.parent).click();
  });
});
