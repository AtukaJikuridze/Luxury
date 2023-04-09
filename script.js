$(document).ready(function () {

$(".menu-toggler").click(function(e){
    e.preventDefault();
    
    $(".line1").toggleClass("after1")
    $(".line2").toggleClass("after2")
    $(".line3").toggleClass("after3")

    if($(this).hasClass("off")){
        $(".nav").css("height","auto")

        $(".nav-ul, .nav-rightside").slideDown()

        $(this).removeClass("off")
    }

    else{
        
        $(".nav-ul, .nav-rightside").slideUp()
    
            // $(".nav").animate({
            //     height: "151px",
            // },500 );
      
   
   


        $(this).addClass("off")
        

    }
    
})

function animationcomplete(){
    $(".nav-rightside").css("visibility","visible")

     $(".nav-ul").css("display","block")

}

let notifications = 3

$(".notification p").text(notifications)

$(".notification-menu li").click(function(e){
    e.preventDefault();
    $(this).remove()
    notifications--
    $(".notification p").text(notifications)


    
    if(notifications == 0){
        $(".notification-menu").remove()
        $(".notification").remove()
        notifications = 0

    }
})

$(".tabble-button").click(function(){
    alert("Tables are limited , try again later")
})


    
$(".cart").click(function(e){
    $(".notification-menu").slideToggle();
 

})









$(".circle").click(function(e){
    e.preventDefault();
    $(".active circle").text(" ")

    $(".active").removeClass("active")

    $(this).addClass("active")
    $(".active circle").text(".")

})

$(".circle2").click(function(e){
    e.preventDefault();
    $(".description , .section3_text h3").animate({
        opacity: '0'
},400,function(){

    $(".description, .section3_text h3").animate({
        opacity: '1'
})
       $(".section3_text h3").text("Best Resturant Administration")
    $(".description").text("Millions of restaurants around the world compete for the same customers, and only the restaurantswith the most effective marketing will come out on top. Cookinggreat food may seem tough, but getting people in the door is actually the hardest part. The best way to market a restaurant and increase foot traffic is by employing the communications channel that restaurant-goers use the most")
});
})


$(".circle3").click(function(e){
    e.preventDefault();
    $(".description , .section3_text h3").animate({
        opacity: '0'
},400,function(){

    $(".description, .section3_text h3").animate({
        opacity: '1'
})
       $(".section3_text h3").text("Best Resturant Menu")
    $(".description").text("The menu has been called “a map that encouragesrestaurant menu descriptions can make your clients crave your offerings menu has been called “a  and happy patrons come back many times. easy navigation between hunger and satisfaction.” Mouthwatering restaurant menu descriptions can make your clients crave your offerings and happy patrons come back many times.")
});
})


$(".circle1").click(function(e){
    e.preventDefault();
    $(".description , .section3_text h3").animate({
        opacity: '0'
},400,function(){

    $(".description, .section3_text h3").animate({
        opacity: '1'
})
       $(".section3_text h3").text("Best atmosphere and food")
    $(".description").text("`Many for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.")
});
})







window.addEventListener("scroll", function(e){
var s1Rightside = document.querySelector(".section1_rightside")
var s3 = document.querySelector(".section3")

var s1Leftside = document.querySelector(".section1_leftside")



if(s1Rightside.getBoundingClientRect().top < window.innerHeight - 90){{
    $(".s1Rbefore").removeClass("s1Rbefore")
    $(".s1Lbefore").removeClass("s1Lbefore")
    $(".s1TextBefore").removeClass("s1TextBefore")
}}



if(s3.getBoundingClientRect().top < window.innerHeight - 290){{
    $(".sec3_animation").removeClass("sec3_animation")
    $(".h1_animation").removeClass("h1_animation")
}}
})
let i = 0
   let images = document.querySelector(".images")

  

    $(".section4 .next").click(function(e){
      
        if(i < 7){
           
        let firstImage = document.querySelectorAll(".images img")[i]
        let firstImageWidth = firstImage.clientWidth
        images.scrollLeft += firstImageWidth
        console.log(firstImage);
        console.log(i);
        i++
        }
     
    })
  
    $(".section4 .prev").click(function(e){
    
        if(i >= 1){
        let firstImage = document.querySelectorAll(".images img")[i - 1]
        let firstImageWidth = firstImage.clientWidth
        images.scrollLeft += -firstImageWidth
        console.log(firstImage);
        i--

        }
     
    })

    
})


















