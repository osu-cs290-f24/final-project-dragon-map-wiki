
// Function when click the point it will show description

function show_gl(){
    document.getElementById("gl_modal-backdrop").classList.toggle('hidden');
    document.getElementById("gl_dragon-info-modal").classList.toggle('hidden');
}

function show_gr(){
    document.getElementById("gr_modal-backdrop").classList.toggle('hidden');
    document.getElementById("gr_dragon-info-modal").classList.toggle('hidden');
}

function show_nw(){
    document.getElementById("nw_modal-backdrop").classList.toggle('hidden');
    document.getElementById("nw_dragon-info-modal").classList.toggle('hidden');
}

function show_mx(){
    document.getElementById("mx_modal-backdrop").classList.toggle('hidden');
    document.getElementById("mx_dragon-info-modal").classList.toggle('hidden');
}

function show_china(){
    document.getElementById("china_modal-backdrop").classList.toggle('hidden');
    document.getElementById("china_dragon-info-modal").classList.toggle('hidden');
}

function show_alps(){
    document.getElementById("alps_modal-backdrop").classList.toggle('hidden');
    document.getElementById("alps_dragon-info-modal").classList.toggle('hidden');
}

function show_eng(){
    document.getElementById("eng_modal-backdrop").classList.toggle('hidden');
    document.getElementById("eng_dragon-info-modal").classList.toggle('hidden');
}

function show_jpn(){
    document.getElementById("jpn_modal-backdrop").classList.toggle('hidden');
    document.getElementById("jpn_dragon-info-modal").classList.toggle('hidden');
}


// Event listener when clicking points
document.getElementById("greenland_button").addEventListener("click", show_gl);
document.getElementById("gl-modal-close").addEventListener("click", show_gl);

document.getElementById("greece_button").addEventListener("click", show_gr);
document.getElementById("gr-modal-close").addEventListener("click", show_gr);

document.getElementById("nw_button").addEventListener("click", show_nw);
document.getElementById("nw-modal-close").addEventListener("click", show_nw);

document.getElementById("mx_button").addEventListener("click", show_mx);
document.getElementById("mx-modal-close").addEventListener("click", show_mx);

document.getElementById("china_button").addEventListener("click", show_china);
document.getElementById("china-modal-close").addEventListener("click", show_china);

document.getElementById("alps_button").addEventListener("click", show_alps);
document.getElementById("alps-modal-close").addEventListener("click", show_alps);

document.getElementById("eng_button").addEventListener("click", show_eng);
document.getElementById("eng-modal-close").addEventListener("click", show_eng);

document.getElementById("jpn_button").addEventListener("click", show_jpn);
document.getElementById("jpn-modal-close").addEventListener("click", show_jpn);

