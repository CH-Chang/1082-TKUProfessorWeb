$(function() {
  var position = $(window).scrollTop();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
      $('header')
        .stop(true, false)
        .removeClass('main-header-up')
        .addClass('main-header-down');
    } else {
      $('header')
        .stop(true, false)
        .removeClass('main-header-down')
        .addClass('main-header-up');
    }
    position = scroll;
  });
});

const navItems = document.querySelectorAll('.main-header-nav-item a');
let navItemHeight = [];
navItems.forEach(elem => {
  elem.addEventListener('click', navitemClick);
  navItemHeight.push(
    document.querySelector(elem.getAttribute('href')).offsetTop
  );
});
function navitemClick(event) {
  smoothScroll(event);
}

const mainNext = document.querySelector('#home-next-cn a');
mainNext.addEventListener('click', navitemClick);

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  window.scrollTo({
    top: targetId === '#' ? 0 : document.querySelector(targetId).offsetTop,
    behavior: 'smooth'
  });
}

$(window).scroll(function() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < navItemHeight.length; i++) {
    if (scrollTop <= navItemHeight[i]) {
      let items = document.querySelectorAll('.main-header-nav-item');
      for (let i = 0; i < items.length; i++)
        $(items[i]).removeClass('main-header-nav-item-current');
      $(items[i]).addClass('main-header-nav-item-current');
      break;
    }
  }
});


$(function(){
  for(let i=1;i<8;i++){
    $('#main-experience-item-'+i).hide();
  }
  AOS.refresh();
})

const experienceNavItem = document.querySelectorAll('#main-experience-nav ul li a');
experienceNavItem.forEach((elem)=>{
  elem.addEventListener('mouseover', experienceNavItemMouseOver);
});

function experienceNavItemMouseOver(event){

  let selected = document.querySelector('.main-experience-nav-selected');
  $(selected).removeClass('main-experience-nav-selected');
  $(selected).addClass('main-experience-nav-unselected');

  
  let ori=cur=0;

  for(let i=0;i<experienceNavItem.length;i++){
    if(event.currentTarget===experienceNavItem[i]) cur = i;
    if(selected.firstChild===experienceNavItem[i]) ori=i;
  }


  $(experienceNavItem[cur]).parent("li").addClass('main-experience-nav-selected');

  $('#main-experience-item-'+ori).hide();
  $('#main-experience-item-'+cur).fadeIn("fast");
  AOS.refresh();
  
  
}