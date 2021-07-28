
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

    function highlightExploreBtn(){
        if($(window).width() >= 768) {
            var explore = document.getElementById('explore');
            explore.setAttribute("class", "nav-item nav-link active pointer selected");
        }
        
    }

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
    function displayFilterOptions(){
        highlightExploreBtn();
        var foot = document.getElementById('foot');
        foot.setAttribute("class", "blur-cont");
        var filter = document.getElementById('filter-options-1');
        var children = filter.children;
        let i = 0;

        for(i = 0; i < children.length; i++) {
            let child = children[i];
            child.setAttribute("class", "option appear-mid");
            sleep(1000);
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

    function getParishChild(sel, parish) {
        var i = 0;

        for(i = 0; i < sel.childNodes.length; i++) {
            if(sel.childNodes[i].text == parish) {
                return i;
            }
        }
    }

    /*function getDescription(parish, text_name) {
        var text;

        


        console.log("yes");
    }*/

    /*--------------Calling functions and other events-------------------------*/
    

    displayFilterOptions();

    //getting default values for price sliders
    var min_output = document.getElementById('min-price-value');
    var max_output = document.getElementById('max-price-value');
    var min_slider = document.getElementById('price-min');
    var max_slider = document.getElementById('price-max');

    min_output.innerHTML = min_slider.value;
    max_output.innerHTML = max_slider.value;
    //getting default values for price sliders
    
    
    $('#navbar-btn').click(function(e){
        if(wasNavClicked == 0) {
            wasNavClicked = 1;
        //    console.log("hey");
            var nav = document.getElementById('nav');
            var btnDiv = document.getElementById('btn-div');
            var searchDiv = document.getElementById('search-btn');

            nav.style.height = "260px";
            btnDiv.setAttribute("class", "navbar-nav divExtend");
            searchDiv.setAttribute("class", "searchDivExtend");
        }
        else if(wasNavClicked == 1) {
            wasNavClicked = 0;
        //    console.log("off");
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
        // var pos = window.scorllY;

        // if(isHome == 0 || pos != 0) {
        //     isHome = 1;
        //     isContact = 0;

        //     //scroll to the top
        //     window.scrollTo({ top: 0, behavior: 'smooth' });
        // }
        window.location.href = "index.html";

    })

    $('#explore-btn').click(function(e){
        var pos = window.scrollY;

        if(pos != 0) {
            //scroll to Top
            window.scrollTo({top: 0, behavior: 'smooth' });
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

   /* $('#rental').click(function(e){
        window.location.href = "rental.html";
    })*/

    /*events for filter buttons*/

    $('#view-all').click( function(e){
        console.log('yeeuh');
        var foot = document.getElementById('foot');
        var filter = document.getElementById('filter-options-1');
        var filter_2 = document.getElementById('filter-options-2');
       //var filter_3 = document.getElementById('filter-options-3');
        //var filter_4 = document.getElementById('filter-options-4');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter.hidden = true;
        filter_2.hidden = true;
        //filter_3.hidden = true;
        //filter_4.hidden = true;
        sel.hidden = false;

        //finish the rest of code to bring up the UI
        console.log('here');
        $.ajax({
            type: 'get',
            url: '/getHouseList',

            success: function(list){
                //console.log('success');
                //console.log(list);
                let length = list.length;
               // console.log(length);
                let i = 0;

                for(i = 0; i < length; i++){
                    let parish = list[i];
                    //console.log(parish);
                    $.ajax({
                        type: 'get',
                        url: '/getHouseFiles',
                        dataType: 'json',
                        data: {
                            place: parish
                        },

                        success: function(files) {
                            //console.log(files);

                            //get the imgs
                            var img_keyword = 'house_';
                            var text_keyword = 'text_';

                            let i = 0;
                            let num = 1;

                            for (i = 0; i < files.length/2; i++) {

                                let img_name = img_keyword + num + '.png';
                                let text_name = text_keyword + num + '.json';
                                let img_path = '/houses/' + parish + '/' + img_name;
                                console.log(img_name);
                                console.log(text_name);
                                console.log(img_path);

                                //creating img tags
                                var panel = document.getElementById('house-panel');

                                var imgTag = document.createElement('img');
                                imgTag.setAttribute("src", img_path);
                                imgTag.setAttribute("class", "img")

                                //outer div
                                var div_outer = document.createElement('div');
                                div_outer.setAttribute("class", "option-md");

                                //div containing image
                                var div_img = document.createElement('div');
                                div_img.setAttribute("class", "option-item");
                                div_img.appendChild(imgTag);

                                //div containing description
                                var div_text = document.createElement('div');
                                div_text.setAttribute("class", "desc");

                                var text1 = document.createElement('p');
                                text1.setAttribute("class", "text");

                                var text2 = document.createElement('p');
                                text2.setAttribute("class", "text");

                              /*  var text3 = document.createElement('p');
                                text3.setAttribute("class", "text");

                                var text4 = document.createElement('p');
                                text4.setAttribute("class", "text");*/

                                //replace with function that gets the description in a string
                                //let desc = getDescription(parish, text_name)
                                
                        

                                $.ajax({
                                    type: 'get',
                                    url: 'getDesc',
                                    dataType: 'json',
                                    async: false,
                                    data: {
                                        place: parish,
                                        filename: text_name
                                    },

                                    success: function(file) {
                                        console.log(file);

                                       // house_summ = "Price: " + file.Price + "     " + "Location: " + file.Location + "\n"
                                       //        + "Bedrooms: " + file.Bedrooms + "    " + "Lot: " + file.Lot;
                                       let row1 = "Price: " + file.Price + ", Location: " + file.Location + ",";
                                      // let loc = ;
                                       let row2 = "Bedrooms: " + file.Bedrooms + ", Lot: " + file.Lot;
                                      // let lot = ;
                                       //console.log(house_summ);

                                        text1.innerHTML = row1;
                                        text2.innerHTML = row2;
                                       /* text3.innerHTML = bed;
                                        text4.innerHTML = lot;*/

                                        console.log(text1.innerHTML);
                                        console.log(text2.innerHTML);
                                       /* console.log(text3.innerHTML);
                                        console.log(text4.innerHTML);*/

                                        div_text.appendChild(text1);
                                        div_text.appendChild(text2);
                                       /* div_text.appendChild(text3);
                                        div_text.appendChild(text4);*/
                                        
                                    },

                                    error: function() {
                                        console.log("could not find file!");
                                    }

                                });


                                div_outer.appendChild(div_img);
                                div_outer.appendChild(div_text);

                                

                                panel.appendChild(div_outer);
                                
                                
                                num++;
                            }

                            

                            

                            
                        },

                        fail: function(err) {
                            console.log("error trying to retrieve files!");
                        }
                    });
                    //console.log(list[i]);
                }
            },
            fail: function(){
                console.log('error');
            }
        });
    })

    $('#by-parish').click( function(e){
        console.log('yess');
        var filter_1 = document.getElementById('filter-options-1');
        var filter_2 = document.getElementById('filter-options-2');
        filter_2.hidden = false;
        //var filter_3 = document.getElementById('filter-options-3');
       // var filter_4 = document.getElementById('filter-options-4');

        filter_1.hidden = true;
       // filter_3.hidden = true;
       // filter_4.hidden = true;
        var children = filter_2.children;
        let i = 0;

        for(i = 0; i < children.length; i++) {
            let child = children[i];
            child.setAttribute("class", "option-sm appear-mid");
            sleep(1000);
        }
    })

   /* $('#by-price').click(async function(e){
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
    })*/

    /* do all thing parish events*/
    $('#lucy').click(function(e){
        console.log('lucy');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. Lucy');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
        //btn.innerHTML = 'St. Lucy';
    })

    $('#peter').click(function(e){
        console.log('peter');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. Peter');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#andrew').click(function(e){
        console.log('andrew');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. Andrew');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#thomas').click(function(e){
        console.log('thomas');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. Thomas');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#joseph').click(function(e){
        console.log('joseph');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. Joseph');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#james').click(function(e){
        console.log('james');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. James');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#michael').click(function(e){
        console.log('michael');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. Michael');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#george').click(function(e){
        console.log('george');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. George');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#john').click(function(e){
        console.log('john');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. John');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#christ-church').click(function(e){
        console.log('christ-church');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'Christ Church');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

    $('#philip').click(function(e){
        console.log('lucy');
        var foot = document.getElementById('foot');
        var filter_2 = document.getElementById('filter-options-2');
        var sel = document.getElementById('sel-panel');

        foot.removeAttribute("class");
        filter_2.hidden = true;
        sel.hidden = false;

        var btn = document.getElementById('parish_type');
        var index = getParishChild(btn, 'St. Philip');
        //console.log(btn.childNodes[index].text);
        btn.value = btn.childNodes[index].text;
    })

   /* $('#max-price').click(function(e){
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
    }) */

    /*events for filter buttons*/
    min_slider.oninput = function() {
        min_output.innerHTML = this.value;
    }

    max_slider.oninput = function() {
        max_output.innerHTML = this.value;
    }




    /* event for filter buttons*/

    //function to detect when at the top
    $(window).scroll(function() {

        // console.log($(window).scrollTop());
         //console.log("doc width = " + $(window).width());
        // console.log("doc height + window = ");
        // console.log($(window).scrollTop() + $(window).height());
        // console.log("diff = ");
        // console.log($(document).height() - 200);

        if($(window).scrollTop() + $(window).height() >= 0 && 
            $(window).scrollTop() + $(window).height() <= ($(document).height() - 200)) {
           // console.log("top!")
            

            if($(window).width() >= 768) {
                //console.log("1");
                var explore = document.getElementById('explore');
                explore.setAttribute("class", "nav-item nav-link active pointer selected");
                var contact = document.getElementById('contact-btn');
                contact.setAttribute("class", "nav-item nav-link pointer");
            } else {
               // console.log("2");
                var explore = document.getElementById('explore');
                explore.setAttribute("class", "nav-item nav-link active pointer");
                var contact = document.getElementById('contact-btn');
                contact.setAttribute("class", "nav-item nav-link pointer");
            }
            
        }
        else {

            if($(window).width() >= 768) {
             //   console.log("bottom!");
                var contact = document.getElementById('contact-btn');
                contact.setAttribute("class", "nav-item nav-link active pointer selected");
                var explore = document.getElementById('explore');
                explore.setAttribute("class", "nav-item nav-link pointer");
            } else {
           //     console.log("3");
                var contact = document.getElementById('contact-btn');
                contact.setAttribute("class", "nav-item nav-link active pointer");
                var explore = document.getElementById('explore');
                explore.setAttribute("class", "nav-item nav-link pointer");
            }
            
        }
    });

    var okFlag = 1;

});
