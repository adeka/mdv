//header
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

//accordion
$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});
//modal dialogue
$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-window").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
//loading screen functionality
$(window).load(function() {
    $("#loadingScreen").fadeOut("slow");
})
//element fading
$(document).ready(function() {
    $(window).scroll(function() {
      var elements = $( '*');
      for(var i =0; i < elements.length; i++){
        var div = $(elements[i]);
        div.addClass('js-fade-element-hide');
        var elementTopToPageTop = div.offset().top;
        var windowTopToPageTop = $(window).scrollTop();
        var windowInnerHeight = window.innerHeight;
        var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
        var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
        var distanceFromBottomToAppear = 100;

        if(elementTopToWindowBottom > distanceFromBottomToAppear) {
          div.addClass('js-fade-element-show');
        }
        else if(elementTopToWindowBottom < 0) {
          div.removeClass('js-fade-element-show');
          div.addClass('js-fade-element-hide');
        }
      }
    });
});
