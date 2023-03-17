var $question = $(".accordion__header"); // accordion opener
var $answer = $(".accordion__body"); // accordion content

$answer.hide();

$question.click(function () {
  $answer.slideUp();
  if ($(this).hasClass("open")) {
    $(this).removeClass("open").next($answer).slideUp();
  } else {
    $question.removeClass("open");
    $(this).addClass("open").next($answer).slideDown();
  }
});

var tab_nav = $('.nav-tab') // tab nav
var tab_content = $('.content') // tab content

// Dynamic classes
tab_content.each(function (i) {
  $(this).attr('id', 'tab-' + i);
})
tab_nav.children('li').children('a').each(function (i) {
  $(this).attr('href', '#tab-' + i)
})

// Show first tab
tab_content.hide();
tab_content.first().show();
tab_nav.children('li:first-of-type').addClass('active')

// Click function
tab_nav.children('li').children('a').on('click', function (e) {
  e.preventDefault(); 
  tab_nav.children('li').removeClass('active');
  $(this).parent().addClass('active');
  var activeTab = $(this).attr('href');

  $(activeTab).siblings().hide().removeClass("active");
  $(activeTab).fadeIn().addClass("active")
});


// comparison slider

var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};

// header dropdown

$('.header-select button').on('click',function(){
  $('.header-select-items .items-list').slideToggle()
  $('.header-select-items').toggleClass('active')
})

// hamburger
$('.hamburger').on('click',function(){
  $(this).toggleClass('active')
  $('.mobile-menu').slideToggle()
})