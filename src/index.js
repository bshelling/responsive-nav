import './sass/app.sass'

const $ = require('jquery')
$('#mobile-menu').on("click",(e) => {
    e.preventDefault()
    $(".menu").toggle({
        duration: 500
    })

    $(".nav-item").on("click",function(e){
        var isDisplayed = $(".menu").css("display")
        if(isDisplayed != "none"){
            $(".menu").toggle()
        }

    })
   
})