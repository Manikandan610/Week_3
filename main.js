$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});

function loadProducts(data){
    '<div class="card2">'+
    '<div class="rect1"><img src="'+data.image +'" class="rect_img"></div>'+
    '<div class="subrect"><p class="subrect_p1">'+ data.title +'</p>'+
    '<span>'+ data.description +'</span>'+
    '<p class="subrect_p2">'+ data.content +'</p>'+
'</div>';
//console.log(data);
//document.getElementById('content').append;
}