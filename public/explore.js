document.cookie = "AC-C=ac-c; SameSite=Lax; Secure; Max-Age=2600000";
// Put all onload AJAX calls here, and event listeners
jQuery(document).ready(function() {
    
    //alert(document.cookie);
    var wasNavClicked = 0;
    var isContact = 0;
    var isHome = 1;
    var isBlur = 0;
    var isZoom = 0;

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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /*function for displaying options*/
    async function displayFilterOptions(){
        var foot = document.getElementById('foot');
        foot.setAttribute("class", "blur-cont");
        var filter = document.getElementById('filter-options-1');
        var children = filter.children;
        let i = 0;

        for(i = 0; i < children.length; i++) {
            let child = children[i];
            child.setAttribute("class", "option appear-mid");
            await sleep(1000);
        }
    }

    /*function displayCarouselDiv(){
        if(window.innerWidth < 454) {

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
    
    window.onresize = displayCarouselDiv;*/

    /*--------------Calling functions and other events-------------------------*/
        
    displayFilterOptions();
    
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

        if(isContact == 0 || pos != 1280) {
            isContact = 1;
            isHome = 0;

            //scroll to bottom
            window.scrollTo({ top: 1280, behavior: 'smooth' });
        }
    })

   /* $('#carousel-options').click(function(e){
        e.preventDefault();
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

    })*/

    $('#explore').click(function(e){
        window.location.href = "explore.html";
    })

    $('#rental').click(function(e){
        window.location.href = "rental.html";
    })

    /*events for filter buttons*/

    $('#view-all').click(function(e){
        console.log('yeeuh');
        var foot = document.getElementById('foot');
        var filter = document.getElementById('filter-options-1');
        var filter_2 = document.getElementById('filter-options-2');
        var filter_3 = document.getElementById('filter-options-3');
        var filter_4 = document.getElementById('filter-options-4');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter.hidden = true;
        filter_2.hidden = true;
        filter_3.hidden = true;
        filter_4.hidden = true;
        sel.hidden = false;
        //finish the rest of code to bring up the UI

    })

    $('#by-parish').click(async function(e){
        console.log('yess');
        var filter_1 = document.getElementById('filter-options-1');
        var filter_2 = document.getElementById('filter-options-2');
        filter_2.hidden = false;
        var filter_3 = document.getElementById('filter-options-3');
        var filter_4 = document.getElementById('filter-options-4');

        filter_1.hidden = true;
        filter_3.hidden = true;
        filter_4.hidden = true;
        var children = filter_2.children;
        let i = 0;

        for(i = 0; i < children.length; i++) {
            let child = children[i];
            child.setAttribute("class", "option-sm appear-mid");
            await(1000);
        }
    })

    $('#by-price').click(async function(e){
        console.log("here");
        var filter_1 = document.getElementById('filter-options-1');
        var filter_2 = document.getElementById('filter-options-2');
        var filter_3 = document.getElementById('filter-options-3');
        filter_3.hidden = false;
        var filter_4 = document.getElementById('filter-options-4');

        filter_1.hidden = true;
        filter_2.hidden = true;
        filter_4.hidden = true;
        var children = filter_3.children;
        let i = 0;

        for(i = 0; i < children.length; i++) {
            let child = children[i];
            child.setAttribute("class", "option appear-mid");
            await(1000);
        }
    })

    $('#property-type').click(async function(e){
        console.log("here");
        var filter_1 = document.getElementById('filter-options-1');
        var filter_2 = document.getElementById('filter-options-2');
        var filter_3 = document.getElementById('filter-options-3');
        var filter_4 = document.getElementById('filter-options-4');
        filter_4.hidden = false;

        filter_1.hidden = true;
        filter_2.hidden = true;
        filter_3.hidden = true;
        var children = filter_4.children;
        let i = 0;

        for(i = 0; i < children.length; i++) {
            let child = children[i];
            child.setAttribute("class", "option appear-mid");
            await(1000);
        }
    })

    /* do all thing parish events*/
    $('#lucy').click(function(e){
        console.log('lucy');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#peter').click(function(e){
        console.log('peter');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#andrew').click(function(e){
        console.log('andrew');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#thomas').click(function(e){
        console.log('thomas');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#joseph').click(function(e){
        console.log('joseph');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#james').click(function(e){
        console.log('james');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#michael').click(function(e){
        console.log('michael');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#george').click(function(e){
        console.log('george');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#john').click(function(e){
        console.log('john');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#christ-church').click(function(e){
        console.log('christ-church');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#philip').click(function(e){
        console.log('lucy');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;
    })

    $('#max-price').click(function(e){
        console.log("yessir");
        var foot = document.getElementById('foot');
        var filter_3 = document.getElementById('filter-options-3');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_3.hidden = true;
        sel.hidden = false;
        //finish the rest of code to bring up the UI
    })

    $('#min-price').click(function(e){
        console.log("yessir");
        var foot = document.getElementById('foot');
        var filter_3 = document.getElementById('filter-options-3');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_3.hidden = true;
        sel.hidden = false;
        //finish the rest of code to bring up the UI
    })

    $('#bed-2').click(function(e){
        console.log("yessir1");
        var foot = document.getElementById('foot');
        var filter_4 = document.getElementById('filter-options-4');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_4.hidden = true;
        sel.hidden = false;
        //finish the rest of code to bring up the UI
    })

    $('#bed-3').click(function(e){
        console.log("yessir");
        var foot = document.getElementById('foot');
        var filter_4 = document.getElementById('filter-options-4');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_4.hidden = true;
        sel.hidden = false;
        //finish the rest of code to bring up the UI
    })
    /*events for filter buttons*/
    var okFlag = 1;

});
