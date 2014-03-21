CKEDITOR.plugins.add('linkchecker_highlight', {
	init: function(editor) {
		editor.on('instanceReady', function(e) {
			jQuery('a', this.document.$).each(function(i,e) {
				var je = jQuery(e); je.attr('data-absolure-href', je.prop('href'));
			});
		});
	}
} );
