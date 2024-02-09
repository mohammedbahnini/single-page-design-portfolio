$(document).ready(function(){
    $('.carousel__items').slick({
      dots : false , 
      infinite : true  , 
      slidesToShow : 1 , 
      variableWidth : true ,
      centerMode : true  , 
      prevArrow : $('.btn-prev') , 
      nextArrow : $('.btn-next')
    });
  });