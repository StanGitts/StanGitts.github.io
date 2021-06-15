document.cookie = "AC-C=ac-c; SameSite=Lax; Secure; Max-Age=2600000";
// Put all onload AJAX calls here, and event listeners
jQuery(document).ready(function() {
    
    //alert(document.cookie);

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
    
    
    

    var okFlag = 1;

});
