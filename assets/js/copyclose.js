window.addEventListener('load', () => {
	var clipboard = new ClipboardJS('[data-copy="true"]', {
		target: function(trigger) {
			return document.getElementById(trigger.dataset.target.substring(1));
		}
	});

	clipboard.on('success', function(e) {
		e.clearSelection();
	});

	clipboard.on('error', function(e) {
		alert('Sorry, there was an error adding the BibTeX to your clipboard. Please try again manually by selecting the BibTeX source and using the copy function on your device.')
	});
    
    // Close buttons
    document.querySelectorAll('button[data-close=true]').forEach((button) => {
        button.addEventListener('click', event => {
			window.close()
        });
    });
});