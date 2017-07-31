function main(){

  $('.projects').hide();
  $('.projects-button').on('click',function(){
   $('.projects-button').next().slideToggle(400);
    $(this).toggleClass('active');
  });
}
$(document).ready(main);

