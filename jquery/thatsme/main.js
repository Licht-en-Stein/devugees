$(document).ready( function() {
	console.log('Document is loaded.');

	$('body').fadeIn('slow');

	$('a#nav-about-me').on('click', function() {
		showPage('about-me');
	});

    $('a#nav-fav-city').on('click', function() {
        showPage('my-favourite-city');
    });

    $('a#nav-fav-songs').on('click', function() {
        showPage('my-favourite-songs');
    });

	function showPage( page ) {
		var x = 'div#content > div:not(#' + page + ')';
		$(x).hide();
		$('#'+page).fadeIn('slow');
	}

});

