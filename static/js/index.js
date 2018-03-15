$('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.email').click(
  function(){
    console.log("Something");
    $('.email-section').addClass("fold-up");
    $('.password-section').removeClass("folded");
  }
);

$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password').click(
  function(){
    console.log("Something");
    $('.password-section').addClass("fold-up");
    $('.password-section-1').removeClass("folded");
  }
);

$('.member_id').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password-1').click(
  function(){
    console.log("Something");
    $('.password-section-1').addClass("fold-up");
    $('.password-section-2').removeClass("folded");
  }
);

$('.loan_amount').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password-2').click(
  function(){
    console.log("Something");
    $('.password-section-2').addClass("fold-up");
    $('.password-section-3').removeClass("folded");
  }
);

$('.funded_amount').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password-3').click(
  function(){
    console.log("Something");
    $('.password-section-3').addClass("fold-up");
    $('.password-section-4').removeClass("folded");
  }
);

$('.term').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password-4').click(
  function(){
    console.log("Something");
    $('.password-section-4').addClass("fold-up");
    $('.repeat-password-section').removeClass("folded");
  }
);

$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);

$('.next-button.repeat-password').click(
  function(){
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);