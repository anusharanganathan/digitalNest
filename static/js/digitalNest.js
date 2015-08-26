$('.navbar li a').click(function(e) {
  var $this = $(this);
  $('.navbar li a').removeClass('active');
  if (!$this.hasClass('active')) {
    $this.addClass('active');
  }
  //e.preventDefault();
});
