const backgroundContainer = document.querySelector('.bottom_container')

document.body.onscroll = function() {
    if(window.matchMedia("(max-width: 145vh)").matches) {
       
        document.querySelector('.bottom_container .main_container_background').style.transform = "translateY( -" + (window.pageYOffset /20) + "% )"
    } else {
        document.querySelector('.price_tag').style.transform = "translateY(" + (window.pageYOffset / 200) + "vh)"

        document.querySelector('.bottom_container .main_container_background').style.transform = "translateY( -" + Math.round((window.pageYOffset /14)) + "% )"
    }

}
