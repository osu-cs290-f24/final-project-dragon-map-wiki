function show_modal(){
    document.getElementById("modal-backdrop").classList.remove('hidden');
    document.getElementById("add-dragon-modal").classList.remove('hidden');
}

function clear_modal_inputs() {

    var modalInputElements = document.querySelectorAll('#add-dragon-modal input')
    for (var i = 0; i < modalInputElements.length; i++) {
      modalInputElements[i].value = ''
    }
  
}

function hide_modal() {

    document.getElementById("modal-backdrop").classList.add('hidden');
    document.getElementById("add-dragon-modal").classList.add('hidden');
  
    clear_modal_inputs()
  
}

function handle_modal_acceptClick() {

    var dragonName = document.getElementById('post-name-input').value.trim()
    var photoURL = document.getElementById('post-photo-input').value.trim()
    var dragonDescription = document.getElementById('post-description-input').value.trim()
  
    if (!dragonName || !photoURL ||!dragonDescription) {
      alert("You must fill in all of the fields to share your dragon")
    } else {
      var url = "/DragonWiki/addDragon";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: dragonName,
          image: photoURL,
          description: dragonDescription
        }),
        headers: {
          "Content-Type": "application/json"
        }

      }).then(function (res) {

            if (res.status === 200) {
              var oneDragonTemplate = Handlebars.templates.oneDragon
              var newDragonPostHTML = oneDragonTemplate({
                  dragonName: dragonName,
                  photo_url: photoURL,
                  dragon_description: dragonDescription
              })
              console.log(newDragonPostHTML);
              var dragonPostContainer = document.getElementById('posts')
              dragonPostContainer.insertAdjacentHTML('beforeend', newDragonPostHTML)
            } else {
              alert("An error occurred saving the dragon card.")
            }
      }).catch(function (err) {
          alert("An error occurred")
      })
  
      hide_modal()
  
    }
  
}


window.addEventListener('DOMContentLoaded', function () {
document.getElementById("add-dragon-button").addEventListener("click",show_modal)

var modalAcceptButton = document.getElementById('modal-accept')
modalAcceptButton.addEventListener('click', handle_modal_acceptClick)

document.getElementById("modal-close").addEventListener("click",hide_modal)
document.getElementById("modal-cancel").addEventListener("click",hide_modal)
})