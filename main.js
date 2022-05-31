$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});

// function example(){
//     jsonObject.products.forEach((i)=>loadProducts(i));
// onmouseover="bigImg(this)" onmouseout="normalImg(this)"
// }
function loadProducts(data){
   
var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="card2" id="card2">'+
    '<div class="rect1"><img src="'+ data.image +'" class="rect_img"></div>'+
        '<div class="subrect"><p class="subrect_p1">'+ data.title +'</p>'+
        '<span>'+ data.description +'</span>'+
        '<p class="subrect_p2">'+ data.content +'</p>'+
    '</div>';
    

//console.log(data);

                data1.addEventListener("mouseover", function(e){
                    //alert("hai");
                    document.getElementById("card2").style.display="none";
                    data1.innerHTML = '<div class="card1" style="display:block;">'+
                            '<p class="card1_p">'+ data.view_details + '</p>'+
                            '<button type="button" class="btn btn-primary btn-sm" id="btn">View Details</button>'+
                        '</div>';
                        //document.getElementById("content1").appendChild(data1);
                });
                data1.addEventListener("mouseout", function(e){
                    //alert("hai");
                    document.getElementById("card2").style.display="block";
                    // data1.innerHTML = '<div class="card1" style="display:none;">'+
                    //         '<p class="card1_p">'+ data.view_details + '</p>'+
                    //         '<button type="button" class="btn btn-primary btn-sm" id="btn">View Details</button>'+
                    //     '</div>';
                        //document.getElementById("content1").appendChild(data1);
                });
                document.getElementById("content1").appendChild(data1);

}

// function bigImg(x) {
//     //document.getElementById(data.e_id).style.display="none";
//     var data2 = document.getElementById('content1');

//    data2.innerHTML =  '<div class="card2" id="'+x.e_id+'" style="display:none;"></div>'+'<div class="card1" style="display:block;">'+
//             '<p class="card1_p">'+ x.view_details + '</p>'+
//             '<button type="button" class="btn btn-primary btn-sm" id="btn">View Details</button>'+
//         '</div>';
// document.getElementById("content1").appendChild(data2);
// }

// function normalImg(x) {
//     //document.getElementById(data.e_id).style.display="none";
//     var data2 = document.getElementById('content1');

//    data2.innerHTML =  '<div class="card2" id="'+x.e_id+'" style="display:block;"></div>'+'<div class="card1" style="display:block;">'+
//             '<p class="card1_p">'+ x.view_details + '</p>'+
//             '<button type="button" class="btn btn-primary btn-sm" id="btn">View Details</button>'+
//         '</div>';
// document.getElementById("content1").appendChild(data2);
// }

// function myFunction() {
//     const div1 = document.getElementsByTagName("div");
//     const nodes = div1.getElementById("card2");
//     //let i=0;
//     for (let i = 0; i < nodes.length; i++) {
//       nodes[i].style.display = "none";
//     }
//     // for(let i of nodes){
//     //     nodes[i].css.style.display = "none";
//     // }
// }


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
// $(document).ready(function(e){
//     forEach((i)=>bigImg(i));

// });


