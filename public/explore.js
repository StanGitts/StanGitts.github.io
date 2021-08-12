
document.cookie = "AC-C=ac-c; SameSite=Lax; Secure; Max-Age=2600000";

// Put all onload AJAX calls here, and event listeners
jQuery(document).ready(function() {
    
    //alert(document.cookie);
    var wasNavClicked = 0;
    var isContact = 0;
    var isHome = 1;
    var isBlur = 0;
    var isZoom = 0;
    //var initFlag = 0;

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

    function displayRentals(parish_name) {
        // if(parish_name == "none") {
        //     $.ajax({
        //         type: 'get',
        //         url: '/getHouseList',

        //         success: function(list){
        //             //console.log('success');
        //             //console.log(list);
        //             let length = list.length;
        //            // console.log(length);
        //             let i = 0;

        //             for(i = 0; i < length; i++){
        //                 let parish = list[i];
        //                 //console.log(parish);
        //                 $.ajax({
        //                     type: 'get',
        //                     url: '/getHouseFiles',
        //                     dataType: 'json',
        //                     data: {
        //                         place: parish
        //                     },

        //                     success: function(files) {
        //                         //console.log(files);

        //                         //get the imgs
        //                         var img_keyword = 'house_';
        //                         var text_keyword = 'text_';

        //                         let i = 0;
        //                         let num = 1;

        //                         for (i = 0; i < files.length/2; i++) {

        //                             let img_name = img_keyword + num + '.png';
        //                             let text_name = text_keyword + num + '.json';
        //                             let img_path = '/houses/' + parish + '/' + img_name;
        //                             console.log(img_name);
        //                             console.log(text_name);
        //                             console.log(img_path);

        //                             //creating img tags
        //                             var panel = document.getElementById('house-panel');

        //                             var imgTag = document.createElement('img');
        //                             imgTag.setAttribute("src", img_path);
        //                             imgTag.setAttribute("class", "img")

        //                             //outer div
        //                             var div_outer = document.createElement('div');
        //                             div_outer.setAttribute("class", "option-md pointer");

        //                             //div containing image
        //                             var div_img = document.createElement('div');
        //                             div_img.setAttribute("class", "option-item");
        //                             div_img.appendChild(imgTag);

        //                             //div containing description
        //                             var div_text = document.createElement('div');
        //                             div_text.setAttribute("class", "desc");

        //                             var text1 = document.createElement('p');
        //                             text1.setAttribute("class", "text");

        //                             var text2 = document.createElement('p');
        //                             text2.setAttribute("class", "text");

        //                           /*  var text3 = document.createElement('p');
        //                             text3.setAttribute("class", "text");

        //                             var text4 = document.createElement('p');
        //                             text4.setAttribute("class", "text");*/

        //                             //replace with function that gets the description in a string
        //                             //let desc = getDescription(parish, text_name)
                                    
        //                             var isRented;
                            

        //                             $.ajax({
        //                                 type: 'get',
        //                                 url: 'getDesc',
        //                                 dataType: 'json',
        //                                 async: false,
        //                                 data: {
        //                                     place: parish,
        //                                     filename: text_name
        //                                 },

        //                                 success: function(file) {
        //                                     console.log(file);

        //                                    // house_summ = "Price: " + file.Price + "     " + "Location: " + file.Location + "\n"
        //                                    //        + "Bedrooms: " + file.Bedrooms + "    " + "Lot: " + file.Lot;
        //                                    let row1 = "Price: " + file.Price + ", Location: " + file.Location + ",";
        //                                   // let loc = ;
        //                                    let row2 = "Bedrooms: " + file.Bedrooms + ", Lot: " + file.Lot;
        //                                   // let lot = ;
        //                                    //console.log(house_summ);
        //                                    isRented = file.isRented;

        //                                    if(isRented == "No") {
        //                                         text1.innerHTML = row1;
        //                                         text2.innerHTML = row2;
        //                                        /* text3.innerHTML = bed;
        //                                         text4.innerHTML = lot;*/

        //                                         console.log(text1.innerHTML);
        //                                         console.log(text2.innerHTML);
        //                                        /* console.log(text3.innerHTML);
        //                                         console.log(text4.innerHTML);*/

        //                                         div_text.appendChild(text1);
        //                                         div_text.appendChild(text2);
        //                                        /* div_text.appendChild(text3);
        //                                         div_text.appendChild(text4);*/

        //                                         div_outer.appendChild(div_img);
        //                                         div_outer.appendChild(div_text);

                                                

        //                                         panel.appendChild(div_outer);

                                            
        //                                    }

                                            
                                            
        //                                 },

        //                                 error: function() {
        //                                     console.log("could not find file!");
        //                                 }

        //                             });
                                    
        //                             num++;
                                    
        //                         }

                                

                                

                                
        //                     },

        //                     fail: function(err) {
        //                         console.log("error trying to retrieve files!");
        //                     }
        //                 });
        //                 //console.log(list[i]);
        //             }
        //         },
        //         fail: function(){
        //             console.log('error');
        //         }
        //     });
        // } else {
        //     $.ajax({
        //         type: 'get',
        //         url: '/getHouseList',

        //         success: function(list){
        //             //console.log('success');
        //             //console.log(list);
        //             /*let length = list.length;
        //            // console.log(length);
        //             let i = 0;
        //             var parish;

        //             for(i = 0; i < length; i++) {
        //                 if(list[i] == parish_type) {
        //                     parish
        //                 }
        //             }*/

        //             for(i = 0; i < 1; i++){
        //                 //let parish = list[i];
        //                 //console.log(parish);
        //                 $.ajax({
        //                     type: 'get',
        //                     url: '/getHouseFiles',
        //                     dataType: 'json',
        //                     data: {
        //                         place: parish_name
        //                     },

        //                     success: function(files) {
        //                         //console.log(files);

        //                         //get the imgs
        //                         var img_keyword = 'house_';
        //                         var text_keyword = 'text_';

        //                         let i = 0;
        //                         let num = 1;

        //                         for (i = 0; i < files.length/2; i++) {

        //                             let img_name = img_keyword + num + '.png';
        //                             let text_name = text_keyword + num + '.json';
        //                             let img_path = '/houses/' + parish_name + '/' + img_name;
        //                             console.log(img_name);
        //                             console.log(text_name);
        //                             console.log(img_path);

        //                             //creating img tags
        //                             var panel = document.getElementById('house-panel');

        //                             var imgTag = document.createElement('img');
        //                             imgTag.setAttribute("src", img_path);
        //                             imgTag.setAttribute("class", "img")

        //                             //outer div
        //                             var div_outer = document.createElement('div');
        //                             div_outer.setAttribute("class", "option-md pointer");

        //                             //div containing image
        //                             var div_img = document.createElement('div');
        //                             div_img.setAttribute("class", "option-item");
        //                             div_img.appendChild(imgTag);

        //                             //div containing description
        //                             var div_text = document.createElement('div');
        //                             div_text.setAttribute("class", "desc");

        //                             var text1 = document.createElement('p');
        //                             text1.setAttribute("class", "text");

        //                             var text2 = document.createElement('p');
        //                             text2.setAttribute("class", "text");

        //                           /*  var text3 = document.createElement('p');
        //                             text3.setAttribute("class", "text");

        //                             var text4 = document.createElement('p');
        //                             text4.setAttribute("class", "text");*/

        //                             //replace with function that gets the description in a string
        //                             //let desc = getDescription(parish, text_name)
                                    
        //                             var isRented;
                            

        //                             $.ajax({
        //                                 type: 'get',
        //                                 url: 'getDesc',
        //                                 dataType: 'json',
        //                                 async: false,
        //                                 data: {
        //                                     place: parish_name,
        //                                     filename: text_name
        //                                 },

        //                                 success: function(file) {
        //                                     console.log(file);

        //                                    // house_summ = "Price: " + file.Price + "     " + "Location: " + file.Location + "\n"
        //                                    //        + "Bedrooms: " + file.Bedrooms + "    " + "Lot: " + file.Lot;
        //                                    let row1 = "Price: " + file.Price + ", Location: " + file.Location + ",";
        //                                   // let loc = ;
        //                                    let row2 = "Bedrooms: " + file.Bedrooms + ", Lot: " + file.Lot;
        //                                   // let lot = ;
        //                                    //console.log(house_summ);
        //                                    isRented = file.isRented;

        //                                    if(isRented == "No") {
        //                                         text1.innerHTML = row1;
        //                                         text2.innerHTML = row2;
        //                                        /* text3.innerHTML = bed;
        //                                         text4.innerHTML = lot;*/

        //                                         console.log(text1.innerHTML);
        //                                         console.log(text2.innerHTML);
        //                                        /* console.log(text3.innerHTML);
        //                                         console.log(text4.innerHTML);*/

        //                                         div_text.appendChild(text1);
        //                                         div_text.appendChild(text2);
        //                                        /* div_text.appendChild(text3);
        //                                         div_text.appendChild(text4);*/

        //                                         div_outer.appendChild(div_img);
        //                                         div_outer.appendChild(div_text);

                                                

        //                                         panel.appendChild(div_outer);

                                            
        //                                    }

                                            
                                            
        //                                 },

        //                                 error: function() {
        //                                     console.log("could not find file!");
        //                                 }

        //                             });
                                    
        //                             num++;
                                    
        //                         }

                                

                                

                                
        //                     },

        //                     fail: function(err) {
        //                         console.log("error trying to retrieve files!");
        //                     }
        //                 });
        //                 //console.log(list[i]);
        //             }
        //         },
        //         fail: function(){
        //             console.log('error');
        //         }
        //     });
        // } 

        
        
    }

    function displayFilteredRentals(lot, min_price, max_price, beds, parish, sort_type) {

        $.ajax({
            type: 'get',
            url: '/getHouseList',

            success: function(list) {
                let length = list.length;
                var filteredFiles = [];

                var img_keyword = "house_";
                var text_keyword = "text_";
                let num = 1;

                for(let i = 0; i < length/2; i++) {
                    let img_name = img_keyword + num + '_1' + '.png';
                    let text_name = text_keyword + num + '.json';

                    console.log(text_name);
                    console.log(img_name);


                    $.ajax({
                        type: 'get',
                        url: '/getDesc',
                        data: {
                            name: text_name
                        },
                        async: false,
                        dataType: 'json',

                        success: function(file) {
                            var check = 1;

                            //checking lot
                            if(lot != "") {

                                if(file.Lot != lot) {
                                    console.log('here1');
                                    check = 0;
                                } 
                            } 

                            //checking parish
                            if(parish != "All") {

                                if(file.Location != parish) {
                                    console.log('here2');
                                    check = 0;
                                }       
                            }

                            //checking beds
                            if(beds != "All") {
                                if(file.Bedrooms != beds) {
                                    console.log('here3');
                                    check = 0;
                                }
                            }

                            //checking price
                            if(!(file.Price >= min_price && file.Price <= max_price)){
                                check = 0;
                            }

                            if(check == 1) {
                                filteredFiles.push(img_name);
                                filteredFiles.push(text_name);
                            }

                           
                        },

                        fail: function () {
                            console.log("error while retrieving file");
                        }
                    })

                    num++;
                }

                console.log(filteredFiles);
                filteredFiles = sortRentals(filteredFiles, sort_type);
                console.log(filteredFiles);

                //creating elements for the files

                for(let i = 0; i < filteredFiles.length; i = i + 2) {
                    //creating img tags
                    
                    var panel = document.getElementById('house-panel');
                    let img_path = '/houses/' + filteredFiles[i];

                    var imgTag = document.createElement('img');
                    imgTag.setAttribute("src", img_path);
                    imgTag.setAttribute("class", "img")

                    //outer div
                    var div_outer = document.createElement('div');
                    div_outer.setAttribute("class", "option-md pointer");
                    div_outer.setAttribute("id", filteredFiles[i]);
                    div_outer.addEventListener('click', function() { getInfo(this.id); }, false);
                    
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


                    $.ajax({
                        type: 'get',
                        url: 'getDesc',
                        dataType: 'json',
                        async: false,
                        data: {
                            name: filteredFiles[i+1]
                        },

                        success: function(file) {
                            console.log(file);

                            // house_summ = "Price: " + file.Price + "     " + "Location: " + file.Location + "\n"
                            //        + "Bedrooms: " + file.Bedrooms + "    " + "Lot: " + file.Lot;
                            let row1 = "Price: $" + file.Price + ", Location: " + file.Location + ",";
                             // let loc = ;
                            let row2 = "Bedrooms: " + file.Bedrooms + ", Lot: " + file.Lot;
                            // let lot = ;
                            //console.log(house_summ);
                            isRented = file.isRented;

                            if(isRented == "No") {
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

                                div_outer.appendChild(div_img);
                                div_outer.appendChild(div_text);

                                

                                panel.appendChild(div_outer);
                            } 

                            

                            
                        },

                        error: function() {
                            console.log("could not find file!");
                        }

                    });
                }
                initFlag = 1;


            }, 

            fail: function() {
                console.log("error getting files!");
            }
        })
    }

    function sortRentals(files, sort_type) {
        if(sort_type == "Parish") {
            let i = 1;
            var min;

            //function to gets the smallest parish in terms of string comparison
            //then sorts the array in that order
            for(i = 1; i < files.length - 2; i+=2) {
                min = i;
                $.ajax({
                    type: 'get',
                    url: '/getDesc',
                    data: {
                        name: files[min]
                    },
                    async: false,
                    dataType: 'json',

                    success: function(file1) {
                        let j = i+2;

                        for(j = i+2; j < files.length; j+=2) {
                            $.ajax({
                                type: 'get',
                                url: '/getDesc',
                                data: {
                                    name: files[j]
                                },
                                async: false,
                                dataType: 'json',

                                success: function(file2) {
                                    if(file2.Location < file1.Location) {
                                       // console.log("<");
                                        min = j;
                                    }
                                },

                                fail: function() {
                                    console.log("could not retrieve file!");
                                }
                            })
                        }
                    },

                    fail: function() {
                        console.log("could not retrieve file");
                    }
                })

                let temp1 = files[i-1];
                let temp2 = files[i];

                files[i-1] = files[min-1];
                files[i] = files[min];

                files[min-1] = temp1;
                files[min] = temp2;
            }

           // console.log("sorted: ");
            //console.log(files);
            return files;
        } else if(sort_type == "Price (ascending)") {
            let i = 1;
            var min;

            //function to sort the files by order of ascending price
            for(i = 1; i < files.length - 2; i+=2) {
                min = i;
                $.ajax({
                    type: 'get',
                    url: '/getDesc',
                    data: {
                        name: files[min]
                    },
                    async: false,
                    dataType: 'json',

                    success: function(file1) {
                        let j = i+2;

                        for(j = i+2; j < files.length; j+=2) {
                            $.ajax({
                                type: 'get',
                                url: '/getDesc',
                                data: {
                                    name: files[j]
                                },
                                async: false,
                                dataType: 'json',

                                success: function(file2) {
                                    if(file2.Price < file1.Price) {
                                       // console.log("<");
                                        min = j;
                                    }
                                },

                                fail: function() {
                                    console.log("could not retrieve file!");
                                }
                            })
                        }
                    },

                    fail: function() {
                        console.log("error trying to retrieve file!");
                    }
                })

                let temp1 = files[i-1];
                let temp2 = files[i];

                files[i-1] = files[min-1];
                files[i] = files[min];

                files[min-1] = temp1;
                files[min] = temp2;
            }

            return files;
        } else if(sort_type == "Price (descending)") {
            let i = 1;
            var min;

            //function to sort the files by order of ascending price
            for(i = 1; i < files.length - 2; i+=2) {
                max = i;
                $.ajax({
                    type: 'get',
                    url: '/getDesc',
                    data: {
                        name: files[max]
                    },
                    async: false,
                    dataType: 'json',

                    success: function(file1) {
                        let j = i+2;

                        for(j = i+2; j < files.length; j+=2) {
                            $.ajax({
                                type: 'get',
                                url: '/getDesc',
                                data: {
                                    name: files[j]
                                },
                                async: false,
                                dataType: 'json',

                                success: function(file2) {
                                    if(file2.Price > file1.Price) {
                                       // console.log("<");
                                        max = j;
                                    }
                                },

                                fail: function() {
                                    console.log("could not retrieve file!");
                                }
                            })
                        }
                    },

                    fail: function() {
                        console.log("error trying to retrieve file!");
                    }
                })

                let temp1 = files[i-1];
                let temp2 = files[i];

                files[i-1] = files[max-1];
                files[i] = files[max];

                files[max-1] = temp1;
                files[max] = temp2;
            }

            return files;

        } else {
            return files;
        }
    }

    function addFilters(lot, min_price, max_price, beds, parish) {

        if(lot != "") {
            addLotFilterIcon(lot);
        }

        console.log("before parish filter");
        addPriceFilterIcon(min_price, max_price);
        console.log("after parish fgilter");

        if(beds != "All") {
            addBedFilterIcon(beds);
        }

        if(parish != "All") {
            addParishFilterIcon(parish);
        }

       
    }

    function addParishFilterIcon(parish_name) {
        var div = document.getElementById('filter-icon-bar');

        var btn = document.createElement('button');
        btn.setAttribute("class", "btn btn-primary filter-bar-btn");
        btn.setAttribute("id", "parish-filter");

        var text = document.createElement('p');
        text.setAttribute("class", "filter-icon-text");
        text.innerHTML = parish_name;

        var img = document.createElement('img');
        img.setAttribute("src", "x.svg");
        img.setAttribute("class", "filter-close");

        btn.addEventListener("click", function() {
            btn.remove();

            //add code to refresh page with the new filters
            var parish_dropdown = document.getElementById('parish_type');

            parish_dropdown.value = "All";

            //remove the current rentals and put on using new filter
            var sel = document.getElementById('house-panel');
            /*for(let i = 1; i < sel.children.length; i++) {
                sel.children[i].remove();
            }*/
            while(sel.children.length != 1) {
                sel.children[sel.children.length-1].remove();
            }


            var lot = document.getElementById('entryBox1').value;
            var min_price = document.getElementById('price-min').value;
            var max_price = document.getElementById('price-max').value;
            var beds = document.getElementById('bed_type').value;
            
            var sort = document.getElementById('sort_type').value;

            displayFilteredRentals(lot, min_price, max_price, beds, "All", sort);

        });

        btn.appendChild(img);
        btn.appendChild(text);
        div.appendChild(btn);
        
    }

    function addLotFilterIcon(lot) {
        var div = document.getElementById('filter-icon-bar');

        var btn = document.createElement('button');
        btn.setAttribute("class", "btn btn-primary filter-bar-btn");
        btn.setAttribute("id", "lot-filter");

        var text = document.createElement('p');
        text.setAttribute("class", "filter-icon-text");
        text.innerHTML = "Lot No. " + lot;

        var img = document.createElement('img');
        img.setAttribute("src", "x.svg");
        img.setAttribute("class", "filter-close");

        btn.addEventListener("click", function() {
            btn.remove();

            //add code to refresh page with the new filters
            var lot_entry = document.getElementById('entryBox1');

            lot_entry.value = "";

            //remove the current rentals and put on using new filter
            var sel = document.getElementById('house-panel');
            /*for(let i = 1; i < sel.children.length; i++) {
                sel.children[i].remove();
            }*/
            while(sel.children.length != 1) {
                sel.children[sel.children.length-1].remove();
            }

           
            var parish = document.getElementById('parish_type').value;
            var min_price = document.getElementById('price-min').value;
            var max_price = document.getElementById('price-max').value;
            var beds = document.getElementById('bed_type').value;
            
            var sort = document.getElementById('sort_type').value;

            displayFilteredRentals("", min_price, max_price, beds, parish, sort);

        });

        btn.appendChild(img);
        btn.appendChild(text);
        div.appendChild(btn);
    }

    function addBedFilterIcon(beds) {
        var div = document.getElementById('filter-icon-bar');

        var btn = document.createElement('button');
        btn.setAttribute("class", "btn btn-primary filter-bar-btn");
        btn.setAttribute("id", "bed-filter");

        var text = document.createElement('p');
        text.setAttribute("class", "filter-icon-text");
        text.innerHTML = beds + "-bedroom";

        var img = document.createElement('img');
        img.setAttribute("src", "x.svg");
        img.setAttribute("class", "filter-close");

        btn.addEventListener("click", function() {
            btn.remove();

            //add code to refresh page with the new filters
            var bed = document.getElementById('bed_type');

            bed.value = "All";

            //remove the current rentals and put on using new filter
            var sel = document.getElementById('house-panel');
           /* for(let i = 1; i < sel.children.length; i++) {
                sel.children[i].remove();
            }*/
            while(sel.children.length != 1) {
                sel.children[sel.children.length-1].remove();
            }

           
            var parish = document.getElementById('parish_type').value;
            var min_price = document.getElementById('price-min').value;
            var max_price = document.getElementById('price-max').value;
            var lot = document.getElementById('entryBox1').value;
            
            var sort = document.getElementById('sort_type').value;

            displayFilteredRentals(lot, min_price, max_price, "All", parish, sort);

        });

        btn.appendChild(img);
        btn.appendChild(text);
        div.appendChild(btn);
    }

    function addPriceFilterIcon(min_price, max_price) {
       
        var div = document.getElementById('filter-icon-bar');
        

        var btn = document.createElement('button');
        btn.setAttribute("class", "btn btn-primary filter-bar-btn");
        btn.setAttribute("id", "price-filter");

        var text = document.createElement('p');
        text.setAttribute("class", "filter-icon-text");
        text.innerHTML = "$" + min_price + " - " + "$" + max_price;
        console.log("here");

        var img = document.createElement('img');
        img.setAttribute("src", "x.svg");
        img.setAttribute("class", "filter-close");

        btn.addEventListener("click", function() {
            btn.remove();

            //add code to refresh page with the new filters
            var min_range = document.getElementById('price-min');
            var max_range = document.getElementById('price-max');

            min_range.value = 0;
            max_range.value = 5000;

            var min_out = document.getElementById('min-price-value');
            var max_out = document.getElementById('max-price-value');
            min_out.innerHTML = min_range.value;
            max_out.innerHTML = max_range.value;

            //remove the current rentals and put on using new filter
            var sel = document.getElementById('house-panel');
            while(sel.children.length > 1) {
                sel.children[sel.children.length-1].remove();
            }

           
            var parish = document.getElementById('parish_type').value;
            var lot = document.getElementById('entryBox1').value;
            var sort = document.getElementById('sort_type').value;
            var bed = document.getElementById('bed_type').value;

            

            displayFilteredRentals(lot, 0, 5000, bed, parish, sort);

        });

        btn.appendChild(img);
        btn.appendChild(text);
        div.appendChild(btn);
        
        
    }

    function getInfo(id) {
        
        //console.log("initFlag = " + initFlag);
        console.log(id);
        var sel_panel = document.getElementById('sel-panel');
        //sel_panel.setAttribute("class", "selection-panel blur-cont");
        var filt_panel = document.getElementById('filter-panel');
        filt_panel.setAttribute("class", "rectangle panel-item blur-cont");
        var house_panel = document.getElementById('house-panel');
        house_panel.setAttribute("class", "box panel-item blur-cont");
       // house_panel.setAttribute("id", "house-info");

        var new_panel = document.createElement('div');
        new_panel.setAttribute("id", "house-info");
        new_panel.setAttribute("class", "house-info-div");

        var div = document.getElementById('close-btn-div');
        //div.setAttribute("class", "close-div");
        //div.setAttribute("id", "close-btn-div");

        var btn = document.getElementById('close-btn');
        btn.setAttribute("class", "close-btn-on");

        div.addEventListener('click', function(){
            var btn = document.getElementById('close-btn');
            btn.setAttribute("class", "close-btn-off");

            var filter_panel = document.getElementById('filter-panel');
            filter_panel.setAttribute("class", "rectangle panel-item");

            var h_panel = document.getElementById('house-panel');
            h_panel.setAttribute("class", "box panel-item");

            var panel = document.getElementById('house-info');
            panel.remove();
        })


        div.appendChild(btn);

        //sel_panel.appendChild(div);

        //var img_keyword = div_outer.children;
        //console.log("children:");
       // console.log(img_keyword);
        var text_keyword = 'text_';
        var text_name;

        for(let i = 0; i < id.length; i++) {
            if(!(id[i] >= 'a' && id[i] <= 'z') && !(id[i] >= 'A' && id[i] <= 'Z') && id[i] != '_' 
                && id[i] != '.') {
                text_name = text_keyword + id[i] + '.json';
                i = id.length;
            }
        }

        console.log("text = " + text_name);

        var price;
        var loc;
        var beds;
        var lot;
        var desc;

        $.ajax({
            type: 'get',
            url: '/getHouseInfo',
            data: {
                text: text_name
            },
            async: false,
            dataType: 'json',

            success: function(file1) {
                price = file1.Price;
                loc = file1.Location;
                beds = file1.Bedrooms;
                lot = file1.Lot;
                desc = file1.Description;

                console.log(price);
                console.log(loc);
                console.log(beds);
                console.log(lot);
                console.log(desc);
            },

            fail: function() {
                console.log("error trying to retrieve file!");
            }
        })


        $.ajax({
            type: 'get',
            url: '/getHouseList',
            async: false,

            success: function (files) {
                var idx;

                for(let i = 0; i < files.length/2; i++) {
                    if(files[i] == id) {
                        idx = i;
                    }
                }

                var house_num;
                let j = 0;

                while(id[j] != '_') {
                    j++;
                }
                j++;

                let init = 0;
                let length = 0;
                while(id[j] >= '0' && id[j] <= '9'){
                    if(init == 0) {
                        console.log(id[j]);
                        house_num = id[j];
                        j++;
                        init = 1;
                    } else {
                        house_num = house_num + id[j];
                        j++;
                    }
                    length++;
                }

                console.log("house_num = " + house_num);

                j = 0;
                for(j = 0; j < length; j++) {
                    //code to go through the list of files comparing them to "house_num"
                }

            },

            fail: function() {
                console.log("error!");
            }
        })



        

        //filt_panel.hidden = true;
        //house_panel.hidden = true;


        sel_panel.appendChild(new_panel);
        
        

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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;
        console.log("sort = " + sort);

        displayFilteredRentals("", min_price, max_price, "All", "All", sort);
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
        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. Lucy", sort);

        addParishFilterIcon("St.Lucy");

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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. Peter", sort);

        addParishFilterIcon("St.Peter");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. Andrew", sort);

        addParishFilterIcon("St.Andrew");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. Thomas", sort);

        addParishFilterIcon("St.Thomas");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. Joseph", sort);

        addParishFilterIcon("St.Joseph");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. James", sort);

        addParishFilterIcon("St.James");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. Michael", sort);

        addParishFilterIcon("St.MIchael");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. George", sort);

        addParishFilterIcon("St.George");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. John", sort);

        addParishFilterIcon("St.John");
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "Christ Church", sort);

        addParishFilterIcon("Chirst Church");
    })

    $('#philip').click(function(e){
        console.log('philip');
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

        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        
        var sort = document.getElementById('sort_type').value;

        displayFilteredRentals("", min_price, max_price, "All", "St. Philip", sort);

        addParishFilterIcon("St.Philip");
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

    

    $('#filter_submit').click(function(e) {
        console.log("initFlag = " + initFlag);
        var lot = document.getElementById('entryBox1').value;
        var min_price = document.getElementById('price-min').value;
        var max_price = document.getElementById('price-max').value;
        var bed = document.getElementById('bed_type').value;
        var parish = document.getElementById('parish_type').value;
        var sort = document.getElementById('sort_type').value;

        console.log(lot);
        console.log(min_price);
        console.log(max_price);
        console.log(bed);
        console.log(parish);
        console.log(sort);

        //clear previous results
        var panel = document.getElementById('house-panel');
        while (panel.childNodes.length > 2) {
            panel.removeChild(panel.lastChild);
        }

        var tray = document.getElementById('filter-icon-bar');
        while (tray.childNodes.length > 0) {
            tray.removeChild(tray.lastChild);
        }

        console.log("before filters");
        addFilters(lot, min_price, max_price, bed, parish);
        console.log("after filters");

        displayFilteredRentals(lot, min_price, max_price, bed, parish, sort);
    })

    /*$('#close-btn-div').click(function(e) {
        var panel = document.getElementById('house-info');
        panel.remove();
        var btn = document.getElementById('close-btn');
        btn.setAttribute("class", "close-btn-off");

    })*/

    $(".option-md").click(function(){
        console.log("initFlag = " + initFlag);
    })


    /* event for filter buttons*/

    //function to detect when at the top +
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
