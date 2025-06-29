const mobileNavReposition = () => {
  const mn = document.getElementById('mobilenavModal');
  const mnToggler = document.getElementById('mobilenavToggler');
  if (mnToggler.offsetTop == 0) {
    var width = Math.max(mn.offsetWidth, 300);
    mn.style.marginTop = ((window.innerHeight - mn.offsetHeight)/2) + "px";
    mn.style.marginLeft = ((window.innerWidth - width)/2) + "px";
    mn.style.marginRight = mn.style.marginLeft;
  } else {
    const mnTogglerPos = mnToggler.getBoundingClientRect();
    mn.style.marginTop = (mnTogglerPos.top + 15) + "px";
    mn.style.marginLeft = (mnTogglerPos.left + 15) + "px";
    mn.style.marginRight = mn.style.marginLeft;
  }
};

window.addEventListener('load', () => {
  if (window.location.hash) {
    const elem = document.querySelector(window.location.hash);
    if (elem) {
      var bssibling = (new bootstrap.Collapse(elem.nextElementSibling, {
        toggle: true
      }));
    }
  }

  document.querySelectorAll('section').forEach((elem, i) => {
    setTimeout(() => {elem.style.opacity=100;}, i*150);
  });

  document.querySelectorAll('.fade-in-p > *').forEach((elem, i) => {
    setTimeout(() => {elem.style.opacity=100;}, i*150);
  });

  document.querySelectorAll('.collapse').forEach((elem, i) => {
    elem.addEventListener('show.bs.collapse', event => {
      elem.parentElement.classList.add('child-shown');
    });
    elem.addEventListener('hide.bs.collapse', event => {
      elem.parentElement.classList.remove('child-shown');
    });
  });

  mobileNavReposition();

	document.querySelectorAll('section.static h3').forEach((elem, i) => {
    delete elem.dataset.bsToggle;
    delete elem.removeAttribute('role');
    elem.setAttribute('aria-expanded', true);
  });

  document.querySelectorAll('.mobilenav .nav-link').forEach((link) => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const mobilenav = bootstrap.Modal.getInstance('#mobilenav');
      mobilenav.hide();
      const href = event.currentTarget.href;
      setTimeout(() => {window.location=href;}, 350);
    });	
  });

  // document.querySelectorAll('h2[data-bs-toggle="collapse"]').forEach(elem => {
  //   const parent = elem.closest('section');
  //   parent.addEventListener('show.bs.collapse', event => {
  //     parent.classList.remove('collapsible');
  //     elem.scrollIntoView();
  //   })
  //   parent.addEventListener('hide.bs.collapse', event => {
  //     parent.classList.add('collapsible')
  //   })
  // })

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

  document.querySelectorAll('#acceptYoutubeImplications').forEach((elem) => {
    elem.addEventListener('click', event => {
      youtubeVideosEnabled = true;
      document.querySelector(document.querySelector('#acceptYoutubeImplications').dataset.parent).click();
    });
  });
});

window.addEventListener('resize', mobileNavReposition);