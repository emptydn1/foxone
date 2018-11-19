var text = "";
var remove = (arr, text) => {
                    for(let i = 0; i < arr.length; i++) {
                        arr[i].classList.remove(text);
                    }
}



var nutTop = document.querySelector('.nutTop');
var wrap = document.querySelector('.wrapTop');
var lan2 = 1;
nutTop.addEventListener('click', function(){
    chayHamNutTop = () => {
        (lan2 == 1)? this.classList.add('actibtnn'):this.classList.remove('actibtnn');
        (lan2 == 1)? $('.wrapTop').addClass('activeWrapTop'): wrap.classList.remove('activeWrapTop');
    }
    chayHamNutTop();
    lan2 = (lan2 == 1)? lan2 = 2 : lan2 = 1;
})




var logo = document.querySelectorAll('nav .logo img');
var actNav = document.querySelector('nav');
$(window).scroll(function(){
    if($('.ss1').offset().top - 100 <= $(window).scrollTop()){
        logo[1].classList.add('activeLogo');
        actNav.classList.add('activeNav');
    }
    else{
        remove(logo, 'activeLogo');
        logo[0].classList.add('activeLogo');
        actNav.classList.remove('activeNav');
    }
})

var the, acti = '';
chay = (the, acti) => {
    $(window).scroll(function(){
        $(the).each(function(){
            $(this).addClass((($(this).offset().top - 200) <= $(window).scrollTop())? acti : null);
        });
    });
}

var buttons = document.getElementsByClassName('btnn');
var slides = document.getElementsByClassName('slideHeader');
var tt2 = 1;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        absc = () => { (tt2 == 1)? clearInterval(time) : setInterval(function(){ autoSlide(); }, 2000);}
        absc();
        tt2 = (tt2 == 1)? tt2 == 2 : tt2 == 1;
        remove(buttons, 'activeButton');
        this.classList.add('activeButton');
        
        var activate = this;
        for (var position = 0; activate = activate.previousElementSibling; position++) { }

        remove(slides, 'activeSlide');
        slides[position].classList.add('activeSlide');
    })
}

var time = setInterval(function(){ autoSlide(); }, 3000);
function  autoSlide() {
    var position = 0;
    var thisActive = document.querySelector('ul li.activeSlide');
    for (position = 0; thisActive = thisActive.previousElementSibling; position++) { }
        abscs = () => { (tt2 == 1)? clearInterval(time) : setInterval(function(){ autoSlide(); }, 2000);}
    if(position < slides.length-1){
        remove(slides, 'activeSlide');
        remove(buttons, 'activeButton');
        buttons[position].nextElementSibling.classList.add('activeButton');
        slides[position].nextElementSibling.classList.add('activeSlide');
    }
    else{
        remove(slides, 'activeSlide');
        remove(buttons, 'activeButton');
        buttons[0].classList.add('activeButton');
        slides[0].classList.add('activeSlide');
    }
}

var ll = document.querySelector('.preload-container');
var title = document.querySelectorAll('.ss4 .title ul li');

$(function(){
    $('.content ul').isotope({
        itemSelector : 'li'
    })

    $('.ss4 .title ul li').click(function(event){
        var danhMuc = $(this).data('class');
        remove(title, 'activeS4');
        this.classList.add('activeS4');
        $('.content ul').isotope({filter : danhMuc});
        return false;
    })

    $(document).ready(function(){
        window.setTimeout(function() {
            $('body').removeClass('preloading');
            $(".preload-container").addClass("delete");
        }, 5000);
    });

    chay('.khungSession .ss5', 'activeSs5');
    chay('.ss8 .wrap', 'activeS8');
})
