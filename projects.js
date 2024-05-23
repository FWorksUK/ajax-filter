jQuery(document).ready(function($) {

	$('a.filter-item').on('click', function() {
		$('a.filter-item').removeClass('active');
		$(this).addClass('active');

		$.ajax({
			type: 'POST',
			url: 'https://freelanceworks.co.uk/demo/wp-admin/admin-ajax.php',
			dataType: 'html',
			data: {
				action: 'filter_projects',
				project_cat: $(this).data('slug'),
			}, 
    
		success: function(res) {
      		$('.project-tiles').html(res);
		}
		})
	});
});