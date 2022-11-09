$(function() {
    $('.nojs-none').removeClass('nojs-none');
    if (window.opener) {
        $('.noparentwin-none').removeClass('noparentwin-none');
    } else {
        $('.parentwin-none').removeClass('parentwin-none');
    }
    
    // Copy buttons
    if($('button[data-copy=true]').length > 0) {
        $.getScript('/assets/js/clipboard.min.js', function() {
            var clipboard = new ClipboardJS('[data-copy="true"]', {
                target: function(trigger) {
                    return document.getElementById($(trigger).data('target').substring(1));
                }
            });

            clipboard.on('success', function(e) {
                e.clearSelection();
            });

            clipboard.on('error', function(e) {
                alert('Sorry, there was an error adding the BibTeX to your clipboard. Please try again manually by selecting the BibTeX source and using the copy function on your device.')
            });
        });
    }
    
    // Close buttons
    $('button[data-close=true]').click(function() {
        window.close()
    });

});