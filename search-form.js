jQuery(function ($) {

  $('#search_form').submit(function (e) {
      e.preventDefault();
      let sForm = $(this);

      $.ajax({
          url: ajaxurl.ajaxurl,
          type: 'POST',
          data: sForm.serialize(),
          success: function (res) {
            console.log(res);
          }
      });
  });

});