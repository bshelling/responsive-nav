import './sass/app.sass'
import image from './imgs/menu.png'

const $ = require('jquery')
$('#mobile-menu').on("click",(e) => {
    e.preventDefault()
    $(".menu").toggle({
        duration: 500
    })
    $(".nav-item").on("click",function(e){
        var body = $("body")[0]
        var isDisplayed = $(".menu").css("display")

        console.log(body.clientWidth)


    })
})

$(window).on("resize",(e) => {
    var width = $(e.target.outerWidth)
    var isdisplayed = $(".menu").css("display")

    if(width[0] > 720){
        if(isdisplayed == "none"){
            $(".menu").css("display","block")
        }
    }
    if(width[0]<719){

        if(isdisplayed == "block"){
            $(".menu").css("display","none")
        } 
    }
})