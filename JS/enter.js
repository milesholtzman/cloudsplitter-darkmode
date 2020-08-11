$(document).ready(function(){
        $(document).click(function(){
            var browserWidth = $(window).width();
            $(".homepage-text").addClass("fadeOut")
            $(".navbar").removeClass("hidden")
            $(".block").animate({
                width: "62vw"
            }, {
                duration: 1000
            });
            $(".blockHeader").removeClass("hidden")
            $(".blockDescriptor").removeClass("hidden")
            $(".blockLink").removeClass("hidden")
            $(".blockPadder").removeClass("hidden")
            $(".blockNewsHeader").removeClass("hidden")
            $(".blockNewsList").removeClass("hidden")
            $(".blockNewsElement").removeClass("hidden")
            $(".blockNewsElementDate").removeClass("hidden")
            $(".blockNewsElementLink").removeClass("hidden")

        ;
        });
    });

// function fadeOut(element) {
//     $(".homepage-text").addClass("fadeOut");
// };

// function fadeIn(element) {
//     $(".navbar").removeClass("hidden")
// };

// function slide(element) {
//     var browserWidth = $(window).width();
//     $(".block").animate({
//                 width: browserWidth*0.62
//             });
// };

// $(document).ready(function(){
//     $(".clickText").click(function(){
//         fadeOut();
//         fadeIn().then(()=>{
//             slide()
//         })
//     })
// })
// $(document).ready(function(){
//         $(".slide-toggle").click(function(){
//             $(".box").animate({
//                 width: "toggle"
//             });
//         });
//     });