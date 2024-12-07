
// Function when click the point it will show description


// gi-----------------------

function show_gl(){
    document.getElementById("gl_modal-backdrop").classList.remove('hidden');
    document.getElementById("gl_dragon-info-modal").classList.remove('hidden');
}

function close_gl(){
    document.getElementById("gl_modal-backdrop").classList.add('hidden');
    document.getElementById("gl_dragon-info-modal").classList.add('hidden');
    
}

// gr-----------------------
function show_gr(){
    document.getElementById("gr_modal-backdrop").classList.remove('hidden');
    document.getElementById("gr_dragon-info-modal").classList.remove('hidden');
}

function close_gr(){
    document.getElementById("gr_modal-backdrop").classList.add('hidden');
    document.getElementById("gr_dragon-info-modal").classList.add('hidden');
}


// nw-----------------------

function show_nw(){
    document.getElementById("nw_modal-backdrop").classList.remove('hidden');
    document.getElementById("nw_dragon-info-modal").classList.remove('hidden');
}

function close_nw(){
    document.getElementById("nw_modal-backdrop").classList.add('hidden');
    document.getElementById("nw_dragon-info-modal").classList.add('hidden');
}

// mx-----------------------

function show_mx(){
    document.getElementById("mx_modal-backdrop").classList.remove('hidden');
    document.getElementById("mx_dragon-info-modal").classList.remove('hidden');
}

function close_mx(){
    document.getElementById("mx_modal-backdrop").classList.add('hidden');
    document.getElementById("mx_dragon-info-modal").classList.add('hidden');
}

//china-------------------------

function show_china(){
    document.getElementById("china_modal-backdrop").classList.remove("hidden");
    document.getElementById("china_dragon-info-modal").classList.remove("hidden");

    
}

function close_china() {
    
    document.getElementById("china_modal-backdrop").classList.add("hidden");
    document.getElementById("china_dragon-info-modal").classList.add("hidden");
   
    
    
}

// alps-----------------------

function show_alps(){
    document.getElementById("alps_modal-backdrop").classList.remove('hidden');
    document.getElementById("alps_dragon-info-modal").classList.remove('hidden');
}

function close_alps(){
    document.getElementById("alps_modal-backdrop").classList.add('hidden');
    document.getElementById("alps_dragon-info-modal").classList.add('hidden');
}

//eng-----------------------------

function show_eng(){
    document.getElementById("eng_modal-backdrop").classList.remove('hidden');
    document.getElementById("eng_dragon-info-modal").classList.remove('hidden');
}

function close_eng(){
    document.getElementById("eng_modal-backdrop").classList.add('hidden');
    document.getElementById("eng_dragon-info-modal").classList.add('hidden');
}


//jpn----------------------------
function show_jpn(){
    document.getElementById("jpn_modal-backdrop").classList.remove('hidden');
    document.getElementById("jpn_dragon-info-modal").classList.remove('hidden');
}

function close_jpn(){
    document.getElementById("jpn_modal-backdrop").classList.add('hidden');
    document.getElementById("jpn_dragon-info-modal").classList.add('hidden');
}




// Event listener when clicking points

// gl button events:
// Click button show
// click X or background close post

gl_button = document.getElementById("greenland_button")
gl_close_button = document.getElementById("gl-modal-close")

gl_button.addEventListener("click", () => {
    show_gl();

    gl_close_button.addEventListener("click", close_gl)

    window.onclick = function (event) {
            // close the post when clicking the background
            close_gl(); 
        
    };
  
    
});



gl_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});

gl_close_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});


// gr button events:
gr_button = document.getElementById("greece_button")
gr_close_button = document.getElementById("gr-modal-close")

gr_button.addEventListener("click", () => {
    show_gr();

    gr_close_button.addEventListener("click", close_gr)

    window.onclick = function (event) {
        // close the post when clicking the background
        close_gr();     
    };  
    
});



gr_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});

gr_close_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});



// nw button
nw_button = document.getElementById("nw_button")
nw_close_button = document.getElementById("nw-modal-close")

nw_button.addEventListener("click", () => {
    show_nw();

    nw_close_button.addEventListener("click", close_nw)

    // close the post when clicking the background
    window.onclick = function (event) {
        close_nw();     
    };
  
    
});



nw_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});

nw_close_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});



// mx button
mx_button = document.getElementById("mx_button")
mx_close_button = document.getElementById("mx-modal-close")

mx_button.addEventListener("click", () => {
    show_mx();

    mx_close_button.addEventListener("click", close_mx)

    // close the post when clicking the background
    window.onclick = function (event) {
        close_mx();     
    };
    
});


mx_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});

mx_close_button.addEventListener("click", function (event) {
    // Prevent the modal from closing if clicked inside the modal
    event.stopPropagation();
});




// China
china_button = document.getElementById("china_button");
china_close_button = document.getElementById("china-modal-close");

china_button.addEventListener("click", () => {
    show_china();

    // Close modal when clicking on the background
    window.onclick = function (event) {
                
        close_china(); 
                
    };

    china_close_button.addEventListener("click", close_china)
});


china_button.addEventListener("click", function (event) {
    event.stopPropagation();
});

china_close_button.addEventListener("click", function (event) {
    // Prevent bubbling
    event.stopPropagation(); 
});


// alps button
alps_button = document.getElementById("alps_button")
alps_close_button = document.getElementById("alps-modal-close")

alps_button.addEventListener("click", () => {
    show_alps();

    // Close modal when clicking on the background
    window.onclick = function (event) {
                
        close_alps(); 
                
    };

    alps_close_button.addEventListener("click", close_alps)
});


alps_button.addEventListener("click", function (event) {
    event.stopPropagation();
});

alps_close_button.addEventListener("click", function (event) {
    // Prevent bubbling
    event.stopPropagation(); 
});


// eng button
eng_button = document.getElementById("eng_button")
eng_close_button = document.getElementById("eng-modal-close")


eng_button.addEventListener("click", () => {
    show_eng();

    // Close modal when clicking on the background
    window.onclick = function (event) {
                
        close_eng(); 
                
    };

    eng_close_button.addEventListener("click", close_eng)
});


eng_button.addEventListener("click", function (event) {
    event.stopPropagation();
});

eng_close_button.addEventListener("click", function (event) {
    // Prevent bubbling
    event.stopPropagation(); 
});



// jpn
jpn_button = document.getElementById("jpn_button")
jpn_close_button = document.getElementById("jpn-modal-close")

jpn_button.addEventListener("click", () => {
    show_jpn();

    // Close modal when clicking on the background
    window.onclick = function (event) {            
        close_jpn();             
    };

    jpn_close_button.addEventListener("click", close_jpn)
});


jpn_button.addEventListener("click", function (event) {
    event.stopPropagation();
});

jpn_close_button.addEventListener("click", function (event) {
    // Prevent bubbling
    event.stopPropagation(); 
});

