$(document).ready(function(){


$('.img1').mouseenter(function () { 
    $('.my-pos1').fadeIn(600);
});

$('.img2').mouseenter(function () { 
    $('.my-pos2').fadeIn(600);
});

$('.img3').mouseenter(function () { 
    $('.my-pos3').fadeIn(600);
});


let x =0;
 $('.icon1').click(function (e) { 
     e.preventDefault();
     x=x+200;
$('.my-posy').animate({right:x},300)

 });

 $('.icon2').click(function (e) { 
    e.preventDefault();
    x=x-200;
$('.my-posy').animate({right:x},300)

});

$('.why-d').mouseenter(function () { 
    
    let na=this;
     
   $('body').find('.why-inner').remove();

    function appendText() {
        var txt1 = "  <div class=why-inner> <i class='fa-solid fa-snowflake icon3'></i> </div>";               // Create element with HTML 
      
       
        $(na).append(txt1);   
    
        // Append the new elements
      }
      appendText() 

});



$('.why-d').click(function (e) { 
    e.preventDefault();
    let mysrc=$(this).find('.why-img').attr("src");
    let na=this;
   
   
    function appendText() {
        var txt1 = "  <div class='my-about'><img src=''  class='about-img' /></div>";               // Create element with HTML 
        var txt2 = "  <div class=why-inner> <i class='fa-solid fa-snowflake icon3'></i> </div>";               // Create element with HTML 
      
        $('body').append(txt1);   
        $('.about-img').attr({src:mysrc})
        
        // Append the new elements
      }
      appendText() 

});
let f=0
x=0
$(document).click(function (e) { 
    e.preventDefault();
   f=f+1;
   x=x+1;
   if($(window).width()>560){
    $('.my-pos1').fadeOut(600);
    $('.my-pos2').fadeOut(600);
    $('.my-pos3').fadeOut(600);
   x=0;
   }
else if(x===2) {
    $('.my-pos1').fadeOut(600);
    $('.my-pos2').fadeOut(600);
    $('.my-pos3').fadeOut(600);
  x=0;
}
   if(f===2 ){
    $('body').find('.my-about').remove();
    f=0;
   }
  

});




})