$(document).ready(()=>{

  $('.u_gift-item').find('a.give-less-link').click((ev)=>{
    $(ev.currentTarget).parents('.u_gift-item').toggleClass('isGivingLess');
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

});
