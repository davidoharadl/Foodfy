// function screenOn() {
//     document.querySelector('.overlay').classList.remove('offScreen')
//     overlayContent.classList.remove("visible")
//     overlayContent.querySelector(".gallery__item").remove()
// }

// function screenOff() {
//     document.querySelector('.overlay').classList.add('offScreen')
//     overlayContent.classList.add("visible")
// }

// function addContent(content) {
//     var duplicateNode = content.cloneNode(true);
//     // overlayContent.append(duplicateNode);
//     overlayContent.insertBefore(duplicateNode, overlayContent.querySelector(".overlay__btn-close"));
// }

const galleryItens = document.querySelectorAll('.gallery__item')
// const overlayContent = document.querySelector(".overlay-content")

for (let item of galleryItens) {
    item.addEventListener('click', function () {
        const recipeId = item.getAttribute('id');
        return recipeId
    })
}

// document.querySelector(".btn-close").addEventListener("click", function() {
//     screenOn();
// })
