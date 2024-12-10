function show_modal(){
    document.getElementById("modal-backdrop").classList.toggle('hidden');
    document.getElementById("add-dragon-modal").classList.toggle('hidden');
}

document.getElementById("add-dragon-button").addEventListener("click",show_modal)
document.getElementById("modal-close").addEventListener("click",show_modal)
document.getElementById("modal-cancel").addEventListener("click",show_modal)