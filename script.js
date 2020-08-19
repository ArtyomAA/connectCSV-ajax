<script>
		jQuery(document).ready(function () {
			jQuery(".reestr .skritie").html('');
		    jQuery("#fileUploadForm button").click(function (event) {

		    	jQuery(".reestr .skritie").html('');

		        //stop submit the form, we will post it manually.
		        event.preventDefault();

		        // Get form
		        var form = jQuery('#fileUploadForm')[0];
		        console.log(form);
		        // var form = jQuery('#fileUploadForm .inn').val();
				// Create an FormData object
		        var data = new FormData(form);
				// If you want to add an extra field for the FormData
		        //data.append("CustomField", "This is some extra data, testing");
		        		        
				// disabled the submit button
		        jQuery("#fileUploadForm button").prop("disabled", true);
		        jQuery.ajax({
		            type: "POST",
		            enctype: 'multipart/form-data',
		            url: "/parsim.php",
		            data: data,
		            processData: false,
		            contentType: false,
		            cache: false,
		            timeout: 100,
		            success: function (data) {
		                jQuery(".skritie").html(data);
		                console.log("SUCCESS : ", data);
		                jQuery("#fileUploadForm button").prop("disabled", false);
		            },
		            error: function (e) {
		                jQuery(".skritie").html(e.responseText);
		                console.log("ERROR : ", e);
		                jQuery("#fileUploadForm button").prop("disabled", false);

		            }
		        });

		    });

		});
	</script>
