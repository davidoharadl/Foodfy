
const spans = document.querySelectorAll('span');


for (let span of spans) {
    span.addEventListener('click', function(){

        const idValue = span.getAttribute('id');
        let content = ''

        console.log("aquiii");
        console.log(idValue);
        
        if ( idValue == 'btn-ingredient' ) {
            content = 'ingredient'
        } else if (idValue == 'btn-preparation') {
            content = 'preparation'
        } else {
            content = 'information'
        }
        console.log("aquiii2");
        console.log(content);
        
        const el = document.getElementById(content)
        const escondendo = span.innerHTML == 'Mostrar'

        if ( escondendo ) {
           el.classList.remove("offVisible")
            span.innerHTML = "Esconder";
        }
        else {
           el.classList.add("offVisible")
            span.innerHTML = "Mostrar";
        }
            
    })
}