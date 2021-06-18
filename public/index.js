document.cookie = "AC-C=ac-c; SameSite=Lax; Secure; Max-Age=2600000";
// Put all onload AJAX calls here, and event listeners
jQuery(document).ready(function() {
    
    //alert(document.cookie);
    var wasNavClicked = 0;

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
    
    
    $('#navbar-btn').click(function(e){
        if (wasNavClicked == 0) {
            wasNavClicked = 1;
            console.log("here");
            e.preventDefault();

            var div = document.getElementById('btn-div');
            var nav = document.getElementById('nav');

            nav.setAttribute("class", "navbar navbar-extend-md navbar-light navExtend");
            nav.style.height = "260px";
            div.setAttribute("class", "navbar-nav divExtend");
            div.style.height = "200px";
        }
        else {
            wasNavClicked = 0;
            console.log("off");
            e.preventDefault();

            var div = document.getElementById('btn-div');
            var nav = document.getElementById('nav');

            nav.setAttribute("class", "navbar navbar-extend-md navbar-light");
            nav.removeAttribute("style");
            div.setAttribute("class", "navbar-nav");
            div.removeAttribute("style");
        }
        

    })

    var okFlag = 1;

});
