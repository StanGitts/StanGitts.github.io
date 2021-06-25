document.cookie = "AC-C=ac-c; SameSite=Lax; Secure; Max-Age=2600000";
// Put all onload AJAX calls here, and event listeners
jQuery(document).ready(function() {
    
    //alert(document.cookie);
    var wasNavClicked = 0;
    var isContact = 0;
    var isHome = 1;
    var isBlur = 0;

    //console.log(document.cookie);
    // On page-load AJAX Example
    console.log("Page is ready!")


    function removeComponent(parent){

        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function removeRows(parent){
        
        var length = parent.rows.length;
        //console.log("rows = " + length);

        while(parent.rows.length >= 1){
            parent.deleteRow(0);
        }       
    }

    function removeFirstEmpty(id){
        var parent = document.getElementById(id);
        parent.deleteRow(0);
    }

    function displayCarouselDiv(){
        if(window.screen.width <= 454) {
            var option = document.getElementById('carousel-options');
            option.hidden = false;
            var div = document.getElementById('car-search-div');
            div.hidden = true;
        }
        else {
            var div = document.getElementById('car-search-div');
            div.hidden = false;
            var option = document.getElementById('carousel-options');
            option.hidden = true;
        }
    }
    
    window.onresize = displayCarouselDiv;

    /*--------------Calling functions and other events-------------------------*/
    displayCarouselDiv()
    
    
    $('#navbar-btn').click(function(e){
        if(wasNavClicked == 0) {
            wasNavClicked = 1;
            console.log("hey");
            var nav = document.getElementById('nav');
            var btnDiv = document.getElementById('btn-div');
            var searchDiv = document.getElementById('search-btn');

            nav.style.height = "260px";
            btnDiv.setAttribute("class", "navbar-nav divExtend");
            searchDiv.setAttribute("class", "searchDivExtend");
        }
        else if(wasNavClicked == 1) {
            wasNavClicked = 0;
            console.log("off");
            var nav = document.getElementById('nav');
            var btnDiv = document.getElementById('btn-div');
            var searchDiv = document.getElementById('search-btn');

            nav.style.height = "50px";
            btnDiv.setAttribute("class", "navbar-nav");
            searchDiv.removeAttribute("class");
        }

    })

    $('#home-btn').click(function(e){
        e.preventDefault();
        console.log("home");
        var pos = window.scorllY;

        if(isHome == 0 || pos != 0) {
            isHome = 1;
            isContact = 0;

            //scroll to the top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    })

    $('#contact-btn').click(function(e){
        e.preventDefault();
        console.log("contact");
        var pos = window.scrollY;

        if(isContact == 0 || pos != 720) {
            isContact = 1;
            isHome = 0;

            //scroll to bottom
            window.scrollTo({ top: 720, behavior: 'smooth' });
        }
    })

    $('#carousel-options').click(function(e){
        if(isBlur == 0) {
            isBlur = 1;
            var carousel = document.getElementById('carouselExampleIndicators');
            var footer = document.getElementById('foot');
            var div = document.getElementById('options');

            carousel.setAttribute("class", "carousel slide blur-cont");
            footer.setAttribute("class", "blur-cont");
            div.setAttribute("class", "container-2 appear");
        }
        else {
            isBlur = 0;
            var carousel = document.getElementById('carouselExampleIndicators');
            var footer = document.getElementById('foot');
            var div = document.getElementById('options');

            carousel.setAttribute("class", "carousel slide");
            footer.removeAttribute("class");
            div.setAttribute("class", "container-2 hide");
        }
        

    })
    var okFlag = 1;

});
