$('h1').on('mouseover', function() {
  $(this).animate({ "letter-spacing" : "5px" }, 1000)
  .animate({"font-size" : "40px"}, 1000)
});

$('.page_one').on('mouseover', function() {
	$(this).animate({ "font-size" : "40px"}, 1000)
});