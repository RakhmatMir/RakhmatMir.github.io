$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
	$('.block').toggleClass('block_active');
	$('.span').toggleClass('span-block');
});
// arrow-down
$("#js-arrow-down").on("click", function(e) {
	e.preventDefault();
});
// end arrow-down
// slides
    $('.slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
    });
// slides
// up
function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
};
var navbarH = $("#js-navbar").height();
var up = $("body .up");
$(document).on("scroll", function() {
	var documentScroll = $(this).scrollTop();
	if(documentScroll > navbarH) {
		$(up).show();
	}else{
		$(up).hide();
	}
});
// end up
/* modals 
==================== */
var modalsWidth = $(".modal1").innerWidth() / 2;

$(".modal1").css({
	"marginLeft": "-" + modalsWidth + "px"
});
$(".js-show-modals").on("click", function(e){
	e.preventDefault();
	$(".js-modal, #js-overley").fadeIn(500);
	$("body").addClass("open-modal");
	$(".up").hide();
});
$(".js-modal-close, #js-overley").on("click", function(e){
	e.preventDefault();
	$(".js-modal, #js-overley").fadeOut(10);
	$("body").removeClass("open-modal");
});

/* fiq show
==================== */

$("#js-arrow-down").on("click", function(e){
	e.preventDefault();
	$(".inner-fiq").slideToggle();
});

/* fiq accordion
==================== */

$(".js-faq-title").on("click", function(e){
	e.preventDefault();
	var $this = $(this)
		answerID = $this.attr("href");

	if( !$this.hasClass("active") ) {
		$(".js-block-content").slideUp();
		$(".js-faq-title").removeClass("active");
	};

	$this.toggleClass("active");
	$(answerID).slideToggle();
});