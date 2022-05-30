$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});

// function example(){
//     jsonObject.products.forEach((i)=>loadProducts(i));

// }
function loadProducts(data){
   
var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="card2" onmouseover="bigImg(this)" onmouseout="normalImg(this)">'+
    '<div class="rect1"><img src="'+ data.image +'" class="rect_img"></div>'+
        '<div class="subrect"><p class="subrect_p1">'+ data.title +'</p>'+
        '<span>'+ data.description +'</span>'+
        '<p class="subrect_p2">'+ data.content +'</p>'+
    '</div>'+
    '<div class="card1">'+
            '<p class="card1_p">This workflow is to enable an employee raise his leave request and get it approved it from him reporting manager.</p>'+
            '<button type="button" class="btn btn-primary btn-sm" id="btn">View Details</button>'+
        '</div>';
document.getElementById("content1").appendChild(data1);
//console.log(data);
}

// card2.addEventListener("mouseover",function({
//    

// },true))

// example();
// $(function() {
//     $('.card2').hover(function() {
//         //$('.card2').css('display', 'none');
//         $('.card1').css('display', 'block');
//     }, function() {
//       // on mouseout, reset the background colour
//       $('.card1').css('display', 'none');
//       //$('.card2').css('display', 'block');
//     });
//   });
// function bigImg(x) {
//         $('.rect1').css('display', 'none');
//         $('.rect_img').css('display', 'none');
//         $('.subrect').css('display', 'none');
//         $('.subrect_p1').css('display', 'none');
//         $('span').css('display', 'none');
//         $('.subrect_p2').css('display', 'none');
//         $('.card1').css('display', 'block');
//         // $('.card1_p1').css('display', 'block');
//         // $('#btn').css('display', 'block');
//   }
  
//   function normalImg(x) {
//     $('.rect1').css('display', 'block');
//     $('.rect_img').css('display', 'block');
//     $('.subrect').css('display', 'block');
//     $('.subrect_p1').css('display', 'block');
//     $('span').css('display', 'block');
//     $('.subrect_p2').css('display', 'block');
//     $('.card1').css('display', 'none');
//   }


