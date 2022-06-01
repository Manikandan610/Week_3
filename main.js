$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});


function loadProducts(data){
   
var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="card2" id="'+ data.e_id +'">'+
    '<div class="rect1"><img src="'+ data.image +'" class="rect_img"></div>'+
        '<div class="subrect"><p class="subrect_p1">'+ data.title +'</p>'+
        '<span>'+ data.description +'</span>'+
        '<p class="subrect_p2">'+ data.content +'</p>'+
    '</div>';

    data1.addEventListener("mouseover", function(e){
        //var g_id = e.getElementById(e.e_id);
        var g_id = document.getElementById(data.e_id);
        g_id.style.display="none";
        data1.innerHTML =   '<div class="card1" style="display:block;" id="'+ data.e_id +'">'+
                            '<p class="card1_p">'+ data.view_details + '</p>'+
                            '<button type="button" class="btn btn-primary btn-sm" id="btn">View Details</button>'+
                        '</div>';
        
        //document.getElementById("card1").style.display="block";
        //console.log(e.target);
    });
    data1.addEventListener("mouseleave", function(e){

        data1.innerHTML =  '<div class="card2" id="'+ data.e_id +'" style="display:inline-flex;">'+
                        '<div class="rect1"><img src="'+ data.image +'" class="rect_img"></div>'+
                            '<div class="subrect"><p class="subrect_p1">'+ data.title +'</p>'+
                            '<span>'+ data.description +'</span>'+
                            '<p class="subrect_p2">'+ data.content +'</p>'+
                        '</div>';
    });
                        document.getElementById("content1").appendChild(data1);

         }
                        
                   