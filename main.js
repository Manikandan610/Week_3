$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});

// function example(){
//     jsonObject.products.forEach((i)=>loadProducts(i));

// }
function loadProducts(data){

var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="card2">'+
    '<div class="rect1"><img src="'+ data.image +'" class="rect_img"></div>'+
    '<div class="subrect"><p class="subrect_p1">'+ data.title +'</p>'+
    '<span>'+ data.description +'</span>'+
    '<p class="subrect_p2">'+ data.content +'</p>'+
'</div>';
document.getElementById("content1").appendChild(data1);
//console.log(data);
}
// example();