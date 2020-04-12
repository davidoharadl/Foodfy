const galleryItens = document.querySelectorAll('.gallery__item')

for (let item of galleryItens) {
    item.addEventListener('click', function () {
        window.location.href = `/recipes/${item.getAttribute('id')}`
    })
}