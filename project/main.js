function main(){

  $('.skillset').fadeIn(2000);
  $('.projects').hide();
  $('.projects-button').on('click',function(){
   $(this).next().slideToggle(400);
    $(this).toggleClass('active');
  });
}
$(document).ready(main);
